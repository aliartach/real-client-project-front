import React, { useState } from 'react';
import './FAQs.css';

const Accordion = () => {
  const questions = [
    {
      id: 1,
      question: 'What is your favorite color?',
      answer: 'My favorite color is blue.'
    },
    {
      id: 2,
      question: 'How do you like to spend your weekends?',
      answer: 'I enjoy spending my weekends outdoors and exploring new places.'
    },
  ];

  const [openQuestion, setOpenQuestion] = useState(null);

  const handleQuestionClick = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <div className="accordion">
      <h1>FAQs: Frequestly Asked Questions</h1>
      {questions.map(({ id, question, answer }) => (
        <div key={id} className={`accordion-item ${openQuestion === id ? 'open' : ''}`}>
          <div className="question" onClick={() => handleQuestionClick(id)}>
            {question}
          </div>
          {openQuestion === id && (
            <div className="answer">
              {answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
