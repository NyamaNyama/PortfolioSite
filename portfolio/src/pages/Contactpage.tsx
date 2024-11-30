import { useState } from "react";
import { Layout } from "../components/Layout";
import "../styles/Contact.css"

export const Contact = () =>{
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Сообщение отправлено!");
        setName("");
        setEmail("");
        setMessage("");
    };
    return (
        <Layout>
        <div className="contacts-container">
            <h2>Свяжитесь со мной</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Имя:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                <label htmlFor="message">Сообщение:</label>
                <textarea className="message"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                </div>
                <button className="sendButton" type="submit">Отправить</button>
            </form>
        </div>
        </Layout>
    );
};