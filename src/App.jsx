import './App.css';
import CarouselTechnologies from './components/CarouselTechnologies'; // Asegúrate de que el nombre coincida
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/mateo-deris-9718112aa/", "_blank");
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/MateoDeris", "_blank");
  };

  return (
    <div className="container">
      <header className="header">
        <h1 className="logo">Mateo Deris</h1>
        <span className="language-toggle">ESP</span>
      </header>

      <div className="main-content">
        <div className="intro">
          <h2>Hola, soy Mateo.</h2>
          <h3>Desarrollador Frontend</h3>
          <p>
           Texto a Rellenar
          </p>
          <div className="social-links">
            <button className="resume-button" onClick={handleLinkedInClick}>
              LinkedIn
            </button>
            <button className="resume-button" onClick={handleGitHubClick}>
              GitHub
            </button>
          </div>
        </div>
        <CarouselTechnologies /> {/* Agrega el carrusel aquí */}
      </div>

      <footer className="footer">
        <p>TECNOLOGÍAS: HTML, CSS, JavaScript, React, Git, GitHub, Sass, SEO, Bootstrap, Firebase, Responsive Design</p>
      </footer>
    </div>
  );
}

export default App;
