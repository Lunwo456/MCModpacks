GTCEuStartupEvents.registry('gtceu:recipe_type',event => {
    event.create('mining_drone')
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .category('mining_drone')
        .setEUIO('in')
        .setMaxIOSize(2, 18, 1, 0)
        .setSound(GTSoundEntries.BATH)
});

GTCEuStartupEvents.registry('gtceu:machine',event => {
    event.create('mining_drone', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('mining_drone')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('    F     F', '    F     F', '     FFFFF ', '           ', '           ', '           ')
            .aisle('F          ', 'F          ', 'FFFFFFPPPFF', ' CCC       ', ' CCC       ', '           ')
            .aisle('           ', '           ', 'FCCCFPPPPPF', 'C###G      ', 'C###G      ', ' CCC       ')
            .aisle('           ', '           ', 'FCCCFPPPPPF', 'C###C      ', 'C###C      ', ' COC       ')
            .aisle('           ', '           ', 'FCCCFPPPPPF', 'C###G      ', 'C###G      ', ' CCC       ')
            .aisle('F          ', 'F          ', 'FFFFFFPPPFF', ' CCC       ', ' CKC       ', '           ')
            .aisle('    F     F', '    F     F', '     FFFFF ', '           ', '           ', '           ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('F', Predicates.blocks('gtceu:steel_frame'))//钢框架
            .where('P', Predicates.blocks('gtceu:plascrete'))//塑料混凝土
            .where('G', Predicates.blocks('gtceu:steel_pipe_casing'))//钢管道方块
            .where('C', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())//机械方块
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE))
            )
            .where('O', Predicates.abilities(PartAbility.MUFFLER)//消声仓
                .setExactLimit(1)
            )
            .where('#', Predicates.air())
            .where(' ', Predicates.any())
            .build()
        ).workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_solid_steel",
            "miningdrone:block/machines/multiblock/mining_drone",
            false
        )
})