
import { instance } from "../../../utils/interceptor";

import { useEffect, useState } from 'react';

interface PropertyUnit {
  id: number;
  title: string;
  description: string | null;
  image_url: string | null;
  property_details: {
    name: string;
    rent: string;
    area: string;
  };
}

const PropertyUnitsPage = () => {
  const [propertyUnitsData, setPropertyUnitsData] = useState<PropertyUnit[]>([]);

  useEffect(() => {
   
    const fetchPropertyUnits = async () => {

      instance.get('/api/property-units')
      .then((res) => {
        setPropertyUnitsData(res?.data?.data);
        // console.log(res?.data?.data);
        
      })
      .catch((err) => {
        console.error('Error:', err);
      });

    
       };

    fetchPropertyUnits();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Property Units</h1>
      <table className="w-full mt-4 bg-gray-100">
        <thead>
          <tr>
            <th className="border border-gray-300 bg-gray-200">ID</th>
            <th className="border border-gray-300 bg-gray-200">Title</th>
            <th className="border border-gray-300 bg-gray-200">Description</th>
            <th className="border border-gray-300 bg-gray-200">Property Name</th>
            <th className="border border-gray-300 bg-gray-200">Rent</th>
            <th className="border border-gray-300 bg-gray-200">Area</th>
            <th className="border border-gray-300 bg-gray-200">Image</th>
          </tr>
        </thead>
        <tbody>
          {propertyUnitsData?.map((propertyUnit) => (
            <tr key={propertyUnit.id}>
              <td className="border border-gray-300">{propertyUnit.id}</td>
              <td className="border border-gray-300">{propertyUnit.title}</td>
              <td className="border border-gray-300">{propertyUnit.description || 'N/A'}</td>
              <td className="border border-gray-300">{propertyUnit.property_details?.name}</td>
              <td className="border border-gray-300">{propertyUnit.property_details?.rent}</td>
              <td className="border border-gray-300">{propertyUnit.property_details?.area}</td>
              <td className="border border-gray-300">
                {propertyUnit.image_url ? (
                  <img src={propertyUnit.image_url} alt={propertyUnit.title} className="w-16 h-16" />
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

export default PropertyUnitsPage;

