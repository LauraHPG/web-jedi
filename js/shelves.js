const url = "https://web-jedi-bookshelves.herokuapp.com/book-categories"

const handleLoadCards = (categories) => {
    categories.map( cat => {
        $('#list-tab').append(
            `<a class="list-group-item list-group-item-action" 
                id="list-${cat.name}-list" data-bs-toggle="list" href="#list-${cat.name}" 
                role="tab" aria-controls="list-${cat.name}">
                ${cat.name}
            </a>`)
        $('#nav-tabContent-md').append(
            `<div class="tab-pane fade show" id="list-${cat.name}"
            role="tabpanel" aria-labelledby="list-${cat.name}-list">
            <div class="row" id="box-${cat.name}"></div>
            </div>`)
        cat.books.map(book =>
            $(`#box-${cat.name}`).append(
                `<div class="card col-sm-11 col-md-6 col-lg-4 col-xl-3  book-cover mx-sm-4 mx-md-0"> 
                    <img src="${book.img}" class="card-img-top" alt="${book.title}">
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Synopsis
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        ${book.synopsis}
                        </ul>
                    </div>
                </div>`
            )
        )
    });
    
    categories.map(cat => {
        $("#accordionFlushExample").append(
            `<div class="accordion-item">
                <h2 class="accordion-header" id="flush-${cat.name}">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${cat.name}" aria-expanded="false" aria-controls="flush-collapse${cat.name}">
                        ${cat.name}
                    </button>
                </h2>
                <div id="flush-collapse${cat.name}" class="accordion-collapse collapse" aria-labelledby="flush-heading${cat.name}" data-bs-parent="#accordionFlushExample">
                <div id="${cat.name}" class="accordion-body"></div>
            </div>`
            )
            
        cat.books.map(book =>
            $(`#${cat.name}`).append(
                `<div class="card col mx-2  book-cover"> 
                    <img src="${book.img}" class="card-img-top" alt="${book.title}">
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                             Synopsis
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            ${book.synopsis}
                        </ul>
                    </div>
                </div>`

            ))});    
        
                
};

$(window).on('load', async() => {  
    try {
        var categories = (await axios.get(`${url}`)).data;
        console.log(categories)
        handleLoadCards(categories);
    }
    catch (error) {console.log(err)}
});
