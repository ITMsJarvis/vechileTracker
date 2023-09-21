import { useState } from 'react';
import "../App.css"
import axios from 'axios'
import connectionString from './restrcitedData';

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [vechileNo, setVechileNumber] = useState("")
  const [data, setData] = useState([])
  const tableHeaders = ['#', 'Site', 'Total Exists', 'Avg Time(Hh:Mm)', 'Total Inside'];

  async function getData(check) {
    let response = await axios.get(connectionString)
    let filteredData = response.data.Vehicle.filter(x => x.VehicleNo.includes(check.toUpperCase()))
    setData(filteredData)
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='flex justify-content-center'>
      <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`}>
        <button onClick={toggleMenu} className="hamburger-icon">
          {menuOpen ? (
            <span className="text-2xl">&#9654;</span>
          ) : (
            <span className="text-2xl border-r-2">&#9776;</span>
          )}
        </button>
        {menuOpen && (
          <div className="menu items-center">
            <ul className="p-2 items-center">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span>Select Group:</span>
                  <input type="text" className="border-2 border-blue-200 p-2" />
                </div>
                <div className="flex items-center justify-between">
                  <span>Vehicle:</span>
                  <input type="text" className="border-2 border-blue-200 p-2" onChange={(e) => setVechileNumber(e.target.value)} />
                </div>
                <div className="flex items-center justify-between">
                  <span>Start Date:</span>
                  <div className="flex items-center">
                    <input type="date" className="date-input border-2 border-blue-200 p-2" />
                    <input type="time" className="time-input border-2 border-blue-200 p-2" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>End Date:</span>
                  <div className="flex items-center">
                    <input type="date" className="date-input border-2 border-blue-200 p-2" />
                    <input type="time" className="time-input border-2 border-blue-200 p-2" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Site Type:</span>
                  <input type="text" className="border-2 border-blue-200 p-2" />
                </div>
                <div className="flex items-center justify-between">
                  <span>Site Name:</span>
                  <input type="text" className="border-2 border-blue-200 p-2" />
                </div>
                <div className="flex items-center justify-between">
                  <span>Stoppage Limit:</span>
                  <input type="text" className="border-2 border-blue-200 p-2" />
                </div>
              </div>
            </ul>
            <div className="flex items-center justify-center">
              <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => getData(vechileNo)}>
                View
              </button>
            </div>
          </div>
        )}

      </div>
      <div className='w-full'>
        <div className="border-l-2 ml-2">
          <div className="ml-3">
            <ul className="flex justify-center p-3">
              <div className="flex">
                <li>Report : </li>
                testing
              </div>
              <div className="flex">
                <li>Date : </li>
              </div>
              <div className="flex">
                <li>Stop Time : </li>
              </div>
              <div className="flex">
                <li>Site Name : </li>
              </div>
            </ul>
            <table className="w-full border-collapse border shadow-2xl rounded text-center" style={{ width: '100%' }}>
              <thead className="p-3">
                <tr className=" bg-blue-200 font-bold p-3">
                  {tableHeaders.map((header, index) => (
                    <td key={index} className={`border-r border-gray-400 text-center ${index === tableHeaders.length - 1 ? '' : 'border'}`}>
                      {header}
                    </td>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((entry, index) => (
                  <tr key={index} className="rounded">
                    <td className="border border-gray-300 text-center">
                      {index + 1}
                    </td>
                    <td className="border border-gray-300 text-center">
                      {entry.VehicleNo}
                    </td>
                    <td className="border border-gray-300 text-center">
                      {entry.Speed}
                    </td>
                    <td className="border border-gray-300 text-center">
                      {entry.Location.split(" ").slice(1)}
                    </td>
                    <td className="border border-gray-300 text-center">
                      testing
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;

