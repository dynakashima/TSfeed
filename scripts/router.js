// var AppRouter = Backbone.Router.extend({
//     routes: {
//     	"feed": "getFeed",

//         // "posts/:id": "getPost",
//         // "*actions": "defaultRoute",
//         // "download/*path": "downloadFile",

//         // ":route/:action": "loadView" // Backbone will try match the route above first
//     }
//   	help: function() {
    
//   	},

//   	search: function(query, page) {
//   	}

// });

// var app_router = new AppRouter;

// app_router.on('route:getPost', function( id ){ 
//     alert(id); // 121 
// });
// app_router.on('route:downloadFile', function( path ){ 
//     alert(path); // user/images/hey.gif 
// });
// app_router.on('route:loadView', function( route, action ){ 
//     alert(route + "_" + action); // dashboard_graph 
// });
// // Instantiate the router
// app_router.on('route:getPost', function (id) {
//     // Note the variable in the route definition being passed in here
//     alert( "Get post number " + id );   
// });
// app_router.on('route:defaultRoute', function (actions) {
//     alert( actions ); 
// });
// // Start Backbone history a necessary step for bookmarkable URL's
// Backbone.history.start();