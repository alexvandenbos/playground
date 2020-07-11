import React from 'react'
import dataMonster from './dataMonster'
import MonsterCard from './MonsterCard'

class SetMonster extends React.Component {
    constructor() {
        super()
        this.state = {
            dataMonster,
            selectedMonster: "",
            monsterArray: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.mySelection = this.mySelection.bind(this)
    }
    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit(event) {
        this.setState(prevState =>
            this.state.monsterArray.push(prevState.selectedMonster)
        )
        this.mySelection()
        event.preventDefault();
    }
    mySelection() {
        let monsterMap = this.state.dataMonster.map(monster => monster.path.replace(".png", ""))
        let possibleMonsters = monsterMap.filter(monster => monster.includes(this.state.selectedMonster))
        if (possibleMonsters.length <= 10) {
            return possibleMonsters
        } else {
            return "Be more specific"
        }
    }

    render() {
        let MonsterCardComponentData = this.state.dataMonster.filter(monster =>
            monster.path.includes(...this.state.monsterArray))

        let MonsterCardComponents = this.state.monsterArray.map(monster =>
            <MonsterCard
                className="MonsterCard"
                name={MonsterCardComponentData[0].path.replace(/-|[0-9]|.png/g, ' ').trim()}
                info={MonsterCardComponentData[0]}
                key={MonsterCardComponentData[0].id}
                id={MonsterCardComponentData[0].id}
                path={monster}
            />
        )

        return (
            < div className="selection-menu">
                <h2>set monster</h2>
                <h2>{this.state.monsterArray.join(", ")}</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        name="selectedMonster"
                        placeholder="Monster"
                        onChange={this.handleChange}
                        value={this.state.selectedMonster}
                    />
                    <p>Do u mean:</p>
                    {this.mySelection().map(monster =>
                        <input
                            type="submit"
                            key={monster}
                            value={monster}
                            name="selectedMonster"
                            onClick={this.handleChange}
                        />
                    )}
                </form>
                <div className="MonstersOnField">
                    {MonsterCardComponents}
                </div>
            </ div >
        )
    }
}
export default SetMonster