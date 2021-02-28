import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyD_weNYMZ5b7upBIbozWY1wwPcKpccP6h4",
  authDomain: "discord-clone-7b451.firebaseapp.com",
  projectId: "discord-clone-7b451",
  storageBucket: "discord-clone-7b451.appspot.com",
  messagingSenderId: "836851884427",
  appId: "1:836851884427:web:43dd46fb6d7d40d8394f8e"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth , provider};
  export default db;
  
