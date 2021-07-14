import "./style.css";
import { useEffect, useState, useRef } from "react";
import arrowLeft from "../../assets/arrow-left.png";
import arrowRight from "../../assets/arrow-right.png";
import "react-slideshow-image/dist/styles.css";

export default function Project(props) {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = next;
  });

  useEffect(() => {
    const play = () => {
      timeoutRef.current();
    };

    if (props.autoPlay !== null) {
      const interval = setInterval(play, props.autoPlay * 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [props.autoPlay]);

  const next = () => {
    setCurrent(current === props.imgDict.length - 1 ? 0 : current + 1);
  };

  const previous = () => {
    setCurrent(current === 0 ? props.imgDict.length - 1 : current - 1);
  };

  return (
    <>
      <div className="projectsDiv">
        <fieldset className="project">
          <legend style={{ color: "#7fff00" }}>{props.title}</legend>

          <section className="slider">
            <img
              src={arrowLeft}
              className="img-arrow-left"
              onClick={previous}
            />
            <img src={arrowRight} className="img-arrow-right" onClick={next} />
            {props.imgDict.map((element, index) => {
              return (
                <div
                  className={index === current ? "slide active" : "slide"}
                  keys={index}
                >
                  {index === current && (
                    <img src={element} className="img-slide" />
                  )}
                </div>
              );
            })}
          </section>
        </fieldset>
      </div>
    </>
  );
}
