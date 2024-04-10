import { useState } from "react";
import PropTypes from 'prop-types';

const Vote = function({numVote,moveVote,index,color}){

    return (
        <div>
            <button onClick={() => (moveVote)(index,-1)}>-</button>
            <span style ={{color: color(numVote)}}> {numVote} </span>
            <button onClick={() => (moveVote)(index,1)}>+</button>
        </div>
    );

}

Vote.propTypes = {
    color:PropTypes.func.isRequired,
    numVote:PropTypes.number,
    index:PropTypes.number,
    moveVote:PropTypes.func, 
}

export default Vote