import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/movieList/List";
import "./home.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = ({ type }) => {
  const zIndex = 100;
  const [listdata, setListData] = useState([]);
  const [genere, setGenere] = useState(null);
  // `lists{ ${type}? "?type=${type}" ${genere}?"&genre=${genere}:" :""}`,
  useEffect(() => {
    const getListData = async () => {
      try {
        const res = await axios.get(
          `/lists${type ? "?type=" + type : ""}${
            genere ? "&genre=" + genere : ""
          }`,
          {
            headers: {
              token: `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGJlMTM5ZmMzZjUzMjU5MDdkZjY3ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NTkxOTk3MywiZXhwIjoxNjY2MzUxOTczfQ.OWl4DHFtfZGvvmmCe_SAY7WmH19EFC7rtavFuK_5DiY`,
              ContentType: "application/json",
            },
          }
        );
        setListData(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getListData();
  }, [type, genere]);

  return (
    <div className="home">
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
