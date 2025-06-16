import React from 'react';

const QA = () => {
    const faqs = [
        {
            question: "What is this website about?",
            answer: "This website serves as a personal portfolio showcasing various projects and skills."
        },
        {
            question: "How can I contact you?",
            answer: "You can reach out through the Contacts section of this website."
        },
        {
            question: "Where can I find your projects?",
            answer: "Projects are listed in the relevant sections of this website."
        },
        {
            question: "Do you offer freelance services?",
            answer: "Yes, I am open to freelance opportunities. Please contact me for more details."
        }
    ];

    return (
        <div className="qa-section">
            <h2>Q&A</h2>
            <ul>
                {faqs.map((faq, index) => (
                    <li key={index}>
                        <strong>{faq.question}</strong>
                        <p>{faq.answer}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QA;