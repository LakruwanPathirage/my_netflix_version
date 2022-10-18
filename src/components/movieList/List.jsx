import ListItem from "../listItem/ListItem";
import { useRef, useState } from "react";
import "./list.scss";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const List = ({ item }) => {
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
      <span className="listTitle">{item.title}</span>
      <div className="wrapper">
        <ArrowBackIosNewOutlinedIcon
          className="sliderArrow left"
          onClick={() => arrowHandler("prev")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          {item.content.map((el, index) => (
            <ListItem index={index} key={index} movieId={el} />
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
