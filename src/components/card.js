import React from "react";

const Card = (props) => {

    return (
     <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img alt= "" src={`https://robohash.org/${props.id}?200x200`}></img>
        <div>
          <p>{props.name}</p>
          <p>{props.email}</p>

        </div>
     </div>
    );

}

export default Card;
