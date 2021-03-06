$(document).ready(function() {

  function rollem() {

    initArray = []

    // get the mod
    var phillipaMod = $("#phillipa-mod").val();
    // make the roll
    var roll = Math.round(Math.random() * 20 + 1);
    // Write the roll to the field
    $("#phillipa-roll").text(roll);
    // Add mod to total
    var phillipaTotal = parseInt(phillipaMod) + roll;
    $("#phillipa-total").text(phillipaTotal);

    initArray.unshift({
      "name": "Phillipa",
      "roll": phillipaTotal
    });


    // get the mod
    var zenaMod = $("#zena-mod").val();
    // make the roll
    var roll = Math.round(Math.random() * 20 + 1);
    // Write the roll to the field
    $("#zena-roll").text(roll);
    // Add mod to total
    var zenaTotal = parseInt(zenaMod) + roll;
    $("#zena-total").text(zenaTotal);

    initArray.unshift({
      "name": "Zena",
      "roll": zenaTotal
    });

    // get the mod
    var digbyMod = $("#digby-mod").val();
    // make the roll
    var roll = Math.round(Math.random() * 20 + 1);
    // Write the roll to the field
    $("#digby-roll").text(roll);
    // Add mod to total
    var digbyTotal = parseInt(digbyMod) + roll;
    $("#digby-total").text(digbyTotal);

    initArray.unshift({
      "name": "Digby",
      "roll": digbyTotal
    });

    // get the mod
    var wearyMod = $("#weary-mod").val();
    // make the roll
    var roll = Math.round(Math.random() * 20 + 1);
    // Write the roll to the field
    $("#weary-roll").text(roll);
    // Add mod to total
    var wearyTotal = parseInt(wearyMod) + roll;
    $("#weary-total").text(wearyTotal);

    initArray.unshift({
      "name": "Weary",
      "roll": wearyTotal
    });


    // get the mod
    var linneaMod = $("#linnea-mod").val();
    // make the roll
    var roll = Math.round(Math.random() * 20 + 1);
    // Write the roll to the field
    $("#linnea-roll").text(roll);
    // Add mod to total
    var linneaTotal = parseInt(linneaMod) + roll;
    $("#linnea-total").text(linneaTotal);

    initArray.unshift({
      "name": "Linnea",
      "roll": linneaTotal
    });


    // get the mod
    var monsterMod = $("#monster-mod").val();
    // make the roll
    var roll = Math.round(Math.random() * 20 + 1);
    // Write the roll to the field
    $("#monster-roll").text(roll);
    // Add mod to total
    var monsterTotal = parseInt(monsterMod) + roll;
    $("#monster-total").text(monsterTotal);

    initArray.unshift({
      "name": "Monster",
      "roll": monsterTotal
    });

    // Sort the array
    initArray.sort((a, b) => {
      return b.roll - a.roll;
    });

  }

  function appendToList() {

    for (var i = 0; i < initArray.length; i++) {

      switch (initArray[i].name) {
        case "Monster":
          $("#randomized-list").append("<li class='list-group-item bg-mistyrose'><i class='fad fa-fw text-danger fa-dragon mr-3'></i>" + initArray[i].name + "<span class='badge'>" + initArray[i].roll + "</span></li>");
          break;

        case "Linnea":
          $("#randomized-list").append("<li class='list-group-item'><i class='fad fa-fw text-primary fa-shield-cross mr-3'></i>" + initArray[i].name + "<span class='badge'>" + initArray[i].roll + "</span></li>");
          break;

        case "Digby":
          $("#randomized-list").append("<li class='list-group-item'><i class='fad fa-fw text-primary fa-hood-cloak mr-3'></i>" + initArray[i].name + "<span class='badge'>" + initArray[i].roll + "</span></li>");
          break;

        case "Phillipa":
          $("#randomized-list").append("<li class='list-group-item'><i class='fad fa-fw text-primary fa-helmet-battle mr-3'></i>" + initArray[i].name + "<span class='badge'>" + initArray[i].roll + "</span></li>");
          break;

        case "Weary":
          $("#randomized-list").append("<li class='list-group-item'><i class='fad fa-fw text-primary fa-hat-wizard mr-3'></i>" + initArray[i].name + "<span class='badge'>" + initArray[i].roll + "</span></li>");
          break;

        case "Zena":
          $("#randomized-list").append("<li class='list-group-item'><i class='fad fa-fw text-primary fa-mandolin mr-3'></i>" + initArray[i].name + "<span class='badge'>" + initArray[i].roll + "</span></li>");
          break;
      }

      // if (initArray[i].name == "Monster") {
      //
      //   $("#randomized-list").append("<li class='list-group-item bg-mistyrose'>" + initArray[i].name + "<span class='badge'>" + initArray[i].roll + "</span></li>");
      //
      // } else {
      //
      //   $("#randomized-list").append("<li class='list-group-item'>" + initArray[i].name + "<span class='badge'>" + initArray[i].roll + "</span></li>");
      // }

    }
  }

  $("#clear").on("click", function(){
    location.reload();
  });


  $("#roll-em").on("click", function() {

    $("#randomized-list").empty();

    rollem();
    appendToList();

  });


});
