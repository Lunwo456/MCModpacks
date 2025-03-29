ServerEvents.recipes(event => {
    event.custom({
        "type": "mekanism:mek_data",
        "key": {
            "A": {
                "tag": "mekanism:alloys/infused"
            },
            "O": {
                "tag": "forge:ingots/steel"
            },
            "P": {
                "item": "mekanism:basic_chemical_tank"
            }
        },
        "pattern": [
            "AOA",
            "OPO",
            "AOA"
        ],
        "result": {
            "item": "mekanism:advanced_chemical_tank"
        }
    }).id("mekanism:chemical_tank/advanced")
    event.custom({
        "type": "mekanism:mek_data",
        "key": {
            "A": {
                "tag": "mekanism:alloys/reinforced"
            },
            "O": {
                "tag": "forge:ingots/steel"
            },
            "P": {
                "item": "mekanism:advanced_chemical_tank"
            }
        },
        "pattern": [
            "AOA",
            "OPO",
            "AOA"
        ],
        "result": {
            "item": "mekanism:elite_chemical_tank"
        }
    }).id("mekanism:chemical_tank/elite")
    event.custom({
        "type": "mekanism:mek_data",
        "key": {
            "A": {
                "tag": "mekanism:alloys/atomic"
            },
            "O": {
                "tag": "forge:ingots/steel"
            },
            "P": {
                "item": "mekanism:elite_chemical_tank"
            }
        },
        "pattern": [
            "AOA",
            "OPO",
            "AOA"
        ],
        "result": {
            "item": "mekanism:ultimate_chemical_tank"
        }
    }).id("mekanism:chemical_tank/ultimate")
})