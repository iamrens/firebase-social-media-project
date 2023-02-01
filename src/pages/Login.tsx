import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const signIn = async () => {
        const result = await signInWithPopup(auth, provider);
        console.log(result);
        navigate("/");
    };

    return ( 
        <div>
            <p>Sign in with Google to Continue.</p>
            <button onClick={signIn}>Sign in with Google</button>
        </div>
    );
}
 
export default Login;