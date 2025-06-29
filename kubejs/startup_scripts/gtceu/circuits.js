StartupEvents.registry("item", event => {
    const V = ["zpm", "uv", "uhv", "uev", "uiv","uxv", "opv", "max"]
    for(var i = 0; i < 4; i++){
        event.create("gtceu:optical_quantum_processor_" + V[i])
        .tag("gtceu:circuits/" + V[i])
    };
    for(var i = 1; i < 5; i++){
        event.create("gtceu:exotic_processor_" + V[i])
        .tag("gtceu:circuits/" + V[i])
    };
    for(var i = 2; i < 6; i++){
        event.create("gtceu:cosmos_processor_" + V[i])
        .tag("gtceu:circuits/" + V[i])
    };
    for(var i = 3; i < 7; i++){
        event.create("gtceu:supra_causal_processor_" + V[i])
        .tag("gtceu:circuits/" + V[i])
    };
    for(var i = 4; i < 8; i++){
        event.create("gtceu:infinity_processor_" + V[i])
        .tag("gtceu:circuits/" + V[i])
    };
})