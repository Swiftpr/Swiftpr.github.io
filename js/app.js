

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

                     <a href="https://www.linkedin.com/in/paul-swift-749a8720" target="_blank">
                        <i class="fa fa-linkedin-square fa-2x hl" aria-hidden="true"></i>
                     </a>
                     <a href="https://github.com/PaulRSwift" target="_blank">
                        <i class="fa fa-github fa-2x hl" aria-hidden="true"></i>
                     </a>

                     <a href="mailto:swiftp103@gmail.com?subject=I saw your porffolio and resume, can we talk?">
                        <i class="fa fa-envelope-o fa-2x hl"></i>
                     </a>

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


            <div class = "contact-left-column">
               <div class = "text-center">
                  <h2>Create, Build & Ignite</h2>
                     <p>Hi! I am a front end developer looking to build beautifully modern sites. Take a look at my work, portfolio, and contact me with any question you may have. I would love to talk.</p>
               </div>
            </div>

            <div class = "content-column text-center">
               <a href="#"
                  <div>
                  <img class="contact-logo" src="./images/logo-inite.png"
                  <div>
               </a>
            </div>


            <div>
                  <a href="https://www.linkedin.com/in/paul-swift-749a8720" target="_blank">
                     <i class="fa fa-linkedin-square fa-4x cl1" aria-hidden="true"></i>
                  </a>
                  <a href="https://github.com/PaulRSwift" target="_blank">
                     <i class="fa fa-github fa-4x cl2" aria-hidden="true"></i>
                  </a>

                  <a href="mailto:swiftp103@gmail.com?subject=I saw your porffolio and resume, can we talk?">
                     <i class="fa fa-envelope-o fa-4x cl3"></i>
                  </a>

            </div>


               <div class="resume">
                  <object data="./images/Paul Ramsey Swift 1-27-16.pdf" class="resume" type="application/pdf" width="45%" height="45%" margin-left="50%"></object>


                  <br/>
               </div>
               <div class="pdf-download">
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

            <a href="https://www.linkedin.com/in/paul-swift-749a8720" target="_blank">
               <i class="fa fa-linkedin-square fa-4x work-links wl1" aria-hidden="true"></i>
            </a>
            <a href="https://github.com/PaulRSwift" target="_blank">
               <i class="fa fa-github fa-4x work-links wl2" aria-hidden="true"></i>
            </a>

            <a href="mailto:swiftp103@gmail.com?subject=I saw your porffolio and resume, can we talk?">
               <i class="fa fa-envelope-o fa-4x work-links wl3"></i>
            </a>

            <div class="row">
              <div class="col-sm-4 col-md-4">
              <a href="https://github.com/PaulRSwift/iLuggit" target="_blank">
                <div class=" works-thumb thumbnail">
                  <img class = "pull-left" src="./images/iLuggit.png" alt="...">
                  <div class="work-thumb-text caption">
                    <h3>iLuggit</h3>
                    <p>An app to help users move large household goods following Uber's business model. My team and I used React, Facebook's newest platform to build a fulling functioning app.</p>
                    <p>Click to see the code at GitHub</p>
                     </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-4 col-md-4">
              <a href="https://github.com/PaulRSwift/assignment-19-Netflix" target="_blank">
                <div class="works-thumb thumbnail">
                  <img src="./images/API.png" alt="...">
                  <div class="caption">
                    <h3>API</h3>
                    <p>An individual project pulling from Netflix's API, then dynamically sorting it by list of programming per user. </p>
                    <p>Click to see the code at GitHub</p>
                     </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-4 col-md-4">
              <a href="https://github.com/PaulRSwift/Assignment-07-CSS-Frameworks-SolrodStrand" target="_blank">
                <div class="works-thumb thumbnail">
                  <img src="./images/HTML-CSS.png" alt="...">
                  <div class="caption">
                    <h3>Basic HTML and CSS </h3>
                    <p>A site mock up using basic HTML, CSS, and everyone's favorite "footwear" constructor.</p>
                     <p>Click to see the code at GitHub</p>
                     </a>
                     <a href="https://paulrswift.github.io/Assignment-07-CSS-Frameworks-SolrodStrand/"><p>Click here to see a static version<P></a>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-4 col-md-4">
              <a href="https://prswiftblog.wordpress.com/" target="wordpress">
                <div class="works-thumb thumbnail">
                  <img src="./images/wordpress.png" alt="...">
                  <div class="caption">
                    <h3>Wordpress </h3>
                    <p>An example of a simple wordpress blog.</p>
                     <p>Click to see site in production</p>
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
