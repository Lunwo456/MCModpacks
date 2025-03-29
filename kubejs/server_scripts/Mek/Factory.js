ServerEvents.recipes(event => {
    event.custom({
        "type": "mekanism:mek_data",
        "key": {
            "A": {
                "tag": "mekanism:alloys/infused"
            },
            "C": {
                "tag": "forge:circuits/advanced"
            },
            "I": {
                "tag": "forge:ingots/steel"
            },
            "P": {
                "item": "mekanism:basic_combining_factory"
            }
        },
        "pattern": [
            "ACA",
            "IPI",
            "ACA"
        ],
        "result": {
            "item": "mekanism:advanced_combining_factory"
        }
    }).id("mekanism:factory/advanced/combining")
    event.custom({
        "type": "mekanism:mek_data",
        "key": {
            "A": {
                "tag": "mekanism:alloys/infused"
            },
            "C": {
                "tag": "forge:circuits/advanced"
            },
            "I": {
                "tag": "forge:ingots/steel"
            },
            "P": {
                "item": "mekanism:basic_compressing_factory"
            }
        },
        "pattern": [
            "ACA",
            "IPI",
            "ACA"
        ],
        "result": {
            "item": "mekanism:advanced_compressing_factory"
        }
    }).id("mekanism:factory/advanced/compressing")
    event.custom({
        "type": "mekanism:mek_data",
        "key": {
            "A": {
                "tag": "mekanism:alloys/infused"
            },
            "C": {
                "tag": "forge:circuits/advanced"
            },
            "I": {
                "tag": "forge:ingots/steel"
            },
            "P": {
                "item": "mekanism:basic_crushing_factory"
            }
        },
        "pattern": [
            "ACA",
            "IPI",
            "ACA"
        ],
        "result": {
            "item": "mekanism:advanced_crushing_factory"
        }
    }).id("mekanism:factory/advanced/crushing")
    event.custom({
        "type": "mekanism:mek_data",
        "key": {
            "A": {
                "tag": "mekanism:alloys/infused"
            },
            "C": {
                "tag": "forge:circuits/advanced"
            },
            "I": {
                "tag": "forge:ingots/steel"
            },
            "P": {
                "item": "mekanism:basic_enriching_factory"
            }
        },
        "pattern": [
            "ACA",
            "IPI",
            "ACA"
        ],
        "result": {
            "item": "mekanism:advanced_enriching_factory"
        }
    }).id("mekanism:factory/advanced/enriching")
    event.custom({
        "type": "mekanism:mek_data",
        "key": {
            "A": {
                "tag": "mekanism:alloys/infused"
            },
            "C": {
                "tag": "forge:circuits/advanced"
            },
            "I": {
                "tag": "forge:ingots/steel"
            },
            "P": {
                "item": "mekanism:basic_infusing_factory"
            }
        },
        "pattern": [
            "ACA",
            "IPI",
            "ACA"
        ],
        "result": {
            "item": "mekanism:advanced_infusing_factory"
        }
    }).id("mekanism:factory/advanced/infusing")
    event.custom({
        "type": "mekanism:mek_data",
        "key": {
            "A": {
                "tag": "mekanism:alloys/infused"
            },
            "C": {
                "tag": "forge:circuits/advanced"
            },
            "I": {
                "tag": "forge:ingots/steel"
            },
            "P": {
                "item": "mekanism:basic_injecting_factory"
            }
        },
        "pattern": [
            "ACA",
            "IPI",
            "ACA"
        ],
        "result": {
            "item": "mekanism:advanced_injecting_factory"
        }
    }).id("mekanism:factory/advanced/injecting")
    event.custom({
        "type": "mekanism:mek_data",
        "key": {
            "A": {
                "tag": "mekanism:alloys/infused"
            },
            "C": {
                "tag": "forge:circuits/advanced"
            },
            "I": {
                "tag": "forge:ingots/steel"
            },
            "P": {
                "item": "mekanism:basic_purifying_factory"
            }
        },
        "pattern": [
            "ACA",
            "IPI",
            "ACA"
        ],
        "result": {
            "item": "mekanism:advanced_purifying_factory"
        }
    }).id("mekanism:factory/advanced/purifying")
    event.custom({
        "type": "mekanism:mek_data",
        "key": {
            "A": {
                "tag": "mekanism:alloys/infused"
            },
            "C": {
                "tag": "forge:circuits/advanced"
            },
            "I": {
                "tag": "forge:ingots/steel"
            },
            "P": {
                "item": "mekanism:basic_sawing_factory"
            }
        },
        "pattern": [
            "ACA",
            "IPI",
            "ACA"
        ],
        "result": {
            "item": "mekanism:advanced_sawing_factory"
        }
    }).id("mekanism:factory/advanced/sawing")
    event.custom({
        "type": "mekanism:mek_data",
        "key": {
            "A": {
                "tag": "mekanism:alloys/infused"
            },
            "C": {
                "tag": "forge:circuits/advanced"
            },
            "I": {
                "tag": "forge:ingots/steel"
            },
            "P": {
                "item": "mekanism:basic_smelting_factory"
            }
        },
        "pattern": [
            "ACA",
            "IPI",
            "ACA"
        ],
        "result": {
            "item": "mekanism:advanced_smelting_factory"
        }
    }).id("mekanism:factory/advanced/smelting")
})