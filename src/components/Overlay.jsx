import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/Play";

export const Overlay = () => {
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();

  const refresh = () => {
    window.location.reload('false')
  }

  return (
    <div
      className={`overlay ${play ? "overlay--disable" : ""}
    ${hasScroll ? "overlay--scrolled" : ""}`}
    >
      <div
        className={`loader ${progress === 100 ? "loader--disappear" : ""}`}
      />
      {progress === 100 && (
        <div className={`intro ${play ? "intro--disappear" : ""}`}>
          <h1 className="logo">
            {`Ready to take a tour?`}
          
            {/* <div className="spinner">
              <div className="spinner__image" />
            </div> */}
          </h1>
          {/* <p className="intro__scroll">Scroll Down</p> */}
          <div className="mouse"></div>

          <button
            className="explore"
            onClick={() => {
              setPlay(true);
            }}
          >
            START
          </button>
        </div>
      )}
      <div className={`outro ${end ? "outro--appear" : ""}`}>
        <p className="outro__text">Hope You Have A Great Day!</p>
        {/* <button className="explore" onClick={refresh}>Reset</button> */}
      </div>
      {/* <div className={`outro ${end ? "outro--appear" : ""}`}>
      </div> */}
    </div>
  );
};
