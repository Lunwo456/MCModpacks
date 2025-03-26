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
    event.remove({mod:'alltheores', output:'gtceu:iridium_ingot'})
    event.remove({mod:'alltheores', output:'gtceu:iridium_dust'})
    //event.remove({mod:'alltheores', output:'gtceu:raw_iridium'})
    event.remove({output:'alltheores:iridium_clump'})
    event.remove({output:'alltheores:iridium_shard'})
    event.remove({id:'alltheores:mek_processing/iridium/slurry/dirty'})
    event.remove({id:'alltheores:mek_processing/iridium/slurry/dirty/from_raw_block'})
    event.remove({id:'alltheores:mek_processing/iridium/slurry/dirty_from_raw'})
    event.remove({id:'alltheores:mek_processing/iridium/slurry/clean'})
    event.remove({id:'alltheores:mek_processing/iridium/dirty_dust/from_clump'})
    event.remove({output:'alltheores:iridium_crystal'})
    event.remove({input:'alltheores:iridium_crystal'})
    event.remove({id:'enderio:smelting/alltheores/iridium_ingot_from_ore'})
    event.remove({id:'enderio:smelting/alltheores/iridium_ingot_from_dust'})
    event.remove({id:'enderio:smelting/alltheores/iridium_ingot_from_raw'})
    //拆解台
    event.remove({type:'twilightforest:uncrafting'})
})