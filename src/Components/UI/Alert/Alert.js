import React from 'react';
import './Alert.css'

const Alert = props => {
    let someDiv = null;
    if (props.dismiss && props.clickDismissable) {
        someDiv = <div onClick={props.dismiss} className={['Alert', props.type].join(' ')}>
            <p>This is a warning type alert</p>
        </div>
    } else {
        someDiv = <div className={['Alert', props.type].join(' ')}>
            <p>This is a success type alert</p>

            {props.dismiss ? <button onClick={props.dismiss} className="btn-alert" >X</button> : null}
        </div>
    }
   return someDiv
};

export default Alert;