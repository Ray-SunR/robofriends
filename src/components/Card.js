import React from 'react';

const Card = (props) => {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-s tc">
            <h1>{props.id}</h1>
            <div>
                <img src={`https://robohash.org/${props.name}?200x200`} alt='photo' />
                <div>
                    <h2>{props.name}</h2>
                    <p>{props.email}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;