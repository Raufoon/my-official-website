import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import firebase from 'firebase/app'
import HighlightedText from './components/web-components/highlighted-text'
import { BrowserRouter } from 'react-router-dom'

firebase.initializeApp({
  apiKey: 'AIzaSyBX_gN0xhvNTQ8mRLD-BB8G2-Hly6DUYno',
  authDomain: 'minhaz-raufoon.firebaseapp.com',
  databaseURL: 'https://minhaz-raufoon.firebaseio.com',
  projectId: 'minhaz-raufoon',
  storageBucket: 'minhaz-raufoon.appspot.com',
  messagingSenderId: '424916751339',
})

window.customElements.define('hl-txt', HighlightedText)

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
