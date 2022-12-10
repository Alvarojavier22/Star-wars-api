import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import CardDetail from "../component/cardDetail.jsx";

export const StarshipDetail = () => {
    const { store, actions } = useContext(Context);
    const [data, setData] = useState({})
    const { starshipid } = useParams();

    useEffect(() => {
        actions.getStarWarsDetail("starships", starshipid).then(resp => setData(resp))
    }, [])

    return (
        <div className="container">
            <h2 className="m-3">Starship {data.name}</h2>

            <CardDetail
                title={data.name}
                img={`https://starwars-visualguide.com/assets/img/planets/${starshipid}.jpg`}
                body={
                    <ul className="list-group">
                        <li className="list-group-item"> Model: {data.model}</li>
                        <li className="list-group-item"> Starship Class: {data.starship_class}</li>
                        <li className="list-group-item"> Manufacturer: {data.manufacturer}</li>
                        <li className="list-group-item"> Cost in Credits: {data.cost_in_credits}</li>
                        <li className="list-group-item"> Length": {data.length}:</li>
                        <li className="list-group-item"> Crew": {data.crew}:</li>
                        <li className="list-group-item"> Passengers: {data.passengers}</li>
                        <li className="list-group-item"> Max Atmosphering Speed: {data.max_atmosphering_speed}</li>
                        <li className="list-group-item"> Hyperdrive Rating: {data.hyperdrive_rating}</li>
                        <li className="list-group-item"> MGLT: {data.MGLT}</li>
                        <li className="list-group-item"> Cargo Capacity: {data.cargo_capacity}</li>
                        <li className="list-group-item"> Consumables: {data.consumables}</li>
                        <li className="list-group-item"> Pilots: {data.pilots}</li>
                        <li className="list-group-item"> Created: {data.created}</li>
                        <li className="list-group-item"> Edited: {data.edited}</li>
                        <li className="list-group-item"> Name: {data.name}</li>
                        <li className="list-group-item"> URL: {data.url}</li>
                    </ul>
                }
                type="starship"
            />
        </div>
    )
}