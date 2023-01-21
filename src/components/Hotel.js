import hotel from "../images/hotel.jpg";

const Hotel = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <h1>5 star Hotel in Paris</h1>
            <p>
              Explore national parks with <br />{" "}
              <span id="digital">digital tours</span>, ranger
              <br /> programs, educational <br />
              opportunities, and more.
            </p>
          </div>

          <div className="col-12 col-md-6 adams">
            <img src={hotel} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hotel;
