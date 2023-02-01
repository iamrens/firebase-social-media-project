import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useState, useEffect } from "react";
import Posting from "./Posting";

export interface Post {
    id: string;
    userId: string;
    title: string;
    username: string;
    description: string;
};

const Home = () => {
    const [postsList, setPostsList] = useState<Post[] | null>(null);
    const postsRef = collection(db, "posts");

    const getPosts =async () => {
        const data = await getDocs(postsRef);
        setPostsList(data.docs.map(doc => ({
            ...doc.data(), id: doc.id
        })) as Post[]);
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div className="home">
            <h1>Homepage</h1>
            {postsList?.map(post => (<Posting post={post}/>))}
        </div>
    );
}
 
export default Home;