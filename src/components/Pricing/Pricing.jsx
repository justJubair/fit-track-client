'use client'
import Link from 'next/link';
import React from 'react';
import './pricing.css'
const Pricing = () => {
   return (
      <div>
         <div className="bg-black h-16"></div>
         <div className='my-16'>
            <section id="pricing-table">
               <div className="price-box-container">
                  <div className="price-box">
                     <div className="box-top-section">
                        <div className="plan-name">
                           <strong>Basic</strong>
                        </div>
                        <div className="price-section">
                           <strong className="price">
                              <span>$</span>
                              <strong>16</strong>
                              <span>/mo</span>
                           </strong>
                        </div>
                        <span className="per-month">or <strong>$19</strong> month-to-month</span>
                     </div>
                     <div className="box-features-section">
                        <div className="features-box">
                           <i className="fas fa-check"></i>
                           <span>Basic modules</span>
                           <div className="feature-details">
                              <p>All basic modules</p>
                           </div>
                        </div>
                        <div className="features-box">
                           <i className="fas fa-check"></i>
                           <span>Customized diet plan</span>
                           <div className="feature-details">
                              <p>Customized diet plan for individual users.</p>
                           </div>
                        </div>
                        <div className="features-box">
                           <i className="fas fa-check"></i>
                           <span>AI Chatbot</span>
                           <div className="feature-details">
                              <p>AI chatbot</p>
                           </div>
                        </div>
                        <div className="features-box">
                           <i className="fas fa-check"></i>
                           <span></span>
                           <div className="feature-details">
                              <p></p>
                           </div>
                        </div>
                        <div className="features-box">
                           <i className="fas fa-check"></i>
                           <span></span>
                           <div className="feature-details">
                              <p></p>
                           </div>
                        </div>
                        <Link href="/payment/16" className="Choose-plan-btn">Choose Plan
                           <i className="fas fa-chevron-right"></i>
                        </Link>
                     </div>
                  </div>
                  <div className="price-box popular" id='mprice'>
                     <div className="box-top-section">
                        <div className="top-bar">
                           <span>Popular</span>
                        </div>
                        <div className="plan-name">
                           <strong>Pro</strong>
                        </div>
                        <div className="price-section">
                           <strong className="price">
                              <span>$</span>
                              <strong>50</strong>
                              <span>/mo</span>
                           </strong>
                        </div>
                        <span className="per-month">or <strong>$50</strong> month-to-month</span>
                     </div>
                     <div className="box-features-section">
                        <div className="features-box">
                           <i className="fas fa-check"></i>
                           <span>Pro Modules</span>
                           <div className="feature-details">
                              <p>All pro modules</p>
                           </div>
                        </div>
                        <div className="features-box">
                           <i className="fas fa-check"></i>
                           <span>Video Calling</span>
                           <div className="feature-details">
                              <p>Video call with personal trainer.</p>
                           </div>
                        </div>
                        <div className="features-box">
                           <i className="fas fa-check"></i>
                           <span>Customized diet plan</span>
                           <div className="feature-details">
                              <p>Customized diet plan for individual users.</p>
                           </div>
                        </div>
                        <div className="features-box">
                        <i className="fas fa-check"></i>
                        <span>AI Chatbot</span>
                        <div className="feature-details">
                           <p>AI chatbot</p>
                        </div>
                     </div>
                        <Link href="/payment/50" className="Choose-plan-btn">Choose Plan
                           <i className="fas fa-chevron-right"></i>
                        </Link>
                     </div>
                  </div>
                  <div className="price-box">
                     <div className="box-top-section">
                        <div className="plan-name">
                           <strong>Premium</strong>
                        </div>
                        <div className="price-section">
                           <strong className="price">
                              <span>$</span>
                              <strong>33</strong>
                              <span>/mo</span>
                           </strong>
                        </div>
                        <span className="per-month">or <strong>$19</strong> month-to-month</span>
                     </div>
                     <div className="box-features-section">
                        <div className="features-box">
                           <i className="fas fa-check"></i>
                           <span>Premium modules</span>
                           <div className="feature-details">
                              <p>All Premium modules</p>
                           </div>
                        </div>
                        <div className="features-box">
                           <i className="fas fa-check"></i>
                           <span>Video Calling</span>
                           <div className="feature-details">
                              <p>Video call with personal trainer..</p>
                           </div>
                        </div>
                        <div className="features-box">
                           <i className="fas fa-check"></i>
                           <span>Customized diet plan</span>
                           <div className="feature-details">
                              <p>Customized diet plan for individual users.</p>
                           </div>
                        </div>
                        <div className="features-box">
                        <i className="fas fa-check"></i>
                        <span>AI Chatbot</span>
                        <div className="feature-details">
                           <p>AI chatbot</p>
                        </div>
                     </div>
                        <Link href={`/payment/${33}`} className="Choose-plan-btn">Choose Plan
                           <i className="fas fa-chevron-right"></i>
                        </Link>
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </div>
   );
};

export default Pricing;