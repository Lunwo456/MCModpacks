ServerEvents.tags('item', event => {
    //mek控制电路
    event.add('gtceu:circuits/ulv', 'mekanism:basic_control_circuit')
    event.add('gtceu:circuits/lv', 'mekanism:advanced_control_circuit')
    event.add('gtceu:circuits/mv', 'mekanism:elite_control_circuit')
    event.add('gtceu:circuits/hv', 'mekanism:ultimate_control_circuit')
    //铝锭
    event.add('forge:ingots/aluminium', 'immersiveengineering:ingot_aluminum')
    event.add('forge:ingots/aluminium', 'alltheores:aluminum_ingot')
    event.add('forge:ingots/aluminum', 'gtceu:aluminium_ingot')
    //铝粉
    event.add('forge:dusts/aluminium', 'immersiveengineering:dust_aluminum')
    event.add('forge:dusts/aluminum', 'gtceu:aluminium_dust')
    //铝板
    event.add('forge:plates/aluminium', 'immersiveengineering:plate_aluminum')
    event.add('forge:plates/aluminum', 'gtceu:aluminium_plate')
    //铝杆
    event.add('forge:rods/aluminium', 'immersiveengineering:stick_aluminum')
    event.add('forge:rods/aluminum', 'gtceu:aluminium_rod')
    //铝矿
    event.add('forge:ores/bauxite','immersiveengineering:ore_aluminum')
    event.remove('forge:ores/aluminum', 'immersiveengineering:ore_aluminum')
    event.add('forge:ores/bauxite','immersiveengineering:deepslate_ore_aluminum')
    event.remove('forge:ores/aluminum', 'immersiveengineering:deepslate_ore_aluminum')
    const have_aluminum_ore = event.get('forge:ores/aluminum').getObjectIds()
    event.add('forge:ores/aluminium', have_aluminum_ore)
    const have_aluminium_ore = event.get('forge:ores/aluminium').getObjectIds()
    event.add('forge:ores/aluminum', have_aluminium_ore)
})