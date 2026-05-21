const RestuarentCard = (props) => {

  const {
    restName,
    rate,
    image,
    time,
    cuisines
  } = props;

  return (
    <div className="restCard">

      <img
        className="food-img"
        src={image}
        alt="food"
      />

      <div className="rest-content">

        <h3>{restName}</h3>

        <p className="cuisine">{cuisines}</p>

        <div className="bottom-row">

          <span className="rating">
            ⭐ {rate}
          </span>

          <span className="time">
            {time}
          </span>

        </div>

      </div>

    </div>
  );
};

export default RestuarentCard;