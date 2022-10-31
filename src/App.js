import "./App.css";
import Avatar from "./Avatar";
import banner from "./images/avatarbanner.png";

function App() {
  return (
    <>
      <img src={banner} />
      <div>
        <Avatar />
      </div>
    </>
  );
}

export default App;
