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
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'.{format}"
        attribution="Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
        time=""
        tilematrixset="GoogleMapsCompatible_Level"
        minZoom="1.5"
        maxZoom="19"
        format="jpg"
      />
      <GeoSearchControlElement
        provider={prov}
        showMarker={true}
        showPopup={true}
        popupFormat={({ result }) => result.label}
        maxMarkers={3}
        retainZoomLevel={false}
        animateZoom={true}
        autoClose={true}
        searchLabel={"Enter address, please"}
        keepResult={true}

        // position = "center"
      />
      <FeatureGroup>
        <EditControl
          draw={{
            polygon: true,
            circle: false,
            marker: false,
            polyline: false,
            rectangle: false,
            circlemarker: false
          }}
        />
      </FeatureGroup>
    </Map>
  );
}
