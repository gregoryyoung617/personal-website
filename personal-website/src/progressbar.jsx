import "./stylesheets/app.css";
import anime from "animejs/lib/anime.es.js";
import {useEffect} from 'react';

function ProgressBar() {

  return (
    <div className="progress-bar-container">
      <h1 className="progress-bar-label"></h1>
      <div id="progress-bar"></div>
    </div>
  );
}

export default ProgressBar;
