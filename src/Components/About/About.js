import Barcelona from '../../images/Barcelona.png';
import './About.css';

export default function About() {
  return (
    <section className="about">
      <div className="image__container">
        <img src={Barcelona} alt="Barcelona" />
      </div>

      <div className="content">
        <h4 className="title">Барселона — обзор города</h4>
        <p className="text">
          Барселона с её золотистыми пляжами, архитектурными шедеврами Гауди, многочисленными фестивалями и
          гастрономическим разнообразием понравилась мне в первый же день пребывания и стала местом, в котором...
        </p>
        <a href="#!" className="about__more">
          Читать дальше
        </a>
      </div>
    </section>
  );
}
