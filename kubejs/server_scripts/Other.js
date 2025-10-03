BlockEvents.rightClicked("kubejs:void_dimension_portal", event => {
    if (event.player.getHeldItem("main_hand") == "air") {
        event.player.swing()
        let name = event.player.name.string
        let dim = event.player.level.dimension
        if (dim == "minecraft:overworld") {
            event.player.persistentData.putDouble("temp", event.block.y)
            event.server.runCommandSilent(`execute in kubejs:void_dimension run teleport ${name} ${event.block.x} 64 ${event.block.z}`)
            event.server.runCommandSilent(`execute in kubejs:void_dimension run setblock ${event.block.x} 63 ${event.block.z} kubejs:void_dimension_portal`)
        }else if (dim == "kubejs:void_dimension") {
            let temp = event.player.persistentData.getDouble("temp")
            event.server.runCommandSilent(`execute in minecraft:overworld run teleport ${name} ${event.block.x} ${temp + 1} ${event.block.z}`)
            event.server.runCommandSilent(`execute in minecraft:overworld run setblock ${event.block.x} ${temp} ${event.block.z} kubejs:void_dimension_portal`)
        }
    }
})