const newPopup = () =>
  new mapboxgl.Popup({
    closebutton: false,
    className: "i-am-a-popup",
  });

const bindPopup = (map, html_msg, target) => {
  var popup = newPopup();
  popup.setLngLat(target.lngLat).setHTML(html_msg).addTo(map);
};

const index59_popup_msg = (e) => {
    var props = e.features[0].properties;
    return "<h2 id='index59pop'>1959 Sheet ID</h2><p>" + props.sheet_id  + "</p>";
  };

const hover_popup_meta = {
    index59: index59_popup_msg,
  };
  
const hover_keys = Object.keys(hover_popup_meta);

// ----------------------------------------------------------------------------------
// Popups for CLICK events
// ----------------------------------------------------------------------------------

const wire_index59_click = (map) => {
    map.on("click", "index59", function (e) {
        // added a remove feature state so that style gets reset
        map.removeFeatureState({source: 'index59'});
        map.removeFeatureState({source: 'index59L'});
        // query feature selected and change feature state style defined in mapLayers.js
        var features = map.queryRenderedFeatures(e.point, { layers: ['index59','index59L'] });
            for (var i = 0; i < features.length; i++) {
                map.setFeatureState({source: 'index59L', id: features[i].id}, {click: true});
                map.setFeatureState({source: 'index59', id: features[i].id}, {click: true});
            };
      map.flyTo({
        center: e.lngLat,
        zoom: 12,
        essential: true, // this animation is considered essential with respect to prefers-reduced-motion
      });
    });
  };

//export { makePopup, makePopupContent }

export { newPopup, bindPopup, hover_popup_meta, hover_keys, wire_index59_click};