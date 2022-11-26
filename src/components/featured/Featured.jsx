import "./featured.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useEffect, useState } from "react";
import axios from "axios";
import DeafultFeaturedImg1 from "../../images/No_ImageAvailable_1.png";
import DefaultFeaturedImg2 from "../../images/No_ImageAvailable_2.png";
const Featured = ({ type, setGenere }) => {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token: `Bearer ${
              JSON.parse(localStorage.getItem("user")).accessToken
            }`,
          },
        });
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);
  return (
    <div className="featured">
      {type && (
        <div className="genere_conatiner">
          <span>{type === "movie" ? "Movies" : "Series"}</span>

          <select
            name="genre"
            id="genre"
            onChange={e => setGenere(e.target.value)}
          >
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            {/* <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option> */}
            <option value="animation">Animation</option>
            {/* <option value="drama">Drama</option>
            <option value="documentary">Documentary</option> */}
          </select>
        </div>
      )}

      <img src={content?.img} alt="" />
      <div className="info">
        <img src={content?.imgTitle} alt="" />
        <div className="desc">{content?.desc}</div>
        <div className="buttons">
          <button className="play_section">
            <PlayArrowIcon />
            <span>Play</span>
          </button>
          <button className="more_section">
            <InfoOutlinedIcon />
            <span>More</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
