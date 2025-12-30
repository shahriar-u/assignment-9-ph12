import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail, 
} from "firebase/auth";
import app from "../Firebase/Firebase";

export const AuthContextAPI = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [localUser, setLocalUser] = useState({
    displayName: "",
    photoURL: "",
  });

  useEffect(() => {
    if (user) {
      setLocalUser({
        displayName: user.displayName,
        photoURL: user.photoURL
      });
    }
  }, [user]);

  // Signup function
  const handelRegisterUser = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  // Update name and photo
  const handelUpdate = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // Reset Password
  const handelResetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const googleProvider = new GoogleAuthProvider();

  // Sign in with google
  const handelSingInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Sign in with email
  const handelSingInWithEmail = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const handelLogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    setUser,
    loading,
    handelRegisterUser,
    handelUpdate,
    handelSingInWithEmail,
    handelLogOut,
    handelSingInWithGoogle,
    handelResetPassword,
    localUser,
    setLocalUser
  };

  return (
    <AuthContextAPI.Provider value={authInfo}>
      {children}
    </AuthContextAPI.Provider>
  );
};

export default AuthProvider;
