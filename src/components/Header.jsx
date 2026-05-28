function Header({
    searchQuery,
    onSearch
}) {

    return (

        <header className="header">

            <h1>Movie Catalog</h1>

            <input
                type="text"
                placeholder="Search movie..."
                value={searchQuery}
                onChange={(event) =>
                    onSearch(event.target.value)
                }
            />

        </header>
    );
}

export default Header;