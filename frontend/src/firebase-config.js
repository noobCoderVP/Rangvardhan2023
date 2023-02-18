import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

const CONFIG = {
    apiKey: "AIzaSyA8G-ULQnCUZdv6bBrGtYtxMasQUNkBvsE",
    authDomain: "rangvardhan-e83e2.firebaseapp.com",
    projectId: "rangvardhan-e83e2",
    storageBucket: "rangvardhan-e83e2.appspot.com",
    messagingSenderId: "223896872534",
    appId: "1:223896872534:web:84a7ac3cb61f41c47a7df7",
    measurementId: "G-CR89WQ3HZS",
};

export const app = initializeApp(CONFIG);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const db = getFirestore(app);
const userCollectionRef = collection(db, "users");

const getUsers = async () => {
    const data = await getDocs(userCollectionRef);
    return data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
};

const addUser = async (name, email) => {
    await addDoc(userCollectionRef, {
        name: name,
        email: email,
    });
};

export const signinWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then(async result => {
            const name = result.user.displayName;
            const email = result.user.email;
            const photoURL = result.user.photoURL;

            const users = await getUsers();
            const user = users.filter(element => {
                return element.email === email.toLowerCase();
            });

            localStorage.setItem("ranganame", name);
            localStorage.setItem("rangaemail", email);
            localStorage.setItem("rangaphoto", photoURL);

            if (!user[0]) {
                addUser(name, email.toLowerCase());
            }

            window.location.reload();
            console.log(user);
        })
        .catch(error => {
            console.log(error);
        });
};
