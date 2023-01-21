import tour from "../images/tour.png";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <h1>Holidays in Paris</h1>
            <p>
              Explore national parks with <br />
              <span id="digital">digital tours</span>, ranger <br /> programs,
              educational <br /> opportunities and more.
            </p>
            <button>BOOK NOW</button>
          </div>
          <div className="col-12 col-md-6">
            <img src={tour} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
