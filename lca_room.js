// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCzspyB14AXbDJq-MuDJUl2Wemd7Z-AgTY",
    authDomain: "kwitter-af655.firebaseapp.com",
    databaseURL: "https://kwitter-af655-default-rtdb.firebaseio.com",
    projectId: "kwitter-af655",
    storageBucket: "kwitter-af655.appspot.com",
    messagingSenderId: "399004988161",
    appId: "1:399004988161:web:f4523ea4816dde23e2a100"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("welcome_user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "Adding Room Name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "lca_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            console.log("room_name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToroomname(this.id)'>#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
            //End code
        });
    });
}
getData();

function redirectToroomname(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "lca_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "lca.html";
}