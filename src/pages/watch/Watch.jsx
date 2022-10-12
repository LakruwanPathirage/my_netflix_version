import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./watch.scss";
const Watch = () => {
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackIcon /> <span>Home</span>
      </div>
      <div className="videoplayer">
        <video
          src={trailer}
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
