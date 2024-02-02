import { useState } from 'react';
import './FAQs.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

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
    <>
    <Navbar />
    <div className="accordion">
      <h1>FAQs: Frequestly Asked Questions</h1>
      {questions.map(({ id, question, answer }) => (
        <div key={id} className={`accordion-item `}>
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
    {/* <Footer /> */}
    </>
  );
};

export default Accordion;
