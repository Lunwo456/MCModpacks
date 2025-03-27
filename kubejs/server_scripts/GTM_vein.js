GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:osmium_n_vein", vein => {
        vein.weight(20)
        vein.clusterSize(40)
        vein.density(0.3)
        vein.discardChanceOnAirExposure(0)
        vein.layer("stone")
        vein.dimensions("minecraft:overworld")
        vein.heightRangeTriangle(0, 30)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.Osmium).size(1, 1))
                .layer(l => l.weight(3).mat(GTMaterials.Nickel).size(1, 2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Nickel)
            .placement("above")
            .density(0.4)
            .radius(5)
        )
    })
    event.add("kubejs:osmium_n_d_vein", vein => {
        vein.weight(20)
        vein.clusterSize(40)
        vein.density(0.3)
        vein.discardChanceOnAirExposure(0)
        vein.layer("deepslate")
        vein.dimensions("minecraft:overworld")
        vein.heightRangeTriangle(-60, -30)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.Osmium).size(1, 1))
                .layer(l => l.weight(3).mat(GTMaterials.Nickel).size(1, 2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Nickel)
            .placement("above")
            .density(0.4)
            .radius(5)
        )
    })
    event.add("kubejs:osmium_c_vein", vein => {
        vein.weight(20)
        vein.clusterSize(40)
        vein.density(0.3)
        vein.discardChanceOnAirExposure(0)
        vein.layer("stone")
        vein.dimensions("minecraft:overworld")
        vein.heightRangeTriangle(0, 30)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.Osmium).size(1, 1))
                .layer(l => l.weight(5).mat(GTMaterials.Chalcocite).size(1, 2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Chalcocite)
            .placement("above")
            .density(0.4)
            .radius(5)
        )
    })
    event.add("kubejs:osmium_c_d_vein", vein => {
        vein.weight(20)
        vein.clusterSize(40)
        vein.density(0.3)
        vein.discardChanceOnAirExposure(0)
        vein.layer("deepslate")
        vein.dimensions("minecraft:overworld")
        vein.heightRangeTriangle(-40, -10)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.Osmium).size(1, 1))
                .layer(l => l.weight(5).mat(GTMaterials.Chalcocite).size(1, 2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Chalcocite)
            .placement("above")
            .density(0.4)
            .radius(5)
        )
    })
})