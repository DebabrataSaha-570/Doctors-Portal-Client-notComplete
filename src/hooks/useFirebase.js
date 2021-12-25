import initializeFirebase from '../Pages/Login/Firebase/firebase.init'
import { useState, useEffect } from 'react'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";

//Initialize Firebase app 

initializeFirebase()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('')
    const auth = getAuth()

    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const newUser = { email, displayName: name }
                setUser(newUser)
                //send name to firebase after creation 
                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {

                }).catch((error) => {
                    console.log(error)
                });

                setAuthError('')
                history.push('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                setAuthError(errorMessage)
            })
            .finally(() => setIsLoading(false));
    }
    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user)
                const destination = location?.state?.from || '/'
                history.push(destination)

                console.log(user)
                setAuthError('')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                setAuthError(errorMessage)

            })
            .finally(() => setIsLoading(false));

    }

    const signInWithGoogle = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user)
                const destination = location?.state?.from || '/'
                history.push(destination)

                setAuthError('')

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                setAuthError(errorMessage)
            })
            .finally(() => setIsLoading(false));

    }

    //observe user state. 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            setAuthError(error)
        })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        setUser,
        registerUser,
        logOut,
        loginUser,
        isLoading,
        authError,
        signInWithGoogle
    }
}

export default useFirebase; 