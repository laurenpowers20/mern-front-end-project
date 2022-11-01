import "./App.css";
import Avatar from "./Avatar";
import banner from "./images/avatarbanner.png";
import Searchbar from "./Searchbar";

function App() {
  return (
    <>
      <img className="banner" src={banner} />
      <div>
        <Avatar />
      </div>
    </>
  );
}

export default App;
