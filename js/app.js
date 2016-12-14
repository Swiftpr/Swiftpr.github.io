

var appContainer = document.querySelector("#app-container")

var AppRouter = Backbone.Router.extend({
   routes: {
      "contact" : "showContact",
      "works" : "showWorks",
      "*path": "showHome"

   },

   showHome: function(){
      appContainer.innerHTML =
         `<div class =  "container background">
            <div class="hovereffect">
                  <img class="img-responsive" src="./images/hipsterlogo.png" alt="">
                  <div class="overlay">
                     <h2>Paul Swift - Create Something</h2>
                        <p class="icon-links">
                           <a href="#works">
                              <span>My Works<span>
                           </a>
                           <a href="#contact">
                              <span>Contact Me</span>
                           </a>
                        </p>
                  </div>
            </div>
         </div>`

   },

   showContact: function(){
      appContainer.innerHTML = "<h2>Contact Page</h2>"

   },

   showWorks: function(){
      appContainer.innerHTML = "<h2>Works Page</h2>"
   },


   initialize: function(){

      Backbone.history.start();
   }
})

var myApp = new AppRouter()
