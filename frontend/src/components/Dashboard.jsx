import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import string from "./restrcitedData.js"

const Dashboard = () => {
    let [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    console.log(data[0])

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(string.connectionString);
                setData(response.data.Vehicle);
                setIsLoading(false);
            } catch (err) {
                console.error(err);
                setIsLoading(false);
            }
        }

        fetchData();
    }, []);
    const columnNames = [
        '#',
        'checkbox',
        'Group Name',
        'Vehicle Number Plate',
        'Last Seen',
        'Ignition',
        'Battery',
        'Info',
        'Nearest Site',
        'Nearest Location',
        'Speed(Km/H)',
        'Idle Time(HH:MM:SS)',
        'Specification'
    ];

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="m-0 p-0">
            <table className="w-full border-collapse border">
                <thead className='bg-blue-200 font-bold '>
                    <tr>
                        {columnNames.map((columnName, index) => (
                            <th key={index}>
                                {columnName === 'checkbox' ? (
                                    <input type="checkbox" />
                                ) : (
                                    columnName
                                )}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((entry, index) => (
                        <tr key={entry.id}>
                            <td className="border border-gray-300 text-center">
                                {index + 1}
                            </td>
                            <td className="border border-gray-300 text-center">
                                <input type="checkbox" className="w-full" />
                            </td>
                            <td className="border border-gray-300 text-center">

                            </td>
                            <td className="border border-gray-300 text-center" style={{ backgroundColor: entry.Speed > 0 ? 'green' : '#ffdb58' }}>
                                {entry.VehicleNo}
                            </td>
                            <td className="border border-gray-300 text-center">
                                {entry.Date.slice(0, entry.Date.indexOf("."))}
                            </td>
                            <td className="border border-gray-300 text-center" style={{ color: entry.Ignition == 0 ? 'red' : 'green' }}>
                                {entry.Ignition == 0 ? "OFF" : "ON"}
                            </td>
                            <td className="border border-gray-300 text-center " style={{ color: 'green' }}>
                                {"Connected"}
                            </td>
                            <td className="border border-gray-300 text-center">

                            </td>
                            <td className="border border-gray-300 text-center">

                            </td>
                            <td className="border border-gray-300 text-center">
                                <Link to={`/${entry.VehicleNo}`}>{entry.Location.split(" ").slice(1)}</Link>
                            </td>
                            <td className="border border-gray-300 text-center">
                                {entry.Speed}
                            </td>
                            <td className="border border-gray-300 text-center">

                            </td>
                            <td className="border border-gray-300 text-center">
                                {"Specification"}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;






