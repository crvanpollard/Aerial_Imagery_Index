// general purpose form handler
const processForm = form => {

}
const layering_groups = {
    "1959": {
      layer_ids: ["index59","index59L"]
    },
    "1965_95": {
      layer_ids: ["index65_95"]
    },
    "PA": {
      layer_ids: ["indexPA"]
    },
    "NJ": {
      layer_ids: ["indexNJ"]
    },
  };
  
const layer_names = Object.keys(layering_groups);
  
// return layer to be toggled
const toggleLayers = (form, map) => {
    form.onchange = e => {
        const layer = e.target.value
        const visibility = e.target.checked ? 'visible' : 'none'
        map.setLayoutProperty(layer, 'visibility', visibility)
    }
}


// return filter to be applied
const filterLayers = values => {
    // process data

    // create filter

    // return filter
}
export {layer_names, toggleLayers}