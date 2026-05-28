import { useEffect, useState } from "react";

import Header from "./components/Header";
import Filter from "./components/Filter";
import ItemList from "./components/ItemList";
import AddItemForm from "./components/AddItemForm";

import { fetchMovies }
    from "./services/api";

function App() {

    const [items, setItems] =
        useState([]);

    const [searchQuery, setSearchQuery] =
        useState("");

    const [sortOrder, setSortOrder] =
        useState("asc");

    const [isLoading, setIsLoading] =
        useState(false);

    const [error, setError] =
        useState(null);

    useEffect(() => {

        async function loadMovies() {

            setIsLoading(true);

            setError(null);

            try {

                const data =
                    await fetchMovies();

                const prepared =
                    data.map(movie => ({

                        ...movie,

                        rating:
                            Math.floor(
                                Math.random() * 10
                            ) + 1
                    }));

                setItems(prepared);

            } catch (err) {

                setError(err.message);

            } finally {

                setIsLoading(false);
            }
        }

        loadMovies();

    }, []);

    function handleAdd(newMovie) {

        const movie = {

            id: Date.now(),

            ...newMovie
        };

        setItems(prev => [
            movie,
            ...prev
        ]);
    }

    function handleDelete(id) {

        setItems(prev =>
            prev.filter(
                item => item.id !== id
            )
        );
    }

    const filteredItems =
        [...items]

        .filter(item =>
            item.title
                .toLowerCase()
                .includes(
                    searchQuery.toLowerCase()
                )
        )

        .sort((a, b) => {

            if (sortOrder === "asc") {

                return a.title.localeCompare(
                    b.title
                );
            }

            return b.title.localeCompare(
                a.title
            );
        });

    return (

        <div className="container">

            <Header
                searchQuery={searchQuery}
                onSearch={setSearchQuery}
            />

            <Filter
                sortOrder={sortOrder}
                onSortChange={setSortOrder}
            />

            <AddItemForm
                onAdd={handleAdd}
            />

            {isLoading &&
                <p>Loading...</p>
            }

            {error &&
                <p>{error}</p>
            }

            {!isLoading && !error && (

                <ItemList
                    items={filteredItems}
                    onDelete={handleDelete}
                />

            )}

        </div>
    );
}

export default App;