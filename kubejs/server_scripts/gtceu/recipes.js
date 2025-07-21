ServerEvents.recipes(event => {
    const GTR = event.recipes.gtceu
    //处理器
    const F = ["gtceu:tin", "gtceu:soldering_alloy"]
    const n = [144, 72]
    for(var i = 0; i < 2; i++){
        GTR.circuit_assembler('gtceu:optical_quantum_processor_zpm_0/' + i)
            .itemInputs(
                '8x gtceu:advanced_smd_transistor',
                '4x gtceu:advanced_smd_capacitor',
                '4x gtceu:fine_pikyonium_64_y_wire',
                'gtceu:optical_quantum_processing_core',
                'gtceu:highly_advanced_soc',
                '2x gtceu:qbit_cpu_chip'
            )
            .inputFluids(
                Fluid.of(F[i], n[i])
            )
            .itemOutputs('4x gtceu:optical_quantum_processor_zpm')
            .duration(200)
            .EUt(150000)
            .cleanroom(CleanroomType.CLEANROOM)

        GTR.circuit_assembler('gtceu:optical_quantum_processor_uv/' + i)
            .itemInputs(
                'gtceu:ha_printed_circuit_board',
                '2x gtceu:optical_quantum_processor_zpm',
                '8x gtceu:advanced_smd_inductor',
                '16x gtceu:advanced_smd_capacitor',
                '24x gtceu:ram_chip',
                '16x gtceu:fine_pikyonium_64_y_wire'
            )
            .inputFluids(
                Fluid.of(F[i], n[i])
            )
            .itemOutputs('2x gtceu:optical_quantum_processor_uv')
            .duration(200)
            .EUt(150000)
            .cleanroom(CleanroomType.CLEANROOM)
    }
    //装配线
    GTR.assembly_line('gtceu:optical_quantum_processor_uhv')
        .itemInputs(
            'gtceu:ha_printed_circuit_board',
            '2x gtceu:optical_quantum_processor_uv',
            '12x gtceu:advanced_smd_diode',
            '24x gtceu:nor_memory_chip',
            '48x gtceu:ram_chip',
            '24x gtceu:fine_pikyonium_64_y_wire',
            '32x gtceu:polybenzimidazole_foil',
            '4x gtceu:europium_plate'
        )
        .inputFluids(
            Fluid.of("gtceu:soldering_alloy", 1152)
        )
        .itemOutputs('gtceu:optical_quantum_processor_uhv')
        .duration(400)
        .EUt(160000)

    GTR.assembly_line('gtceu:optical_quantum_processor_uev')
        .itemInputs(
            '2x gtceu:neutronium_frame',
            '2x gtceu:optical_quantum_processor_uhv',
            '48x gtceu:advanced_smd_diode',
            '48x gtceu:advanced_smd_capacitor',
            '48x gtceu:advanced_smd_transistor',
            '48x gtceu:advanced_smd_resistor',
            '48x gtceu:advanced_smd_inductor',
            '64x gtceu:polybenzimidazole_foil',
            '48x gtceu:ram_chip',
            '16x gtceu:ruthenium_trinium_americium_neutronate_double_wire',
            '8x gtceu:europium_plate'
        )
        .inputFluids(
            Fluid.of("gtceu:soldering_alloy", 2880),
            Fluid.of("gtceu:polybenzimidazole", 1152)
        )
        .itemOutputs('gtceu:optical_quantum_processor_uev')
        .duration(2000)
        .EUt(800000)
        .stationResearch(b => 
            b.researchStack(Item.of('gtceu:optical_quantum_processor_uhv'))
            .EUt(500000)
            .CWUt(108)
        )
    //cpu
    //光量子
    GTR.assembler('gtceu:optical_quantum_processing_core')
        .itemInputs(
            '4x gtceu:graphene_plate',
            '2x gtceu:polybenzimidazole_foil',
            '8x gtceu:fine_yttrium_barium_cuprate_wire',
            '4x gtceu:advanced_smd_resistor',
            '4x gtceu:advanced_smd_diode',
            '4x mekanism:laser',
            'mekanism:laser_amplifier',
            'mekanism:laser_tractor_beam'
        )
        .inputFluids(
            Fluid.of("gtceu:soldering_alloy", 72)
        )
        .itemOutputs('gtceu:optical_quantum_processing_core')
        .duration(100)
        .EUt(120000)
        .cleanroom(CleanroomType.CLEANROOM)
    //其他
    GTR.wiremill('gtceu:fine_pikyonium_64_y_wire')
        .itemInputs('gtca:pikyonium64_y_ingot')
        .itemOutputs('8x gtceu:fine_pikyonium_64_y_wire')
        .duration(320)
        .EUt(7)

    GTR.macerator('gtceu:gaia_dust')
        .itemInputs('botania:gaia_ingot')
        .itemOutputs('gtceu:gaia_dust')
        .duration(60)
        .EUt(8)

    GTR.macerator('gtceu:alfsteel_dust')
        .itemInputs('mythicbotany:alfsteel_ingot')
        .itemOutputs('gtceu:alfsteel_dust')
        .duration(60)
        .EUt(8)
    //魔法合金
    GTR.mixer('gtceu:magic_alloy_dust')
        .itemInputs(
            'gtceu:gaia_dust',
            'gtceu:alfsteel_dust',
            'bloodmagic:reagentbinding'
        )
        .inputFluids(
            Fluid.of("bloodmagic:life_essence_fluid", 2000)
        )
        .itemOutputs('3x gtceu:magic_alloy_dust')
        .duration(200)
        .EUt(131072)
    //贴片
    GTR.assembly_line('gtceu:magic_smd_transistor')
        .itemInputs(
            "gtceu:magic_alloy_foil",
            "8x gtceu:fine_silver_wire"
        )
        .inputFluids(
            Fluid.of("gtceu:polybenzimidazole", 576),
            Fluid.of("gtceu:mana_steel", 864)
        )
        .itemOutputs('32x gtceu:magic_smd_transistor')
        .duration(160)
        .EUt(65536)

    GTR.assembly_line('gtceu:magic_smd_resistor')
        .itemInputs(
            'gtceu:graphene_dust',
            '4x gtceu:fine_magic_alloy_wire'
        )
        .inputFluids(
            Fluid.of("gtceu:polybenzimidazole", 576),
            Fluid.of("gtceu:mana_steel", 864)
        )
        .itemOutputs('32x gtceu:magic_smd_resistor')
        .duration(160)
        .EUt(65536)

    GTR.assembly_line('gtceu:magic_smd_capacitor')
        .itemInputs(
            '2x gtceu:polybenzimidazole_foil',
            'gtceu:magic_alloy_foil'
        )
        .inputFluids(
            Fluid.of("gtceu:polybenzimidazole", 576),
            Fluid.of("gtceu:mana_steel", 864)
        )
        .itemOutputs('32x gtceu:magic_smd_capacitor')
        .duration(160)
        .EUt(65536)

    GTR.assembly_line('gtceu:magic_smd_diode')
        .itemInputs(
            'gtceu:magic_alloy_dust',
            '16x gtceu:fine_silver_wire'
        )
        .inputFluids(
            Fluid.of("gtceu:polybenzimidazole", 576),
            Fluid.of("gtceu:mana_steel", 864)
        )
        .itemOutputs('64x gtceu:magic_smd_diode')
        .duration(160)
        .EUt(65536)

    GTR.assembly_line('gtceu:magic_smd_inductor')
        .itemInputs(
            'gtceu:magic_alloy_ring',
            '4x gtceu:fine_magic_alloy_wire'
        )
        .inputFluids(
            Fluid.of("gtceu:polybenzimidazole", 576),
            Fluid.of("gtceu:mana_steel", 864)
        )
        .itemOutputs('32x gtceu:magic_smd_inductor')
        .duration(160)
        .EUt(65536)
    //soc
    GTR.chemical_reactor('gtceu:magic_soc_wafer')
        .itemInputs(
            'gtceu:highly_advanced_soc_wafer',
            'gtceu:magic_alloy_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:neutronium', 288)
        )
        .itemOutputs(
            'gtceu:magic_soc_wafer'
        )
        .duration(800)
        .EUt(131072)
        .cleanroom(CleanroomType.CLEANROOM)

    GTR.cutter('gtceu:magic_soc_chip/1')
        .itemInputs(
            'gtceu:magic_soc_wafer'
        )
        .inputFluids(
            Fluid.of('water', 1000)
        )
        .itemOutputs('8x gtceu:magic_soc_chip')
        .duration(800)
        .EUt(131072)
        .cleanroom(CleanroomType.CLEANROOM)

    GTR.cutter('gtceu:magic_soc_chip/2')
        .itemInputs(
            'gtceu:magic_soc_wafer'
        )
        .inputFluids(
            Fluid.of('gtceu:distilled_water', 750)
        )
        .itemOutputs('8x gtceu:magic_soc_chip')
        .duration(600)
        .EUt(131072)
        .cleanroom(CleanroomType.CLEANROOM)
    
    GTR.cutter('gtceu:magic_soc_chip/3')
        .itemInputs(
            'gtceu:magic_soc_wafer'
        )
        .inputFluids(
            Fluid.of('gtceu:lubricant', 250)
        )
        .itemOutputs('8x gtceu:magic_soc_chip')
        .duration(400)
        .EUt(131072)
        .cleanroom(CleanroomType.CLEANROOM)
    //pcb
    GTR.chemical_reactor('gtceu:ha_printed_circuit_board')
        .itemInputs(
            'gtceu:neutronium_plate',
            '2x gtceu:enriched_naquadah_trinium_europium_duranide_foil'
        )
        .inputFluids(
            Fluid.of('gtceu:nitration_mixture', 4000)
        )
        .itemOutputs('16x gtceu:ha_printed_circuit_board')
        .duration(400)
        .EUt(240000)
        .cleanroom(CleanroomType.CLEANROOM)

    GTR.chemical_reactor('gtceu:magic_printed_circuit_board')
        .itemInputs(
            'gtceu:ha_printed_circuit_board',
            'gtceu:magic_alloy_foil'
        )
        .inputFluids(
            Fluid.of('gtceu:aqua_regia', 500)
        )
        .itemOutputs('gtceu:magic_printed_circuit_board')
        .duration(200)
        .EUt(120000)
        .cleanroom(CleanroomType.CLEANROOM)
})