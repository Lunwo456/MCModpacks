ServerEvents.recipes(event => {
    //铝土
    event.remove({id:'immersiveengineering:smelting/ingot_aluminum'})
    event.remove({id:'immersiveengineering:smelting/ingot_aluminum2'})
    event.remove({id:'immersiveengineering:smelting/ingot_aluminum_from_blasting'})
    event.remove({id:'immersiveengineering:smelting/ingot_aluminum_from_blasting2'})
    event.remove({id:'enderio:smelting/immersiveengineering/smelting/ingot_aluminum'})
    event.remove({id:'enderio:smelting/immersiveengineering/smelting/ingot_aluminum2'})
    event.remove({id:'thermal:compat/immersiveengineering/pulverizer_ie_aluminum_ore'})
    event.remove({id:'thermal:compat/immersiveengineering/smelter_ie_aluminum_ore'})
    //格雷硬币
    event.remove({id:'gtceu:forming_press/credit_cupronickel'})
    //时间之瓶
    event.remove({output:'tiab:time_in_a_bottle'})
    //铱
    event.remove({mod:'alltheores', input:'gtceu:iridium_dust', output:'gtceu:iridium_ingot'})
    //拆解台
    event.remove({id:'twilightforest:uncrafting_table'})
})