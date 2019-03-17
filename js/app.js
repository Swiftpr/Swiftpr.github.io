

var appContainer = document.querySelector("#app-container"),


 var autoCopyright = function(){
   let currentDate = document.getElementsByClassName("footer--copywrite-year");
   for (let i = 0; i < currentDate.length; i++) {
      var d = new Date();
      currentDate[i].innerHTML = d.getFullYear();
   }
},



var AppRouter = Backbone.Router.extend({
   routes: {
      "contact" : "showContact",
      "about" : 'showAbout',
      "works" : "showWorks",
      "gulfstream" : "showGulStream",
      "*path": "showHome"

   },

   showGulStream : function() {

      appContainer.innerHTML =

         `
      <div class="page-gulfstream">
         <div class="header">
            <div class="header-inner--wrapper ">
              <h1>Gulfstream</h1>
              <h4 class="header-mobile">x</h4>
              <ul class="header-nav-triplet">
                <li class="header-subnav-anchor--aircraft">
                  <h4>Aircraft</h4>
                  <ul class="header-accordion">
                    <li>
                      <a
                        href="http://www.gulfstream.com/aircraft/gulfstream-g650er"
                        title="G650ER: new tab"
                        target="_blank"
                      >
                        G650ER
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://www.gulfstream.com/aircraft/gulfstream-g650"
                        title="G650"
                      >
                        G650
                      </a>
                    </li>
                    <li>
                      <a href="#">G600</a>
                    </li>
                    <li>
                      <a href="#">G500</a>
                    </li>
                    <li>
                      <a href="#">G550</a>
                    </li>
                    <li>
                      <a href="#">G280</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <h4>Support</h4>
                </li>
                <li>
                  <h4>Contact</h4>
                </li>
              </ul>
            </div>
          </div>
          <div class="hero--wrapper">
            <div class="hero--image">

            </div>

            <div class="hero-overlay">
              <div class="hero-overlay--inner">
                <h3>
                  Creating and Delivering the
                  <b>
                    Worlds <span>Finest</span> Aviation Experience
                  </b>
                </h3>
              </div>
            </div>
          </div>

           <div class="content-body">
            <div class="content-body--inner-wrapper">
              <div class="body-content--flex body-content-right">
                <div class="flex-child flex-child--copy">
                  <h2>Neque porro quisquam est qui</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                    vitae orci sit amet mi varius commodo quis ac erat. Aliquam erat
                    volutpat. Cras tincidunt massa id pharetra tincidunt. Nulla
                    tincidunt est felis. In leo nisi, luctus sed dignissim ut, posuere
                    vitae orci. Nulla facilisi. Suspendisse purus libero, pellentesque
                    id urna non, efficitur euismod tellus. Mauris hendrerit ex id enim
                    feugiat, vitae iaculis elit placerat. Morbi efficitur leo in laoreet
                    viverra. Quisque lobortis dignissim viverra.
                  </p>
                </div>
                <div class="flex-child flex-chid--image-flight"></div>
              </div>

              <div class="body-content--flex">
                <div class="flex-child flex-child--copy">
                  <h2>Neque porro quisquam est qui</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                    vitae orci sit amet mi varius commodo quis ac erat. Aliquam erat
                    volutpat. Cras tincidunt massa id pharetra tincidunt. Nulla
                    tincidunt est felis. In leo nisi, luctus sed dignissim ut, posuere
                    vitae orci. Nulla facilisi. Suspendisse purus libero, pellentesque
                    id urna non, efficitur euismod tellus. Mauris hendrerit ex id enim
                    feugiat, vitae iaculis elit placerat. Morbi efficitur leo in laoreet
                    viverra. Quisque lobortis dignissim viverra.
                  </p>
                </div>
                <div class="flex-chid--image-inside"></div>
              </div>
              <div class="body-contact">
                <div class="body-contact--inner">
                  <form>
                    <div class="body--contact--input">
                      <label for="input1">Full Name</label>
                      <input width="48" type="text" id="name" />
                    </div>
                    <div class="body--contact--input">
                      <label for="input1">Email &#42;</label>
                      <input type="text" id="email" />
                    </div>
                    <div class="body--contact--input input--lg">
                      <label for="input1">Message</label>
                      <input type="text" id="message" />
                    </div>
                    <input
                      id="contactSubmit"
                      class="body--contact-submit"
                      type="submit"
                      value="Submit"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="footer">
            <div class="footer--inner">
              <div class="footer-copy-container">
                <h2>Gulfstream Aerospace Corporation </h2>
                <h2>
                  &#169; <span class="footer--copywrite-year" />
                </h2>
              </div>
            </div>
          </div>
      </div>`
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
