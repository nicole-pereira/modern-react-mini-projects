import { useState } from "react";
import Star from "./Star";
import Modal from "./Modal";
import Button from "./Button";

const Rating = ({
  heading = "Rate Your Experience",
  feedbackMessages = ["Terrible", "Poor", "Fair", "Good", "Excelent"],
}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  const handleSubmit = () => {
    if (rating > 0) {
      setSubmitted(true);
    }
  };

  const closeModal = () => {
    setSubmitted(false);
    setHover(0);
    setRating(0);
  };

  return (
    <div className="rating-container">
      <h2>{heading}</h2>
      <div className="stars">
        {stars.map((star) => (
          <Star
            key={star}
            star={star}
            setRating={setRating}
            setHover={setHover}
            hover={hover}
            rating={rating}
          />
        ))}
      </div>
      {rating > 0 && (
        <p className="feedback"> {feedbackMessages[rating - 1]}</p>
      )}

      <Button
        className="submit-btn"
        onClick={handleSubmit}
        disabled={rating === 0}>
        Submit
      </Button>

      {/* Modal */}
      <Modal isOpen={submitted} onClose={closeModal} rating={rating} />
    </div>
  );
};

export default Rating;
