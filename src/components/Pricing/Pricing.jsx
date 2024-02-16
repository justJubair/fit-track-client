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
                           <strong>Starter</strong>
                           <span>Small Office/Home Office</span>
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
                           <span>60-day chat history</span>
                           <div className="feature-details">
                              <p>Your chats will be lo stored in the archives for 60 days.</p>
                           </div>
                        </div>
                        <div className="features-box">
                           <i className="fas fa-check"></i>
                           <span>Basic widget customization</span>
                           <div className="feature-details">
                              <p>Customization is limited to changing the theme and colors of the chat widget.</p>
                           </div>
                        </div>
                        <div className="features-box">
                           <i className="fas fa-check"></i>
                           <span>Ticketing system</span>
                           <div className="feature-details">
                              <p>Built-in ticketing system that will allow you to create, manage, and track tougher cases. You can also use it to handle emails and messages left when your LiveChat is offline.</p>
                           </div>
                        </div>
                        <div className="features-box">
                           <i className="fas fa-check"></i>
                           <span>Data security</span>
                           <div className="feature-details">
                              <p>Secure 256-bit SSL encryption for website visitors and agents connecting to your LiveChat.</p>
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
                           <strong>Business</strong>
                           <span>Small Office/Home Office</span>
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
                           <span>60-day chat history</span>
                           <div className="feature-details">
                              <p>Full customization, including changing the theme, colors, visibility.</p>
                           </div>
                        </div>
                        <div className="features-box">
                           <i className="fas fa-check"></i>
                           <span>Basic widget customization</span>
                           <div className="feature-details">
                              <p>Built-in ticketing system that will allow you to create, manage, and track tougher cases. You can also use it to handle emails and messages left when your LiveChat is offline.</p>
                           </div>
                        </div>
                        <div className="features-box">
                           <i className="fas fa-check"></i>
                           <span>Ticketing system</span>
                           <div className="feature-details">
                              <p>Secure 256-bit SSL encryption for website visitors and agents connecting to your LiveChat.</p>
                           </div>
                        </div>
                        <div className="features-box">
                           <i className="fas fa-check"></i>
                           <span>Data security</span>
                           <div className="feature-details">
                              <p>Chat and ticket reports plus a daily recap of your account activity.</p>
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
                           <strong>Team</strong>
                           <span>Small Office/Home Office</span>
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
                           <span>60-day chat history</span>
                           <div className="feature-details">
                              <p>Full customization, including changing the theme, colors, visibility.</p>
                           </div>
                        </div>
                        <div className="features-box">
                           <i className="fas fa-check"></i>
                           <span>Basic widget customization</span>
                           <div className="feature-details">
                              <p>Built-in ticketing system that will allow you to create, manage, and track tougher cases. You can also use it to handle emails and messages left when your LiveChat is offline.</p>
                           </div>
                        </div>
                        <div className="features-box">
                           <i className="fas fa-check"></i>
                           <span>Ticketing system</span>
                           <div className="feature-details">
                              <p>Secure 256-bit SSL encryption for website visitors and agents connecting to your LiveChat.</p>
                           </div>
                        </div>

                        <div className="features-box">
                           <i className="fas fa-check"></i>
                           <span>Multiple brandings</span>
                           <div className="feature-details">
                              <p>All your chats will be stored in the archives.</p>
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