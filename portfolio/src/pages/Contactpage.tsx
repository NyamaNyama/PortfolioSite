import { useState } from "react";
import { Layout } from "../components/Layout";
import "../styles/Contact.css"

export const Contact = () =>{
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

    const validate = (): boolean => {
        const newErrors: { name?: string; email?: string; message?: string } = {};
    
        if (!name.trim()) newErrors.name = "Укажите ваше имя";
        if (!email.trim()) {
          newErrors.email = "Укажите свой email";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          newErrors.email = "Неверный формат email";
        }
        if (!message.trim()) newErrors.message = "Сообщение не должно быть пустым";
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };

      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
          alert("Сообщение отправлено!");
          setName("");
          setEmail("");
          setMessage("");
          setErrors({});
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