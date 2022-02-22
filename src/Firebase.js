import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = firebase.initializeApp({
    
apiKey: "AIzaSyC1smz0qEJnPF3JV81WIhtn0sIbIjGTNP4",
authDomain: "work-me-fe26d.firebaseapp.com",
databaseURL: "https://work-me-fe26d-default-rtdb.firebaseio.com",
projectId: "work-me-fe26d",
storageBucket: "work-me-fe26d.appspot.com",
messagingSenderId: "920572381921",
appId: "1:920572381921:web:911b24c9f853bc9d5e85a0"
    
})

export {firebaseConfig as firebase}
export default firebase;