const firebaseConfig = {
    apiKey: "AIzaSyDjLgxK3pRuFNc6FRnmGjsPvTWGvBzPCP4",
    authDomain: "lets-chat-13686.firebaseapp.com",
    projectId: "lets-chat-13686",
    storageBucket: "lets-chat-13686.appspot.com",
    messagingSenderId: "743984882564",
    appId: "1:743984882564:web:0fe831ee3b10d37b44f3d1"
  };

var user_name = localStorage.getItem("user_name")
var room_name = localStorage.getItem("room_name")
var input_field = document.getElementById("YourMessage")

function send() {

     localStorage.setItem(YourMessage)
     firebaseConfig.database().ref(room_name).push{
        name:user_name,
        message:msg
        like:0
     }

}