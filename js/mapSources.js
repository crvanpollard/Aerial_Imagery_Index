const sources = {  
    'boundaries': {
        type: 'vector',
        url: 'https://tiles.dvrpc.org/data/dvrpc-municipal.json'
    },
    // add more sources here
    'index59':{
      type:'geojson',
      data:'https://arcgis.dvrpc.org/portal/rest/services/Imagery/DVRPC_1959_index/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=geojson'  
    },
    'index59L':{
      type:'geojson',
      data:'https://arcgis.dvrpc.org/portal/rest/services/Imagery/DVRPC_1959_index/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=geojson'  
    },
    'index65_95':{
        type:'geojson',
        data:'https://arcgis.dvrpc.org/portal/rest/services/Imagery/DVRPC_1965_1995_index/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=geojson'  
      },
    'indexPA':{
        type:'geojson',
        data:'https://arcgis.dvrpc.org/portal/rest/services/Imagery/DVRPC_PA_SP_index/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=geojson'  
      },
    'indexNJ':{
        type:'geojson',
        data:'https://arcgis.dvrpc.org/portal/rest/services/Imagery/DVRPC_NJ_SP_index/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=geojson'  
      },
    'nearmap': {
        'type': 'raster',
        // use the tiles option to specify a WMS tile source URL
        // https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/
        'tiles': [
      //  'https://img.nj.gov/imagerywms/Natural2015?bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:3857&transparent=true&width=256&height=256&layers=Natural2015'
        'https://api.nearmap.com/tiles/v3/Vert/{z}/{x}/{y}.png?apikey=NGE1ODI2NDMtYjk1Yi00ZWIxLTg4YWQtM2U0NGFmOTNjMDgy'    
         ],
        'tileSize': 256
    }
}

export default sources