import { useState } from "react";

import Slider from "react-slick";
import ImageNotFound from "../ImageNotFound";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
const ImageCarousel = ({images}) => {
    const [sliderRef, setSliderRef] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlide = images.length;

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current, next) => {
            setCurrentSlide(next);
        }
    }
    return (
		<>
			<div className={`relative`}>
				<Slider ref={setSliderRef} {...settings}>
					{images.map((image, i) => {
						return (
							<div key={i} className={`aspect-square`}>
								<ImageNotFound src={image} layout={`fill`} />
							</div>
						);
					})}
				</Slider>
				<div className={`flex gap-1 text-gray-400 text-xs absolute bottom-5 right-5`}>
					<button onClick={sliderRef?.slickPrev}>
						<FontAwesomeIcon icon={faCaretLeft} />{" "}
					</button>
					<div>{`${currentSlide + 1}/${totalSlide}`}</div>
					<button onClick={sliderRef?.slickNext}>
						<FontAwesomeIcon icon={faCaretRight} />{" "}
					</button>
				</div>
			</div>
			<div className={`flex justify-center gap-3 mt-6`}>
				{images.map((image, i) => {
					return (
						<button onClick={e => sliderRef.slickGoTo(i)} key={i} className={` w-16 aspect-square border-1 rounded-md overflow-hidden ${currentSlide  === i && `border-2 border-green-600`}`}>
							<ImageNotFound src={image} layout={`fill`} />
						</button>
					);
				})}
			</div>
		</>
	);
}

export default ImageCarousel;