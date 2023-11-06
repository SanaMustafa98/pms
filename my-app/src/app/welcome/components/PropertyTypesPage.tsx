import { instance } from "../../../utils/interceptor";

import { useEffect, useState } from 'react';

interface PropertyType {
  id: number;
  type: string;
  description: string | null;
  business_id: number;
  created_at: string;
  updated_at: string;
}

const PropertyTypesPage = () => {
  const [propertyTypesData, setPropertyTypesData] = useState<PropertyType[]>([]);


   useEffect(() => {
     const fetchPropertyTypes = async () => {

      instance.get('/api/property-types')
      .then((res) => {
        setPropertyTypesData(res?.data?.data);
        // console.log(res?.data?.data);
        
      })
      .catch((err) => {
        console.error('Error:', err);
      });

    
       };

    fetchPropertyTypes();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Property Types</h1>
      <table className="w-full mt-4 bg-gray-100">
        <thead>
          <tr>
            <th className="border border-gray-300 bg-gray-200">ID</th>
            <th className="border border-gray-300 bg-gray-200">Type</th>
            <th className="border border-gray-300 bg-gray-200">Description</th>
            <th className="border border-gray-300 bg-gray-200">Business ID</th>
            <th className="border border-gray-300 bg-gray-200">Created At</th>
            <th className="border border-gray-300 bg-gray-200">Updated At</th>
          </tr>
        </thead>
        <tbody>
          {propertyTypesData?.map((propertyType) => (
            <tr key={propertyType.id}>
              <td className="border border-gray-300">{propertyType.id}</td>
              <td className="border border-gray-300">{propertyType.type}</td>
              <td className="border border-gray-300">{propertyType.description || 'N/A'}</td>
              <td className="border border-gray-300">{propertyType.business_id}</td>
              <td className="border border-gray-300">{propertyType.created_at}</td>
              <td className="border border-gray-300">{propertyType.updated_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropertyTypesPage;
