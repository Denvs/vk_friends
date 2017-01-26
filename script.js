// Event handling
document.addEventListener("DOMContentLoaded",
  	function (event) {
    
  		function get_user_id (event) {
      		var user_id = document.getElementById("user_id").value;
        	console.log("User ID: " + user_id);
        	document.getElementById("content").textContent = user_id;

        	var r = new XMLHttpRequest();
        	//r.open("GET", "https://api.vk.com/method/users.get?user_id=86612022&v=5.52&access_token=5542fada6047f8c8bbb9640b6fd7da8a87225a7db35bb94daa6aa82c796456c7980fde0b48aea332c3152", true);
        	var url = "https://api.vk.com/method/users.get?user_id=86612022&v=5.52&access_token=5542fada6047f8c8bbb9640b6fd7da8a87225a7db35bb94daa6aa82c796456c7980fde0b48aea332c3152";
        	r.open('GET', url, true);
        	r.onload = function(){
        		console.log(this.responseText);
        	}
        	r.onerror = function() {
        		console.log('Error ' + this.status);
        	}
        	r.send();
        			
        
        	}

        	// function data_processing() {
        	// 	console.log(r.responseText);
        	// }

            //var r = new XMLHttpRequest();
        	//r.open("GET", "data.json", false)
   //      	r.send();
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

    




