import * as firebase from "firebase";
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBX_gN0xhvNTQ8mRLD-BB8G2-Hly6DUYno",
  authDomain: "minhaz-raufoon.firebaseapp.com",
  databaseURL: "https://minhaz-raufoon.firebaseio.com",
  projectId: "minhaz-raufoon",
  storageBucket: "minhaz-raufoon.appspot.com",
  messagingSenderId: "424916751339"
};

const firebaseService = {
  init: () => firebase.initializeApp(firebaseConfig),

  database: {
    read: async (path) => {
      const snap = await firebase.database().ref(path).once('value');
      return snap.val();
    },

    write: async (path, object) => firebase.database().ref(path).set(object),

    push: (path, object) => firebase.database().ref(path).push(object),

    remove: (path) => firebase.database().ref(path).remove()
  },
};

export default firebaseService
