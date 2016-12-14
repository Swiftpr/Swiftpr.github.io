

var appContainer = document.querySelector("#app-container")

var AppRouter = Backbone.Router.extend({
   routes: {
      "contact" : "showContact",
      "works" : "showWorks",
      "*path": "showHome"

   },

   showHome: function(){
      appContainer.innerHTML = "<h1>Welcome Home</h1>"
   },

   showWorks: function(){
      appContainer.innerHTML = "<h2>Works Page</h2>"
   },

   showContact: function(){
      appContainer.innerHTML = "<h2>Contact Page</h2>"

   },

   initialize: function(){

      Backbone.history.start();
   }
})

var myApp = new AppRouter()
