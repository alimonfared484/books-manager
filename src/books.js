const books = [
    {
        id: 1,
        name: "خفاش شب",
        veiw: 235,
    },
    {
        id: 2,
        name: "سفید برفی",
        veiw: 462,
    },
    {
        id: 3,
        name: "قدرت ذهن",
        veiw: 254,
    },
    {
        id: 4,
        name: "شرک",
        veiw: 1243,
    },
    {
        id: 5,
        name: "سیدرلا",
        veiw: 785,
    },
    {
        id: 6,
        name: "آموزش آشپزی",
        veiw: 76,
    },
]

export const getBooks = () => {
    return books
}
export const getBook = (id) => {
    return books.find(book => book.id === id)
}