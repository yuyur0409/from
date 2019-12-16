// Paste the code from Firebase 
var config = {
    apiKey: "AIzaSyCTfWTmkXfltIEE9KDFoVF4ijqOydieLcM",
    authDomain: "ncut-53188.firebaseapp.com",
    databaseURL: "https://ncut-53188.firebaseio.com",
    projectId: "ncut-53188",
    storageBucket: "ncut-53188.appspot.com",
    messagingSenderId: "443322207619"
   
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('contact77');

$('#contactForm2').submit(function (e) {
  e.preventDefault();

  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: $('.name').val(),
	address: $('.add99').val(),
    sex: $('.sex99').val(),
    email: $('.email').val(),
    product1: $('.product1').val(),
    product2: $('.product2').val(),
    product3: $('.product3').val(),
    select: $('.select99').val(),
	

  });

  $('.success-message').show();

  $('#contactForm2')[0].reset();
});