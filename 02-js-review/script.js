const data = [
    {
        id: 1,
        title: 'The Lord of the Rings',
        publicationDate: '1954-07-29',
        author: 'J. R. R. Tolkien',
        genres: ['fantasy', 'high-fantasy', 'adventure', 'fiction', 'novels', 'literature'],
        hasMovieAdaptation: true,
        pages: 1216,
        translations: {
            spanish: 'El señor de los anillos',
            chinese: '魔戒',
            french: 'Le Seigneur des anneaux',
        },
        reviews: {
            goodreads: {
                rating: 4.52,
                ratingsCount: 630994,
                reviewsCount: 13417,
            },
            librarything: {
                rating: 4.53,
                ratingsCount: 47166,
                reviewsCount: 452,
            },
        },
    },
    {
        id: 2,
        title: 'The Cyberiad',
        publicationDate: '1965-01-01',
        author: 'Stanislaw Lem',
        genres: ['science fiction', 'humor', 'speculative fiction', 'short stories', 'fantasy'],
        hasMovieAdaptation: false,
        pages: 295,
        translations: {},
        reviews: {
            goodreads: {
                rating: 4.16,
                ratingsCount: 11663,
                reviewsCount: 812,
            },
            librarything: {
                rating: 4.13,
                ratingsCount: 2434,
                reviewsCount: 0,
            },
        },
    },
    {
        id: 3,
        title: 'Dune',
        publicationDate: '1965-01-01',
        author: 'Frank Herbert',
        genres: ['science fiction', 'novel', 'adventure'],
        hasMovieAdaptation: true,
        pages: 658,
        translations: {
            spanish: '',
        },
        reviews: {
            goodreads: {
                rating: 4.25,
                ratingsCount: 1142893,
                reviewsCount: 49701,
            },
        },
    },
    {
        id: 4,
        title: "Harry Potter and the Philosopher's Stone",
        publicationDate: '1997-06-26',
        author: 'J. K. Rowling',
        genres: ['fantasy', 'adventure'],
        hasMovieAdaptation: true,
        pages: 223,
        translations: {
            spanish: 'Harry Potter y la piedra filosofal',
            korean: '해리 포터와 마법사의 돌',
            bengali: 'হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন',
            portuguese: 'Harry Potter e a Pedra Filosofal',
        },
        reviews: {
            goodreads: {
                rating: 4.47,
                ratingsCount: 8910059,
                reviewsCount: 140625,
            },
            librarything: {
                rating: 4.29,
                ratingsCount: 120941,
                reviewsCount: 1960,
            },
        },
    },
    {
        id: 5,
        title: 'A Game of Thrones',
        publicationDate: '1996-08-01',
        author: 'George R. R. Martin',
        genres: ['fantasy', 'high-fantasy', 'novel', 'fantasy fiction'],
        hasMovieAdaptation: true,
        pages: 835,
        translations: {
            korean: '왕좌의 게임',
            polish: 'Gra o tron',
            portuguese: 'A Guerra dos Tronos',
            spanish: 'Juego de tronos',
        },
        reviews: {
            goodreads: {
                rating: 4.44,
                ratingsCount: 2295233,
                reviewsCount: 59058,
            },
            librarything: {
                rating: 4.36,
                ratingsCount: 38358,
                reviewsCount: 1095,
            },
        },
    },
];

function getBooks() {
    return data;
}

function getBook(id) {
    return data.find((d) => d.id === id);
}

// Destructuring
const book = getBook(2);
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } = book;
// const [primary, secondary] = genres;
// primary;

// Rest Operator
const [primary, secondary, ...other] = genres;
other;

// Spread Operator
const newGenres = [...genres, 'epic fantasy'];
newGenres;
const updatedBook = { ...book, publicationDate: '2021-12-19', pages: 1000 };
updatedBook;

//Template Literals
const summary = `${title} by ${author}`;
summary;

// Ternary Operators
const pagesRange = pages > 1000 ? 'over a thousand' : summary;
pagesRange;

// Arrow Functions
const getYear = (str) => str.split('-')[0];
console.log(getYear(publicationDate));

// shortCircuiting
console.log(true && 'Hi');
console.log(0 && 'Hi');
// falsey = 0 , '', null, undefined
console.log(true || 'Hi');
console.log(false || 'Hi');
countWrong = book.reviews.librarything.reviewsCount || 'no data';
countWrong;
// nullish coalescing
countWrong = book.reviews.librarything.reviewsCount ?? 'no data'; // only return null or undefined
countWrong;

// Map
const books = getBooks();
const titles = books.map((book) => ({
    id: book.id,
    title: book.title,
}));
titles;

// Filter
const longBooks = books
    // .filter((book) => book.pages > 1000)
    // .filter((book) => book.hasMovieAdaptation)
    .filter((book) => book.genres.includes('adventure'));
longBooks;

// Reduce
const totalPages = books.reduce((total, book) => total + book.pages, 0);
totalPages;

// Sort
const x = [3, 7, 1, 9, 6];
const sorted = x.slice().sort((a, b) => a - b);
sorted;
const sortedBooksByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedBooksByPages;

// 1) add book object to array
const newBook = {
    id: 6,
    title: 'Harry Potter and the Chapter of Secrets',
    author: 'J . K. Rowling',
    genres: ['fantasy', 'adventure'],
    hasMovieAdaptation: true,
    pages: 223,
};
const booksAfterAdding = [...books, newBook];
booksAfterAdding;
// 2) remove book from array
const booksAfterRemoving = booksAfterAdding.filter((book) => book.id !== 3);
booksAfterRemoving;
// 3) update book in array
const booksAfterUpdating = booksAfterRemoving.map((book) => (book.id === 1 ? { ...book, pages: 1210 } : book));
booksAfterUpdating;

// Promise method
fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((data) => console.log(data));

// AsyncAwait
async function getTodos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    console.log(data);
}
getTodos();
