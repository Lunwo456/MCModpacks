ServerEvents.recipes(event => {
    const GTR = event.recipes.gtceu
//--------蚀刻--------
    const lasers = [
        ['gtceu:silicon_wafer', 1, 120],
        ['gtceu:phosphorus_wafer', 4, 480],
        ['gtceu:naquadah_wafer', 8, 1920],
        ['gtceu:neutronium_wafer', 16, 7680]
    ]
    lasers.forEach(
        (laser, index) =>{
            //蚀刻运算晶圆
            GTR.laser_engraver('morechip:calculation_wafer/' + index)
                .itemInputs(
                    laser[0]
                )
                .notConsumable(
                    'ae2:calculation_processor_press'
                )
                .itemOutputs(
                    laser[1] + 'x morechip:calculation_wafer'
                )
                .duration(40)
                .EUt(laser[2])
            //蚀刻工程晶圆
            GTR.laser_engraver('morechip:engineering_wafer/' + index)
                .itemInputs(
                    laser[0]
                )
                .notConsumable(
                    'ae2:engineering_processor_press'
                )
                .itemOutputs(
                    laser[1] + 'x morechip:engineering_wafer'
                )
                .duration(40)
                .EUt(laser[2])
            //蚀刻逻辑晶圆
            GTR.laser_engraver('morechip:logic_wafer/' + index)
                .itemInputs(
                    laser[0]
                )
                .notConsumable(
                    'ae2:logic_processor_press'
                )
                .itemOutputs(
                    laser[1] + 'x morechip:logic_wafer'
                )
                .duration(40)
                .EUt(laser[2])
            //蚀刻累积晶圆
            GTR.laser_engraver('morechip:accumulation_wafer/' + index)
                .itemInputs(
                    laser[0]
                )
                .notConsumable(
                    'megacells.accumulation_processor_press'
                )
                .itemOutputs(
                    laser[1] + 'x morechip:accumulation_wafer'
                )
                .duration(40)
                .EUt(laser[2])
        }
    )
//--------切割--------
    const cuttings = [
        ['minecraft:water', 270, 200],
        ['gtceu:distilled_water', 202, 150],
        ['gtceu:lubricant', 67, 100]
    ]
    cuttings.forEach(
        (cutting, index) => {
            //切割运算晶圆
            GTR.cutter('morechip:calculation_chip/' + index)
                .itemInputs(
                    'morechip:calculation_wafer'
                )
                .inputFluids(
                    Fluid.of(cutting[0], cutting[1])
                )
                .itemOutputs(
                    '32x morechip:calculation_chip'
                )
                .duration(cutting[2])
                .EUt(96)
            //切割工程晶圆
            GTR.cutter('morechip:engineering_chip/' + index)
                .itemInputs(
                    'morechip:engineering_wafer'
                )
                .inputFluids(
                    Fluid.of(cutting[0], cutting[1])
                )
                .itemOutputs(
                    '32x morechip:engineering_chip'
                )
                .duration(cutting[2])
                .EUt(96)
            //切割逻辑晶圆
            GTR.cutter('morechip:logic_chip/' + index)
                .itemInputs(
                    'morechip:logic_wafer'
                )
                .inputFluids(
                    Fluid.of(cutting[0], cutting[1])
                )
                .itemOutputs(
                    '32x morechip:logic_chip'
                )
                .duration(cutting[2])
                .EUt(96)
            //切割累积晶圆
            GTR.cutter('morechip:accumulation_chip/' + index)
                .itemInputs(
                    'morechip:accumulation_wafer'
                )
                .inputFluids(
                    Fluid.of(cutting[0], cutting[1])
                )
                .itemOutputs(
                    '32x morechip:accumulation_chip'
                )
                .duration(cutting[2])
                .EUt(96)
        }
    )
//--------组装--------
    const assemblers = [
        ['gtceu:tin', 144],
        ['gtceu:soldering_alloy', 72]
    ]
    assemblers.forEach(
        (assembler, index) => {
            //合成运算处理器
            GTR.circuit_assembler('ae2:calculation_processor/' + index)
                .itemInputs(
                    'gtceu:resin_printed_circuit_board',
                    '2x morechip:calculation_chip',
                    'gtceu:red_alloy_single_wire'
                )
                .inputFluids(
                    Fluid.of(assembler[0], assembler[1])
                )
                .itemOutputs(
                    '2x ae2:calculation_processor'
                )
                .duration(100)
                .EUt(16)
            //合成工程处理器
            GTR.circuit_assembler('ae2:engineering_processor/' + index)
                .itemInputs(
                    'gtceu:resin_printed_circuit_board',
                    '2x morechip:engineering_chip',
                    'gtceu:red_alloy_single_wire'
                )
                .inputFluids(
                    Fluid.of(assembler[0], assembler[1])
                )
                .itemOutputs(
                    '2x ae2:engineering_processor'
                )
                .duration(100)
                .EUt(16)
            //合成逻辑处理器
            GTR.circuit_assembler('ae2:logic_processor/' + index)
                .itemInputs(
                    'gtceu:resin_printed_circuit_board',
                    '2x morechip:logic_chip',
                    'gtceu:red_alloy_single_wire'
                )
                .inputFluids(
                    Fluid.of(assembler[0], assembler[1])
                )
                .itemOutputs(
                    '2x ae2:logic_processor'
                )
                .duration(100)
                .EUt(16)
            //合成累积处理器
            GTR.circuit_assembler('megacells:accumulation_processor/' + index)
                .itemInputs(
                    'gtceu:resin_printed_circuit_board',
                    '2x morechip:accumulation_chip',
                    'gtceu:red_alloy_single_wire'
                )
                .inputFluids(
                    Fluid.of(assembler[0], assembler[1])
                )
                .itemOutputs(
                    '2x megacells:accumulation_processor'
                )
                .duration(100)
                .EUt(16)
        }
    )
})