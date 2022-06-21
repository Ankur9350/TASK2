import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const Config = {
  apiKey: 'AIzaSyAQSBNqw0wrVYlv06dC38pqkG49VEeel1s',
  authDomain: 'chat-web-app-4cd82.firebaseapp.com',
  projectId: 'chat-web-app-4cd82',
  storageBucket: 'chat-web-app-4cd82.appspot.com',
  messagingSenderId: '862160447144',
  appId: '1:862160447144:web:87dd05189747935731c49d',
  databaseURL:
    'https://chat-web-app-4cd82-default-rtdb.asia-southeast1.firebasedatabase.app',
};

const app = firebase.initializeApp(Config);
export const auth = app.auth();
export const database = app.database();
