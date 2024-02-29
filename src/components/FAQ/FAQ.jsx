'use client'
import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const faqData = [
  {
    question: 'How can I Subscribe ?',
    answer: 'To Subscribe, simply sign up, go to pricing page, choose a Pro plan that suits your needs, and enjoy exclusive features and benefits on our website.',
  },
  // {
  //   question: 'test question ',
  //   answer: 'test text',
  // },
  {
    question: 'Why be a Pro User?',
    answer:  'If you become a Pro User, you will gain exclusive opportunities not available to regular users, such as direct communication with the trainer, the ability to choose services, and access to unique challenges',
  },
  {
    question: 'what is the Monthly subscription fee',
    answer: 'The Small Office/Home Office plan is $16/month, the Business plan is $50/month, and the Team plan is $33/month',
  },
  // Add more FAQ items as needed
];

const FAQ = () => {
  return (
    <div className="faqSection px-4 lg:w-3/5 mx-auto my-10 ">
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
