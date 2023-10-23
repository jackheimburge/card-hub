import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './Carousel.css';

export default function Carousel({ card }) {
    return (
        <div className='carousel'>
            <Splide aria-label="My Favorite Images">
                {card.images.map((image, idx) => <SplideSlide>
                    <img key={idx} src={image} alt={`${idx + 1}`} />
                </SplideSlide>)}
            </Splide>
        </div>
    );
}