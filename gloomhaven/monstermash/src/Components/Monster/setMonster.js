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
            selectedMonsterLevel: "",
            displayedMonsters: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.mySelection = this.mySelection.bind(this)
        this.addMonstertoBoard = this.addMonstertoBoard.bind(this)
    }
    handleChange(event) {
        const { name, value } = event.target
        name === "searchfieldbutton" ?
            this.setState({ selectedMonster: "" }, console.log("emptied searchfield state")) :
            name === "battelfieldbutton" ?
                this.setState({ displayedMonsters: [] }, console.log("emptied displaymonsters state")) :
                this.setState({ [name]: value })
    }
    handleSubmit(event) {
        this.addMonstertoBoard()
        event.preventDefault();
    }
    mySelection() {
        let monsterMap = this.state.dataMonster.map(monster => monster.path)
        let WatchLevel = parseInt(this.state.selectedMonsterLevel.slice())
        let SelectiveDisplay = WatchLevel >= 4 ? '4' : '0'
        let possibleMonstersForLevel = monsterMap.filter(monster =>
            monster.includes(SelectiveDisplay))
        console.log(possibleMonstersForLevel)
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
    render() {
        const MonsterCards = this.state.displayedMonsters.map((monster, index) => {
            return < MonsterCard
                className="MonsterCard"
                monsterLevel={this.state.selectedMonsterLevel}
                path={monster.path}
                name={monster.path.replace(/-|[0-9]|.png/g, ' ').trim()}
                id={monster.id}
                fieldkey={index}
                key={index}
            />
        })
        return (
            <div className="selection-menu" >
                <form onSubmit={this.handleSubmit}>
                    <label>monster level:
                        <select
                            name="selectedMonsterLevel"
                            value={this.state.selectedMonsterLevel}
                            onChange={this.handleChange}
                        >
                            <option value="0">--select level--</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </select>

                    </label>
                    <br />
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
                        onClick={this.handleChange}
                        value="empty"
                    />
                    <input
                        name="battelfieldbutton"
                        type="button"
                        onClick={this.handleChange}
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

