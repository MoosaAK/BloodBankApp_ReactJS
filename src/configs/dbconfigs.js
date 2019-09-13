import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDqRdttEcwBlgQh5rHLCaUQM2l4n9POQ2c",
    authDomain: "bloodbank-000.firebaseapp.com",
    databaseURL: "https://bloodbank-000.firebaseio.com",
    projectId: "bloodbank-000",
    storageBucket: "bloodbank-000.appspot.com",
    messagingSenderId: "676839634400",
    appId: "1:676839634400:web:15437a929593c203"
  };

firebase.initializeApp(config);
export const database = firebase.database();

export const storage = firebase.storage();

export const fbAuth = firebase.auth();
 