
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyC_h-Y9HQK8Ql9JYjs74LbJlG8yC-0eOOU",
      authDomain: "letschat-web-app---1-c06d6.firebaseapp.com",
      databaseURL: "https://letschat-web-app---1-c06d6-default-rtdb.firebaseio.com",
      projectId: "letschat-web-app---1-c06d6",
      storageBucket: "letschat-web-app---1-c06d6.appspot.com",
      messagingSenderId: "727810028847",
      appId: "1:727810028847:web:778916de077a6fd9651dda"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("username");
document.getElementById("user_name").innerHTM = "Welcome "+user_name+"!";

function add_room(){
       room_name = document.getElementById("room_name").value;

      localStorage.setItem("roomname",room_name)
  
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
