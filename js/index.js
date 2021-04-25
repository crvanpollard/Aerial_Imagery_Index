import makeMap from './map.js'
import sources from './mapSources.js'
import layers from './mapLayers.js'
import handleModal from './modal.js'
import { toggleLayers } from './forms.js'
// add additional imports here (popups, forms, etc)

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

})
forms.forEach(form => toggleLayers(form, map))

// modal
handleModal(modal, modalToggle, closeModal)
