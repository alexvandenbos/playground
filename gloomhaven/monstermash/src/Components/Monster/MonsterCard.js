import React from 'react'

class MonsterCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "test"
        }

    }

    render() {
        console.log(this.props)
        return (
            <div >
                <p>{this.props.name}</p>
                <img
                    src={require('../../Assets/images/monster-stat-cards/' + this.props.path)}
                    alt="icontest"
                    width="300"
                    height="300"
                />
            </div>
        )
    }
    // componentDidUpdate(prevProps) {
    //     // Typical usage (don't forget to compare props):
    //     if (this.props.data !== prevProps.data) {
    //         console.log(this.props.data, prevProps.data, "props are not the same");
    //     } else {
    //         console.log(this.props.data, prevProps.data, "props are the same")
    //     }
    // }

}
export default MonsterCard

 // const MonsterCardComponents = this.state.displayedMonsters.map(monster =>
        //     < MonsterCard
        //     // className="MonsterCard"
        //     // path={monster.path}
        //     // name={monster.path.replace(/-|[0-9]|.png/g, ' ').trim()}
        //     // key={this.state.displayedMonsters.lastIndexOf(monster)}
        //     // id={monster.id}
        //     />