import React from "react";
import { Map, TileLayer, FeatureGroup, withLeaflet } from "react-leaflet";
import { SearchControl, OpenStreetMapProvider } from "react-leaflet-geosearch";
import { EditControl } from "react-leaflet-draw";

export default function Webmap() {
  const prov = OpenStreetMapProvider();
  const GeoSearchControlElement = withLeaflet(SearchControl);
  

  return (
    <Map center={[18, 0]} zoom={2.5}>
      >
      <TileLayer
        url="https://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}"
        attribution='Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.'
        time=""
        tilematrixset="GoogleMapsCompatible_Level"
        minZoom="1.5"
        maxZoom="8"
        format="jpg"
      />
      <GeoSearchControlElement
        provider={prov}
        showMarker={true}
        showPopup={false}
        popupFormat={({ result }) => result.label}
        maxMarkers={3}
        retainZoomLevel={false}
        animateZoom={true}
        autoClose={false}
        searchLabel={"Enter address, please"}
        keepResult={true}

        // position = "center"
        />
      <FeatureGroup>
        <EditControl
          position="topright"
          
          onEdited={(event) => this.onEditPath(event)}
          onCreated={(event) => this.onCreateHandler(event)}
          onDeleted={(event) =>this.onDeleted(event)}
          draw={{
          polygon: true,
          circle: false,
          marker: false,
          polyline: false,
          rectangle: false,
          circlemarker: false,
          }}
        />
      </FeatureGroup>


    </Map>
  );
}
