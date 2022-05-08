import React from 'react';
import about from '../../images/about.jpg';
import './About.css';

const About = () => {
    return (
        <>
            <section id='headchick' className='d-flex align-items-center container'>
                <div className='container-fluid nav-bg'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row'>
                                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                                    <h2>
                                        About The Mellow Saffron
                                    </h2>

                                    <h5 className='my-3'>
                                        <b>We've been selling domestic and imported Spices and herbs in Bangladesh since 2014. Pran, Radhuni, BD-Food, Kishwan, ACI are among the 100+ brands available online and in our physical shop. Saffron, barberry, star alice etc are among the premium items names we carry. We've gained a significant competence in the senses of taste of spices throughout the time. In the next years, we plan to leverage technology to help spices choosing to make it simpler for our customers to choose the appropriate taste for them. Our staff members are agricultural and horticultural professionals that assist in selecting the highest quality items from throughout the country.</b>
                                    </h5>

                                </div>

                                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                                    <img src={about} className='img-fluid animated header-img' alt="home img" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default About;