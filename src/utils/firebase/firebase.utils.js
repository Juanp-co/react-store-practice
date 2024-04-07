import { initializeApp } from "firebase/app";
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAzXMAcUvMrc54jpoD0YK-K0MQ4c1fS9vs",
  authDomain: "store-react-791b6.firebaseapp.com",
  projectId: "store-react-791b6",
  storageBucket: "store-react-791b6.appspot.com",
  messagingSenderId: "142456008917",
  appId: "1:142456008917:web:99f8223c9801d0751d725c"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signWithGooglePopup = () => signInWithPopup(auth, provider);
export const signWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    console.log("userDocRef", userDocRef);
    console.log("userSnapshot", userSnapshot);

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt
            })
        } catch (error) {
            console.log("Error creating the user", error);
        }
    }

}