ServerEvents.recipes(event => {
    const GTR = event.recipes.gtceu

    GTR.assembler('gtceu:fluix_glass_cable')
        .itemInputs(
            'ae2:quartz_fiber'
        )
        .inputFluids(
            Fluid.of('gtceu:fluix', 144)
        )
        .itemOutputs(
            '8x ae2:fluix_glass_cable'
        )
        .duration(50)
        .EUt(32)
    GTR.assembler('gtceu:fluix_covered_cable')
        .itemInputs(
            'ae2:quartz_fiber',
            '#minecraft:wool'
        )
        .inputFluids(
            Fluid.of('gtceu:fluix', 144)
        )
        .itemOutputs(
            '8x ae2:fluix_covered_cable'
        )
        .duration(50)
        .EUt(32)
    GTR.assembler('gtceu:fluix_smart_cable')
        .itemInputs(
            'ae2:quartz_fiber',
            'minecraft:redstone',
            'minecraft:glowstone_dust',
            '#minecraft:wool'
        )
        .inputFluids(
            Fluid.of('gtceu:fluix', 144)
        )
        .itemOutputs(
            '8x ae2:fluix_smart_cable'
        )
        .circuit(8)
        .duration(50)
        .EUt(32)
    GTR.assembler('gtceu:fluix_smart_dense_cable')
        .itemInputs(
            'ae2:quartz_fiber',
            'minecraft:redstone',
            'minecraft:glowstone_dust',
            '#minecraft:wool'
        )
        .inputFluids(
            Fluid.of('gtceu:fluix', 144)
        )
        .itemOutputs(
            '4x ae2:fluix_smart_dense_cable'
        )
        .circuit(4)
        .duration(50)
        .EUt(32)
})