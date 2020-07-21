import React from 'react'
import dataMonster from './dataMonster'
import MonsterCard from './MonsterCard'
// regelt input en filtered juiste data door naar het MonsterCard
class SetMonster extends React.Component {
    constructor() {
        super()
        this.state = {
            dataMonster,
            selectedMonster: "",
            partyLevelHigherThenFour: false,
            displayedMonsters: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.mySelection = this.mySelection.bind(this)
        this.addMonstertoBoard = this.addMonstertoBoard.bind(this)
        this.removeStateContent = this.removeStateContent.bind(this)
    }
    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ?
            this.setState({ [name]: checked }) :
            this.setState({ [name]: value })
    }
    handleSubmit(event) {
        this.addMonstertoBoard()
        event.preventDefault();
    }
    mySelection() {
        let monsterMap = this.state.dataMonster.map(monster =>
            monster.path)
        let possibleMonstersForLevel = monsterMap.filter(monster =>
            monster.includes(this.state.partyLevelHigherThenFour ? '4' : '0'))
        let possibleMonsters = possibleMonstersForLevel.filter(monster =>
            monster.includes(this.state.selectedMonster))
        if (possibleMonsters.length <= 6) {
            return possibleMonsters
        } else {
            return "Be more specific"
        }
    }
    addMonstertoBoard() {
        const [MonsterCardComponentData] = this.state.dataMonster.filter(monster =>
            monster.path.includes(this.state.selectedMonster))
        this.setState(prevState =>
            prevState.displayedMonsters.push(MonsterCardComponentData), console.log("pushed required monsterdata to MonsterCardCompentData")
        )
    }
    removeStateContent(event) {
        const { name } = event.target
        name === "searchfieldbutton" ?
            this.setState({ selectedMonster: "" }, console.log("emptied searchfield state")) : this.setState({ displayedMonsters: [] }, console.log("emptied displaymonsters state"))
    }
    render() {
        const MonsterCards = this.state.displayedMonsters.map(monster =>
            <MonsterCard
                className="MonsterCard"
                path={monster.path}
                name={monster.path.replace(/-|[0-9]|.png/g, ' ').trim()}
                id={monster.id}
                key={monster.id}
            />
        )
        return (
            <div className="selection-menu" >
                <h3>set monster</h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor={'higher-then-four-checkbox'}>
                        <input
                            type='checkbox'
                            name='partyLevelHigherThenFour'
                            onChange={this.handleChange}
                            value={this.state.partyLevelHigherThenFour}
                        /> {this.state.partyLevelHigherThenFour ? "partylevel above 4 " : "partylevel below 4 "}
                    </label>
                    <input
                        type='text'
                        autoComplete="off"
                        name="selectedMonster"
                        placeholder="Monster"
                        onChange={this.handleChange}
                        value={this.state.selectedMonster}
                    />
                    <input
                        name="searchfieldbutton"
                        type="button"
                        onClick={this.removeStateContent}
                        value="empty"
                    />
                    <input
                        name="battelfieldbutton"
                        type="button"
                        onClick={this.removeStateContent}
                        value="empty battlefield"
                    />
                    <br />
                        Options:
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
                    {MonsterCards}
                </div>
            </ div >
        )
    }
}
export default SetMonster