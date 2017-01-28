// Event handling
document.addEventListener("DOMContentLoaded",
  	
    function (event) {
        
        var current_user = {};
        
      function vk_login (event) {
        
        VK.init({apiId: 5825448});
        
        VK.Auth.login(function(response) {
            
            if (response.session) {
              console.log("Authorization success");
              
              
              VK.Auth.getLoginStatus(function(response) {
                 
                if (response.session) {
                // Авторизованный в Open API пользователь, response.status="connected" 
                  current_user = response.session.user;
                  console.log("Current_user: " + current_user);
                  var user_first_name = current_user.first_name;
                  document.querySelector("#greeting").textContent = "Hello, " + user_first_name;
                  var friends = VK.Api.call('friends.get');   
                  console.log(friends);                   
                  
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
          
          document.querySelector("#content").textContent = "test";
      	     
        	console.log(current_user.first_name);

          
      }
    

    document.querySelector("#login").addEventListener("click", vk_login);
		document.querySelector("#draw_graph").addEventListener("click", build_graph);
  }
);


/* var r = new XMLHttpRequest();
                  
          var url = "https://api.vk.com/method/users.get?user_id=86612022&v=5.52";
          //var url = 'https://denvs.github.io/vk_friends/data.json'
          r.open('GET', url, true);
          r.onreadystatechange = function(){
            if (r.readyState===4) {
              if (r.status >= 200 && r.status < 400) {
                console.log(JSON.parse(r.responseText).response[0].first_name);
              }
              else {
                console.log("Error ocured: " + r.status)
              }
            }
          };
 
          r.send();

*/



     /*    if (r.status != 200) {
         // обработать ошибку
         alert( r.status + ': ' + r.statusText ); // пример вывода: 404: Not Found
      } else {
         // вывести результат
         console.log( JSON.parse(r.responseText).response[0].first_name ); // responseText -- текст ответа.
}
  */



