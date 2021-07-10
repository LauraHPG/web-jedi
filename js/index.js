var loggedIn = false;

var animations =  () =>{
    
    $("#login-form").delay(2000).fadeIn();
    document.getElementById("welcome").animate([
        { transform: 'translateX(-50vw)' },
        { transform: 'translateX(0px)' }
      ], {
        duration: 700,
        iterations: 1
      });

    document.getElementById("title").animate([
        { transform: 'translateX(200vw)' },
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

      document.getElementById("myshelf").animate([
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

      document.getElementById("login-form").animate([
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

$(window).on('load', () => {       
    animations();  

    $('#move-to-login-btn').on("click", async () => {
      var elmnt = document.getElementById("login");
      elmnt.scrollIntoView(); 
    }) 
});
