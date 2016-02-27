
var Firebase = require("firebase");
var ref = new Firebase("https://herokuhackathon.firebaseio.com"); //links to firebase server
// var app = angular.module("herokuhackathon", ["firebase"]);
// app.controller("somethingggggggggggggg", function($scope, $firebaseObject) {
//   // download the data into a local object
//   var syncObject = $firebaseObject(ref);
//   // synchronize the object with a three-way data binding
//   syncObject.$bindTo($scope, "data");
// });

window.createUser = function(){
  var emailHTML = document.getElementById("email-input").value; //string
  var passwordHTML = document.getElementById("password-input").value; //string
  console.log(document.getElementById("email-input").value);
  ref.createUser({
    email    : emailHTML,
    password : passwordHTML
  }, function(error, userData) {
    if (error) {
      console.log("Error creating user:", error);
    } else {
      console.log("Successfully created user account with uid:", userData.uid);
    }
  });
};

window.authUser = function(){
  var emailHTML = document.getElementById("email-input").value; //string
  var passwordHTML = document.getElementById("password-input").value; //string
  ref.authWithPassword({
    email    : emailHTML,
    password : passwordHTML
  }, function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);
    }
  });
};

window.teacherOnLoad = function(){
  var courses = ["Math","English","Science"];
  // Get data from Firebase and put into courses array
  var array = ["one", "two", "three"];
  var courseHTML = [];
  for(var i = 0; i < courses.length; i++){
    courseHTML[i] = "<li><span class='menu-item hvr-underline-centerD' onclick='courseTabChange(" + courses[i] + "" + i +")'>" + courses[i] + "</span></li>";
  }
  // var courseHTML = $.map(courses, function(course, i) {
  //   return "<li><a href='" + course + "" + i +"'>" + course + "</a></li>";
  // });
  document.getElementById("teacherCoursesList").innerHTML = courseHTML.join("");
};