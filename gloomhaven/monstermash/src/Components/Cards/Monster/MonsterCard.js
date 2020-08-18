import React from 'react'
import dataMonsterAbilities from '../Ability/dataAbilityCard'
import AbilityCard from '../Ability/AbilityCard'

class MonsterCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.id,
            frontpath: this.props.frontpath,
            backpath: this.props.backpath,
            name: this.props.name,
            fieldkey: this.props.fieldkey,
            set: this.props.set,
            abilityCardData: '',
            AbilityCard: '',
            usedAbilityCards: [],
            turn: 0,
        }
        this.addTurnCount = this.addTurnCount.bind(this)
        this.moveToUsedAbilityCard = this.moveToUsedAbilityCard.bind(this)
        this.createDataMonsterAbilityCardData = this.createDataMonsterAbilityCardData.bind(this)
        this.createCurrentAbilityCardData = this.createCurrentAbilityCardData.bind(this)
        this.createCurrentAbilityCard = this.createCurrentAbilityCard.bind(this)
    }

    // wait till the component is renderd, then activates this function once
    componentDidMount() {
        this.createDataMonsterAbilityCardData()
    }

    // when changed state has gotten the requirements, create the current ability card
    componentDidUpdate(prevState) {
        if (this.state.abilityCardData !== prevState.abilityCardData && !this.state.AbilityCard) {
            console.log("i updated the current ability card")
            this.createCurrentAbilityCardData()
        } else if (this.state.AbilityCard !== prevState.AbilityCard) {
            this.moveToUsedAbilityCard()
        } else {
            console.log("nothing to update")
        }
    }

    // adds turn and resets turn
    addTurnCount() {
        if (this.state.turn <= 7) {
            this.setState(prevState => {
                return { turn: prevState.turn + 1 }
            }, this.createCurrentAbilityCardData)
        } else {
            this.setState({ turn: 0 },
                this.createCurrentAbilityCardData)
        }
    }

    // moves current abilitycard to used abilitycard
    moveToUsedAbilityCard() {
        console.log("move to used ability card array")
        if (this.state.usedAbilityCards.length === 8) {
            this.setState({ usedAbilityCards: [] })
        }
        this.state.usedAbilityCards.push(this.state.AbilityCard)
    }

    // creates the abilitycarddata for this monster
    createDataMonsterAbilityCardData() {
        const [monsterAbilityCardSet] = dataMonsterAbilities.filter(card =>
            card.id === this.state.set)
        this.setState({ abilityCardData: monsterAbilityCardSet })
    }

    //creates the current Ability Card set and shuffles
    createCurrentAbilityCardData() {
        console.log("going to create current abillity cardset")
        let abilityCardCount = Object.keys(this.state.abilityCardData.cards).length
        let usedAbilityCardNumbers = this.state.usedAbilityCards.map(item => item.cardnumber)

        function createRandomNumber() {
            console.log("create random number")
            return Math.floor(Math.random() * (abilityCardCount - 1) + 1);
        }
        let randomNumber = createRandomNumber()


        while (usedAbilityCardNumbers.includes(randomNumber)) {
            console.log(`error: used card nr in array: ${usedAbilityCardNumbers} matches: ${randomNumber}`)
            randomNumber = createRandomNumber()

        }
        if (this.state.turn === 0) {
            let [id, value] = Object.entries(this.state.abilityCardData.cards)[0]
            this.createCurrentAbilityCard(id, value)
        } else {
            let index
            for (index = 1; index < abilityCardCount; index++) {
                let [id, value] = Object.entries(this.state.abilityCardData.cards)[index]
                id = parseInt(id)
                if (id === randomNumber) {
                    console.log("id & randomnumber match:", value, "make abilitycard")
                    this.createCurrentAbilityCard(id, value)
                }
            }
        }
    }
    // creates the current ability card state
    createCurrentAbilityCard(idnumber, valuestring) {
        let name = this.state.abilityCardData.name
        let card = {
            cardname: name,
            cardpath: valuestring,
            cardnumber: parseInt(idnumber)
        }
        this.setState({ AbilityCard: card })
        console.log("i set state of current ability card async")

    }
    render() {
        let orientation = "";
        let monsterCardImagePath = "";
        if (this.props.monsterLevel <= 3) {
            monsterCardImagePath = this.props.frontpath
            switch (this.props.monsterLevel) {
                case 0:
                    break;
                case 1:
                    orientation = "rotate270"
                    break;
                case 2:
                    orientation = "rotate180"
                    break;
                case 3:
                    orientation = "rotate90"
                    break;
                default:
                    console.log("something went wrong in MonsterCard.js switch statement")
            }
        } else {
            monsterCardImagePath = this.props.backpath
            switch (this.props.monsterLevel) {
                case 4:
                    break;
                case 5:
                    orientation = "rotate270"
                    break;
                case 6:
                    orientation = "rotate180"
                    break;
                case 7:
                    orientation = "rotate90"
                    break;
                default:
                    console.log("something went wrong in MonsterCard.js switch statement")
            }
        }
        return (
            <div>
                <div>
                    {this.props.name}
                    {this.state.turn}
                </div>
                <img
                    src={require('../../../Assets/images/monster-stat-cards/' + monsterCardImagePath)}
                    alt="icontest"
                    width="300"
                    height="300"
                    className={orientation}
                />
                <div className="AbilityCard">
                    {this.state.AbilityCard ?
                        <AbilityCard
                            cardData={this.state.AbilityCard}
                            addTurnCount={this.addTurnCount}
                        /> : null}

                </div>
            </div>
        )
    }
}

export default MonsterCard