import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

interface FormData {
    title: string;
    description: string;
};

const CreateForm = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const schema = yup.object().shape({
        title: yup.string().required("Please add a title."),
        description: yup.string().required("Please add a description.")
    });

    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const postsRef = collection(db, "posts");

    const onPost = async (data: FormData) => {
        await addDoc(postsRef, {
            // title: data.title,
            // description: data.description,
            ...data,
            username: user?.displayName,
            userId: user?.uid,
        });

        navigate("/");
    };

    return (
        <form onSubmit={handleSubmit(onPost)}>
            <input placeholder="Title..." {...register("title")} />
            <p style={{color: "red"}}> {errors.title?.message}</p>
            <textarea placeholder="Description..." {...register("description")} />
            <p> {errors.description?.message}</p>
            <input type="submit" className="submitForm"/>
        </form>
    );
}
 
export default CreateForm;