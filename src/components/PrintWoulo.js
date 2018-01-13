import React from 'react';
import Modal from 'react-modal';
import FadeImage from 'react-fade-image';



const WouloModal = (props) => (
        <div className="col-WA">
            <p className="lead-WA">
                {!props.selectedWoulo && <img alt width="180px" src='/images/rocket.png' />}
            </p>
        </div>
    );

export default WouloModal;