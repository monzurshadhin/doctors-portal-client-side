import {
  createUserWithEmailAndPassword,
  getAuth, getIdToken, GoogleAuthProvider, onAuthStateChanged,
  signInWithEmailAndPassword, signInWithPopup, signOut,
  updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";

initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [authError,setAuthError] = useState('');
  const [admin,setAdmin] = useState(false)

  const [isLoading, setIsLoading] = useState(true);
  const [token,setToken] = useState('')

  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();

  const registerUser = (email, password,name,navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        setAuthError('');
        const newUser = {email:email,displayName:name}
        setUser(newUser);
        saveUser(email,name,'POST')
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
          // Profile updated!
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });
        navigate('/')
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setAuthError(errorMessage);
        // ..
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const loginUser = (email, password,location,navigate) => {
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const redirect_uri = location.state?.from || '/home';
        navigate(redirect_uri);
        // or 
        // navigate.push(redirect_uri)
        // Signed in
        const user = userCredential.user;
        // ...
        setAuthError('');

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setAuthError(errorMessage);

      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const signInWithGoogle = (location,navigate) =>{
    setIsLoading(true);

    signInWithPopup(auth, googleProvider)
  .then((result) => {
    const redirect_uri = location.state?.from || '/home';
    navigate(redirect_uri);
    const user = result.user;

    saveUser(user.email,user.displayName,'PUT')
    setAuthError('');
    // ...
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setAuthError(errorMessage);
  })
  .finally(() => {
    setIsLoading(false);
  });
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user)
        .then(idToken => setToken(idToken))
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  useEffect(()=>{
    fetch(`http://localhost:5000/users/${user.email}`)
    .then(res =>res.json())
    .then(data => setAdmin(data.admin))
  },[user.email])
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const saveUser = (email, displayName,method) =>{
    const user = {email:email,displayName:displayName};
    fetch('http://localhost:5000/users',{
      method:method,
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(user)
    })
    .then()
  }
  return {
    user,
    admin,
    token,
    registerUser,
    logOut,
    loginUser,
    isLoading,
    authError,
    signInWithGoogle
  };
};
export default useFirebase;
