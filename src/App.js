import { useEffect, useState } from "react";
import { auth, googleProvider, db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

function App() {
  const [movieList, setMovies] = useState([]);
  const moviesRef = collection(db, "movies");
  useEffect(() => {
    const getMovieList = async () => {
      try {
        const data = await getDocs(moviesRef);
        console.log(data);
      } catch (err) {
        console.log("err");
      }
    };
    getMovieList();
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(auth?.currentUser?.email);
  const signin = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log("ERR");
    }
  };
  const signInGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.log("ERR");
    }
  };
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log("ERR");
    }
  };
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button onClick={signin}>Signin</button>
      <button onClick={signInGoogle}>GuGU</button>
      <button onClick={logOut}>Logout</button>
    </div>
  );
}

export default App;
