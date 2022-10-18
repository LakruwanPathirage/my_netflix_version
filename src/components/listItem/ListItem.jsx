import "./listItem.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ListItem = ({ index, movieId }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  console.log("id" + movieId);
  useEffect(() => {
    const getSingleMovie = async () => {
      const res = await axios.get("movies/find/" + movieId, {
        headers: {
          token: `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGJlMTM5ZmMzZjUzMjU5MDdkZjY3ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NTkxOTk3MywiZXhwIjoxNjY2MzUxOTczfQ.OWl4DHFtfZGvvmmCe_SAY7WmH19EFC7rtavFuK_5DiY`,
        },
      });
      console.log("mm", res.data);
      setMovie(res.data);
    };
    getSingleMovie();
  }, [movieId]);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <Link to="/watch" state={{ movie: movie }}>
      <div
        className="custom"
        onMouseEnter={() => {
          setIsHovered(true);
          console.log("hovered", index);
        }}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="list_item">
          <img src={movie?.imgSm} alt="movie img" className="movieimg" />
        </div>
        <div
          className="absolute_wrapper"
          style={{
            left: isHovered && index * 225 - 50 + index * 2.5,
          }}
        >
          <div className="info">
            <video
              src={movie.trailer}
              autoPlay={true}
              loop
              className="video_player"
            />
            <div className="playsection">
              <div className="icon_section">
                <PlayArrowIcon className="video_icons" />
                <AddIcon className="video_icons" />
                <ThumbUpIcon className="video_icons" />
                <ThumbDownIcon className="video_icons" />
              </div>
              <div className="time_section">
                <span>{movie.duration}</span>
                <span className="limit">+{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
            </div>
            <div className="desc_and_action">
              {movie.desc}
              <div className="action">{movie.genre}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListItem;
