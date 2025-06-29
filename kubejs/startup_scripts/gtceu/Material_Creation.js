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
})