const url = "https://web-jedi-bookshelves.herokuapp.com/book-categories"

const load = (book,cat) =>{
    $("#image").html(
        `<h4>${book.title}</h4>
        <img src="${book.img}" alt="${book.title}">
        <p>Category: ${cat.name}</p>`)
    
        $("#synopsis").html(
            `<h4>Synopsis</h4>
            ${book.synopsis}
            `
        )
}

$(window).on('load', async() => {  
    try {
        var categories = (await axios.get(`${url}`)).data;
        console.log(categories)
        load(categories[0].books[0], categories[0])
    }
    catch (error) {console.log(err)}

    $('#search-button').on("click", async () => {
        var bookName = $('#search').val();
        let book, cat, found = false;
        for(let i = 0; i < categories.length; ++i){
            cat = categories[i];
            for(let j = 0; j < cat.books.length; ++j){
                if(cat.books[j].title === bookName){
                    book = categories[i].books[j];
                    cat = categories[i];
                    found = true;
                    console.log(book)
                    break;
                }                
            }
            if (found) break;
        }
        if(found) load( book, cat );
        else{
            alert(`The book does not exist`)
        }
        return;
    });

});