import { initializeApp } from "firebase/app";
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, FacebookAuthProvider } from "firebase/auth";
import { firebaseConfig } from "./firebase.config";
import { useContext } from "react";
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);



export const handleGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();

    return signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            return {
                name: user.displayName,
                email: user.email,
                success: true,
                error: '',
                message: 'Successfully Sign Up With Google',
                status: 200
            }

        })
        .catch((error) => {
            console.log(error.message);
            return {
                name: '',
                email: '',
                success: false,
                error: error.message,
                message: '',
                status: 404
            }

        })
}

export const handleSignOut = () => {

    return signOut(auth)
        .then(() => {
            return {
                name: '',
                email: '',
                success: false,
                error: '',
                message: 'Successfully Sign Out',
                status: 200
            };
        })
        .catch((error) => {
            console.log(error.message);
            return {
                name: '',
                email: '',
                success: false,
                error: error.message,
                message: '',
                status: 404
            }
        })
}

export const handleSignUpWithEmailAndPassword = (newUser) => {

    const { name, email, password } = newUser;
    return createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
            const user = res.user;

            return updateProfile(user, {
                displayName: name
            })
            .then(()=>{
                return {
                    name: user.displayName,
                    email: user.email,
                    success: true,
                    error: '',
                    message: 'Successfully Sign Up With Email',
                    status: 200
                }
            })
            .catch((error) => {
                return {
                    name: '',
                    email: '',
                    success: false,
                    error: error.message,
                    message: '',
                    status: 404
                }
            })

        })
}

export const handleSignIn = (newUser) =>{

    const {email,password} = newUser;
    return signInWithEmailAndPassword(auth,email,password)
    .then((res)=>{
        const user = res.user;
        return {
            name: user.displayName,
            email: user.email,
            success: true,
            error: '',
            message: 'Successfully Sign In With Email',
            status: 200
        }
    })
    .catch((error)=>{
        return {
            name: '',
            email: '',
            success: false,
            error: error.message,
            message: '',
            status: 404
        }
    })
}