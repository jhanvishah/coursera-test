// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        function startTest(event){
          this.textContent ="Submit Answer";
          var name = document.getElementById("name").value;
          var message= 
        }


        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.json", 
            function (res) {
              var temp =
   document.getElementById("name").value;
          console.log(temp); 
              
              if(temp === res.name1 ||temp === res.name2){
                document.getElementById("true").checked=true;
              }
              else {
                document.getElementById("false").checked= false;
              }




              if (temp=== res.name1) {
                var temp1 = document.querySelector("#start").textContent;
                var temp2 = res.question1;
              }
              else {
                var temp1 = "you are not registered";
              }

            

              
            });
      });
  }
);
