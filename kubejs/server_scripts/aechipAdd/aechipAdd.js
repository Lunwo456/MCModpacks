ServerEvents.recipes(event => {
    const GTR = event.recipes.gtceu
    //蚀刻运算晶圆
    GTR.laser_engraver('morechip:calculation_wafer/1')
        .inputItems(
            'gtceu:silicon_wafer'
        )
        .notConsumableItem(
            'ae2:calculation_processor_press'
        )
        .outputItems(
            'morechip:calculation_wafer'
        )
        .duration(900)
        .EUt(120)
    GTR.laser_engraver('morechip:calculation_wafer/2')
        .inputItems(
            'gtceu:phosphorus_wafer'
        )
        .notConsumableItem(
            'ae2:calculation_processor_press'
        )
        .outputItems(
            '4x morechip:calculation_wafer'
        )
        .duration(500)
        .EUt(480)
    GTR.laser_engraver('morechip:calculation_wafer/3')
        .inputItems(
            'gtceu:naquadah_wafer'
        )
        .notConsumableItem(
            'ae2:calculation_processor_press'
        )
        .outputItems(
            '8x morechip:calculation_wafer'
        )
        .duration(200)
        .EUt(1920)
    GTR.laser_engraver('morechip:calculation_wafer/4')
        .inputItems(
            'gtceu:neutronium_wafer'
        )
        .notConsumableItem(
            'ae2:calculation_processor_press'
        )
        .outputItems(
            '16x morechip:calculation_wafer'
        )
        .duration(50)
        .EUt(7680)
    //蚀刻工程晶圆
    GTR.laser_engraver('morechip:engineering_wafer/1')
        .inputItems(
            'gtceu:silicon_wafer'
        )
        .notConsumableItem(
            'ae2:engineering_processor_press'
        )
        .outputItems(
            'morechip:engineering_wafer'
        )
        .duration(900)
        .EUt(120)
    GTR.laser_engraver('morechip:engineering_wafer/2')
        .inputItems(
            'gtceu:phosphorus_wafer'
        )
        .notConsumableItem(
            'ae2:engineering_processor_press'
        )
        .outputItems(
            '4x morechip:engineering_wafer'
        )
        .duration(500)
        .EUt(480)
    GTR.laser_engraver('morechip:engineering_wafer/3')
        .inputItems(
            'gtceu:naquadah_wafer'
        )
        .notConsumableItem(
            'ae2:engineering_processor_press'
        )
        .outputItems(
            '8x morechip:engineering_wafer'
        )
        .duration(200)
        .EUt(1920)
    GTR.laser_engraver('morechip:engineering_wafer/4')
        .inputItems(
            'gtceu:neutronium_wafer'
        )
        .notConsumableItem(
            'ae2:engineering_processor_press'
        )
        .outputItems(
            '16x morechip:engineering_wafer'
        )
        .duration(50)
        .EUt(7680)
    //蚀刻逻辑晶圆
    GTR.laser_engraver('morechip:logic_wafer/1')
        .inputItems(
            'gtceu:silicon_wafer'
        )
        .notConsumableItem(
            'ae2:logic_processor_press'
        )
        .outputItems(
            'morechip:logic_wafer'
        )
        .duration(900)
        .EUt(120)
    GTR.laser_engraver('morechip:logic_wafer/2')
        .inputItems(
            'gtceu:phosphorus_wafer'
        )
        .notConsumableItem(
            'ae2:logic_processor_press'
        )
        .outputItems(
            '4x morechip:logic_wafer'
        )
        .duration(500)
        .EUt(480)
    GTR.laser_engraver('morechip:logic_wafer/3')
        .inputItems(
            'gtceu:naquadah_wafer'
        )
        .notConsumableItem(
            'ae2:logic_processor_press'
        )
        .outputItems(
            '8x morechip:logic_wafer'
        )
        .duration(200)
        .EUt(1920)
    GTR.laser_engraver('morechip:logic_wafer/4')
        .inputItems(
            'gtceu:neutronium_wafer'
        )
        .notConsumableItem(
            'ae2:logic_processor_press'
        )
        .outputItems(
            '16x morechip:logic_wafer'
        )
        .duration(50)
        .EUt(7680)
    //切割运算晶圆
    GTR.cutter('morechip:calculation_chip/1')
        .inputItems(
            'morechip:calculation_wafer'
        )
        .inputFluids(
            Fluid.of('minecraft:water', 270)
        )
        .outputItems(
            '32x morechip:calculation_chip'
        )
        .duration(1800)
        .EUt(96)
    GTR.cutter('morechip:calculation_chip/2')
        .inputItems(
            'morechip:calculation_wafer'
        )
        .inputFluids(
            Fluid.of('gtceu:distilled_water', 202)
        )
        .outputItems(
            '32x morechip:calculation_chip'
        )
        .duration(1350)
        .EUt(96)
    GTR.cutter('morechip:calculation_chip/3')
        .inputItems(
            'morechip:calculation_wafer'
        )
        .inputFluids(
            Fluid.of('gtceu:lubricant', 67)
        )
        .outputItems(
            '32x morechip:calculation_chip'
        )
        .duration(900)
        .EUt(96)
    //切割工程晶圆
    GTR.cutter('morechip:engineering_chip/1')
        .inputItems(
            'morechip:engineering_wafer'
        )
        .inputFluids(
            Fluid.of('minecraft:water', 270)
        )
        .outputItems(
            '32x morechip:engineering_chip'
        )
        .duration(1800)
        .EUt(96)
    GTR.cutter('morechip:engineering_chip/2')
        .inputItems(
            'morechip:engineering_wafer'
        )
        .inputFluids(
            Fluid.of('gtceu:distilled_water', 202)
        )
        .outputItems(
            '32x morechip:engineering_chip'
        )
        .duration(1350)
        .EUt(96)
    GTR.cutter('morechip:engineering_chip/3')
        .inputItems(
            'morechip:engineering_wafer'
        )
        .inputFluids(
            Fluid.of('gtceu:lubricant', 67)
        )
        .outputItems(
            '32x morechip:engineering_chip'
        )
        .duration(900)
        .EUt(96)
    //切割逻辑晶圆
    GTR.cutter('morechip:logic_chip/1')
        .inputItems(
            'morechip:logic_wafer'
        )
        .inputFluids(
            Fluid.of('minecraft:water', 270)
        )
        .outputItems(
            '32x morechip:logic_chip'
        )
        .duration(1800)
        .EUt(96)
    GTR.cutter('morechip:logic_chip/2')
        .inputItems(
            'morechip:logic_wafer'
        )
        .inputFluids(
            Fluid.of('gtceu:distilled_water', 202)
        )
        .outputItems(
            '32x morechip:logic_chip'
        )
        .duration(1350)
        .EUt(96)
    GTR.cutter('morechip:logic_chip/3')
        .inputItems(
            'morechip:logic_wafer'
        )
        .inputFluids(
            Fluid.of('gtceu:lubricant', 67)
        )
        .outputItems(
            '32x morechip:logic_chip'
        )
        .duration(900)
        .EUt(96)
    //合成运算处理器
    GTR.circuit_assembler('ae2:calculation_processor/1')
        .inputItems(
            'gtceu:resin_printed_circuit_board',
            '2x morechip:calculation_chip',
            'gtceu:red_alloy_single_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 72)
        )
        .outputItems(
            '2x ae2:calculation_processor'
        )
        .duration(100)
        .EUt(16)
    GTR.circuit_assembler('ae2:calculation_processor/2')
        .inputItems(
            'gtceu:resin_printed_circuit_board',
            '2x morechip:calculation_chip',
            'gtceu:red_alloy_single_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:tin', 144)
        )
        .outputItems(
            '2x ae2:calculation_processor'
        )
        .duration(100)
        .EUt(16)
    //合成工程处理器
    GTR.circuit_assembler('ae2:engineering_processor/1')
        .inputItems(
            'gtceu:resin_printed_circuit_board',
            '2x morechip:engineering_chip',
            'gtceu:red_alloy_single_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 72)
        )
        .outputItems(
            '2x ae2:engineering_processor'
        )
        .duration(100)
        .EUt(16)
    GTR.circuit_assembler('ae2:engineering_processor/2')
        .inputItems(
            'gtceu:resin_printed_circuit_board',
            '2x morechip:engineering_chip',
            'gtceu:red_alloy_single_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:tin', 144)
        )
        .outputItems(
            '2x ae2:engineering_processor'
        )
        .duration(100)
        .EUt(16)
    //合成逻辑处理器
    GTR.circuit_assembler('ae2:logic_processor/1')
        .inputItems(
            'gtceu:resin_printed_circuit_board',
            '2x morechip:logic_chip',
            'gtceu:red_alloy_single_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 72)
        )
        .outputItems(
            '2x ae2:logic_processor'
        )
        .duration(100)
        .EUt(16)
    GTR.circuit_assembler('ae2:logic_processor/2')
        .inputItems(
            'gtceu:resin_printed_circuit_board',
            '2x morechip:logic_chip',
            'gtceu:red_alloy_single_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:tin', 144)
        )
        .outputItems(
            '2x ae2:logic_processor'
        )
        .duration(100)
        .EUt(16)
})