import React from 'react';

import './styles/about.css';

export default function About() {
   return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic" alt='profile' src='/images/profile.png'/>
            </div>
            <div className="nine columns main-col">
               <h2>About Me</h2>

               <p>I am techie at heart. Since school I have been doing competitive programming and now have a large experience on different programming contest.<br/>
                  I like algorithmic and math problems. I am responsible for each produced line of code and fulfill my tasks in good faith and I am ready to deep into problem down to the smallest details.<br/>
                  Outside of work I like football and other active games, love traveling and lead a fairly active lifestyle.</p>
               <div className="row">
                  <div className="columns contact-details">
                     <h2>Contact Details</h2>
                     <p>
                        <span>IDHAM BIN MAZLAN</span><br/>
                        <span>SHAH ALAM , SELANGOR</span><br/>
                        <span>01114322234 (whatsapp)</span><br/>
                        <span>azadam8255@gmail.com (email)</span>
                     </p>
                  </div>
                  <div className="columns download">
                     <p>
                        <a href='/resume.pdf' download className="button">
                           <i className="fa fa-download"/> Download Resume
                        </a>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
