import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
    return (
        <div className='d-flex justify-content-center align-items-center' style={{height: '100vh'}}>
            <Spinner animation="grow" />;
        </div>
    )
};

export default Loader;