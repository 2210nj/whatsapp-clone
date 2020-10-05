import {firebase} from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDy_NW0S8zXJWzN-PkigjELo11FC-RbWkg",
    authDomain: "whatsapp-clone-35500.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-35500.firebaseio.com",
    projectId: "whatsapp-clone-35500",
    storageBucket: "whatsapp-clone-35500.appspot.com",
    messagingSenderId: "343849200804",
    appId: "1:343849200804:web:9a14391ebf7b1be3b3ca31",
    measurementId: "G-3XX3RH6P5D"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)