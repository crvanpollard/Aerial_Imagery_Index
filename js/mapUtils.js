// put functions for map events - hover, click, popups, etc in here
// import into index.js and add to map within map.on('load')
  const remove_all_popups = () => {
    // Remove a single popup, if there is one on the map
    var existingPopup = document.getElementsByClassName("i-am-a-popup");
    if (existingPopup.length) {
      existingPopup[0].remove();
    }
  };
  
  export {remove_all_popups,};