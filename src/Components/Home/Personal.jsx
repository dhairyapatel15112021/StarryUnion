import React from 'react';
import './Personal.css';

export const Personal = () => {
    return (
        <div className='personal'>
            <div className='personalItems'>
                <div className='coupleText' data-aos="fade-up" data-aos-duration="800">THE HAPPY COUPLE</div>
                <div className='couplePara' data-aos="fade-up" data-aos-duration="800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam non bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus.</div>
                <div className='heart' data-aos="fade-up" data-aos-duration="800">
                    -
                    <div className='loveHeart2'></div>
                    -
                </div>
                <div className='intro'>
                    <div className='men'>
                        <div className='photo menPhoto' data-aos="fade-right" data-aos-duration="800">
                            <div className='border'>
                                <div className='loveHeart3'></div>
                                <div className='brideAndGroom'>*** THE GROOM ***</div>
                            </div>
                        </div>

                        <div className='para' data-aos="fade-right" data-aos-duration="800">
                            <span className='boldText'>I'm Gerrard Leandro.</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam non bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus. Etiam ut ultrices nibh. Etiam aliquam mauris non hendrerit faucibus. Proin pulvinar.
                        </div>
                    </div>
                    <div className='women'>
                        <div className='photo womenPhoto' data-aos="fade-left" data-aos-duration="800">
                            <div className='border'><div className='loveHeart3'></div>
                                <div className='brideAndGroom'>*** THE BRIDE ***</div></div>
                        </div>

                        <div className='para' data-aos="fade-left" data-aos-duration="800">
                            <span className='boldText'>I'm Dianne Anna.</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam non bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus. Etiam ut ultrices nibh. Etiam aliquam mauris non hendrerit faucibus. Proin pulvinar.
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
