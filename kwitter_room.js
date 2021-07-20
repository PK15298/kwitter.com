  // Your web app's Firebase configuration
  const config = {
     apiKey: "AIzaSyC5rRw53MuYqw0J7U3UyTuMLx7SqjZa7HY",
      authDomain: "practice-activity-c9737.firebaseapp.com",
      databaseURL: "https://practice-activity-c9737-default-rtdb.firebaseio.com",
      projectId: "practice-activity-c9737",
      storageBucket: "practice-activity-c9737.appspot.com",
      messagingSenderId: "266000692994",
      appId: "1:266000692994:web:c60535f55d68871c2a341b"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
