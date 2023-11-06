import React from 'react';
import "../../Css/TemplateForm.css"
import community from "../../Images/community.png"
import consult from "../../Images/consult.png"
import KYR from "../../Images/KYR.png"
import Learning from "../../Images/Learning.png"
import laws from "../../Images/laws.png"
import news from "../../Images/news.png"


function TemplateForm() {
  const cardData = [
    {
      imageSrc: laws ,
      altText: 'learning',
      tagText: 'Learn',
      title: 'LAWS',
      description: 'desc abt the section',
    },
    {
      imageSrc: KYR,
      altText: 'learning',
      tagText: 'Learn',
      title: 'Know Your Rights',
      description: 'desc abt the section',
    },
    {
      imageSrc: KYR,
      altText: 'Chatbot',
      tagText: 'Chatbot',
      title: 'AI-Chat Assistant',
      description: 'desc abt the section',
    },
    {
      imageSrc: consult,
      altText: 'consult',
      tagText: 'Consult',
      title: 'Consultation',
      description: 'desc abt the section',
    },
    {
      imageSrc: news,
      altText: 'update',
      tagText: 'Updates',
      title: 'News',
      description: 'desc abt the section',
    },
    {
      imageSrc: community,
      altText: 'interact',
      tagText: 'Interact',
      title: 'Community Forum',
      description: 'desc abt the section',
    },
    {
      imageSrc: Learning,
      altText: 'interact',
      tagText: 'Interact',
      title: 'Community Forum',
      description: 'desc abt the section',
    },
    {
      imageSrc: Learning,
      altText: 'interact',
      tagText: 'Interact',
      title: 'Community Forum',
      description: 'desc abt the section',
    },
    {
      imageSrc: Learning,
      altText: 'interact',
      tagText: 'Interact',
      title: 'Community Forum',
      description: 'desc abt the section',
    },
   
  ];

  return (
    
    <div className="container-2" id='templatesID'>
    
      {cardData.map((card, index) => (
        <div key={index} className="card">
          <div className="card-header">
            <img src={card.imageSrc} alt={card.altText} />
          </div>
          <div className="card-body">
            <span className="tag tag-pink">{card.tagText}</span>
            <h4 className="title-style">{card.title}</h4>
            <p className="title-desc-style">{card.description}</p>
            <div className="learnmore">
              <button className="learnmore-btn">Learn More</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TemplateForm;