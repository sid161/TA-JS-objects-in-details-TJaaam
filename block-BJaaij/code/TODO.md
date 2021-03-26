## An object-oriented book-list!

- [ ] Create a class BookList
- [ ] Create another class called Book

#### Each Book should have several properties:

1. Title
2. Category
3. Author
4. isRead (default to `false`)
5. finishedDate

Book class will have the following methods:

- `markBookAsRead` when called will change the `isRead` property on the book to be `true`. It will also change the `finishedDate` to be the `Date.now()` when this function is called.

#### BookList should have the following properties:

1. An array of all the Books
2. Current read book index

#### BookList Methods

- [] `add([Book])` will accept an array (list of books). Once the method is called the book will added to the list.
- [] `getCurrentBook()` should return the current book using the `index` and the book array
- [] `getNextBook()` should return the next book using the `index` and the book array
- [] `getPrevBook()` should return the previous book using the `index` and the book array
- [] `changeCurrentBook` should accept one parameter and update the current index.

After creating the Book and BookList class create 5 book object and add it to list. Test all the methods in Book and BookList class.

class Book{
    constructor(Title,Category,Author){
        this.title = title;
        this.Category = Category;
        this.Author = Author;
        this.isRead = false;
        this.finishedDate = null;
    }

    markBookAsRead(){
        this.isRead = true;
        markBookAsRead.finishedDate = `Date.now();
    }

}

class BookList{
    constructor()
        this.books = []
        this.currentIndexBook = 0;
    }

    add(books = []){
        this.book = this.book.push(books);
        return this.books;
    }

    getCurrentBook(index){
        return this.book[this.currentIndexBook ];

    }
    getNextBook(){
        return this.book[this.currentIndexBoook + 1];

    }
    getPrevBook(){
        return this.book[this.currentIndexBook - 1];
    }
    changeCurrentBook(index){
        return this.book[index];

    }
}

let book1 = new Book("Ah,Wilderness!","Fictional","Aldous Huxley");
let book2 = new Book("Alen Corn", "Drama","Sidney Howard");
let book3 = new Book("Antic Hay","Comedy","Aldous Huxley");

let library = new BookList();
library.add([book1, book2, book3]);
