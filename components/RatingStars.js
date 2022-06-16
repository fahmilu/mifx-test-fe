import ReactStars from "react-rating-stars-component";

const RatingStars = ({ rating }) => {
	return <ReactStars count={5} value={rating} size={20} isHalf={true} activeColor="#ffd700" classNames={`pointer-events-none`} />;
};

export default RatingStars;
