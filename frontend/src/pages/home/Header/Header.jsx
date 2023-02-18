import { React, useEffect, useState } from "react";
import axios from "axios";
import "./Header.css";
import MyVideo from "./smoke.mp4";
import { AiOutlineClose } from "react-icons/ai";
import { app } from "../../../firebase-config.js";
import { getFirestore } from "firebase/firestore";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    query,
    where,
} from "firebase/firestore";

const Header = () => {
    const [logged, setlogged] = useState(false);
    const [clicked, setclicked] = useState(false);
    const [invalid, setinvalid] = useState(false);
    const [college, setcollege] = useState("");
    const [message, setmessage] = useState(false);

    const db = getFirestore(app);
    const usersCollectionRef = collection(db, "users");

    const getUsers = async () => {
        const data = await getDocs(usersCollectionRef);
        return data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    };

    const addUser = async (name, email, college) => {
        const users = await getUsers();
        const code = users.length + 1000;
        await addDoc(usersCollectionRef, {
            name,
            email,
            college,
            code,
        });
    };

    const sendHandler = async () => {
        setclicked(false);
        await addUser(
            localStorage.getItem("ranganame"),
            localStorage.getItem("rangaemail"),
            college
        );
        const users = await getUsers();
        const code = users.length + 1000;
        await axios.post("http://localhost:5000/sendmail", {
            name: localStorage.getItem("ranganame"),
            email: localStorage.getItem("rangaemail"),
            college,
            code,
        });
        setmessage(true);
        setInterval(() => {
            setmessage(false);
        }, 3000);
    };

    const entryHandler = () => {
        if (logged) {
            setclicked(!clicked);
        } else {
            setinvalid(true);
            setInterval(() => {
                setinvalid(false);
            }, 3000);
        }
    };

    useEffect(() => {
        if (
            localStorage.getItem("ranganame") &&
            localStorage.getItem("rangaemail") &&
            localStorage.getItem("rangaphoto")
        ) {
            setlogged(true);
        }
    });

    return (
        <>
            <section className="animationforheader">
                <video className="videoheader" autoPlay muted>
                    <source src={MyVideo} type="video/mp4" />
                </video>
                <h1 className="parts">
                    <span className="past">रं</span>
                    <span className="past">ग</span>
                    <span className="past">व</span>
                    <span className="past">र्ध</span>
                    <span className="past">न</span>
                    <span className="past">'</span>
                    <span className="past"> </span>
                    <span className="past">२</span>
                    <span className="past">२</span>
                    <span className="past">-</span>
                    <span className="past">२</span>
                    <span className="past">३</span>

                    <div className="animate-charcter">19th,20th,21st</div>
                    <div className="animate-charcter">February 2023</div>
                </h1>
            </section>
            <button className="entry-pass" onClick={entryHandler}>
                Get Entry Pass
            </button>
            {invalid ? (
                <div className="invalid">Please Login First</div>
            ) : (
                <></>
            )}
            {message ? <div className="message">Pass sent</div> : <></>}
            {logged && clicked ? (
                <>
                    <form
                        action=""
                        className="entry-form"
                        onSubmit={e => e.preventDefault()}>
                        <span
                            className="close"
                            onClick={() => setclicked(false)}>
                            Close
                        </span>
                        <label htmlFor="">College name</label>
                        <input
                            type="text"
                            required
                            onChange={e => setcollege(e.target.value)}
                            placeholder="Enter your college name"
                        />
                        <button type="submit" onClick={sendHandler}>
                            Send pass to gmail
                        </button>
                    </form>
                </>
            ) : (
                <></>
            )}
        </>
    );
};

export default Header;
