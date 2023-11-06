import { instance } from "../../../utils/interceptor";

import { useEffect, useState } from 'react';

interface Inventory {
  id: number;
  description: string;
  unit: string;
  image_url: string | null;
  property_details: {
    name: string;
    rent: string;
    area: string;
  };
  property_units: {
    title: string;
    description: string | null;
    image_url: string | null;
  };
}

const PropertyInventoryPage = () => {
  const [inventoryData, setInventoryData] = useState<Inventory[]>([]);

  useEffect(() => {
    const fetchInventories = async () => {

      instance.get('/api/inventories')
      .then((res) => {
        setInventoryData(res?.data?.data);
        // console.log(res?.data?.data);
        
      })
      .catch((err) => {
        console.error('Error:', err);
      });

    
       };

    fetchInventories();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Inventories</h1>
      <table className="w-full mt-4 bg-gray-100">
        <thead>
          <tr>
            <th className="border border-gray-300 bg-gray-200">ID</th>
            <th className="border border-gray-300 bg-gray-200">Description</th>
            <th className="border border-gray-300 bg-gray-200">Unit</th>
            <th className="border border-gray-300 bg-gray-200">Property Name</th>
            <th className="border border-gray-300 bg-gray-200">Rent</th>
            <th className="border border-gray-300 bg-gray-200">Area</th>
            <th className="border border-gray-300 bg-gray-200">Unit Title</th>
            <th className="border border-gray-300 bg-gray-200">Unit Description</th>
            <th className="border border-gray-300 bg-gray-200">Unit Image</th>
          </tr>
        </thead>
        <tbody>
          {inventoryData?.map((inventory) => (
            <tr key={inventory.id}>
              <td className="border border-gray-300">{inventory.id}</td>
              <td className="border border-gray-300">{inventory.description}</td>
              <td className="border border-gray-300">{inventory.unit}</td>
              <td className="border border-gray-300">{inventory.property_details?.name}</td>
              <td className="border border-gray-300">{inventory.property_details?.rent}</td>
              <td className="border border-gray-300">{inventory.property_details?.area}</td>
              <td className="border border-gray-300">{inventory.property_units?.title}</td>
              <td className="border border-gray-300">{inventory.property_units?.description || 'N/A'}</td>
              <td className="border border-gray-300">
                {inventory.property_units?.image_url ? (
                  <img src={inventory.property_units.image_url} alt={inventory.property_units.title} className="w-16 h-16" />
                ) : (
                  'No Image'
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropertyInventoryPage;
