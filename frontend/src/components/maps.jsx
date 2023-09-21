import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import connectionString from './restrcitedData';

const maps = () => {
    let [cordinate, setCordinates] = useState({
        lat: "",
        long: ""
    })
    console.log(cordinate)
    let { id } = useParams()
    useEffect(() => {
        async function map() {
            let response = await axios.get(connectionString)
            let filteredData = await response.data.Vehicle.filter(x => x.VehicleNo.includes(id))
            setCordinates({ lat: filteredData[0].Lat, long: filteredData[0].Long })
        }
        map()

    }, [])

    ""
    console.log(id)
    return <div>
        <iframe src={`http://maps.google.com/maps?q=${cordinate.lat},${cordinate.long}&z=16&output=embed`} height="450" width="600"></iframe>
    </div>;
};

export default maps;
