ServerEvents.recipes(event => {
    const GTR = event.recipes.gtceu
    //蚀刻运算晶圆
    GTR.laser_engraver('morechip:calculation_wafer/1')
        .itemInputs(
            'gtceu:silicon_wafer'
        )
        .notConsumable(
            'ae2:calculation_processor_press'
        )
        .itemOutputs(
            'morechip:calculation_wafer'
        )
        .duration(900)
        .EUt(120)
    GTR.laser_engraver('morechip:calculation_wafer/2')
        .itemInputs(
            'gtceu:phosphorus_wafer'
        )
        .notConsumable(
            'ae2:calculation_processor_press'
        )
        .itemOutputs(
            '4x morechip:calculation_wafer'
        )
        .duration(500)
        .EUt(480)
    GTR.laser_engraver('morechip:calculation_wafer/3')
        .itemInputs(
            'gtceu:naquadah_wafer'
        )
        .notConsumable(
            'ae2:calculation_processor_press'
        )
        .itemOutputs(
            '8x morechip:calculation_wafer'
        )
        .duration(200)
        .EUt(1920)
    GTR.laser_engraver('morechip:calculation_wafer/4')
        .itemInputs(
            'gtceu:neutronium_wafer'
        )
        .notConsumable(
            'ae2:calculation_processor_press'
        )
        .itemOutputs(
            '16x morechip:calculation_wafer'
        )
        .duration(50)
        .EUt(7680)
    //蚀刻工程晶圆
    GTR.laser_engraver('morechip:engineering_wafer/1')
        .itemInputs(
            'gtceu:silicon_wafer'
        )
        .notConsumable(
            'ae2:engineering_processor_press'
        )
        .itemOutputs(
            'morechip:engineering_wafer'
        )
        .duration(900)
        .EUt(120)
    GTR.laser_engraver('morechip:engineering_wafer/2')
        .itemInputs(
            'gtceu:phosphorus_wafer'
        )
        .notConsumable(
            'ae2:engineering_processor_press'
        )
        .itemOutputs(
            '4x morechip:engineering_wafer'
        )
        .duration(500)
        .EUt(480)
    GTR.laser_engraver('morechip:engineering_wafer/3')
        .itemInputs(
            'gtceu:naquadah_wafer'
        )
        .notConsumable(
            'ae2:engineering_processor_press'
        )
        .itemOutputs(
            '8x morechip:engineering_wafer'
        )
        .duration(200)
        .EUt(1920)
    GTR.laser_engraver('morechip:engineering_wafer/4')
        .itemInputs(
            'gtceu:neutronium_wafer'
        )
        .notConsumable(
            'ae2:engineering_processor_press'
        )
        .itemOutputs(
            '16x morechip:engineering_wafer'
        )
        .duration(50)
        .EUt(7680)
    //蚀刻逻辑晶圆
    GTR.laser_engraver('morechip:logic_wafer/1')
        .itemInputs(
            'gtceu:silicon_wafer'
        )
        .notConsumable(
            'ae2:logic_processor_press'
        )
        .itemOutputs(
            'morechip:logic_wafer'
        )
        .duration(900)
        .EUt(120)
    GTR.laser_engraver('morechip:logic_wafer/2')
        .itemInputs(
            'gtceu:phosphorus_wafer'
        )
        .notConsumable(
            'ae2:logic_processor_press'
        )
        .itemOutputs(
            '4x morechip:logic_wafer'
        )
        .duration(500)
        .EUt(480)
    GTR.laser_engraver('morechip:logic_wafer/3')
        .itemInputs(
            'gtceu:naquadah_wafer'
        )
        .notConsumable(
            'ae2:logic_processor_press'
        )
        .itemOutputs(
            '8x morechip:logic_wafer'
        )
        .duration(200)
        .EUt(1920)
    GTR.laser_engraver('morechip:logic_wafer/4')
        .itemInputs(
            'gtceu:neutronium_wafer'
        )
        .notConsumable(
            'ae2:logic_processor_press'
        )
        .itemOutputs(
            '16x morechip:logic_wafer'
        )
        .duration(50)
        .EUt(7680)
    //切割运算晶圆
    GTR.cutter('morechip:calculation_chip/1')
        .itemInputs(
            'morechip:calculation_wafer'
        )
        .inputFluids(
            Fluid.of('minecraft:water', 270)
        )
        .itemOutputs(
            '32x morechip:calculation_chip'
        )
        .duration(1800)
        .EUt(96)
    GTR.cutter('morechip:calculation_chip/2')
        .itemInputs(
            'morechip:calculation_wafer'
        )
        .inputFluids(
            Fluid.of('gtceu:distilled_water', 202)
        )
        .itemOutputs(
            '32x morechip:calculation_chip'
        )
        .duration(1350)
        .EUt(96)
    GTR.cutter('morechip:calculation_chip/3')
        .itemInputs(
            'morechip:calculation_wafer'
        )
        .inputFluids(
            Fluid.of('gtceu:lubricant', 67)
        )
        .itemOutputs(
            '32x morechip:calculation_chip'
        )
        .duration(900)
        .EUt(96)
    //切割工程晶圆
    GTR.cutter('morechip:engineering_chip/1')
        .itemInputs(
            'morechip:engineering_wafer'
        )
        .inputFluids(
            Fluid.of('minecraft:water', 270)
        )
        .itemOutputs(
            '32x morechip:engineering_chip'
        )
        .duration(1800)
        .EUt(96)
    GTR.cutter('morechip:engineering_chip/2')
        .itemInputs(
            'morechip:engineering_wafer'
        )
        .inputFluids(
            Fluid.of('gtceu:distilled_water', 202)
        )
        .itemOutputs(
            '32x morechip:engineering_chip'
        )
        .duration(1350)
        .EUt(96)
    GTR.cutter('morechip:engineering_chip/3')
        .itemInputs(
            'morechip:engineering_wafer'
        )
        .inputFluids(
            Fluid.of('gtceu:lubricant', 67)
        )
        .itemOutputs(
            '32x morechip:engineering_chip'
        )
        .duration(900)
        .EUt(96)
    //切割逻辑晶圆
    GTR.cutter('morechip:logic_chip/1')
        .itemInputs(
            'morechip:logic_wafer'
        )
        .inputFluids(
            Fluid.of('minecraft:water', 270)
        )
        .itemOutputs(
            '32x morechip:logic_chip'
        )
        .duration(1800)
        .EUt(96)
    GTR.cutter('morechip:logic_chip/2')
        .itemInputs(
            'morechip:logic_wafer'
        )
        .inputFluids(
            Fluid.of('gtceu:distilled_water', 202)
        )
        .itemOutputs(
            '32x morechip:logic_chip'
        )
        .duration(1350)
        .EUt(96)
    GTR.cutter('morechip:logic_chip/3')
        .itemInputs(
            'morechip:logic_wafer'
        )
        .inputFluids(
            Fluid.of('gtceu:lubricant', 67)
        )
        .itemOutputs(
            '32x morechip:logic_chip'
        )
        .duration(900)
        .EUt(96)
    //合成运算处理器
    GTR.circuit_assembler('ae2:calculation_processor/1')
        .itemInputs(
            'gtceu:resin_printed_circuit_board',
            '2x morechip:calculation_chip',
            'gtceu:red_alloy_single_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 72)
        )
        .itemOutputs(
            '2x ae2:calculation_processor'
        )
        .duration(100)
        .EUt(16)
    GTR.circuit_assembler('ae2:calculation_processor/2')
        .itemInputs(
            'gtceu:resin_printed_circuit_board',
            '2x morechip:calculation_chip',
            'gtceu:red_alloy_single_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:tin', 144)
        )
        .itemOutputs(
            '2x ae2:calculation_processor'
        )
        .duration(100)
        .EUt(16)
    //合成工程处理器
    GTR.circuit_assembler('ae2:engineering_processor/1')
        .itemInputs(
            'gtceu:resin_printed_circuit_board',
            '2x morechip:engineering_chip',
            'gtceu:red_alloy_single_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 72)
        )
        .itemOutputs(
            '2x ae2:engineering_processor'
        )
        .duration(100)
        .EUt(16)
    GTR.circuit_assembler('ae2:engineering_processor/2')
        .itemInputs(
            'gtceu:resin_printed_circuit_board',
            '2x morechip:engineering_chip',
            'gtceu:red_alloy_single_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:tin', 144)
        )
        .itemOutputs(
            '2x ae2:engineering_processor'
        )
        .duration(100)
        .EUt(16)
    //合成逻辑处理器
    GTR.circuit_assembler('ae2:logic_processor/1')
        .itemInputs(
            'gtceu:resin_printed_circuit_board',
            '2x morechip:logic_chip',
            'gtceu:red_alloy_single_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 72)
        )
        .itemOutputs(
            '2x ae2:logic_processor'
        )
        .duration(100)
        .EUt(16)
    GTR.circuit_assembler('ae2:logic_processor/2')
        .itemInputs(
            'gtceu:resin_printed_circuit_board',
            '2x morechip:logic_chip',
            'gtceu:red_alloy_single_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:tin', 144)
        )
        .itemOutputs(
            '2x ae2:logic_processor'
        )
        .duration(100)
        .EUt(16)
})