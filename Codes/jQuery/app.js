"use strict";
$(document).ready(function () {
  $("#switch button").click(function () {
    $("body").toggleClass("dark");
    $("table").toggleClass("dark");
    $(this).toggleClass("btn-dark");
    $(this).toggleClass("btn-light");
    if ($(this).hasClass("btn-dark")) {
      $(this).text("Turn to Dark Side");
    } else {
      $(this).text("Turn to Light Side");
    }
  });
  $("#event-handler").on({
    mouseenter: function () {
      $(this).css("color", "lightgray");
    },
    mouseleave: function () {
      $(this).css("color", "lightblue");
    },
    click: function () {
      $(this).css("color", "yellow");
    },
  });
  $("#btn-hide").click(function () {
    $(this).hide();
  });
  $("#btn-hide-slow").click(function () {
    $(this).hide(2000);
  });
  $("#btn-fade").click(function () {
    $("#fade-div").fadeToggle("slow");
    $(this).text("Click again to fade in");
  });

  $("#btn-get").click(function () {
    alert($("#p-get").text());
  });

  $("#btn-set").click(function () {
    $("#p-set").text("Thank You!");
  });
});

// console.log("App.js is running");
