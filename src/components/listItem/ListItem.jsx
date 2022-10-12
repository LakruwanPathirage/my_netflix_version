import "./listItem.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { useState } from "react";
const ListItem = ({ index, video }) => {
  const [isHovered, setIsHovered] = useState(false);

  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div
      className="custom"
      onMouseEnter={() => {
        setIsHovered(true);
        console.log("hovered", index);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="list_item">
        <img
          src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
          alt="movie img"
          className="movieimg"
        />
      </div>
      <div
        className="absolute_wrapper"
        style={{
          left: isHovered && index * 225 - 50 + index * 2.5,
        }}
      >
        <div className="info">
          <video src={trailer} autoPlay={true} loop className="video_player" />
          <div className="playsection">
            <div className="icon_section">
              <PlayArrowIcon className="video_icons" />
              <AddIcon className="video_icons" />
              <ThumbUpIcon className="video_icons" />
              <ThumbDownIcon className="video_icons" />
            </div>
            <div className="time_section">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
          </div>
          <div className="desc_and_action">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
            olorum, ad provident, blanditiis temporibus? Vel nam distinctio
            <div className="action">Action</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
