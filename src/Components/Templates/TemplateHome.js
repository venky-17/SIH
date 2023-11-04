import React from 'react';
import "../../Css/TemplateForm.css"


function TemplateForm() {
  const cardData = [
    {
      imageSrc: 'https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg',
      altText: 'learning',
      tagText: 'Learn',
      title: 'LAWS',
      description: 'An exploration into the truck\'s polarizing design',
    },
    {
      imageSrc: 'https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg',
      altText: 'learning',
      tagText: 'Learn',
      title: 'Know Your Rights',
      description: 'An exploration into the truck\'s polarizing design',
    },
    {
      imageSrc: 'https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg',
      altText: 'Chatbot',
      tagText: 'Chatbot',
      title: 'AI-Chat Assistant',
      description: 'An exploration into the truck\'s polarizing design',
    },
    {
      imageSrc: 'https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg',
      altText: 'consult',
      tagText: 'Consult',
      title: 'Consultation',
      description: 'An exploration into the truck\'s polarizing design',
    },
    {
      imageSrc: 'https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg',
      altText: 'update',
      tagText: 'Updates',
      title: 'News',
      description: 'An exploration into the truck\'s polarizing design',
    },
    {
      imageSrc: 'https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg',
      altText: 'interact',
      tagText: 'Interact',
      title: 'Community Forum',
      description: 'An exploration into the truck\'s polarizing design',
    },
    // Add more card data as needed
  ];

  return (
    
    <div className="container-2">
    
      {cardData.map((card, index) => (
        <div key={index} className="card">
          <div className="card-header">
            <img src={card.imageSrc} alt={card.altText} />
          </div>
          <div className="card-body">
            <span className="tag tag-teal">{card.tagText}</span>
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