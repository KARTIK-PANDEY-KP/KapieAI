

var a = true;
$(".burger").on("click",function(){
  if(a){
    $(".nav-links").addClass("pressed");
    a = false;
  }else{
    $(".nav-links").removeClass("pressed");
    a = true;
  }

})
const nameArray = ["kartik Pandey","Chirag Singla","Mehul Shah","Klaus Mikaelson"];
const passArray = ["kanpur12","punjab12","nepal12","neworleans12"];

document.getElementById("button").addEventListener('click', () => {
    var a = document.getElementById("name");
    var x = document.getElementById("password");
    var z = false;
    for(var i=0;i<nameArray.length;i++){
        if(a.value == nameArray[i] && x.value == passArray[i]){
            alert("Login Successfull");
            setTimeout(() => {
                window.location.href = "home.html";
            }, 500);
            z = true;
            break;
        }
        
    }
    if(!z){
        alert("Invalid Credetianls")
    }

})
