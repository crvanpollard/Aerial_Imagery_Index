const layers = {
    countyOutline: {
        "id": "county-outline",
        "type": "line",
        "source": "boundaries",
        "source-layer": "county",
        "paint": {
            'line-width': 2.5,
            'line-color': '#505a5e'
        },
        "filter": [
            "==",
            "dvrpc",
            "Yes"
        ]
    },
    muniOutline: {
        "id": "municipality-outline",
        "type": "line",
        "source": "boundaries",
        "source-layer": "municipalities",
        "paint": {
            'line-width': 0.5,
            'line-color': '#4a5c64'
        }
    },
    // add more layers here
    index1959:{
        id: 'index1959',
        type: 'fill',
        source: 'index1959',
        layout: {
         "visibility":"visible",
          },
        paint: {
           'fill-outline-color': '#FFF',
           'fill-color': 'rgba(255,165,0,0.35)'
        }   
    },
    index65_95:{
        id: 'index65_95',
        type: 'fill',
        source: 'index65_95',
        layout: {
         "visibility":"none",
          },
        paint: {
           'fill-outline-color': '#FFF',
           'fill-color': 'rgba(115,0,115,0.35)'
        }
    },
    indexPA:{
        id: 'indexPA',
        type: 'fill',
        source: 'indexPA',
        layout: {
         "visibility":"none",
          },
        paint: {
           'fill-outline-color': '#FFF',
           'fill-color': 'rgba(40, 164, 40,0.35)'
        }
    },
    indexNJ:{
        id: 'indexNJ',
        type: 'fill',
        source: 'indexNJ',
        layout: {
         "visibility":"none",
          },
        paint: {
           'fill-outline-color': '#FFF',
           'fill-color': 'rgba(178, 0, 0,0.35)'
        }
    }

}

export default layers