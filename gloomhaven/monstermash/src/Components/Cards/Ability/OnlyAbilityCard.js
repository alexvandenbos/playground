import React from 'react'

function OnlyAbilityCard(props) {

    return (
        <div>
            <h2>{props.name}</h2>
            <div>
                <input
                    className="button"
                    name="shuffleThisStack"
                    type="button"
                    onClick={props.shuffle}
                    value="shuffle"
                    id={props.id}
                />
            </div>
            <div >
                <img
                    src={require('../../../Assets/images/monster-ability-cards/' + props.name + '/' + props.path)}
                    alt="icontest"
                    width="240"
                    height="150"
                    className="MonsterAbilityCard"
                    onClick={props.addTurnCount}
                />
            </div>
        </div>
    )
}
export default OnlyAbilityCard