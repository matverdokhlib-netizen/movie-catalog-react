function ItemCard({
    id,
    title,
    body,
    rating,
    onDelete
}) {

    return (

        <div className="card">

            <img
                src={`https://picsum.photos/500/300?random=${id}`}
                alt={title}
            />

            <h3>{title}</h3>

            <p>{body}</p>

            <p>
                Rating: {rating}
            </p>

            <button
                onClick={() => onDelete(id)}
            >
                Delete
            </button>

        </div>
    );
}

export default ItemCard;