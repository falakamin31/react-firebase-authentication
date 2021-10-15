import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyCJGcwshhsoUp8bxLnNpzORgS8HXH5XiFw",
    authDomain: "login-4f020.firebaseapp.com",
    projectId: "login-4f020",
    storageBucket: "login-4f020.appspot.com",
    messagingSenderId: "1053171955446",
    appId: "1:1053171955446:web:3c5f414bce2abf67491ed7"
  };
  const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider);
    const user = res.user;
    const query = await db
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
    if (query.docs.length === 0) {
      await db.collection("users").add({
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const signInWithEmailAndPassword = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  
  export {
    auth,
    db,
    signInWithGoogle,
    signInWithEmailAndPassword
  };