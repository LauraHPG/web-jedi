var loggedIn = false;
const url = "https://web-jedi-bookshelves.herokuapp.com/users";

var animations =  () =>{
    
    document.getElementById("welcome").animate([
        { transform: 'translateX(-50vw)' },
        { transform: 'translateX(0px)' }
      ], {
        duration: 700,
        iterations: 1
      });

    document.getElementById("title").animate([
        { transform: 'translateX(100vw)' },
        { transform: 'translateX(0px)' }
      ], {
        duration: 700,
        iterations: 1
      });

      document.getElementById("move-to-signup-btn").animate([
        { opacity: 0 },
        { opacity: 0 },
        { opacity: 0 },
        { opacity: 0 },
        { opacity: 0 },
        { opacity: 100 }
      ], {
        duration: 700,
        iterations: 1
      });

      document.getElementById("signup-box").animate([
        { opacity: 0 },
        { opacity: 0 },
        { opacity: 0 },
        { opacity: 0 },
        { opacity: 0 },
        { opacity: 0 },
        { opacity: 0 },
        { opacity: 100 }
      ], {
        duration: 1000,
        iterations: 1
      });
}

var checkPassword = async e =>{
    e.preventDefault();

    try {users = (await axios.get(`${url}`)).data;}
    catch (error) {console.log(err)}

    var username = $('#username').val();
    var password = $('#password').val();
    var cpassword = $('#c-password').val();
    
    
    let user = users.find(u => u.username === username);
    if(user) alert(`user already exists`)
    else if(password !== cpassword) alert(`passwords do not match`)
    else {
      let id = users.length +1;
      axios.post(`${url}`, { "id": id, "username": username, "password": password} )
      .then( response => {
          console.log(response.data) 
          window.location = 'shelves.html'; 
      } )  
      .catch( err => { 
          console.log(err)  
      } )
    }
    
    return;

}

$(window).on('load', async() => {       
    animations(); 


    document.getElementById("signup-box")
      .addEventListener('submit', checkPassword);

    $('#move-to-signup-btn').on("click", () => {
      var elmnt = document.getElementById("signup");
      elmnt.scrollIntoView(); 
    }) 

    $("#shelves").on('click', async () => window.location = 'shelves.html');

    
});