import firebase from "firebase/app"
import "firebase/database"

export function read(path) {
  return firebase
    .database()
    .ref(path)
    .once("value")
    .then((snap) => snap.val())
}

export function readAsList(path) {
  return firebase
    .database()
    .ref(path)
    .once("value")
    .then((snap) => Object.values(snap.val()))
}
