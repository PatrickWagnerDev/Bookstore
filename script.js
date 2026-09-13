const MY_BOOKS = document.getElementById('bookcard-area');

function init() {
    
    renderBookcard();
}

function renderBookcard() {
    for (let i = 0; i < books.length; i++) {
        MY_BOOKS.innerHTML += templateBookcard(i);        
    }
}