import logo from "./nus_logo.jpg";

function Home() {
  return (
    <div className="home">
      <img src={logo} alt="NUS logo" className="logo" />
      <p>NUS is a leading research university in Asia</p>
    </div>
  );
}

export default Home;
