import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import firebase from "firebase/app"
import { BrowserRouter } from "react-router-dom"

firebase.initializeApp({
  apiKey: "AIzaSyBX_gN0xhvNTQ8mRLD-BB8G2-Hly6DUYno",
  authDomain: "minhaz-raufoon.firebaseapp.com",
  databaseURL: "https://minhaz-raufoon.firebaseio.com",
  projectId: "minhaz-raufoon",
  storageBucket: "minhaz-raufoon.appspot.com",
  messagingSenderId: "424916751339",
})

window.customElements.define(
  "highlighted-text",
  class extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `<b style="color: ${this.getAttribute("color")}">${
        this.innerHTML
      }</b>`
    }
    get color() {
      return this.hasAttribute("color")
    }
    set color(value = "#fff") {
      this.setAttribute("color", value)
    }
  }
)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
