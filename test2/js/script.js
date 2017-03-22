// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
      
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.json", 
            function (res) {
              this.textContent="Submit Answer"
              var temp =
   document.getElementById("name").value;
          console.log(temp); 
              
              if(temp === res.name1 ||temp === res.name2){
                document.getElementById("true").checked=true;
              }
              else {
                document.getElementById("false").checked= false;
              }

              if (temp1=== res.name1) {
                var temp = document.querySelector("#start").textContent;
                var temp = res.question1;
                  if (temp2 === answer1) {
                    temp= "You are correct!";
                  }
                  else {
                    temp= " You are incorrect!";
                  }
              }
              else if (temp1=== res.name1) {
                var temp = document.querySelector("#start").textContent;
                var temp = res.question2;
                  if (temp2 === answer2) {
                    temp= "You are correct!";
                  }
                  else {
                    temp= " You are incorrect!";
                  }
              }
              else {
                var temp1 = "you are not registered";
              }

            });
      });
  }
);
