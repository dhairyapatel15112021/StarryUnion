import React from 'react';
import './WeddingFunction.css';
export const WeddingFunction = () => {
    return (
        <div className='personal'>
            <div className='personalItems'>
                <div className='coupleText' data-aos="fade-up" data-aos-duration="800">THE WEDDING</div>
                <div className='couplePara' data-aos="fade-up" data-aos-duration="800">Lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing</div>
                <div className='heart' data-aos="fade-up" data-aos-duration="800">
                    -
                    <div className='loveHeart2'></div>
                    -
                </div>
                <div className='intro'>
                    <div className='men heightSet' data-aos="fade-zoom-in" data-aos-duration="800" data-aos-delay="100">
                        <div className='photo locationPhoto setPhoto'>
                            <div className='border setBorder'></div>
                        </div>
                        <div className='para'>
                            <div className='weddingInfoText'>LOCATION</div>
                            <div className='additionalText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        </div>
                    </div>
                    <div className='women heightSet' data-aos="fade-zoom-in" data-aos-duration="800" data-aos-delay="600">
                        <div className='photo weddingPhoto setPhoto'>
                            <div className='border setBorder'>
                            </div>
                        </div>
                        <div className='para'>
                            <div className='weddingInfoText'>WEDDING</div>
                            <div className='additionalText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        </div>
                    </div>
                    <div className='women heightSet' data-aos="fade-zoom-in" data-aos-duration="800" data-aos-delay="1200">
                        <div className='photo receptionPhoto setPhoto'>
                            <div className='border setBorder'>
                            </div>
                        </div>
                        <div className='para'>
                            <div className='weddingInfoText'>RECEPTION</div>
                            <div className='additionalText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
