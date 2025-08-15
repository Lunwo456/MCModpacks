ServerEvents.recipes(event =>{
    const GTR = event.recipes.gtceu
    const n =[1, 4, 16, 64]
    for (var i = 0; i < n.length; i++) {
        GTR.mining_drone('miningdrone:overworld_mining_lv/'+ i)
        .notConsumable(
            Item.of('miningdrone:mining_drone_lv', n[i])
        )
        .inputFluids(
            Fluid.of('gtceu:diesel', 1000*n[i])
        )
        .chancedOutput(Item.of('gtceu:raw_cassiterite', n[i]), 6000, 0,)
        .chancedOutput(Item.of('gtceu:raw_goethite', n[i]), 6000, 0,)
        .chancedOutput(Item.of('gtceu:raw_yellow_limonite', n[i]), 6000, 0,)
        .chancedOutput(Item.of('gtceu:raw_hematite', n[i]), 6000, 0,)
        .chancedOutput(Item.of('gtceu:raw_malachite', n[i]), 6000, 0,)
        .chancedOutput(Item.of('gtceu:raw_chalcopyrite', n[i]), 6000, 0,)
        .chancedOutput(Item.of('gtceu:raw_pyrite', n[i]), 6000, 0,)
        .chancedOutput(Item.of('gtceu:raw_cassiterite_sand', n[i]), 6000, 0,)
        .chancedOutput(Item.of('gtceu:raw_garnet_sand', n[i]), 6000, 0,)
        .chancedOutput(Item.of('gtceu:raw_asbestos', n[i]), 6000, 0,)
        .chancedOutput(Item.of('gtceu:raw_magnetite', n[i]), 6000, 0,)
        .chancedOutput(Item.of('gtceu:raw_vanadium_magnetite', n[i]), 6000, 0,)
        .chancedOutput(Item.of('gtceu:raw_basaltic_mineral_sand', n[i]), 6000, 0,)
        .chancedOutput(Item.of('gtceu:raw_granitic_mineral_sand', n[i]), 6000, 0,)
        .chancedOutput(Item.of('gtceu:raw_fullers_earth', n[i]), 5000, 0,)
        .chancedOutput(Item.of('gtceu:raw_gypsum', n[i]), 4000, 0,)
        .chancedOutput(Item.of('gtceu:raw_diatomite', n[i]), 4000, 0,)
        .chancedOutput(Item.of('minecraft:raw_gold', n[i]), 3000, 0)
        .EUt(32)
        .duration(200)
        .circuit(i)
        .dimension("minecraft:overworld")
    }
})