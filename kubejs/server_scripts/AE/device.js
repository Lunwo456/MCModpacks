ServerEvents.recipes(event => {
    //me接口
    event.shaped(Item.of('ae2:interface', 1),
        [
            'IGI',
            'M M',
            'IGI'
        ],
        {
            I:'minecraft:iron_ingot',
            G:'#c:glass_blocks',
            M:'gtceu:lv_conveyor_module'
        }
    ).id('gtceu:interface/1')

    event.shaped(Item.of('ae2:interface', 2),
        [
            'IGI',
            'M M',
            'IGI'
        ],
        {
            I:'minecraft:iron_ingot',
            G:'#c:glass_blocks',
            M:'gtceu:mv_conveyor_module'
        }
    ).id('gtceu:interface/2')

    event.shaped(Item.of('ae2:interface', 4),
        [
            'IGI',
            'M M',
            'IGI'
        ],
        {
            I:'minecraft:iron_ingot',
            G:'#c:glass_blocks',
            M:'gtceu:hv_conveyor_module'
        }
    ).id('gtceu:interface/3')

    event.shaped(Item.of('ae2:interface', 8),
        [
            'IGI',
            'M M',
            'IGI'
        ],
        {
            I:'minecraft:iron_ingot',
            G:'#c:glass_blocks',
            M:'gtceu:ev_conveyor_module'
        }
    ).id('gtceu:interface/4')

    event.shaped(Item.of('ae2:interface', 16),
        [
            'IGI',
            'M M',
            'IGI'
        ],
        {
            I:'minecraft:iron_ingot',
            G:'#c:glass_blocks',
            M:'gtceu:iv_conveyor_module'
        }
    ).id('gtceu:interface/5')

    event.shaped(Item.of('ae2:interface', 32),
        [
            'IGI',
            'M M',
            'IGI'
        ],
        {
            I:'minecraft:iron_ingot',
            G:'#c:glass_blocks',
            M:'gtceu:luv_conveyor_module'
        }
    ).id('gtceu:interface/6')

    event.shaped(Item.of('ae2:interface', 64),
        [
            'IGI',
            'M M',
            'IGI'
        ],
        {
            I:'minecraft:iron_ingot',
            G:'#c:glass_blocks',
            M:'gtceu:zpm_conveyor_module'
        }
    ).id('gtceu:interface/7')
    //样板供应器
    event.shaped(Item.of('ae2:pattern_provider', 1),
        [
            'ICI',
            'M M',
            'ICI'
        ],
        {
            I:'minecraft:iron_ingot',
            C:'minecraft:crafting_table',
            M:'gtceu:lv_conveyor_module'
        }
    ).id('gtceu:pattern_provider/1')

    event.shaped(Item.of('ae2:pattern_provider', 2),
        [
            'ICI',
            'M M',
            'ICI'
        ],
        {
            I:'minecraft:iron_ingot',
            C:'minecraft:crafting_table',
            M:'gtceu:mv_conveyor_module'
        }
    ).id('gtceu:pattern_provider/2')

    event.shaped(Item.of('ae2:pattern_provider', 4),
        [
            'ICI',
            'M M',
            'ICI'
        ],
        {
            I:'minecraft:iron_ingot',
            C:'minecraft:crafting_table',
            M:'gtceu:hv_conveyor_module'
        }
    ).id('gtceu:pattern_provider/3')

    event.shaped(Item.of('ae2:pattern_provider', 8),
        [
            'ICI',
            'M M',
            'ICI'
        ],
        {
            I:'minecraft:iron_ingot',
            C:'minecraft:crafting_table',
            M:'gtceu:ev_conveyor_module'
        }
    ).id('gtceu:pattern_provider/4')

    event.shaped(Item.of('ae2:pattern_provider', 16),
        [
            'ICI',
            'M M',
            'ICI'
        ],
        {
            I:'minecraft:iron_ingot',
            C:'minecraft:crafting_table',
            M:'gtceu:iv_conveyor_module'
        }
    ).id('gtceu:pattern_provider/5')

    event.shaped(Item.of('ae2:pattern_provider', 32),
        [
            'ICI',
            'M M',
            'ICI'
        ],
        {
            I:'minecraft:iron_ingot',
            C:'minecraft:crafting_table',
            M:'gtceu:luv_conveyor_module'
        }
    ).id('gtceu:pattern_provider/6')

    event.shaped(Item.of('ae2:pattern_provider', 64),
        [
            'ICI',
            'M M',
            'ICI'
        ],
        {
            I:'minecraft:iron_ingot',
            C:'minecraft:crafting_table',
            M:'gtceu:zpm_conveyor_module'
        }
    ).id('gtceu:pattern_provider/7')
})