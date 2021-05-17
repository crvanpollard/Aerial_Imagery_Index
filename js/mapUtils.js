// put functions for map events - hover, click, popups, etc in here
// import into index.js and add to map within map.on('load')

// ----------------------------------------------------------------------------------
// TOGGLE BETWEEN ANALYSES ON THE MAP
// When clicking an option under "Select an analysis:"
//    - turn off all layers for all analyses that are NOT selected
//    - remove all analyis layer toggle buttons for non-selected analyses
//    - turn on layers for the selected analysis
//    - update methodology text, legend, and other text-based content for selected
//
// To add a new analysis:
//    - put an entry into the "analysis_meta" object
//    - add content to index.html, making sure to set classes up so that the
//      new analysis is hidden by default
// ----------------------------------------------------------------------------------
 
  const remove_all_popups = () => {
    // Remove a single popup, if there is one on the map
    var existingPopup = document.getElementsByClassName("i-am-a-popup");
    if (existingPopup.length) {
      existingPopup[0].remove();
    }
  };
  
  export {remove_all_popups,};