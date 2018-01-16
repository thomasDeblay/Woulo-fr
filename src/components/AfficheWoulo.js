import React from 'react';
import {TiHeartOutline, TiHeart} from 'react-icons/lib/ti';

const AfficheWoulo = (props) => (
    <div className="container">
        <div className="row affichewoulo" >
            <div className="login-form" >
                <div className="login-form__box">
                    {props.selectedWoulo && <h5 className="login-form__title " > Woulo ban mwen babgay'la! <br />
                    Woulo ban mwen babgay'la! <br />
                    Woulo ban mwen babgay'la! <br />
                    Tonnè di dié ban mwen bagay'la!   </h5>}
                    {props.selectedWoulo && <p className="lewoulo" > {props.selectedWoulo.woulo}</p>}
                   
                 </div>
            </div>
        </div>
    </div>
);

export default AfficheWoulo;

 // {props.selectedWoulo && <a className="likebutton" onClick={props.handleClick}  > <TiHeartOutline size="2x" /> {props.selectedWoulo.like} </a> }