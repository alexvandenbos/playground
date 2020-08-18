import React from 'react'
import dataMonster from '../Cards/Monster/dataMonsterCard'
import MonsterCard from '../Cards/Monster/MonsterCard'
// regelt input en filtered juiste data door naar het MonsterCard
class SetField extends React.Component {
    constructor() {
        super()
        this.state = {
            dataMonster,
            selectedMonster: "",
            selectedMonsterLevel: 0,
            displayedMonsters: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.mySelection = this.mySelection.bind(this)
        this.removeData = this.removeData.bind(this)
        this.addMonstertoBoard = this.addMonstertoBoard.bind(this)

    }
    // behandelt veranderingen in de state no-click---------------------------------------------------------------------------------------
    handleChange(event) {
        const { name, value } = event.target
        let valueAsNumber = parseInt(value)
        name === "selectedMonsterLevel" ?
            this.setState({ [name]: valueAsNumber }, console.log("changed monster levels")) :
            this.setState({ [name]: value })
    }
    // behandelt on-click events------------------------------------------------------------------------------------------------------
    handleSubmit(event) {
        this.addMonstertoBoard()
        event.preventDefault();
    }
    // removes data in state from types: string, array--------------------------------------------------------------------------------------
    removeData(event) {
        const { name, value } = event.target
        name === "searchfieldbutton" ?
            this.setState({ selectedMonster: "" }, console.log("emptied searchfield state")) :
            name === "battelfieldbutton" ?
                this.setState({ displayedMonsters: [] }, console.log("emptied displaymonsters state")) :
                name === "removemonster" && value ?
                    console.log("removemonster was called, but not yet programmed")
                    : console.log("nothing to remove")
    }
    mySelection() {
        //filter for the monster-stat-card-------------------------------------------------------------------------------------------------
        let monsterStatCardMap = this.state.dataMonster.filter(monster =>
            monster.kind === "monster-stat-card")
        //filter for the possible monsters in dataMonster matching the outcome of the filters above----------------------------------------
        let possibleMonsters = monsterStatCardMap.map(monster =>
            monster).filter(property => property.name.includes(this.state.selectedMonster))
        return possibleMonsters

    }
    addMonstertoBoard() {
        //pushes the corresponding monster from the database bases on the selection to the displayed monster array---------------------------
        const [MonsterCardComponentData] = this.state.dataMonster.filter(monster =>
            monster.name.includes(this.state.selectedMonster))
        this.setState(prevState =>
            prevState.displayedMonsters.push(MonsterCardComponentData),
            console.log("pushed required monsterdata to displayed monsters"),
        )
    }
    render() {
        console.log(this.state.displayedMonsters)
        // maakt de monsterCard components aan de hand van de displayed monsters array-----------------------------------------------------------
        let MonsterCards = this.state.displayedMonsters.map((monster, index) =>
            < MonsterCard
                className="MonsterCard"
                monsterLevel={this.state.selectedMonsterLevel}
                monsternumber={monster.id}
                frontpath={monster.frontpath}
                backpath={monster.backpath}
                name={monster.name}
                id={monster.id}
                set={monster.set}
                fieldkey={index}
                key={index}
                remove={this.removeData}
            />

        )
        return (

            < div className="selection-menu" >
                <form className="selection-menu-form" onSubmit={this.handleSubmit}>
                    <label>
                        Monster level:
                    <select name="selectedMonsterLevel"
                            value={this.state.selectedMonsterLevel}
                            onChange={this.handleChange}>
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
                        onClick={this.removeData}
                        value="empty searchfield"
                    />
                    <input
                        name="battelfieldbutton"
                        type="button"
                        onClick={this.removeData}
                        value="empty battlefield"
                    />
                    <br />
                        Options:
                    {this.mySelection().length <= 10 ? this.mySelection().map(monster =>
                        <button
                            key={monster.id}
                            value={monster.name}
                            onClick={this.handleChange}
                            name="selectedMonster"
                        >{monster.name}</button>
                    ) : console.log("to many options")}
                </form>
                <div className="MonstersOnField">
                    {MonsterCards}
                </div>
            </ div >
        )
    }
}
export default SetField

