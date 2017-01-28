// Event handling
document.addEventListener("DOMContentLoaded",
  	function (event) {
    
  		function get_user_id (event) {
          VK.init({apiId: 5825448});
          VK.Auth.login(function(response) {
            if (response.session) {
              console.log("Auth success");
              console.log(response.headers);
              if (response.settings) {
                /* Выбранные настройки доступа пользователя, если они были запрошены */
                console.log('settings');
              }
            } else {
                /* Пользователь нажал кнопку Отмена в окне авторизации */
                console.log("Auth canceled");
              }
          });

      		var user_id = document.getElementById("user_id").value;
        	console.log("User ID: " + user_id);
        	document.getElementById("content").textContent = user_id;

          
        	var r = new XMLHttpRequest();
          
        	
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
          
        			
        
        	}
       
   //      	if (r.status != 200) {
  	// 			// обработать ошибку
  	// 			alert( r.status + ': ' + r.statusText ); // пример вывода: 404: Not Found
			// } else {
  	// 			// вывести результат
  	// 			console.log( JSON.parse(r.responseText).response[0].first_name ); // responseText -- текст ответа.
//}

		document.querySelector("button").addEventListener("click", get_user_id);
  }
);




    //   if (name === "student") {
    //     var title = 
    //       document
    //         .querySelector("#title")
    //         .textContent;
    //     title += " & Lovin' it!";
    //     document
    //         .querySelector("h1")
    //         .textContent = title;
    //   }
    // }

    




