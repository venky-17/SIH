import React from 'react';
import "../../Css/TemplateForm.css"


function TemplateForm() {
  const cardData = [
    {
      imageSrc: 'https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg',
      altText: 'learning',
      tagText: 'Learn',
      title: 'LAWS',
      description: 'desc abt the section',
    },
    {
      imageSrc: 'https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg',
      altText: 'learning',
      tagText: 'Learn',
      title: 'Know Your Rights',
      description: 'desc abt the section',
    },
    {
      imageSrc: 'https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg',
      altText: 'Chatbot',
      tagText: 'Chatbot',
      title: 'AI-Chat Assistant',
      description: 'desc abt the section',
    },
    {
      imageSrc: 'https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg',
      altText: 'consult',
      tagText: 'Consult',
      title: 'Consultation',
      description: 'desc abt the section',
    },
    {
      imageSrc: 'https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg',
      altText: 'update',
      tagText: 'Updates',
      title: 'News',
      description: 'desc abt the section',
    },
    {
      imageSrc: 'https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg',
      altText: 'interact',
      tagText: 'Interact',
      title: 'Community Forum',
      description: 'desc abt the section',
    },
   
  ];

  return (
    
    <div className="container-2">
    
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