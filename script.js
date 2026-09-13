const MY_BOOKS = document.getElementById('bookcard-area');

function init() {
    
    renderBookcard();
}

function renderBookcard() {
    for (let i = 0; i < books.length; i++) {
        MY_BOOKS.innerHTML += templateBookcard(i);        
    }
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
    let maybeLiked = "";
    if (books[i].liked == true) {
        maybeLiked = templateChangeToNotLiked(i);
    } else {
        maybeLiked = templateChangeToLiked(i);
    }
}