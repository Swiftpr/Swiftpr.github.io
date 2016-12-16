

var appContainer = document.querySelector("#app-container")

var AppRouter = Backbone.Router.extend({
   routes: {
      "contact" : "showContact",
      "about" : 'showAbout',
      "works" : "showWorks",
      "*path": "showHome"

   },

   //hover effect http://miketricking.github.io/dist/

   showHome: function(){
      appContainer.innerHTML =
         `<div class =  "home-background">
            <div class="hovereffect">
                  <img class="img-responsive" src="./images/hipsterlogo.png" alt="">
                  <div class="overlay">
                     <h2>Creating, Building & Igniting </h2>
                        <p class="icon-links">
                           <a href="#contact"><span>Contact</span></a>
                           <a href="#works"><span>Works<span></a>
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
            <div>
               <a href="#"
                  <div>
                  <img class="works-logo" src="./images/logo-inite.png"
                  <div>
               </a>
            </div>

            <div class = "contact-left-column">
               <h2>Create, Build & Ignites</h2>
               <div>
                  <a href="https://www.linkedin.com/in/paul-swift-749a8720">
                     <i class="fa fa-linkedin-square fa-4x" aria-hidden="true"></i>
                  </a>
               <a href="https://github.com/PaulRSwift">
                  <i class="fa fa-github fa-4x" aria-hidden="true"></i>
               </a>

               </div>

               <br/>

               <div>
                  <object data="./images/Resume.pdf" type="application/pdf" width="45%" height="45%"></object>
               </div>

               <br/>
                  <a href="./images/Resume.pdf" target="_blank">Download the pdf</a>

            </div>


         </div>`

   },

   showWorks: function(){
      appContainer.innerHTML =
         `<div class = "works-background">

         <div>
            <a href="#"
               <div>
               <img class="works-logo" src="./images/logo-build.png"
               <div>
            </a>
         </div>

            <div class="row">
              <div class="col-sm-4 col-md-4">
              <a href="https://github.com/PaulRSwift/iLuggit">
                <div class=" works-thumb thumbnail">
                  <img class = "pull-left" src="./images/iLuggit.png" alt="...">
                  <div class="work-thumb-text caption">
                    <h3>iLuggit</h3>
                    <p>An app to help users move large house hold goods following Uber's business model. My team and I used React, Facebook's newest platform to build a streamline fulling functioning app.</p>
                    <p>Click to see the code at GitHub</p>
                     </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-4 col-md-4">
              <a href="https://github.com/PaulRSwift/assignment-19-Netflix">
                <div class="works-thumb thumbnail">
                  <img src="./images/API.png" alt="...">
                  <div class="caption">
                    <h3>API</h3>
                    <p>An individual project pulling from Netflix's API, then dynamically sorting it by list of programing per user. </p>
                    <p>Click to see the code at GitHub</p>
                     </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-4 col-md-4">
              <a href="https://github.com/PaulRSwift/Assignment-07-CSS-Frameworks-SolrodStrand">
                <div class="works-thumb thumbnail">
                  <img src="./images/HTML-CSS.png" alt="...">
                  <div class="caption">
                    <h3>Basic HTML and CSS </h3>
                    <p>A site mock up using basic HTML, CSS, and everyone's favorite "footwear" constructor.</p>
                     <p>Click to see the code at GitHub</p>
                     </a>
                  </div>
                </div>
              </div>
            </div>


         </div>`
   },


   initialize: function(){

      Backbone.history.start();
   }
})

var myApp = new AppRouter()
