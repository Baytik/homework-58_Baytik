import React from 'react';
import './Content.css'

const Content = props => {
    return (
        <div className="container">
            <h1>My folio blog</h1>
            <p className="main-text">Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. A accusamus eius, esse nam neque nisi placeat quisquam recusandae
                ut vel. A animi beatae deleniti, ea earum, et excepturi facere fugit
                illum iure laboriosam magnam molestiae nostrum repellendus reprehenderit
                rerum similique? Assumenda blanditiis cum dolorem doloremque fuga perferendis
                quaerat ullam unde?</p>
            <button className="slaider" onClick={props.next}>Next Image</button>
        </div>
    );
};

export default Content;