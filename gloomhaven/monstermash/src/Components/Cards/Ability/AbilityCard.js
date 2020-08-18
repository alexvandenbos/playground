import React from 'react'

function AbilityCard(props) {
    return (
        <div>
            <img
                src={require('../../../Assets/images/monster-ability-cards/' + props.cardData.cardname + '/' + props.cardData.cardpath)}
                alt="icontest"
                width="300"
                height="200"
                onClick={props.addTurnCount}
            />
        </div>
    )
}
export default AbilityCard