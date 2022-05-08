import React from 'react';
import web from '../../../images/web.png';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <section id='headchick' className='d-flex align-items-center container'>
                <div className='container-fluid nav-bg'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row'>
                                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                                    <h2>
                                        Grow Your Business with
                                    </h2>
                                    <h1 className='my-3'>
                                        <strong className='brand-name'>The Mellow Saffron</strong>
                                    </h1>
                                    <h3 className='my-3'>
                                        The World of Pure Spice and Herbs
                                    </h3>
                            
                                </div>

                                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                                    <img src={web} className='img-fluid animated header-img' alt="home img" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;