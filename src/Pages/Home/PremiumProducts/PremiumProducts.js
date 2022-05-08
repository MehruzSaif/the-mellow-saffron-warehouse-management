import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

import pran from '../../../images/brand/pran.jpg';
import radhuni from '../../../images/brand/radhuni.jpg';
import bdfood from '../../../images/brand/bdfood.jpg';
import kishwan from '../../../images/brand/kishwan.jpg';
import fresh from '../../../images/brand/fresh.jpg';

const PremiumProducts = () => {

    return (
        <div className='container'>
            <h1 className='text-center mt-5 fw-bold'>Best Brand</h1>
            <CardGroup>
                <Card className='border-0'>
                    <Card.Img variant="top" src={pran} />
                    <Card.Body>
                        <Card.Title className='text-center fw-bold'>PRAN</Card.Title>
                        
                    </Card.Body>

                </Card>

                <Card className='border-0'>
                    <Card.Img variant="top" src={radhuni} />
                    <Card.Body>
                        <Card.Title className='text-center fw-bold'>RADHUNI</Card.Title>
                        
                    </Card.Body>

                </Card>

                <Card className='border-0'>
                    <Card.Img variant="top" src={bdfood} />
                    <Card.Body>
                        <Card.Title className='text-center fw-bold'>BD-FOOD</Card.Title>
                        
                    </Card.Body>
                </Card>

                <Card className='border-0'>
                    <Card.Img variant="top" src={kishwan} />
                    <Card.Body>
                        <Card.Title className='text-center fw-bold'>Kishwan</Card.Title>
                        
                    </Card.Body>

                </Card>

                <Card className='border-0'>
                    <Card.Img variant="top" src={fresh} />
                    <Card.Body>
                        <Card.Title className='text-center fw-bold'>Fresh</Card.Title>
                        
                    </Card.Body>

                </Card>

            </CardGroup>
        </div>
    );
};

export default PremiumProducts;