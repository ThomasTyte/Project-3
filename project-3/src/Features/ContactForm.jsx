import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        comments: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
       
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
            <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
            <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
            <textarea name="comments" value={formData.comments} onChange={handleChange} placeholder="Comments" />
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;