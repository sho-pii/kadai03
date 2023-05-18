$(".repeat").on("click", function () {
  window.location.href = "./";
  location.reload();
});

var rand = '';

$(".ok").on("click", function () {
  var element = document.getElementById("number");
  var n = element.value;

  var num = "0123456789";
  for (var i = 0; i < n; i++) {
    rand += num[~~(Math.random() * num.length)];
  };
  console.log(rand);

  var n = element.value;  // nは桁数

  // 正解　隠し
  $(".answer").html(rand);
  $(".answer").hide();

  $("#question").show();
  $("#kaitou").show();
  $("#suuji").hide();
  return rand;
});


var n1 = Math.floor(rand / 1) % 10; //1桁目
var n2 = Math.floor(rand / 10) % 10; //2桁目
var n3 = Math.floor(rand / 100) % 10; //3桁目
var n4 = Math.floor(rand / 1000) % 10; //4桁目
var n5 = Math.floor(rand / 10000) % 10; //5桁目
var n6 = Math.floor(rand / 100000) % 10; //6桁目


// 答え合わせ
$(".check").on("click", function () {
  var myAnswer = document.getElementById("myAnswer");
  var checkAnswer = myAnswer.value;
  if (checkAnswer === rand) {
    $(".result").html("あたり！");
  } else {
    $(".result").html("はずれ");
  }
  $(".answer").show();
  $(".repeat").show();
  $("html, body").animate(
    { scrollTop: $("html").get(0).scrollHeight },
);
});

// 質問は３回まで
var cnt = 3;
$(".qq").on("click", function () {
  cnt--;
  $("#count").html(cnt);
  if ((cnt === 0)) {
    $(".qq").prop("disabled", true);
    $(".qq").css("color","gray");
    $(".qq").css("cursor","default");
    $(".qq").css("pointer-events","none");
  }
});

// Q1
$(".q1").on("click", function () {
  var n1 = Math.floor(rand / 1) % 10; //1桁目
  if (n1 < 5) {
    $(".yesno").html("YES");
    $(".yesno").css("color", "red");
  } else {
    $(".yesno").html("NO");
    $(".yesno").css("color", "blue");
  }
});

// Q2
$(".q2").on("click", function () {
  var n1 = Math.floor(rand / 1) % 10; //1桁目
  var n2 = Math.floor(rand / 10) % 10; //2桁目
  var n3 = Math.floor(rand / 100) % 10; //3桁目
  var n4 = Math.floor(rand / 1000) % 10; //4桁目
  var n5 = Math.floor(rand / 10000) % 10; //5桁目
  var n6 = Math.floor(rand / 100000) % 10; //6桁目
  if (n1 + n2 + n3 + n4 + n5 + n6 >= 10) {
    $(".yesno").html("YES");
    $(".yesno").css("color", "red");
  } else {
    $(".yesno").html("NO");
    $(".yesno").css("color", "blue");
  }
});

// Q3
$(".q3").on("click", function () {
  var n3 = Math.floor(rand / 100) % 10; //3桁目
  if (n3 == 5) {
    $(".yesno").html("YES");
    $(".yesno").css("color", "red");
  } else {
    $(".yesno").html("NO");
    $(".yesno").css("color", "blue");
  }
});

// Q4
$(".q4").on("click", function () {
  var n1 = Math.floor(rand / 1) % 10; //1桁目
  var n2 = Math.floor(rand / 10) % 10; //2桁目
  var n3 = Math.floor(rand / 100) % 10; //3桁目
  var n4 = Math.floor(rand / 1000) % 10; //4桁目
  var n5 = Math.floor(rand / 10000) % 10; //5桁目
  var n6 = Math.floor(rand / 100000) % 10; //6桁目
  if (n1 == 1 || n2 == 1 || n3 == 1 || n4 == 1 || n5 == 1 || n6 == 1) {
    $(".yesno").html("YES");
    $(".yesno").css("color", "red");
  } else {
    $(".yesno").html("NO");
    $(".yesno").css("color", "blue");
  }
});

// Q5
$(".q5").on("click", function () {
  if (rand % 2 === 0) {
    $(".yesno").html("YES");
    $(".yesno").css("color", "red");
  } else {
    $(".yesno").html("NO");
    $(".yesno").css("color", "blue");
  }
});

// Q6
$(".q6").on("click", function () {
  if (rand % 3 === 0) {
    $(".yesno").html("YES");
    $(".yesno").css("color", "red");
  } else {
    $(".yesno").html("NO");
    $(".yesno").css("color", "blue");
  }
});

// Q7
$(".q7").on("click", function () {
  var n1 = Math.floor(rand / 1) % 10; //1桁目
  var n2 = Math.floor(rand / 10) % 10; //2桁目
  if (n1 > n2) {
    $(".yesno").html("YES");
    $(".yesno").css("color", "red");
  } else {
    $(".yesno").html("NO");
    $(".yesno").css("color", "blue");
  }
});

// Q8
$(".q8").on("click", function () {
  var n1 = Math.floor(rand / 1) % 10; //1桁目
  var n2 = Math.floor(rand / 10) % 10; //2桁目
  var n3 = Math.floor(rand / 100) % 10; //3桁目
  var n4 = Math.floor(rand / 1000) % 10; //4桁目
  var n5 = Math.floor(rand / 10000) % 10; //5桁目
  var n6 = Math.floor(rand / 100000) % 10; //6桁目
  if (n1 == 0 && n2 == 0 && n3 == 0 && n4 == 0 && n5 == 0 && n6 == 0) {
    $(".yesno").html("YES");
    $(".yesno").css("color", "red");
  } else {
    $(".yesno").html("NO");
    $(".yesno").css("color", "blue");
  }
});

// Q9
$(".q9").on("click", function () {
  if (rand % 5 === 0) {
    $(".yesno").html("YES");
    $(".yesno").css("color", "red");
  } else {
    $(".yesno").html("NO");
    $(".yesno").css("color", "blue");
  }
});