const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const button = document.getElementById("submitbutton")
button.addEventListener("click",sendData);

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

function sendData(){
    fetch("http://localhost:8000",
    {
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            name:name.value.trim(),
            email:email.value.trim(),
            subject:subject.value.trim(),
            message :message.value.trim()
        })
    })
    .then(function(res){ 
        alert("Message Sent Successfully")
        console.log(res)
        name.value = ""
        email.value = ""
        subject.value = ""
        message.value = ""
     })
    .catch(function(res){ console.log(res) })
}
 