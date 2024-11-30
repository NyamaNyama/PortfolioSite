import { useState } from "react";
import { Layout } from "../components/Layout";
import { IValidationError } from "../types/ValidationError";
import { validateForm } from "../utils/validation";
import "../styles/Contact.css"

export const Contact = () =>{
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [errors, setErrors] = useState<IValidationError>({});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const validError = { name, email, message };
    
        const newErrors = validateForm({ validError });
    
        if (Object.keys(newErrors).length === 0) {
          setName("");
          setEmail("");
          setMessage("");
          setErrors({});
        } else {
          setErrors(newErrors);
        }
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
                    {errors.name && <p className="error-text">{errors.name}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <p className="error-text">{errors.email}</p>}
                </div>
                <div className="form-group">
                <label htmlFor="message">Сообщение:</label>
                <textarea className="message"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                {errors.message && <p className="error-text">{errors.message}</p>}
                </div>
                <button className="sendButton" type="submit">Отправить</button>
            </form>
        </div>
        </Layout>
    );
};