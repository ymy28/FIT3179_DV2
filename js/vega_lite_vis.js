// Direct Vega-Lite embedding, following the Week 7–9 studio examples.

var specVis1 = "js/bump_chart_state_ranking.vg.json";
vegaEmbed("#bump_states", specVis1, { "actions": false }).then(function (result) {
    // The interactive chart is available as result.view.
}).catch(function (error) {
    document.getElementById("bump_states").textContent = "This chart could not load. Please reload the page using a local web server.";
    console.error(error);
});

var specVis2 = "js/choropleth_compare.vg.json";
vegaEmbed("#choropleth_sa3", specVis2, { "actions": false }).then(function (result) {
    // The interactive chart is available as result.view.
}).catch(function (error) {
    document.getElementById("choropleth_sa3").textContent = "This chart could not load. Please reload the page using a local web server.";
    console.error(error);
});

var specVis3 = "js/diverging_bar_self_rated_health.vg.json";
vegaEmbed("#diverging_self_health", specVis3, { "actions": false }).then(function (result) {
    // The interactive chart is available as result.view.
}).catch(function (error) {
    document.getElementById("diverging_self_health").textContent = "This chart could not load. Please reload the page using a local web server.";
    console.error(error);
});

var specVis4 = "js/dumbbell_life_expectancy.vg.json";
vegaEmbed("#dumbbell_life_exp", specVis4, { "actions": false }).then(function (result) {
    // The interactive chart is available as result.view.
}).catch(function (error) {
    document.getElementById("dumbbell_life_exp").textContent = "This chart could not load. Please reload the page using a local web server.";
    console.error(error);
});

var specVis5 = "js/heatmap_health_conditions.vg.json";
vegaEmbed("#heatmap_conditions", specVis5, { "actions": false }).then(function (result) {
    // The interactive chart is available as result.view.
}).catch(function (error) {
    document.getElementById("heatmap_conditions").textContent = "This chart could not load. Please reload the page using a local web server.";
    console.error(error);
});

var specVis6 = "js/symbol_map_scatter_care_rate.vg.json";
vegaEmbed("#map_care_symbols", specVis6, { "actions": false }).then(function (result) {
    // The interactive chart is available as result.view.
}).catch(function (error) {
    document.getElementById("map_care_symbols").textContent = "This chart could not load. Please reload the page using a local web server.";
    console.error(error);
});

var specVis7 = "js/choropleth_slider_aged85.vg.json";
vegaEmbed("#map_85plus_slider", specVis7, { "actions": false }).then(function (result) {
    // The interactive chart is available as result.view.
}).catch(function (error) {
    document.getElementById("map_85plus_slider").textContent = "This chart could not load. Please reload the page using a local web server.";
    console.error(error);
});

var specVis8 = "js/dot_map_aged_care_homes.vg.json";
vegaEmbed("#map_services_dots", specVis8, { "actions": false }).then(function (result) {
    // The interactive chart is available as result.view.
}).catch(function (error) {
    document.getElementById("map_services_dots").textContent = "This chart could not load. Please reload the page using a local web server.";
    console.error(error);
});

var specVis9 = "js/population_age_sex.vg.json";
vegaEmbed("#pyramid", specVis9, { "actions": false }).then(function (result) {
    // The interactive chart is available as result.view.
}).catch(function (error) {
    document.getElementById("pyramid").textContent = "This chart could not load. Please reload the page using a local web server.";
    console.error(error);
});

var specVis10 = "js/slope_chart_chronic_conditions.vg.json";
vegaEmbed("#slope_chronic_ses", specVis10, { "actions": false }).then(function (result) {
    // The interactive chart is available as result.view.
}).catch(function (error) {
    document.getElementById("slope_chronic_ses").textContent = "This chart could not load. Please reload the page using a local web server.";
    console.error(error);
});


var specVis11 = "js/stacked_bar_physical_activity.vg.json";
vegaEmbed("#stacked_activity", specVis11, { "actions": false }).then(function (result) {
    // The interactive chart is available as result.view.
}).catch(function (error) {
    document.getElementById("stacked_activity").textContent = "This chart could not load. Please reload the page using a local web server.";
    console.error(error);
});
