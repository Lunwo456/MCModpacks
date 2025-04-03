ServerEvents.recipes(event => {
    //煤炭粉
    event.recipes.create.crushing('gtceu:coal_dust', 'minecraft:coal').id("create:gtceu/coal_dust")
    //木炭粉
    event.recipes.create.crushing('gtceu:charcoal_dust', 'minecraft:charcoal').id("create:gtceu/charcoal_dust")
    //钢
    event.recipes.create.mixing('gtceu:steel_dust', ['gtceu:iron_dust', 'gtceu:coal_dust']).id("create:steel_dust")
    event.recipes.create.mixing('gtceu:steel_dust', ['gtceu:iron_dust', '2x gtceu:charcoal_dust']).id("create:steel_dust/1")
})