import ItemCard from "./ItemCard";

function ItemList({
    items,
    onDelete
}) {

    if (items.length === 0) {

        return (
            <p>
                Nothing found
            </p>
        );
    }

    return (

        <div className="grid">

            {items.map(item => (

                <ItemCard
                    key={item.id}
                    {...item}
                    onDelete={onDelete}
                />

            ))}

        </div>
    );
}

export default ItemList;