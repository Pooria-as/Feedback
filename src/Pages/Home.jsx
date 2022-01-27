import Header from "../components/Common/Header"
import Feeback from "../components/FeedBack/Feeback.jsx";
import FeedBackForm from "../components/FeedBack/FeedBackForm.jsx";
import FeedBackStatus from "../components/FeedBack/FeedBackStatus.jsx";
const Home = () => {

  

  return (
    <div>
      <Header />
      <FeedBackForm />
      <FeedBackStatus />
      <Feeback  />
    </div>
  );
};

export default Home;
