import { Link } from 'react-router-dom';
import { auth } from '../config/firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from 'firebase/auth';

const Navbars = () => {
    const [user] = useAuthState(auth);
    const userOut = async () => {
        await signOut(auth);
    };

    return ( 

        <div className="navbar">
            
            <div className="links">
                {/* <h1>Social Media Project</h1> */}
                <Link to="/">Home</Link>
                {!user ? <Link to="/login">Login</Link> :
                <Link to="/create">Create Post</Link>}
            </div>
            <div className="user">
                { user && (
                    <>
                        <p> {auth.currentUser?.displayName} </p>
                        <img src={auth.currentUser?.photoURL || ""} width="20" height="20" alt='Profile'/>
                        <button onClick={userOut} >Logout</button>
                    </>
                )}
            </div>

            
        </div>

        
    );
}
 
export default Navbars;