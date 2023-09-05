function btn3(){
    document.getElementById("anji").innerHTML="Hello Anji Thank You For Visiting My Website";
}
const firebaseConfig = {
  apiKey: "AIzaSyA8iBl3vtoCrsr-FGB0NoTkO7-3RMAx418",
  authDomain: "multiplepagewebsite.firebaseapp.com",
  databaseURL: "https://multiplepagewebsite-default-rtdb.firebaseio.com",
  projectId: "multiplepagewebsite",
  storageBucket: "multiplepagewebsite.appspot.com",
  messagingSenderId: "674699245335",
  appId: "1:674699245335:web:8913f9e04f3f5cba3ae952",
  measurementId: "G-BEZXRZ6GYE"
};

firebase.initializeApp(firebaseConfig);
username=localStorage.getItem("name of the user");
document.getElementById("anji1").innerHTML="welcome "+ username+"!";

function btn2(){
    button2=document.getElementById("anji1").value;
firebase.database().ref("/").child(anji1).update({
    purpose:"adding anji1"
});
    localStorage.setItem("hi",hi);
    window.location="index.html"

}
