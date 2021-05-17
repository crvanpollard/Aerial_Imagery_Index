// general purpose form handler
const processForm = (form) => {};
const layering_groups = {
  1959: {
    layer_ids: ["index59", "index59L"],
  },
  "19665_95": {
    layer_ids: ["index65_95"],
  },
  PA: {
    layer_ids: ["indexPA"],
  },
  NJ: {
    layer_ids: ["indexNJ"],
  },
};

const layer_names = Object.keys(layering_groups);

// return layer to be toggled
const toggleLayers = (form, map) => {
  form.onchange = (e) => {
    var clicked_layer = e.target.value;
    var visibility = e.target.checked ? "visible" : "none";

    var layers_to_toggle = layering_groups[clicked_layer].layer_ids;
    layers_to_toggle.forEach((lyr) => {
      map.setLayoutProperty(lyr, "visibility", visibility);
    });
  };
};

// return filter to be applied
const filterLayers = (values) => {
  // process data
  // create filter
  // return filter
};
export { layer_names, toggleLayers };
