import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/movieList/List";
import "./home.scss";

const Home = ({ type }) => {
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {[1, 2, 3, 4].map((el, index) => (
        <div className={`crasoul_list${index}`} key={index}>
          <List />
        </div>
      ))}
    </div>
  );
};

export default Home;
