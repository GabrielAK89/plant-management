import firebase from 'firebase';

const config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: "AIzaSyAQlpiFsWSx-lDUwxmOrM5KWjDet72EK-A",
    authDomain: "plant-management-ced49.firebaseapp.com",
    databaseURL: "https://plant-management-ced49.firebaseio.com",
    projectId: "plant-management-ced49",
    storageBucket: "plant-management-ced49.appspot.com",
    messagingSenderId: "360056415966",
    appId: "1:360056415966:web:25b367823d712bbbf6844f",
    measurementId: "G-ELLKXTNJ2S"
};

const fire = firebase.initializeApp(config);
export default fire;