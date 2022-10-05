import "./featured.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="genere_conatiner">
          <span>{type === "movies" ? "Movies" : "Series"}</span>

          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}

      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/b321426e-35ae-4661-b899-d63bca17648a/462d8ff3-51d2-455f-92bc-1ef044c21528/LK-en-20220926-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt=""
      />
      <div className="info">
        <img
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
          alt="info"
        />
        <div className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          facilis accusamus doloribus consequuntur labore mollitia sint culpa
          praesentium! Consequuntur obcaecati est numquam odio quibusdam ut eum
        </div>
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
