const MY_BOOKS = document.getElementById('bookcard-area');

function init() {
    getBookFromLocalStorage();
    renderBookcard();
}

function renderBookcard() {
    MY_BOOKS.innerHTML = "";
    for (let i = 0; i < books.length; i++) {
        MY_BOOKS.innerHTML += templateBookcard(i);
    }
}

function renderCommentary(i) {
    let myCommets = "";
    if (books[i].comments == null) {
    } else {
        for (let index = 0; index < books[i].comments.length; index++) {
            myCommets += templateCommentary(i, index);
        }
    }
    return myCommets;
}

function isBookLiked(i) {
    let maybeLiked = "";
    if (books[i].liked == true) {
        maybeLiked = templateLiked(i);
    } else {
        maybeLiked = templateNotLiked(i);
    }
    return maybeLiked;
}

function likeBook(i) {
    if (books[i].liked == true) {
        books[i].likes--;
        books[i].liked = false;
    } else {
        books[i].likes++;
        books[i].liked = true;
    }
    saveBookToLocalStorage();
    renderBookcard();
}

function addCommentary(i) {
    let commetInputRef = document.getElementById('commentary_input' + i);
    let commetInput = {"name": "NewGuy","comment": commetInputRef.value};
    if (commetInputRef.value != "") {
        books[i].comments.unshift(commetInput);
    }
    saveBookToLocalStorage();
    renderBookcard();
}

function saveBookToLocalStorage() {
    localStorage.setItem("books", JSON.stringify(books));
}

function getBookFromLocalStorage() {
    let myBooks = JSON.parse(localStorage.getItem("books"));

    if (myBooks != null) {
        books = myBooks;
    }
}