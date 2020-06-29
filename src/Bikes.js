import React, { useState, useEffect } from "react";
import createEnturService from "@entur/sdk";

const service = createEnturService({ clientName: 'cheney-infoskjermkurs' })

const Bikes = () => {
    const [bikeStations, setBikeStations] = useState([]);


    useEffect(() => {
        service.getBikeRentalStationsByPosition(
            {latitude: 63.428311, longitude: 10.392514},
            230
            ).then((data) => setBikeStations(data));
    }, []);

    console.log(bikeStations)
    return (
    <div className="BikeStations"><h3>bysykkel</h3>
        {bikeStations.map(stationData => (
            <Station key={stationData.id} station={stationData}/>
        ))}
    </div>);
};

export default Bikes;

const Station = (props) => {
    const { station } = props;
    console.log(station);
    return <div className="station">
        {station.name} -//- {station.bikesAvailable} : {station.spacesAvailable}
    </div>;
};

