import ListItem from "../listItem/ListItem";
import { useRef, useState } from "react";
import "./list.scss";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const listItem = [
  {
    video: "https://www.youtube.com/embeded/YXI7hlGblVA",
  },
  {
    video:
      "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761",
  },
  {
    video: "https://www.youtube.com/watch?v=mqqft2x_Aa4",
  },
  {
    video: "https://www.youtube.com/watch?v=YXI7hlGblVA",
  },
  {
    video: "https://www.youtube.com/watch?v=YXI7hlGblVA",
  },
  {
    video: "https://www.youtube.com/watch?v=YXI7hlGblVA",
  },
  {
    video: "https://www.youtube.com/watch?v=YXI7hlGblVA",
  },
  {
    video: "https://www.youtube.com/watch?v=YXI7hlGblVA",
  },
  {
    video: "https://www.youtube.com/watch?v=YXI7hlGblVA",
  },
  {
    video: "https://www.youtube.com/watch?v=YXI7hlGblVA",
  },
  {
    video: "https://www.youtube.com/watch?v=YXI7hlGblVA",
  },
  {
    video: "https://www.youtube.com/watch?v=YXI7hlGblVA",
  },
  {
    video: "https://www.youtube.com/watch?v=YXI7hlGblVA",
  },
  {
    video: "https://www.youtube.com/watch?v=YXI7hlGblVA",
  },
  {
    video: "https://www.youtube.com/watch?v=YXI7hlGblVA",
  },
  {
    video: "https://www.youtube.com/watch?v=YXI7hlGblVA",
  },
];

const List = () => {
  const listRef = useRef();
  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);
  const arrowHandler = mode => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    console.log("nn", listRef.current.getBoundingClientRect());
    if (mode == "prev" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (mode == "next" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosNewOutlinedIcon
          className="sliderArrow left"
          onClick={() => arrowHandler("prev")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          {listItem.map((el, index) => (
            <ListItem index={index} key={index} video={el.video} />
          ))}
        </div>
        <ArrowForwardIosOutlinedIcon
          className="sliderArrow right"
          onClick={() => arrowHandler("next")}
        />
      </div>
    </div>
  );
};

export default List;
