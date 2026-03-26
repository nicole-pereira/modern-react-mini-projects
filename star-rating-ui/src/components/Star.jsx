const Star = ({ star, setRating, setHover, hover, rating }) => {
  return (
    <span
      onClick={() => setRating(star)}
      onMouseEnter={() => setHover(star)}
      onMouseLeave={() => setHover(0)}
      key={star}
      className={`star ${star <= (hover || rating) ? "active" : ""}`}>
      {"\u2605"}
    </span>
  );
};

export default Star;
