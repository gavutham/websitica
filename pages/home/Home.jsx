import Bottom from "../../components/Bottom/Bottom";
import Center from "../../components/Center/Center";
import Sidebar from "../../components/Sidebar/Sidebar";
import Top from "../../components/Top/Top";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <Top />
      <Center />
      <Bottom />
    </div>
  );
};

export default Home;
