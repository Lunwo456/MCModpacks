ServerEvents.recipes(event => {
    const GTR = event.recipes.gtceu
    //搅拌
    GTR.mixer('gtceu:fluix_dust_mixer')
        .itemInputs(
            'gtceu:certus_quartz_dust',
            'minecraft:redstone',
            'gtceu:nether_quartz_dust'
        )
        .itemOutputs(
            '3x ae2:fluix_dust'
        )
        .duration(40)
        .EUt(32)
    //高压釜
    GTR.autoclave('gtceu:fluix_crystal/1')
        .itemInputs(
            'ae2:fluix_dust'
        )
        .inputFluids(
            Fluid.of('minecraft:water', 250)
        )
        .itemOutputs(
            'ae2:fluix_crystal'
        )
        .duration(40)
        .EUt(16)
    GTR.autoclave('gtceu:fluix_crystal/2')
        .itemInputs(
            'ae2:fluix_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:distilled_water', 50)
        )
        .itemOutputs(
            'ae2:fluix_crystal'
        )
        .duration(40)
        .EUt(16)
    //福鲁伊克斯流体
    GTR.extractor('gtceu:fluix/1')
        .itemInputs(
            'ae2:fluix_dust'
        )
        .outputFluids(
            Fluid.of('gtceu:fluix', 144)
        )
        .duration(20)
        .EUt(30)
    GTR.extractor('gtceu:fluix/2')
        .itemInputs(
            'ae2:fluix_crystal'
        )
        .outputFluids(
            Fluid.of('gtceu:fluix', 144)
        )
        .duration(20)
        .EUt(30)
    GTR.fluid_solidifier('gtceu:fluix/3')
        .inputFluids(
            Fluid.of('gtceu:fluix', 144)
        )
        .notConsumable(
            'gtceu:ball_casting_mold'
        )
        .itemOutputs(
            'ae2:fluix_crystal'
        )
        .duration(100)
        .EUt(30)
})