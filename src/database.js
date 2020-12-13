import * as firebase from "firebase/app"
import "firebase/database"

export function read(path) {
  return firebase.database().ref(path).once("value")
}

export function readAsList(path) {
  return firebase
    .database()
    .ref(path)
    .once("value")
    .then((data) => Object.values(data))
}
