// Event handling
document.addEventListener("DOMContentLoaded",
  	
    function (event) {
        
        var current_user = {};
        var friends = [];
        var friend;
       
        
        VK.init({apiId: 5825448});
        
                
      function login (event) {
        
        
        
        VK.Auth.login(function(response) {
            
            if (response.session) {
              console.log("Authorization success");
              
              
              VK.Auth.getLoginStatus(function(response) {
                 
                if (response.session) {
                // Авторизованный в Open API пользователь, response.status="connected" 
                  current_user = response.session.user;
                  document.querySelector("#greeting").textContent = "Hello, " + current_user.first_name;
                  
                  document.querySelector("button.login").removeEventListener("click", login);
                  document.querySelector("button.login").setAttribute("class", 'logout');
                  document.querySelector("button.logout").innerHTML = 'Sign out';
                  document.querySelector("button.logout").addEventListener("click", logout);




                  document.querySelector("#load_friends").addEventListener("click", load_friends);
                  document.querySelector("#draw_connections").addEventListener("click", draw_connections);           
                                           
                  
                } else {
                // Неавторизованный в Open API пользователь,  response.status="not_authorized" 
                              
                  }
                });
              

              if (response.settings) {
                // Выбранные настройки доступа пользователя, если они были запрошены 
                
              }
                          
            } else {
                // Пользователь нажал кнопку Отмена в окне авторизации 
                    console.log("Authorization canceled");
              }
          }) 

      }
      

      function logout() {
          VK.Auth.logout(function(response) {
            console.log('Log out VK');
            document.location.reload();
          });
      }
  



  		function load_friends (event) {
              	     
        	VK.Api.call('friends.get', {user_id: current_user.id, fields: "first_name, last_name, photo_50"}, function(response) {
              if(response && document.querySelector("#mynetwork").children.length == 0) {
                  friends = response.response;
                  
                  //create an array with nodes
                  var nodes = new vis.DataSet();
                   
                   // create an array with edges
                  var edges = new vis.DataSet();

                  nodes.add({id: current_user.id, label: "Me"});
                  for (f in friends) {

                      friend = friends[f];
                      console.log(friend);
                      // var photo = friends[f].photo_50;
                      // var friend_div = document.createElement("div");
                      // friend_div.setAttribute('class', 'frnd');
                      // var photo_elem = document.createElement("img");
                      // photo_elem.setAttribute("src", photo);
                      // photo_elem.setAttribute('class', 'frnd');
                      // friend_div.appendChild(photo_elem);
                      
                      nodes.add({id: friend.user_id, label: friend.first_name});
                      edges.add({from: current_user.id, to: friend.user_id});

                                                                
                                            
 
                      

                                      
                  }

               

                                  

                // create a network
                var container = document.getElementById('mynetwork');
          
                // provide the data in the vis format
                var data = {
                    nodes: nodes,
                    edges: edges
                };

                var options = {};

                // initialize your network!
                var network = new vis.Network(container, data, options);

                      }
                  }); 
              

           
       

        

       

      }
    
$(document).ready(function() {
      function draw_connections (event) {
          
        /*var node1 = document.querySelector('Tom');
        
        var node2 = document.querySelector('Mary');*/

        // create an array with nodes
        // var nodes = new vis.DataSet([
        //     /*{id: node1, label: 'Tom'},
        //     {id: node2, label: 'Mary'}*/
        //     {id: 1, label: 'Tom'},
        //     {id: 2, label: 'Mary'}

        // ]);

        // // create an array with edges
        // var edges = new vis.DataSet([
        //     {from: 1, to: 2}

        // ]);

        // // create a network
        // var container = document.getElementById('mynetwork');
  
        // // provide the data in the vis format
        // var data = {
        //     nodes: nodes,
        //     edges: edges
        // };

        // var options = {};

        // // initialize your network!
        // var network = new vis.Network(container, data, options);



          
      }


});







    document.querySelector("button.login").addEventListener("click", login);
		
    
    
  }
);






