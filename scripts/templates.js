function templateBookcard(i) {
    return /*html*/`
        <section class="BookCard">
            <header class="BookHeader">
                <h2>
                    ${books[i].name}
                </h2>
            </header>
            <figure class="BookImage">
                <img src="${books[i].cover}" alt="${books[i].name} Cover">
            </figure>
            <main class="BookInfo">
                <section class="BookPriceLikes"">
                    <p class=" BookPrice">
                    ${books[i].price.toFixed(2).replace(".", ",")} €
                    </p>
                    <p class="BookLikes">
                        ${isBookLiked(i)}
                    </p>
                </section>
                <table class="BookData">
                    <tr>
                        <th>
                            Author
                        </th>
                        <td>
                            : ${books[i].author}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Erscheinungsjahr
                        </th>
                        <td>
                            : ${books[i].publishedYear}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Genre
                        </th>
                        <td>
                            : ${books[i].genre}
                        </td>
                    </tr>
                </table>
            </main>
            <footer class="BookFooter">
                <h3>
                    Kommentare:
                </h3>
                <section class="BookCommentarySection">
                    <table>
                        <tr>
                            <th>
                                [Leser123]
                            </th>
                            <td>
                                Ein faszinierendes Abenteuerbuch, das mich von der ersten SEite an gefesselt hat.
                            </td>
                        </tr>
                        <tr>
                            <th>
                                [Leser123]
                            </th>
                            <td>
                                Ein faszinierendes Abenteuerbuch, das mich von der ersten SEite an gefesselt hat.
                            </td>
                        </tr>
                        <tr>
                            <th>
                                [Leser123]
                            </th>
                            <td>
                                Ein faszinierendes Abenteuerbuch, das mich von der ersten SEite an gefesselt hat.
                            </td>
                        </tr>
                    </table>
                </section>
                <section class="BookCommentaryInput">
                    <input type="text" value=" Schreibe dein Kommentar ....">
                    <button aria-label="send Commentary" class="CommentaryButton">
                        <img class="CommentaryArrow CommentaryArrowOutline" aria-label="Kommentar-Button"
                            src="./assets/icons/paper_plane_outline_light.png" alt="Kommentar Abschicken Button">
                        <img class="CommentaryArrow CommentaryArrowFilled" aria-label="Kommentar-Button"
                            src="./assets/icons/paper_plane_filled_light.png" alt="Kommentar Abschicken Button">
                    </button>
                </section>
            </footer>
        </section>
    `;
}

function templateLiked(i) {
    return /*html*/`
        ${books[i].likes}
            <img class="YesLike" onclick="likeBook(${i})" src="./assets/icons/heart_filled.png" alt="Ausgefülltes Herz">           
    `;
}

function templateNotLiked(i) {
    return /*html*/`
        ${books[i].likes}
            <img class="NoLike" onclick="likeBook(${i})" src="./assets/icons/heart_outline.png" alt="Hohles Herz">           
    `;
}