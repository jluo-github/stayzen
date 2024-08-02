"use client";
import { findCountryByCode } from "@/utils/countries";
import CountryFlagAndName from "../card/CountryFlagAndName";
import { MapContainer, TileLayer, Marker, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet";

const iconUrl =
  "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png";
const markerIcon = icon({
  iconUrl: iconUrl,
  iconSize: [20, 30],
});

const PropertyMap = ({ countryCode }: { countryCode: string }) => {
  const defaultLocation = [51.505, -0.09] as [number, number];
  const location = findCountryByCode(countryCode)?.location as [number, number];

  return (
    <div className='mt-4'>
      <div className='mb-4'>
        <h2 className='mb-4'>Where you will be staying</h2>
        <CountryFlagAndName countryCode={countryCode} />
      </div>

      {/* map */}
      <MapContainer
        scrollWheelZoom={false}
        zoomControl={false}
        className='h-[250px] sm:w-5/6 rounded-lg relative z-0'
        center={location || defaultLocation}
        zoom={5}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />

        <ZoomControl position='bottomright' />

        <Marker
          position={location || defaultLocation}
          icon={markerIcon}></Marker>
      </MapContainer>
    </div>
  );
};
export default PropertyMap;
