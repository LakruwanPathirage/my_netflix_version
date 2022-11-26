import ListItem from "../listItem/ListItem";
import { useRef, useState } from "react";
import "./list.scss";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const List = ({ item }) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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

  // return (
  //   <div className="list">
  //     <span className="listTitle">{item.title}</span>
  //     <div className="wrapper">
  //       <ArrowBackIosNewOutlinedIcon
  //         className="sliderArrow left"
  //         onClick={() => arrowHandler("prev")}
  //         style={{ display: !isMoved && "none" }}
  //       />
  //       <div className="container" ref={listRef}>
  //         {item.content.map((el, index) => (
  //           <ListItem index={index} key={index} moviedata={el} />
  //         ))}
  //       </div>
  //       <ArrowForwardIosOutlinedIcon
  //         className="sliderArrow right"
  //         onClick={() => arrowHandler("next")}
  //       />
  //     </div>
  //   </div>
  // );

  return (
    <div className="new_list">
      <span className="new_list_title">{item.title}</span>

      <div className="custom_slick_crasoul_wrapper">
        <Slider {...settings}>
          {item.content.map((el, index) => (
            <ListItem index={index} key={index} moviedata={el} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default List;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom_left_arrow`}
      style={{
        ...style,
        display: "block",
        background: "rgb(109 101 101 / 68%)",
        width: "25px",
        height: "100%",
      }}
      onClick={onClick}
    >
      <div className="new_custom_relative">
        <ArrowForwardIosOutlinedIcon
          onClick={onClick}
          className="new_custom_arrow"
        />
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  console.log("kk", style);

  return (
    <div
      className={`${className} custom_left_arrow`}
      style={{
        ...style,
        display: "block",
        background: "rgb(109 101 101 / 68%)",
        width: "25px",
        height: "100%",
      }}
      onClick={onClick}
    >
      <div className="new_custom_relative">
        <ArrowBackIosNewOutlinedIcon
          onClick={onClick}
          className="new_custom_arrow"
        />
      </div>
    </div>
  );
}
