import React from 'react'
import { connect } from "react-redux";
import { buyCake, resetCake } from './redux/cake/cakeAction'

function CakeContainer(props) {
    
    return (
        <div>
            <h3>No of cake:{props.noOfCake}</h3>
            <button onClick={props.buyCake}>BUY CAKE </button>
            <button onClick={props.resetCake}> Reset</button>
        </div>
    )
}

const mapStateToProps = (state) => {
   
    return {
        noOfCake: state.cake.noOfCake,
        resetCake: state.cake.noOfCake  //Its not neccessary to use it
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        buyCake: () => dispatch(buyCake()),
        resetCake: () => dispatch(resetCake())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
