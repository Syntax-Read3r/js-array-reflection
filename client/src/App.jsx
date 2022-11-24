import React from 'react'
import Slide from './components/Slider/Slide'
import './styles/css/reset.css'
import '@csstools/normalize.css';
import './styles/css/main.css'


const slides = Array.from({length:50},()=> {
  return {
    title: "Title",
    description: "Description",
    image: 'https://source.unsplash.com/random?' + Math.floor(Math.random() * 100) + 1,
  };
})

const initialState = {
  slideIndex: 0
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
    };
  }
};


function App() {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  return (
    <div className="slides">
      <button onClick={() => dispatch({ type: "PREV" })}>‹</button>

      {[...slides, ...slides, ...slides].map((slide, i) => {
        let offset = slides.length + (state.slideIndex - i);
        return <Slide slide={slide} offset={offset} key={i} />;
      })}
      <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
    </div>
  );
}

export default App

