import './App.css';
import { useState } from 'react';
import { Carousel } from './Carousel';

const data = [
  { src: "/src/images/quiz/1.png", alt: "Image 20", answerSrc: "/src/images/answers/1.png" },
  { src: "/src/images/quiz/2.png", alt: "Image 2", answerSrc: "/src/images/answers/2.png" },
  { src: "/src/images/quiz/3.png", alt: "Image 3", answerSrc: "/src/images/answers/3.png" },
  { src: "/src/images/quiz/4.png", alt: "Image 4", answerSrc: "/src/images/answers/4.png" },
  { src: "/src/images/quiz/5.png", alt: "Image 5", answerSrc: "/src/images/answers/5.png" },
  { src: "/src/images/quiz/6.png", alt: "Image 6", answerSrc: "/src/images/answers/6.png" },
  { src: "/src/images/quiz/7.png", alt: "Image 7", answerSrc: "/src/images/answers/7.png" },
  { src: "/src/images/quiz/8.png", alt: "Image 8", answerSrc: "/src/images/answers/8.png" },
  { src: "/src/images/quiz/9.png", alt: "Image 9", answerSrc: "/src/images/answers/9.png" },
  { src: "/src/images/quiz/10.png", alt: "Image 10", answerSrc: "/src/images/answers/10.png" },

];

function App() {
  const [showCarousel, setShowCarousel] = useState(false);

  return (
    <div className="bg">
      <div className={`bg-image ${showCarousel ? 'no-animation' : ''}`}></div>
      <div className={`content ${showCarousel ? 'hidden' : ''}`}>
        <h3 className="text-2xl font-bold">Addition and Subtraction Facts within 20</h3>

        <div className="button" onClick={() => setShowCarousel(true)}>
          Let's play
        </div>
      </div>
      <div className="content"> {showCarousel && <Carousel data={data} />}</div>


    </div>
  );
}

export default App;
