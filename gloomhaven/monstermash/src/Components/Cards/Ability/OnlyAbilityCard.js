import React from 'react'

function OnlyAbilityCard(props) {
    return (
        <div>
            <h2>{props.name} {props.turn}</h2>
            <input
                name="shuffleThisStack"
                type="button"
                onClick={props.shuffle}
                value="shuffle"
                id={props.id}
            />
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