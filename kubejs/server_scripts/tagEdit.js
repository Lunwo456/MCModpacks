ServerEvents.tags('item', event => {
    //mek控制电路
    event.add('gtceu:circuits/ulv', 'mekanism:basic_control_circuit')
    event.add('gtceu:circuits/lv', 'mekanism:advanced_control_circuit')
    event.add('gtceu:circuits/mv', 'mekanism:elite_control_circuit')
    event.add('gtceu:circuits/hv', 'mekanism:ultimate_control_circuit').
    //铝锭
    event.add('c:ingots/aluminium', 'immersiveengineering:ingot_aluminum')
    event.add('c:ingots/aluminium', 'alltheores:aluminum_ingot')
    event.add('c:ingots/aluminum', 'gtceu:aluminium_ingot')
    //铝粉
    event.add('c:dusts/aluminium', 'immersiveengineering:dust_aluminum')
    event.add('c:dusts/aluminum', 'gtceu:aluminium_dust')
    //铝板
    event.add('c:plates/aluminium', 'immersiveengineering:plate_aluminum')
    event.add('c:plates/aluminum', 'gtceu:aluminium_plate')
    //铝矿
    const have_aluminium_ore = event.get('c:ores/aluminium').getObjectIds()
    event.add('c:ores/aluminum', have_aluminium_ore)
    const have_aluminum_ore = event.get('c:ores/aluminum').getObjectIds()
    event.add('c:ores/aluminium', have_aluminum_ore)
})