var options=["rock","scissors","paper"];
var user, house;
var points=0;
//console.log(options[0]);
$(".game-obj").on("click",function(){
  user = $(this).attr("id");
  house = newTurn();
    //console.log(options[user]+"and"+options[house]);
  let result = checkWinner();
  //console.log(result);
  var message;
  if(result===0){message="DRAW"}
  else if(result===1){message="YOU WIN"}
  else{message="YOU LOSE"}

  print(message);

  $(".score").text(points);
});


function newTurn(){
  let idx = Math.floor(Math.random()*3);
  let houseChoice = options[idx];
  return houseChoice;
}


function checkWinner(){
  let result=0;
  if(user===house)
  {
    result=0;
    return result;
  }
  if(user==="rock")
  {
    if(house==="paper")
    {
      result=-1;
    }
    else{
      result=1;
    }
  }
  if(user==="scissors")
  {
    if(house==="rock")
    {
      result=-1;
    }
    else{
      result=1;
    }
  }
  if(user==="paper")
  {
    if(house==="scissors")
    {
      result=-1;
    }
    else{
      result=1;
    }
  }
  if(result===-1){points--;}
  else if(result===1){points++;}
  //console.log("Points:"+points);
  return result;
}

function print(msg){
  $("#play-game").addClass("hide");
  $("#result").removeClass("hide");

  $(".message h1").text(msg);

  let userImg = "images/icon-"+user+".svg";
  let houseImg = "images/icon-"+house+".svg";

  $(".you-chose img").attr("src",userImg);
  $(".user-choice").addClass("res-"+user);

  $(".i-chose img").attr("src",houseImg);
  $(".house-choice").addClass("res-"+house);
}

$(".play-again").on("click", function(){
  $("#play-game").removeClass("hide");
  $("#result").addClass("hide");

  $(".user-choice").removeClass("res-"+user);
  $(".house-choice").removeClass("res-"+house);
});

$(".rules").on("click", function(){
  $(".rules-img").removeClass("hide");
  $(".toggle-rules").addClass("blackout");
});
$(".closebt").on("click", function(){
  $(".rules-img").addClass("hide");
  $(".toggle-rules").removeClass("blackout");
});
