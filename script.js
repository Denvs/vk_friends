// Event handling
document.addEventListener("DOMContentLoaded",
  	
    function (event) {
        
        var current_user = {};
        var friends = [];
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
              if(response && document.querySelector("#content").children.length == 0) {
                  friends = response.response;
                  for (f in friends) {
                      console.log(friends[f]);
                      var photo = friends[f].photo_50;
                      var friend_div = document.createElement("div");
                      friend_div.setAttribute('class', 'frnd');
                      var photo_elem = document.createElement("img");
                      photo_elem.setAttribute("src", photo);
                      photo_elem.setAttribute('class', 'frnd');
                      friend_div.appendChild(photo_elem);
                      document.querySelector("#content").appendChild(friend_div);

                  }
              }
          }); 
              
      }
    

      function draw_connections (event) {
          
          var div1 = $('#div1'); 
          var div2 = $('#div2');
          var line = $('#line');
          var pos1 = div1.position();
          var pos2 = div2.position();
          $('#line').offset({top: 220, left:120});
          var linePos = line.position();


          console.log(pos1);
          console.log(pos2);
          console.log(linePos);
          
          
      }


 // create an array with nodes
    var nodes = new vis.DataSet([
        {id: 1, label: 'Node 1'},
        {id: 2, label: 'Node 2'},
        {id: 3, label: 'Node 3'},
        {id: 4, label: 'Node 4'},
        {id: 5, label: 'Node 5'}
    ]);

    // create an array with edges
    var edges = new vis.DataSet([
        {from: 1, to: 3},
        {from: 1, to: 2},
        {from: 2, to: 4},
        {from: 2, to: 5}
    ]);

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







    document.querySelector("button.login").addEventListener("click", login);
		
    
    
  }
);






