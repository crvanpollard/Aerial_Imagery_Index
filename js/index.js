import makeMap from './map.js'
import sources from './mapSources.js'
import layers from './mapLayers.js'
import handleModal from './modal.js'
import {remove_all_popups} from "./mapUtils.js";
import { toggleLayers } from './forms.js'
// add additional imports here (popups, forms, etc)
import { bindPopup, hover_popup_meta, hover_keys, wire_index59_click, wire_index65_95_click} from "./popup.js";

const modal = document.getElementById('modal')
const modalToggle = document.getElementById('modal-toggle')
const closeModal = document.getElementById('close-modal')
// get additional elements here (forms, etc)
const forms = document.querySelectorAll('.legend-item')
//console.log(forms);
const map = makeMap()

map.on('load', () => {
    for(const source in sources) map.addSource(source, sources[source])
    for(const layer in layers) map.addLayer(layers[layer])
    // add map events here (click, mousemove, etc)
    map.addLayer(
        {
        'id': 'nearmap',
        'type': 'raster',
        'source': 'nearmap',
        'paint': {}
        },
        'road-street'
    );
   
  // Wire all hover popups
  for (var i = 0; i < hover_keys.length; i++) {
    let this_key = hover_keys[i];

    // change mouse tip to pointer finger
    map.on(
      "mouseenter",
      this_key,
      () => (map.getCanvas().style.cursor = "pointer")
    );

    map.on("click", this_key, function (e) {
      remove_all_popups();
      var msg = hover_popup_meta[this_key](e);
      bindPopup(map, msg, e);
    });

    // change mouse tip upon leaving feature
    map.on("mouseleave", this_key, function (e) {
      map.getCanvas().style.cursor = "";
    });
  }

  // Wire click-based popups
  wire_index59_click(map);
  wire_index65_95_click(map);
})

forms.forEach(form => toggleLayers(form, map))
// modal
handleModal(modal, modalToggle, closeModal)
