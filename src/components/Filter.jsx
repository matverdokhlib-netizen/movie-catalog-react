function Filter({
    sortOrder,
    onSortChange
}) {

    return (

        <select
            value={sortOrder}
            onChange={(event) =>
                onSortChange(event.target.value)
            }
        >

            <option value="asc">
                A-Z
            </option>

            <option value="desc">
                Z-A
            </option>

        </select>
    );
}

export default Filter;