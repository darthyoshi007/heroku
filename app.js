

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

window.addProject = function(){
  var projectName = document.getElementById("").value;
  var projectDescription = document.getElementById("").value;
  var projectClass = document.getElementById("").value;
}

window.createUser = function(){
  var emailHTML = document.getElementById("email-input").value; //string
  var passwordHTML = document.getElementById("password-input").value; //string
  window[emailHTML] = "";
  ref.createUser({
    email    : emailHTML,
    password : passwordHTML
  }, function(error, userData) {
    if (error) {
      console.log("Error creating user:", error);
    } else {
      var userid = "" + userData.uid;
      var obj = {};
      obj[emailHTML] = userid;
      console.log(userid);
      ref.push(obj);
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
  var courses = ["CS 101","CS 102","CS 104"];
  // Get data from database and put into courses array

  var courseHTML = [];
  for(var i = 0; i < courses.length; i++){
    courseHTML[i] = "<li><span class='menu-item hvr-underline-centerD' onclick='courseTabChange(\"" + courses[i] + "" + i +"\")'>" + courses[i] + "</span></li>";
  }

  document.getElementById("teacherCoursesList").innerHTML = courseHTML.join("");
};

window.cs101 = function(){
  window.location = "teacher.html";
}

window.cs102 = function(){
  window.location = "teacher2.html";
}

window.cs104 = function(){
  window.location = "teacher3.html";
}

window.approved = function(){
  window.location = "teacher4.html";
}

window.courseTabChange = function(courseID){
  // Get data from database 
  var formattedData = "<span>" + courseID + "</span>";
  window.location = "teacher2.html";
  //document.getElementById("projectsForCourse").innerHTML = formattedData;

};

window.teacher = function(){
  window.location = "teacher.html";
}