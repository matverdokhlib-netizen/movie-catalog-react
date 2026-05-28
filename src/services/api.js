const movies = [

    {
        id: 1,
        title: "Interstellar",
        body: "A team of explorers travel through a wormhole in space.",
        rating: 9
    },

    {
        id: 2,
        title: "Inception",
        body: "A thief enters dreams to steal secrets.",
        rating: 8
    },

    {
        id: 3,
        title: "The Dark Knight",
        body: "Batman faces the Joker in Gotham City.",
        rating: 10
    },

    {
        id: 4,
        title: "Blade Runner 2049",
        body: "A young blade runner uncovers a secret.",
        rating: 8
    },

    {
        id: 5,
        title: "Dune",
        body: "A noble family becomes involved in a galactic war.",
        rating: 9
    },

    {
        id: 6,
        title: "The Matrix",
        body: "A hacker discovers the reality is a simulation.",
        rating: 10
    },
    {
    id: 7,
    title: "Fight Club",
    body: "An office worker forms an underground fight club.",
    rating: 9
    },

];

export async function fetchMovies() {

    return new Promise(resolve => {

        setTimeout(() => {

            resolve(movies);

        }, 1000);
    });
}