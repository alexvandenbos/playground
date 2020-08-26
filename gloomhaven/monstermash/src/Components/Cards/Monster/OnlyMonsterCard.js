import React from 'react'

function OnlyMonsterCard(props) {
    let monsterCardImagePath = "";
    if (props.level <= 3) {
        monsterCardImagePath = props.frontpath
    } else {
        monsterCardImagePath = props.backpath
    }

    let orientation = "";
    switch (props.level) {
        case 0:
        case 4:
            break;
        case 1:
        case 5:
            orientation = "rotate270"
            break;
        case 2:
        case 6:
            orientation = "rotate180"
            break;
        case 3:
        case 7:
            orientation = "rotate90"
            break;
        default:
            console.log("something went wrong in MonsterCard.js switch statement")
    }
    return (
        <div className="MonsterCard">
            <h3>level {props.level} {props.name} number {props.monsternumber}</h3>
            <input
                name="removemonster"
                type="button"
                onClick={props.removeData}
                value="remove"
                id={props.fieldkey}
            />
            <div >
                <img
                    src={require('../../../Assets/images/monster-stat-cards/' + monsterCardImagePath)}
                    alt="icontest"
                    width="300"
                    height="300"
                    className={orientation}
                />
            </div>
        </div>
    )
}
export default OnlyMonsterCard