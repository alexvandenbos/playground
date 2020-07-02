const spaceshipinput = [1, 0, 0, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 1, 9, 19, 1, 13, 19, 23, 2, 23, 9, 27, 1, 6, 27, 31, 2, 10, 31, 35, 1, 6, 35, 39, 2, 9, 39, 43, 1, 5, 43, 47, 2, 47, 13, 51, 2, 51, 10, 55, 1, 55, 5, 59, 1, 59, 9, 63, 1, 63, 9, 67, 2, 6, 67, 71, 1, 5, 71, 75, 1, 75, 6, 79, 1, 6, 79, 83, 1, 83, 9, 87, 2, 87, 10, 91, 2, 91, 10, 95, 1, 95, 5, 99, 1, 99, 13, 103, 2, 103, 9, 107, 1, 6, 107, 111, 1, 111, 5, 115, 1, 115, 2, 119, 1, 5, 119, 0, 99, 2, 0, 14, 0]

function OpCodeReader(arraywithnumbers) {
    let deepCopyData = arraywithnumbers.slice()
    let startIndex = 0
    let endIndex = 4
    let opCodeCut = []

    function IndexUpdate() {
        startIndex += 4;
        endIndex += 4;
        // console.log("startIndex: ", startIndex, "endIndex: ", endIndex)
        return [startIndex, endIndex]
    }
    function opCodeCutter() {
        let makeCut = deepCopyData.slice(startIndex, endIndex)
        //console.log("makeCut: ", makeCut)
        return opCodeCut = makeCut;
    }
    opCodeCutter()

    function addNumbers() {
        let pOne = opCodeCut[1]
        let pTwo = opCodeCut[2]
        let pThree = opCodeCut[3]
        let pOnePluspTwo = deepCopyData[pOne] + deepCopyData[pTwo]
        //console.log("index:", pThree, "new value:", pOnePluspTwo)
        deepCopyData[pThree] = pOnePluspTwo
        //console.log("new DeepcopyData: ", deepCopyData)
        IndexUpdate()
        opCodeCutter()
        skeleton()
        return
    }

    function multiplyNumbers() {
        let pOne = opCodeCut[1]
        let pTwo = opCodeCut[2]
        let pThree = opCodeCut[3]
        let pOneTimespTwo = deepCopyData[pOne] * deepCopyData[pTwo]
        //console.log("index:", pThree, "new value:", pOneTimespTwo)
        deepCopyData[pThree] = pOneTimespTwo
        //console.log("new DeepcopyData: ", deepCopyData)
        IndexUpdate()
        opCodeCutter()
        skeleton()
        return
    }

    function skeleton() {
        switch (opCodeCut[0]) {
            case 1:
                console.log('calc: addition')
                addNumbers()
                break;
            case 2:
                console.log('calc: multiplication')
                multiplyNumbers()
                break;
            case 99:
                console.log('calc: halt program')
                console.log(deepCopyData)
                break;
            default:
                console.log('calc: undefined')
                break;
        }
    }
    skeleton()
}
OpCodeReader(spaceshipinput)

//-----------------------------Second assignment-----------------------------//

function opCodeReconstructor(desiredOutput) {
    console.log("Desired value: ", desiredOutput)
    let noun = 0
    let verb = 0
    let output = 0
    while (noun != 100 && output != desiredOutput) {
        while (verb != 100 && output != desiredOutput) {

            let input = spaceshipinput.slice()
            input[1] = noun
            input[2] = verb

            OpCodeReader(input)
            output = input[0]
            console.log(`output: ${output} noun: ${noun} and verb: ${verb}`)
            verb += 1

        }
        noun += 1
        verb = 0
    }
    output === desiredOutput ? console.log(`succes`) : console.log(`failure`)
}
//opCodeReconstructor(19690720)

//newversion with slice
// let x = spaceshipinput.slice()
// let y = x.map(number => number + 1)
// console.log(x, y)