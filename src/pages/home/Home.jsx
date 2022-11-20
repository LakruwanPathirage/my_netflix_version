import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/movieList/List";
import "./home.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
const Home = ({ type }) => {
  const zIndex = 100;
  const [listdata, setListData] = useState([]);
  const [genere, setGenere] = useState(null);
  const [fetching, setfetching] = useState(true);
  // `lists{ ${type}? "?type=${type}" ${genere}?"&genre=${genere}:" :""}`,
  useEffect(() => {
    const getListData = async () => {
      try {
        const res = await axios.get(
          `lists/getListRefs${type ? "?type=" + type : ""}${
            genere ? "&genre=" + genere : ""
          }`,
          {
            headers: {
              token: `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGJlMTM5ZmMzZjUzMjU5MDdkZjY3ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2ODY0OTAzMCwiZXhwIjoxNjY5MDgxMDMwfQ.kmAtxr0XWpFy2OshQfouYB0tdVNvGs-MmpsddPlG4to`,
              ContentType: "application/json",
            },
          }
        );
        setListData(res.data);
        setfetching(false);
        console.log("bbb", res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getListData();
  }, [type, genere]);

  return (
    <div className="home">
      {fetching && (
        <div className="circular_spinner">
          <CircularProgress size={90} />
        </div>
      )}
      <Navbar />
      <Featured type={type} setGenere={setGenere} />
      {listdata.map((el, index) => (
        <div
          style={{ zIndex: zIndex - index, position: "relative" }}
          key={index}
        >
          <List item={el} />
        </div>
      ))}
    </div>
  );
};

export default Home;
