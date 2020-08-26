import React from 'react'
import OnlyMonsterCard from '../Cards/Monster/OnlyMonsterCard'
import OnlyAbilityCard from '../Cards/Ability/OnlyAbilityCard'
import dataMonsterAbilities from '../Cards/Ability/dataAbilityCard'

class CardHandler extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            turn: 0,
            orientation: true,
            monstercards: [],
            abilityCardStacks: [],
            abilityCardsForComponents: [],
        }
        this.addUniqueMonsterNumber = this.addUniqueMonsterNumber.bind(this)
        this.createMonsterAbilityCardStack = this.createMonsterAbilityCardStack.bind(this)
        this.addTurnCount = this.addTurnCount.bind(this)
        this.createCurrentAbilityCard = this.createCurrentAbilityCard.bind(this)
        this.shuffleMonsterAbililtyCardStack = this.shuffleMonsterAbililtyCardStack.bind(this)
        this.resetTurnCount = this.resetTurnCount.bind(this)

    }
    // when changed state has gotten the requirements
    componentDidUpdate(prevProps) {
        if (this.props.chosenMonsters !== prevProps.chosenMonsters) {
            console.log("i want to update chosenMonsters")
            this.addUniqueMonsterNumber()
            this.createMonsterAbilityCardStack()
        }
    }

    /* General reusable functions for the cardHandler: they dont update state -------------------------------------------------------*/

    //creates shallow copy
    createCopy(kind) {
        if (kind === 'chosenMonsters') {
            let copy = this.props.chosenMonsters.slice()
            return copy
        } else if (kind === 'abilityCardStacks') {
            let copy = this.state.abilityCardStacks.slice()
            return copy
        }
    }
    //groups the displayed monsters from data per monster and returns object
    groupBy(data, key) {
        return data.reduce(function (storage, item) {
            let group = item[key];
            storage[group] = storage[group] || [];
            storage[group].push(item);
            return storage;
        }, {});
    };
    //creates unique array
    createUniqueArray(data, key) {
        let uniqueSet = new Set(data.map(monster => monster[key]))
        let uniqueArray = Array.from(uniqueSet);
        return uniqueArray
    }
    //find abilitycard
    findMonsterAbilityCard(number) {
        let [abilityCardsForComponents] = dataMonsterAbilities.filter(Cardset => Cardset.id === number)
        if (!abilityCardsForComponents.availableAbilityCards) {
            this.resetMonsterAbilityCardStack(abilityCardsForComponents)
        }
        return abilityCardsForComponents
    }

    //find abilitycard stack
    resetMonsterAbilityCardStack(stack) {
        stack.availableAbilityCards = [...Array(Object.keys(stack.cards).length).keys()].slice(1, 9)
        console.log("i want to reset the ability card stack", stack)
        this.forceUpdate()
    }
    //shuffle
    shuffleMonsterAbililtyCardStack(event) {
        let compId = parseInt(event.target.id)
        let target = event.target
        target.parentElement.parentElement.lastChild.classList.add("shuffle")
        console.log(target)
        let [matchingStack] = this.state.abilityCardStacks.filter(stack => stack.id === compId)
        this.resetMonsterAbilityCardStack(matchingStack)
    }
    /* End general reusable functions for the cardHandler:--------------------------------------------------------------------------*/

    //adds an monster with unique monsterNumber to state
    addUniqueMonsterNumber() {
        let grouped = Object.entries(this.groupBy(this.createCopy('chosenMonsters'), 'id'))
        this.setState(prevState => prevState.monstercards = [])
        for (let i = 0; i < grouped.length; i++) {
            const group = grouped[i];
            let allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            let usedNumbers = group[1].map(monster => monster.monsternumber)
            let availableNumbers = allNumbers.filter(number => !usedNumbers.includes(number));
            for (let j = 0; j < group[1].length; j++) {
                let monster = group[1][j]
                if (!monster.monsternumber) {
                    monster.monsternumber = availableNumbers.shift()
                }
                this.setState(prevState => prevState.monstercards.push(monster))
            }
        }
    }
    // adds turn and resets turn
    addTurnCount() {
        this.setState(prevState => ({
            turn: prevState.turn + 1
        }),
            this.createMonsterAbilityCardStack()
        )
        let x = Array.from(document.getElementsByClassName("shuffle"))
        x.forEach(eachclass => eachclass.classList.remove("shuffle"))

    }
    resetTurnCount() {
        this.setState({ turn: 0 },
            dataMonsterAbilities.forEach(cards => delete cards.availableAbilityCards),
            this.createMonsterAbilityCardStack()
        )
        let x = Array.from(document.getElementsByClassName("shuffle"))
        x.forEach(eachclass => eachclass.classList.remove("shuffle"))
    }

    //0// adds an abilitycard for each unique monstersset from the chosenMonsters (props) to state and goes to next function
    createMonsterAbilityCardStack() {
        let uniqueMonsterSets = this.createUniqueArray(this.createCopy('chosenMonsters'), 'set')
        let correspondingAbilityCards = uniqueMonsterSets.map(monsterSet => this.findMonsterAbilityCard(monsterSet))
        this.setState({ abilityCardStacks: correspondingAbilityCards }, () => {
            this.showAbilityCardFromStack()
        })
    }

    //1// shows the correct abilitycard(s) from the stack(s)
    showAbilityCardFromStack() {
        //reset diplayed cards
        this.setState({ abilityCardsForComponents: [] })
        // first check for stack with another amount of cards
        this.state.abilityCardStacks.forEach(abilityCardStack => {
            if (abilityCardStack.availableAbilityCards.length === 0) {
                // all cards are used, reset
                this.resetMonsterAbilityCardStack(abilityCardStack)
            }

            if (this.state.turn === 0) {
                let abilityCardIndex = 0
                this.createCurrentAbilityCard(abilityCardStack, abilityCardIndex)
            } else if (this.state.turn > 0) {
                let randomIndex = Math.floor(Math.random() * (abilityCardStack.availableAbilityCards.length - 1));
                let randomCardIndex = abilityCardStack.availableAbilityCards[randomIndex]
                this.createCurrentAbilityCard(abilityCardStack, randomCardIndex)
            }
        })

    }

    //2// creatues current abilityCardStacks
    createCurrentAbilityCard(abilityStack, thisAbilityCardIndex) {
        let path = abilityStack.cards[thisAbilityCardIndex]
        const card = {
            id: abilityStack.id,
            cardname: abilityStack.name,
            cardpath: path,
            cardIndex: thisAbilityCardIndex,
        }

        if (thisAbilityCardIndex !== 0) {
            abilityStack.availableAbilityCards.splice(abilityStack.availableAbilityCards.indexOf(thisAbilityCardIndex), 1)
        }
        this.setState(prevState => prevState.abilityCardsForComponents.push(card));
    }

    render() {
        const monstercards = this.state.monstercards.map(monster =>
            < OnlyMonsterCard
                level={this.props.level}
                removeData={this.props.removeData}
                className="MonsterCard"
                monsternumber={monster.monsternumber}
                frontpath={monster.frontpath}
                backpath={monster.backpath}
                name={monster.name}
                id={monster.id}
                set={monster.set}
                fieldkey={monster.fieldkey}
                key={monster.fieldkey}
                turn={this.state.turn}
            />
        )
        const abilitycards = this.state.abilityCardsForComponents.map(abilitycard =>
            <OnlyAbilityCard
                id={abilitycard.id}
                key={abilitycard.id}
                name={abilitycard.cardname}
                path={abilitycard.cardpath}
                cardIndex={abilitycard.cardIndex}
                addTurnCount={this.addTurnCount}
                turn={this.state.turn}
                shuffle={this.shuffleMonsterAbililtyCardStack}
            />
        )
        return (
            <div>
                <div>

                    <h2>Turn: {this.state.turn}</h2>
                    <input
                        className="button"
                        name="reset turn"
                        type="button"
                        onClick={this.resetTurnCount}
                        value="reset"
                    />

                </div>
                <div className="AbilitycardsOnField">
                    {abilitycards}
                </div>
                <div className="MonstersOnField">
                    {monstercards}
                </div>
            </div>
        )
    }
}
export default CardHandler