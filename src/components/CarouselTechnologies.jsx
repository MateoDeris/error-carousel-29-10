import React from 'react';
import Slider from 'react-slick';
import './CarouselTechnologies.css';

const technologies = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Git',
  'GitHub',
  'Sass',
  'Bootstrap',
  'Firebase',
  'Responsive Design',
  'Desarrollo Frontend'
];

const CarouselTechnologies = () => {
  const settings = {
    dots: true, 
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 2000, 
    pauseOnHover: true, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, 
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Para pantallas pequeñas
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {technologies.map((tech, index) => (
          <div key={index} className="carousel-item">
            <span className="tech-name">{tech}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselTechnologies;
