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
      


  		function load_friends (event) {
              	     
        	VK.Api.call('friends.get', {user_id: current_user.id, fields: "first_name, last_name, photo_50"}, function(response) {
              if(response) {
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





    document.querySelector("#login").addEventListener("click", login);
		document.querySelector("#load_friends").addEventListener("click", load_friends);
    document.querySelector("#draw_connections").addEventListener("click", draw_connections);
  }
);






