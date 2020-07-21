import React from 'react'

class MonsterCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "test"
        }

    }
    render() {
        console.log(this.props.monsterLevel)
        let orientation = "";
        switch (this.props.monsterLevel) {
            case '1':
            case '5':
                //console.log("lvl 1,5")
                orientation = "rotate270"
                break;
            case '2':
            case '6':
                //console.log("lvl 2,6")
                orientation = "rotate180"
                break;
            case '3':
            case '7':
                //console.log("lvl 3,7")
                orientation = "rotate90"
                break;
            default:
            //console.log("lvl 1,4")
        }
        return (
            <div className={this.props.className} >
                <p>{this.props.name}</p>
                <img
                    src={require('../../Assets/images/monster-stat-cards/' + this.props.path)}
                    alt="icontest"
                    width="300"
                    height="300"
                    className={orientation}
                />
            </div>
        )
    }
}
export default MonsterCard