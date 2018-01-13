import React from 'react';
import { Button } from 'reactstrap';

const Action = (props) => (
    
    <div>
    <a onClick={props.handlePick}
    disabled={!props.hasWoulos}
    className="btn-WA btn-danger-WA woulobutton">Ki Woulo Ka Ba ?</a>
    </div>
       
);

export default Action;
