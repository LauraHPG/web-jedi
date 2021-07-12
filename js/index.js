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
      document.getElementById("shelves").animate([
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

      document.getElementById("move-to-login-btn").animate([
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

      document.getElementById("login-box").animate([
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

var checkPassword = e =>{
    e.preventDefault();

    var username = $('#username').val();
    var password = $('#password').val();

    let user = users.find(u => u.username === username);
    if(user){
      if (password === user.password) window.location = 'myshelf.html';
      else alert("wrong password")
    }
    else alert("user does not exist");
    
    return;

}

$(window).on('load', async() => {       
    animations(); 

    try {users = (await axios.get(`${url}`)).data;}
    catch (error) {console.log(err)}

    document.getElementById("login-box")
      .addEventListener('submit', checkPassword);

    $('#move-to-login-btn').on("click", () => {
      var elmnt = document.getElementById("login");
      elmnt.scrollIntoView(); 
    }) 

    $("#shelves").on('click', async () => window.location = 'shelves.html');
    $("#myshelf").on('click', async () => window.location = 'myshelf.html');

    
});
