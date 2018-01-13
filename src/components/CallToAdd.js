import React from 'react';
import ModalAdd from './ModalAdd';

const CallToAdd = () => (
    <section className="calltoaction">
        <div className="container text-center">
            <div className="col-WA" >
                <div className="row-WA" >
                    <h2 className="jumbotron-heading-WA display-4-WA calltoaction__title"> <strong> Tu veux nous envoyer ton Woulo ? </strong></h2>
                    <div className="container" >
                    <br />
                    <ModalAdd />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default CallToAdd;