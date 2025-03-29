ServerEvents.recipes(event => {
    event.replaceInput(
        [
            {mod:'mekanism', type:'crafting_shaped'},
        ],
        "#forge:ingots/osmium",
        "#forge:ingots/steel"
    )
    event.replaceInput(
        {mod:'megacells', type:'minecraft:crafting_shaped'},
        "#forge:ingots/osmium",
        "#forge:ingots/steel"
    )
    event.replaceInput(
        [
            {id:'appmek:chemical_cell_housing'},
            {id:'mekanismgenerators:generator/solar'},
            {id:'mekanismgenerators:generator/gas_burning'},
            {id:'mekanismgenerators:generator/heat'},
            {id:'mekanismgenerators:solar_panel'}
        ],
        "#forge:ingots/osmium",
        "#forge:ingots/steel"
    )
    event.replaceInput(
        {id:'mekanism:control_circuit/basic'},
        "#forge:ingots/osmium",
        "copper_ingot"
    )
    event.replaceInput(
        {id:'mekanism:electrolytic_core'},
        "#forge:dusts/osmium",
        "#forge:dusts/steel"
    )
    event.remove('mekanism:processing/refined_obsidian/ingot/from_dust')
    event.recipes.mekanism.combining('mekanism:ingot_refined_obsidian', 'mekanism:dust_refined_obsidian', '#forge:ingots/steel').id("kubejs:refined_obsidian")
    event.remove('mekanism:processing/refined_glowstone/ingot/from_dust')
    event.recipes.mekanism.combining('mekanism:ingot_refined_glowstone', 'minecraft:glowstone_dust', '#forge:ingots/steel').id("kubejs:refined_glowstone")
    event.custom({
        "type": "mekanism:mek_data",
        "key": {
            "A": {
                "tag": "mekanism:alloys/infused"
            },
            "E": {
                "item": "mekanism:energy_tablet"
            },
            "I": {
                "tag": "forge:ingots/steel"
            },
            "P": {
                "item": "mekanism:basic_energy_cube"
            }
        },
        "pattern": [
            "AEA",
            "IPI",
            "AEA"
        ],
        "result": {
            "item": "mekanism:advanced_energy_cube"
        }
    }).id("mekanism:energy_cube/advanced")
    event.custom({
        "type": "mekanism:mek_data",
        "key": {
            "A": {
                "tag": "mekanism:alloys/infused"
            },
            "C": {
                "tag": "forge:circuits/basic"
            },
            "E": {
                "item": "mekanism:energy_tablet"
            },
            "O": {
                "tag": "forge:ingots/steel"
            }
        },
        "pattern": [
            " O ",
            "OAO",
            "ECE"
        ],
        "result": {
            "item": "mekanismgenerators:wind_generator"
        }
    }).id("mekanismgenerators:generator/wind")
    event.custom({
        "type": "mekanism:mek_data",
        "key": {
            "A": {
                "tag": "mekanism:alloys/infused"
            },
            "C": {
                "tag": "forge:circuits/advanced"
            },
            "O": {
                "tag": "forge:ingots/steel"
            },
            "P": {
                "item": "mekanism:enrichment_chamber"
            }
        },
        "pattern": [
            "ACA",
            "OPO",
            "ACA"
        ],
        "result": {
            "item": "mekanism:purification_chamber"
        }
    }).id("mekanism:purification_chamber")
})