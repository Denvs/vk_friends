// Event handling
document.addEventListener("DOMContentLoaded",
  	
    function (event) {
        
        var current_user = {};
        var friends = [];
        
        
      function vk_login (event) {
        
        VK.init({apiId: 5825448});
        
        VK.Auth.login(function(response) {
            
            if (response.session) {
              console.log("Authorization success");
              
              
              VK.Auth.getLoginStatus(function(response) {
                 
                if (response.session) {
                // Авторизованный в Open API пользователь, response.status="connected" 
                  current_user = response.session.user;
                  console.log("Current_user: " + current_user.id);
                  var user_first_name = current_user.first_name;
                  document.querySelector("#greeting").textContent = "Hello, " + user_first_name;
                                                      
                  
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
      


  		function build_graph (event) {
          

      	     
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
    

    document.querySelector("#login").addEventListener("click", vk_login);
		document.querySelector("#draw_graph").addEventListener("click", build_graph);
  }
);






