import React from 'react'

function MonsterCard(props) {
    console.log(props)
    return (
        <div className={props.className}>
            <p>{props.name}</p>
            <img
                src={require('../../Assets/images/monster-stat-cards/' + props.path + '.png')}
                alt="icontest"
                width="300"
                height="300"
            />
        </div>
    )
}
export default MonsterCard