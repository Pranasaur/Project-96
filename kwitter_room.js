var username = localStorage.getItem("user_name");
var room_names = document.getElementById("div")

function removeUser() {

      window.location = "index.html";
      
}

function addRoom() {

      function getData() {firebase.database(lets-chat-13686).ref("/").on('value',
      function(snapshot) {document.getElementById("output").innerHTML =
      "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
      Room_names = childKey;
      //Start code

      row = "<div class='room_names' id="+Room_names+" onclick='redirectToRoomName(this.id)>'#"+Room_names+"</div><hr>"
      window.location = "kwitter_page.html";
      //End code
      });});}
      getData();

}

function redirectToRoomName() {

      localStorage.setItem("room_name", );
}