import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./watch.scss";
import { Link, useLocation } from "react-router-dom";
const Watch = () => {
  const location = useLocation();
  const movieObj = location.state.movie;
  console.log(movieObj);

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackIcon /> <span>Home</span>
        </div>
      </Link>
      <div className="videoplayer">
        <video
          src={movieObj.trailer}
          progress
          autoPlay
          controls
          className="video"
          onloadstart="this.volume=0.5"
        />
      </div>
    </div>
  );
};

export default Watch;
