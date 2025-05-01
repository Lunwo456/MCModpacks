ServerEvents.recipes(event => {
    const GTR = event.recipes.gtceu
    //采矿场
    event.shaped('gtceu:mining_drone',[
        ['gtceu:mv_electric_motor','#gtceu:circuits/mv','gtceu:mv_electric_pump'],
        ['gtceu:mv_conveyor_module','gtceu:mv_machine_hull','gtceu:steel_normal_fluid_pipe'],
        ['gtceu:copper_single_cable','#gtceu:circuits/mv','gtceu:copper_single_cable']
    ]).id('gtceu:mining_drone')
    //无人机
    //LV
    GTR.assembler('miningdrone:mining_drone_lv/1')
        .itemInputs(
            'gtceu:steel_frame',
            '2x gtceu:lv_sensor',
            '2x gtceu:lv_robot_arm',
            '2x gtceu:tin_single_cable',
            '#gtceu:circuits/lv'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 72)
        )
        .itemOutputs(
            'miningdrone:mining_drone_lv'
        )
        .duration(100)
        .EUt(32)
    GTR.assembler('miningdrone:mining_drone_lv/2')
        .itemInputs(
            'gtceu:steel_frame',
            '2x gtceu:lv_sensor',
            '2x gtceu:lv_robot_arm',
            '2x gtceu:tin_single_cable',
            '#gtceu:circuits/lv'
        )
        .inputFluids(
            Fluid.of('gtceu:tin', 144)
        )
        .itemOutputs(
            'miningdrone:mining_drone_lv'
        )
        .duration(100)
        .EUt(32)
    //MV
    GTR.assembler('miningdrone:mining_drone_mv/1')
        .itemInputs(
            'gtceu:aluminium_frame',
            '2x gtceu:mv_sensor',
            '2x gtceu:mv_robot_arm',
            '2x gtceu:copper_single_cable',
            '#gtceu:circuits/mv'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 72)
        )
        .itemOutputs(
            'miningdrone:mining_drone_mv'
        )
        .duration(100)
        .EUt(128)
    GTR.assembler('miningdrone:mining_drone_mv/2')
        .itemInputs(
            'gtceu:aluminium_frame',
            '2x gtceu:mv_sensor',
            '2x gtceu:mv_robot_arm',
            '2x gtceu:copper_single_cable',
            '#gtceu:circuits/mv'
        )
        .inputFluids(
            Fluid.of('gtceu:tin', 144)
        )
        .itemOutputs(
            'miningdrone:mining_drone_mv'
        )
        .duration(100)
        .EUt(128)
    //HV
    GTR.assembler('miningdrone:mining_drone_hv/1')
        .itemInputs(
            'gtceu:stainless_steel_frame',
            '2x gtceu:hv_sensor',
            '2x gtceu:hv_robot_arm',
            '2x gtceu:gold_single_cable',
            '#gtceu:circuits/hv'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 72)
        )
        .itemOutputs(
            'miningdrone:mining_drone_hv'
        )
        .duration(100)
        .EUt(512)
    GTR.assembler('miningdrone:mining_drone_hv/2')
        .itemInputs(
            'gtceu:stainless_steel_frame',
            '2x gtceu:hv_sensor',
            '2x gtceu:hv_robot_arm',
            '2x gtceu:gold_single_cable',
            '#gtceu:circuits/hv'
        )
        .inputFluids(
            Fluid.of('gtceu:tin', 144)
        )
        .itemOutputs(
            'miningdrone:mining_drone_hv'
        )
        .duration(100)
        .EUt(512)
    //EV
    GTR.assembler('miningdrone:mining_drone_ev/1')
        .itemInputs(
            'gtceu:titanium_frame',
            '2x gtceu:ev_sensor',
            '2x gtceu:ev_robot_arm',
            '2x gtceu:aluminium_single_cable',
            '#gtceu:circuits/ev'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 72)
        )
        .itemOutputs(
            'miningdrone:mining_drone_ev'
        )
        .duration(100)
        .EUt(2048)
    GTR.assembler('miningdrone:mining_drone_ev/2')
        .itemInputs(
            'gtceu:titanium_frame',
            '2x gtceu:ev_sensor',
            '2x gtceu:ev_robot_arm',
            '2x gtceu:aluminium_single_cable',
            '#gtceu:circuits/ev'
        )
        .inputFluids(
            Fluid.of('gtceu:tin', 144)
        )
        .itemOutputs(
            'miningdrone:mining_drone_ev'
        )
        .duration(100)
        .EUt(2048)
    //IV
    GTR.assembler('miningdrone:mining_drone_iv/1')
        .itemInputs(
            'gtceu:tungsten_steel_frame',
            '2x gtceu:iv_sensor',
            '2x gtceu:iv_robot_arm',
            '2x gtceu:platinum_single_cable',
            '#gtceu:circuits/iv'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 72)
        )
        .itemOutputs(
            'miningdrone:mining_drone_iv'
        )
        .duration(100)
        .EUt(8192)
    GTR.assembler('miningdrone:mining_drone_iv/2')
        .itemInputs(
            'gtceu:tungsten_steel_frame',
            '2x gtceu:iv_sensor',
            '2x gtceu:iv_robot_arm',
            '2x gtceu:platinum_single_cable',
            '#gtceu:circuits/iv'
        )
        .inputFluids(
            Fluid.of('gtceu:tin', 144)
        )
        .itemOutputs(
            'miningdrone:mining_drone_iv'
        )
        .duration(100)
        .EUt(8192)
    //LuV
    GTR.assembly_line('miningdrone:mining_drone_luv')
        .itemInputs(
            'gtceu:tungsten_steel_frame',
            '2x gtceu:luv_sensor',
            '2x gtceu:luv_robot_arm',
            '2x gtceu:niobium_titanium_single_cable',
            '#gtceu:circuits/luv'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 576)
        )
        .itemOutputs('miningdrone:mining_drone_luv')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LuV])
        ["scannerResearch(java.util.function.UnaryOperator)"](b => 
            b.researchStack(
                Item.of('miningdrone:mining_drone_iv')
            )
            .EUt(GTValues.VA[GTValues.EV])
            .duration(420))
    //ZPM
    GTR.assembly_line('miningdrone:mining_drone_zpm')
        .itemInputs(
            'gtceu:naquadah_alloy_frame',
            '2x gtceu:zpm_sensor',
            '2x gtceu:zpm_robot_arm',
            '2x gtceu:vanadium_gallium_single_cable',
            '#gtceu:circuits/zpm'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 1152)
        )
        .itemOutputs('miningdrone:mining_drone_zpm')
        .duration(100)
        .EUt(GTValues.VA[GTValues.ZPM])
        ["scannerResearch(java.util.function.UnaryOperator)"](b => 
            b.researchStack(
                Item.of('miningdrone:mining_drone_luv')
            )
            .EUt(GTValues.VA[GTValues.EV])
            .duration(420))
})