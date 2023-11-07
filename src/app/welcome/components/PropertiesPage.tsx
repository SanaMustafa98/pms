
import { useEffect, useState } from 'react';
import { instance } from "../../../utils/interceptor";

interface Property {
  id: number;
  name: string;
  rent: string;
  propertytype_id: number;
  landlord_id: number;
  area: string;
  agency: string | null;
  deposit: string;
  description: string;
  property_status: number;
  created_at: string;
  updated_at: string;
  rent_sale: string;
}

const PropertiesPage = () => {
  const [propertiesData, setPropertiesData] = useState<Property[]>([]);

  useEffect(() => {
    const fetchProperties = async () => {

     instance.get('/api/properties')
     .then((res) => {
      setPropertiesData(res?.data?.data);
       // console.log(res?.data?.data);
       
     })
     .catch((err) => {
       console.error('Error:', err);
     });

   
      };
    fetchProperties();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Properties Data</h1>
      <table className="w-full mt-4 bg-gray-100">
        <thead>
          <tr>
            <th className="border border-gray-300 bg-gray-200">ID</th>
            <th className="border border-gray-300 bg-gray-200">Name</th>
            <th className="border border-gray-300 bg-gray-200">Rent</th>
            <th className="border border-gray-300 bg-gray-200">Property Type</th>
            <th className="border border-gray-300 bg-gray-200">Landlord</th>
            <th className="border border-gray-300 bg-gray-200">Area</th>
            <th className="border border-gray-300 bg-gray-200">Agency</th>
            <th className="border border-gray-300 bg-gray-200">Deposit</th>
            <th className="border border-gray-300 bg-gray-200">Description</th>
            <th className="border border-gray-300 bg-gray-200">Property Status</th>
            <th className="border border-gray-300 bg-gray-200">Created At</th>
            <th className="border border-gray-300 bg-gray-200">Updated At</th>
            <th className="border border-gray-300 bg-gray-200">Rent/Sale</th>
          </tr>
        </thead>
        <tbody>
          {propertiesData?.map((property) => (
            <tr key={property.id}>
              <td className="border border-gray-300">{property.id}</td>
              <td className="border border-gray-300">{property.name}</td>
              <td className="border border-gray-300">{property.rent}</td>
              <td className="border border-gray-300">{property.propertytype_id}</td>
              <td className="border border-gray-300">{property.landlord_id}</td>
              <td className="border border-gray-300">{property.area}</td>
              <td className="border border-gray-300">{property.agency || 'N/A'}</td>
              <td className="border border-gray-300">{property.deposit}</td>
              <td className="border border-gray-300">{property.description}</td>
              <td className="border border-gray-300">{property.property_status}</td>
              <td className="border border-gray-300">{property.created_at}</td>
              <td className="border border-gray-300">{property.updated_at}</td>
              <td className="border border-gray-300">{property.rent_sale}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropertiesPage;
