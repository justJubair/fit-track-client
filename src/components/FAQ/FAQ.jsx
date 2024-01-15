import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const faqData = [
  {
    question: 'How can I Subscribe ?',
    answer: 'test text 1',
  },
  {
    question: 'test question ',
    answer: 'test text',
  },
  {
    question: 'Why be a Pro User?',
    answer:  'text text 2',
  },
  {
    question: 'what is the Monthly subscription fee',
    answer: 'Only $***/month',
  },
  // Add more FAQ items as needed
];

const FAQ = () => {
  return (
    <div className="faqSection w-3/5 mx-auto my-10">
        <h1 className='text-center text-3xl mb-5 font-semibold'>FAQ</h1>
      {faqData.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <span>{faq.question}</span>
          </AccordionSummary>
          <AccordionDetails>
            <p>{faq.answer}</p>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default FAQ;
