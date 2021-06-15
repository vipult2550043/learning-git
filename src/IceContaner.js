import React from 'react';
import { buyIceCream, resetIce } from './redux/icecream/icecreamAction'
import { connect } from "react-redux";

function IceContaner(props) {
    console.log(props.buyIceCream);
    return (
        <div>
            <h4>Ice Cream:{props.noOfIceCream}</h4>
            <button onClick={props.buyIceCream}>BUY ICECREAM</button>
            <button onClick={props.resetIce}>RESET</button>
        </div>
    )
}
//ownProps will contain the props of the IceContainer component and which will be passed from App.js inside <IceConatiner ice={"ice"}>
const MapStateToProps = (state, ownProps) => {
    console.log(ownProps.ice ? "true" : "false");

    return {
        noOfIceCream: state.ice.noOfIceCream,
        resetIce: state.ice.noOfIceCream //Its not neccessary to use it
    }
}


export default connect(MapStateToProps, { buyIceCream, resetIce })(IceContaner);

// const MapDispatchToProps = (dispatch) => {
//     return {
//         buyIceCream: () => dispatch(buyIceCream()),
//         resetIce : () => dispatch(resetIce())
//     } 


// }