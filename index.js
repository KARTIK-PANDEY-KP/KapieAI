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

