import React from 'react';

const Contacts = () => {
    return (
        <div className="container">
            <h2>Contact Us</h2>
            <p>If you have any questions or inquiries, feel free to reach out to us!</p>
            <h3>Email</h3>
            <p>info@example.com</p>
            <h3>Phone</h3>
            <p>(123) 456-7890</p>
            <h3>Follow Us</h3>
            <p>
                <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">Twitter</a> | 
                <a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer">Facebook</a> | 
                <a href="https://instagram.com/example" target="_blank" rel="noopener noreferrer">Instagram</a>
            </p>
        </div>
    );
};

export default Contacts;