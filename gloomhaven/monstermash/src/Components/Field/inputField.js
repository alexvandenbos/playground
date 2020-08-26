import React from 'react'
import dataMonster from '../Cards/Monster/dataMonsterCard'
import dataMonsterAbilities from '../Cards/Ability/dataAbilityCard'
import CardHandler from './cardHandler'
//handles the input and general data, wich it passes to the cardHandler.
class InputField extends React.Component {
    constructor() {
        super()
        this.state = {
            dataMonster,
            selectedMonsterLevel: 0,
            selectedMonster: "",
            chosenMonster: "",
            displayedMonstersFromData: [],
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.mySelection = this.mySelection.bind(this)
        this.removeData = this.removeData.bind(this)
        this.addMonstertoDisplay = this.addMonstertoDisplay.bind(this)
        this.addFieldKey = this.addFieldKey.bind(this)
    }

    // no-click event handler
    handleChange(event) {
        const { name, value } = event.target
        let valueAsNumber = parseInt(value)
        if (name === "selectedMonsterLevel") {
            this.setState({ [name]: valueAsNumber })
        } else if (name === "chosenMonster") {
            this.setState({ [name]: value })
        } else if (name === "selectedMonster") {
            this.setState({ [name]: value })
        } else {
            alert("unidentified change event: inputfield.js: 34")
        }
    }

    //on-click event handler
    handleSubmit(event) {
        this.addMonstertoDisplay()
        event.preventDefault();
    }

    //removes data handler
    removeData(event) {
        const { name, id } = event.target
        let idAsNumber = parseInt(id)
        if (name === "searchfieldbutton") {
            this.setState({ selectedMonster: "" })
        } else if (name === "battelfieldbutton") {
            this.setState({ displayedMonstersFromData: [] }, dataMonsterAbilities.forEach(cards => delete cards.availableAbilityCards))
        } else if (name === "removemonster") {
            let copy = this.state.displayedMonstersFromData.filter(entry =>
                entry.fieldkey !== idAsNumber).slice()
            this.setState({ displayedMonstersFromData: copy })
        } else {
            console.log("nothing to remove")
        }
    }
    //filter for the display of possible monsters, by selectedmonster matching the availabe monster-stat-card cards in the assets folder
    mySelection() {
        let monsterStatCardMap = this.state.dataMonster.filter(monster =>
            monster.kind === "monster-stat-card")
        let possibleMonsters = monsterStatCardMap.map(monster =>
            monster).filter(property => property.name.includes(this.state.selectedMonster))
        return possibleMonsters

    }
    //pushes the corresponding monster from the database bases on the chosen monster to the displayed monster array
    addMonstertoDisplay() {
        let [MonsterCardComponentData] = this.state.dataMonster.filter(monster =>
            monster.name.includes(this.state.chosenMonster))
        this.setState(prevState => prevState.displayedMonstersFromData.push(MonsterCardComponentData), () => {
            this.addFieldKey();
        });
    }
    //adds a fieldkey number for component key and remove function
    addFieldKey() {
        let monsters = this.state.displayedMonstersFromData.slice()
        let copy = monsters.map((obj, index) =>
            ({ ...obj, fieldkey: index }))
        this.setState({ displayedMonstersFromData: copy })
    }

    render() {
        return (
            < div className="selection-menu" >
                <form className="selection-menu-form" onSubmit={this.handleSubmit}>
                    <label>
                        Monster level:
                    <select name="selectedMonsterLevel"
                            className="inputField"
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
                        className="inputField"
                        autoComplete="off"
                        name="selectedMonster"
                        placeholder="Monster"
                        onChange={this.handleChange}
                        value={this.state.selectedMonster}
                    />
                    <input
                        className="button"
                        name="searchfieldbutton"
                        type="button"
                        onClick={this.removeData}
                        value="empty searchfield"
                    />
                    <input
                        className="button"
                        name="battelfieldbutton"
                        type="button"
                        onClick={this.removeData}
                        value="empty battlefield"
                    />
                    <br />
                        Options:
                    {this.mySelection().length <= 10 ? this.mySelection().map(monster =>
                        <button
                            className="button"
                            key={monster.id}
                            value={monster.name}
                            onClick={this.handleChange}
                            name="chosenMonster"
                        >{monster.name}</button>
                    ) : null}
                </form>
                <CardHandler
                    chosenMonsters={this.state.displayedMonstersFromData}
                    level={this.state.selectedMonsterLevel}
                    removeData={this.removeData}
                />
            </ div >
        )
    }
}
export default InputField

