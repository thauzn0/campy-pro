import React, { useState } from 'react';
import './FaqComp.css';

const FaqComp = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: 'What is Campy Pro?',
      answer: 'Campy Pro is the ultimate source for camping and picnic grills, providing high-quality and durable grills for outdoor enthusiasts.'
    },
    {
      question: 'How can I order a Campy Pro grill?',
      answer: 'You can order a Campy Pro grill directly from our website. Simply navigate to the Products section and choose your preferred model.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods including credit/debit cards, PayPal, and bank transfers.'
    },
    {
        question: 'Temp',
        answer: 'We accept various payment methods including credit/debit cards, PayPal, and bank transfers.'
      },
      {
        question: 'Temp2',
        answer: 'We accept various payment methods including credit/debit cards, PayPal, and bank transfers.'
      },
    // Add more questions as needed
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h1>Frequently Asked Questions</h1>
      {questions.map((item, index) => (
        <div key={index} className="faq-item">
          <button className="faq-question" onClick={() => toggleAnswer(index)}>
            {item.question}
          </button>
          {activeIndex === index && <p className="faq-answer">{item.answer}</p>}
        </div>
      ))}
    </div>
  );
}

export default FaqComp  ;