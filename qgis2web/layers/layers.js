var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Soil_1 = new ol.format.GeoJSON();
var features_Soil_1 = format_Soil_1.readFeatures(json_Soil_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Soil_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Soil_1.addFeatures(features_Soil_1);
var lyr_Soil_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Soil_1, 
                style: style_Soil_1,
                interactive: true,
    title: 'Soil<br />\
    <img src="styles/legend/Soil_1_0.png" /> Awatere<br />\
    <img src="styles/legend/Soil_1_1.png" /> Brancott<br />\
    <img src="styles/legend/Soil_1_2.png" /> Broadbridge<br />\
    <img src="styles/legend/Soil_1_3.png" /> Hawkesbury<br />\
    <img src="styles/legend/Soil_1_4.png" /> Jordan<br />\
    <img src="styles/legend/Soil_1_5.png" /> Paynter<br />\
    <img src="styles/legend/Soil_1_6.png" /> Renwick<br />'
        });
var lyr_NDVI_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [19345165.850688, -5091943.512123, 19347705.271643, -5089653.954173]
                            })
                        });
var format_Blocks_3 = new ol.format.GeoJSON();
var features_Blocks_3 = format_Blocks_3.readFeatures(json_Blocks_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Blocks_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Blocks_3.addFeatures(features_Blocks_3);
var lyr_Blocks_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Blocks_3, 
                style: style_Blocks_3,
                interactive: true,
                title: '<img src="styles/legend/Blocks_3.png" /> Blocks'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Soil_1.setVisible(true);lyr_NDVI_2.setVisible(true);lyr_Blocks_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Soil_1,lyr_NDVI_2,lyr_Blocks_3];
lyr_Soil_1.set('fieldAliases', {'SOIL': 'SOIL', 'Soil name': 'Soil name', 'Drainage': 'Drainage', 'Texture': 'Texture', 'PAW': 'PAW', 'Depth': 'Depth', });
lyr_Blocks_3.set('fieldAliases', {'Block': 'Block', });
lyr_Soil_1.set('fieldImages', {'SOIL': 'Hidden', 'Soil name': 'TextEdit', 'Drainage': 'TextEdit', 'Texture': 'TextEdit', 'PAW': 'TextEdit', 'Depth': 'TextEdit', });
lyr_Blocks_3.set('fieldImages', {'Block': '', });
lyr_Soil_1.set('fieldLabels', {'Soil name': 'inline label', 'Drainage': 'inline label', 'Texture': 'inline label', 'PAW': 'inline label', 'Depth': 'inline label', });
lyr_Blocks_3.set('fieldLabels', {'Block': 'inline label', });
lyr_Blocks_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});