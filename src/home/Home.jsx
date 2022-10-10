import Navbar from "../components/navbar/Navbar";
import Featured from "../components/featured/Featured";
import List from "../components/movieList/List";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured type="Series" />

      <List />

      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
