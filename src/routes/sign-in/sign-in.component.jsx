import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
    auth, 
    signWithGooglePopup, 
    createUserDocumentFromAuth, 
    signWithGoogleRedirect 
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {

    useEffect(() => {
        async function initResponse() {
            const response = await getRedirectResult(auth);
            if (response) {
                const userDocRef = createUserDocumentFromAuth(response.user);
            }
        }
        initResponse();
    }, []);

    const logGoogleUser = async () => {
        const { user } = await signWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };
    const logGoogleRedirectUser = async () => {
        const { user } = await signWithGoogleRedirect();
        console.log(user);
    }

    return(
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign In with Google Popup </button>
            <button onClick={logGoogleRedirectUser}>Sign In with Google Redirect </button>
        </div>
    );
};

export default SignIn;