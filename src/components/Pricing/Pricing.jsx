import React from 'react';
import './pricing.css'
const Pricing = () => {
   return (
      <div>
      <div className="bg-black h-16"></div>
         <section id="pricing-table">
            <div class="price-box-container">
               <div class="price-box">
                  <div class="box-top-section">
                     <div class="plan-name">
                        <strong>Starter</strong>
                        <span>Small Office/Home Office</span>
                     </div>
                     <div class="price-section">
                        <strong class="price">
                           <span>$</span>
                           <strong>16</strong>
                           <span>/mo</span>
                        </strong>
                     </div>
                     <span class="per-month">or <strong>$19</strong> month-to-month</span>
                  </div>
                  <div class="box-features-section">
                     <div class="features-box">
                        <i class="fas fa-check"></i>
                        <span>60-day chat history</span>
                        <div class="feature-details">
                           <p>Your chats will be lo stored in the archives for 60 days.</p>
                        </div>
                     </div>
                     <div class="features-box">
                        <i class="fas fa-check"></i>
                        <span>Basic widget customization</span>
                        <div class="feature-details">
                           <p>Customization is limited to changing the theme and colors of the chat widget.</p>
                        </div>
                     </div>
                     <div class="features-box">
                        <i class="fas fa-check"></i>
                        <span>Ticketing system</span>
                        <div class="feature-details">
                           <p>Built-in ticketing system that will allow you to create, manage, and track tougher cases. You can also use it to handle emails and messages left when your LiveChat is offline.</p>
                        </div>
                     </div>
                     <div class="features-box">
                        <i class="fas fa-check"></i>
                        <span>Data security</span>
                        <div class="feature-details">
                           <p>Secure 256-bit SSL encryption for website visitors and agents connecting to your LiveChat.</p>
                        </div>
                     </div>
                     <a href="#" class="Choose-plan-btn">Choose Plan
                        <i class="fas fa-chevron-right"></i>
                     </a>
                  </div>
               </div>
               <div class="price-box popular">
                  <div class="box-top-section">
                     <div class="top-bar">
                        <span>Popular</span>
                     </div>
                     <div class="plan-name">
                        <strong>Business</strong>
                        <span>Small Office/Home Office</span>
                     </div>
                     <div class="price-section">
                        <strong class="price">
                           <span>$</span>
                           <strong>50</strong>
                           <span>/mo</span>
                        </strong>
                     </div>
                     <span class="per-month">or <strong>$50</strong> month-to-month</span>
                  </div>
                  <div class="box-features-section">
                     <div class="features-box">
                        <i class="fas fa-check"></i>
                        <span>60-day chat history</span>
                        <div class="feature-details">
                           <p>Full customization, including changing the theme, colors, visibility.</p>
                        </div>
                     </div>
                     <div class="features-box">
                        <i class="fas fa-check"></i>
                        <span>Basic widget customization</span>
                        <div class="feature-details">
                           <p>Built-in ticketing system that will allow you to create, manage, and track tougher cases. You can also use it to handle emails and messages left when your LiveChat is offline.</p>
                        </div>
                     </div>
                     <div class="features-box">
                        <i class="fas fa-check"></i>
                        <span>Ticketing system</span>
                        <div class="feature-details">
                           <p>Secure 256-bit SSL encryption for website visitors and agents connecting to your LiveChat.</p>
                        </div>
                     </div>
                     <div class="features-box">
                        <i class="fas fa-check"></i>
                        <span>Data security</span>
                        <div class="feature-details">
                           <p>Chat and ticket reports plus a daily recap of your account activity.</p>
                        </div>
                     </div>

                     <a href="#" class="Choose-plan-btn">Choose Plan <i class="fas fa-chevron-right"></i></a>
                  </div>
               </div>
               <div class="price-box">
                  <div class="box-top-section">
                     <div class="plan-name">
                        <strong>Team</strong>
                        <span>Small Office/Home Office</span>
                     </div>
                     <div class="price-section">
                        <strong class="price">
                           <span>$</span>
                           <strong>33</strong>
                           <span>/mo</span>
                        </strong>
                     </div>
                     <span class="per-month">or <strong>$19</strong> month-to-month</span>
                  </div>
                  <div class="box-features-section">
                     <div class="features-box">
                        <i class="fas fa-check"></i>
                        <span>60-day chat history</span>
                        <div class="feature-details">
                           <p>Full customization, including changing the theme, colors, visibility.</p>
                        </div>
                     </div>
                     <div class="features-box">
                        <i class="fas fa-check"></i>
                        <span>Basic widget customization</span>
                        <div class="feature-details">
                           <p>Built-in ticketing system that will allow you to create, manage, and track tougher cases. You can also use it to handle emails and messages left when your LiveChat is offline.</p>
                        </div>
                     </div>
                     <div class="features-box">
                        <i class="fas fa-check"></i>
                        <span>Ticketing system</span>
                        <div class="feature-details">
                           <p>Secure 256-bit SSL encryption for website visitors and agents connecting to your LiveChat.</p>
                        </div>
                     </div>

                     <div class="features-box">
                        <i class="fas fa-check"></i>
                        <span>Multiple brandings</span>
                        <div class="feature-details">
                           <p>All your chats will be stored in the archives.</p>
                        </div>
                     </div>
                     <a href="#" class="Choose-plan-btn">Choose Plan <i class="fas fa-chevron-right"></i></a>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Pricing;