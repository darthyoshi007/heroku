

var Firebase = require("firebase");
var ref = new Firebase("https://herokuhackathon.firebaseio.com"); //links to firebase server
var usersRef = ref.child("users");

if (localStorage.getItem("uid") != null && window.location.pathname == "./index.html"){
  window.location.assign("./student-projects.html");
}
// localStorage.setItem("uid", "true"); LOCALSTORAGE EXAMPLE
// console.log(localStorage.uid);
// localStorage.removeItem("uid");

// var app = angular.module("herokuhackathon", ["firebase"]);
// app.controller("somethingggggggggggggg", function($scope, $firebaseObject) {
//   // download the data into a local object
//   var syncObject = $firebaseObject(ref);
//   // synchronize the object with a three-way data binding
//   syncObject.$bindTo($scope, "data");
// });
usersRef.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

window.addProject = function(){
  var projectName = document.getElementById("").value;
  var projectDescription = document.getElementById("").value;
  var projectClass = document.getElementById("").value;
}

window.createUser = function(){
  var emailHTML = document.getElementById("email-input").value; //string
  var passwordHTML = document.getElementById("password-input").value; //string
  ref.createUser({
    email    : emailHTML,
    password : passwordHTML
  }, function(error, userData) {
    if (error) {
      console.log("Error creating user:", error);
    } else {
      var userid = "" + userData.uid;
      usersRef.push({emailHTML, userid});
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
      localStorage.setItem("uid", authData.uid);
      if (localStorage.getItem("uid") != null){
        window.location.assign("./student-projects.html");
      }
    }
  });
};

window.deAuth = function(){
  localStorage.removeItem("uid");
  window.location.assign("./index.html");
}

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
