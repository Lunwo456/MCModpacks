StartupEvents.registry('block', event =>{
    const coils =[
        ["infinity", "36000", "128", "9"],
        ["end_steel", "2000", "8", "2"]
    ]
    coils.forEach((coil) => {
        event.create("gtceu:" + coil[0] + "_coil_block", "gtceu:coil")
            .temperature(coil[1])
            .level(coil[2])
            .energyDiscount(8)
            .tier(coil[3])
            .coilMaterial(() => GTMaterials.get(coil[0]))
            .tagBlock("forge:mineable/wrench")
            .hardness(5)
            .requiresTool(true)
            .material('metal')
            .texture("gtceu:block/" + coil[0] + "_coil_block")
    })
})