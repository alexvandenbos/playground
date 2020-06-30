const MassData =
    [90859,
        127415,
        52948,
        92106,
        106899,
        72189,
        60084,
        79642,
        138828,
        103609,
        149073,
        127749,
        86976,
        104261,
        139341,
        81414,
        102622,
        131030,
        120878,
        96809,
        130331,
        119212,
        52317,
        108990,
        136871,
        67279,
        76541,
        113254,
        77739,
        75027,
        53863,
        97732,
        65646,
        87851,
        63712,
        92660,
        131821,
        127837,
        52363,
        70349,
        66110,
        132249,
        50319,
        125948,
        98360,
        137675,
        61957,
        143540,
        137402,
        135774,
        51376,
        144833,
        118646,
        128136,
        141140,
        82856,
        63345,
        143617,
        79733,
        73449,
        116126,
        73591,
        63899,
        110409,
        79602,
        77485,
        64050,
        131760,
        90509,
        112728,
        55181,
        55329,
        98597,
        126579,
        108227,
        80707,
        92962,
        90396,
        123775,
        125248,
        128814,
        64593,
        63108,
        76486,
        107135,
        111064,
        142569,
        68579,
        149006,
        52258,
        143477,
        131889,
        142506,
        146732,
        58663,
        92013,
        62410,
        71035,
        51208,
        66372];

//fuel per mass
const fuel = (mass) => Math.floor(mass / 3) - 2;

//testdata
console.log('\n' + "should be: 2", fuel(12))
console.log("should be: 2", fuel(14))
console.log("should be: 654", fuel(1969))
console.log("should be: 33583", fuel(100756))

//totaalmassa spaceship (alle modules)
let totalmass = MassData.reduce((acc, curr) => acc + curr)
console.log('\n' + "total mass spaceship:", totalmass);

//fuel data per module
// let fuelMassData = MassData.map(massModule => fuel(massModule))
// console.log("fuel mass data:", fuelMassData)

// //totaal fuel spaceship per module
// let totalfuelformodules = fuelMassData.reduce((acc, curr) => acc + curr)
// console.log("total fuel for modules", totalfuelformodules)

//fuel nodig voor fuel massa
function calcFuelPerModule(mass) {
    console.log(`\n${mass}: mass of module`)
    let FuelForModule = fuel(mass)
    console.log(`${FuelForModule}: fuel needed to move the module \n`,)

    let testData = []

    let i = 0
    let countFuelforFuel = FuelForModule
    while (FuelForModule >= 0 && i <= 100) {
        FuelForModule = fuel(FuelForModule)
        console.log(`${FuelForModule}:(B)`)
        countFuelforFuel = countFuelforFuel + FuelForModule
        console.log(`${countFuelforFuel}:(A) + (B) \n`)
        testData.push(countFuelforFuel)
        i++
    }
    testData.pop()
    let totalFuel = testData.pop()
    console.log(totalFuel)
    return totalFuel

}
//calcFuelPerModule(14) // required 2
//calcFuelPerModule(1969) //966
//calcFuelPerModule(100756) // 50346
//calcFuelPerModule(90859) // 45396 1st
//calcFuelPerModule(66372) // 33157 last

let lastHope = MassData.map(mass => calcFuelPerModule(mass))
console.log(lastHope)
let unit = lastHope.reduce((acc, curr) => acc + curr)
console.log(unit)