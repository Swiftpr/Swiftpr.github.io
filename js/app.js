

var appContainer = document.querySelector("#app-container")

var AppRouter = Backbone.Router.extend({
   routes: {
      "contact" : "showContact",
      "about" : 'showAbout',
      "works" : "showWorks",
      "*path": "showHome"

   },

   showHome: function(){
      appContainer.innerHTML =
         `<div class =  "home-background">
            <div class="hovereffect">
                  <img class="img-responsive" src="./images/hipsterlogo.png" alt="">
                  <div class="overlay">
                     <h2>Paul Swift - Create, Build, Ingite</h2>
                        <p class="icon-links">
                           <a href="#contact"><span>Contact</span></a>
                           <a href="#works"><span>Works<span></a>
                           <a href="#about"><span>About<span></a>
                        </p>
                  </div>
            </div>
         </div>`

   },

   showAbout: function(){
      appContainer.innerHTML =
         `<div class = "about-background">
            <h1>about</h1>
         </div>`

   },


   showContact: function(){
      appContainer.innerHTML =
         `<div class = "contact-background">
         </div>`

   },

   showWorks: function(){
      appContainer.innerHTML =
         `<div class = "works-background">
            <div class="media">
               <div class="media-left media-middle">
                  <a href="#">
                     <img class="media-object" src="..." alt="...">
                     </a>
               </div>
               <div class="media-body">
                  <h4 class="media-heading">iLuggit</h4>
                  My work is so good
               </div>
            </div>
            <div class="media">
               <div class="media-left media-middle">
                  <a href="#">
                     <img class="media-object" src="..." alt="...">
                     </a>
               </div>
               <div class="media-body">
                  <h4 class="media-heading">iLuggit</h4>
                  My work is so good
               </div>
            </div>
            <div class="media">
               <div class="media-left media-middle">
                  <a href="#">
                     <img class="media-object" src="..." alt="...">
                     </a>
               </div>
               <div class="media-body">
                  <h4 class="media-heading">iLuggit</h4>
                  My work is so good
               </div>
            </div>
         </div>`
   },


   initialize: function(){

      Backbone.history.start();
   }
})

var myApp = new AppRouter()
