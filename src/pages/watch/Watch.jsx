import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./watch.scss";
import { Link, useLocation } from "react-router-dom";
import Cusvideo from "../../images/batMan_trailer.mp4";
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
          src={movieObj?.video || Cusvideo}
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
