import { useState } from "react";

function AddItemForm({
    onAdd
}) {

    const [title, setTitle] =
        useState("");

    const [description, setDescription] =
        useState("");

    function handleSubmit(event) {

        event.preventDefault();

        if (!title.trim()) return;

        onAdd({
            title,
            body: description,
            rating: 10
        });

        setTitle("");
        setDescription("");
    }

    return (

        <form
            onSubmit={handleSubmit}
            className="add-form"
        >

            <input
                type="text"
                placeholder="Movie title"
                value={title}
                onChange={(event) =>
                    setTitle(event.target.value)
                }
            />

            <textarea
                placeholder="Description"
                value={description}
                onChange={(event) =>
                    setDescription(event.target.value)
                }
            />

            <button type="submit">
                Add Movie
            </button>

        </form>
    );
}

export default AddItemForm;