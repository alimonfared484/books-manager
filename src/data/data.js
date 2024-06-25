const books = [
    {
        number: 21,
        name: "خفاش شب",
        veiw: 235,
        amount: "507,000",
        due: "1401/03/23",
        img: "https://digibookshahr.com/wp-content/uploads/2021/05/7.png"
    },
    {
        number: 22,
        name: "سفید برفی",
        veiw: 462,
        amount: "253,000",
        due: "1392/05/01",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1PdsvZWO5sph4Mr6Ydl_dpe_0bYg0BTLKpw&s"
    },
    {
        number: 23,
        name: "قدرت ذهن",
        veiw: 254,
        amount: "811,000",
        due: "1410/02/13",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-8bcwZILR20-hvtsgj04xXPQgH7T5BwTt-A&s"
    },
    {
        number: 24,
        name: "شرک",
        veiw: 1243,
        amount: "261,000",
        due: "1389/11/16",
        img: "https://hamysheh.com/media/image/54527/0054527.jpg"
    },
    {
        number: 25,
        name: "سیدرلا",
        veiw: 785,
        amount: "553,000",
        due: "1370/08/03",
        img: "https://img.ketabrah.ir/img/l/2607958642342527.jpg"
    },
    {
        number: 26,
        name: "آموزش آشپزی",
        veiw: 76,
        amount: "432,000",
        due: "1403/01/07",
        img: "https://www.digikala.com/mag/wp-content/uploads/2019/10/002-2-1030x1030.jpg"
    },
]

export const getBooks = () => {
    return books
}
export const getBook = (number) => {
    return books.find(book => book.number === number)
}