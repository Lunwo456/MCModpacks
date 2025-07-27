GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('fluix')
        .color(0x8f5ccb)
        .secondaryColor(0xfc7ed4)
        .liquid()

    event.create('conductive_alloy')
        .color(0xd2a29f)
        .secondaryColor(0xc5918e)
        .ingot()
        .flags(
            GTMaterialFlags.GENERATE_FINE_WIRE
        )
        .cableProperties(GTValues.V[GTValues.MV], 2, 0, true)
    
    event.create('vibrant_alloy')
        .color(0xe6fb76)
        .secondaryColor(0xe2e06b)
        .ingot()
        .flags(
            GTMaterialFlags.GENERATE_FINE_WIRE
        )
        .cableProperties(GTValues.V[GTValues.HV], 2, 0, true)
    
    event.create('end_steel')
        .color(0xfcf29b)
        .secondaryColor(0xb0a958)
        .ingot()
        .flags(
            GTMaterialFlags.GENERATE_FINE_WIRE
        )
        .cableProperties(GTValues.V[GTValues.MV], 2, 1, false)

    event.create('inconel792')
        .color(0x6CF076)
        .ingot()
        .liquid(6200)
        .flags(
            GTMaterialFlags.GENERATE_FINE_WIRE
        )
        .components('2x nickel','1x niobium','2x aluminium','1x nichrome')
        .blastTemp(6200, 'high', GTValues.VA[GTValues.LuV], 200)

    event.create('pikyonium_64_y')
        .color(0x3467BA)
        .flags(
            GTMaterialFlags.GENERATE_FINE_WIRE
        )

    event.create('gaia')
        .color(0xbaf8d7)
        .dust()

    event.create('alfsteel')
        .color(0xfcb300)
        .dust()

    event.create('magic_alloy')
        .color(0xc770ff)
        .ingot()
        .flags(
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_RING
        )
        .blastTemp(1800, 'highest', GTValues.VA[GTValues.UV], 150)
})