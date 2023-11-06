
import { instance } from '@/utils/interceptor';
import { useEffect, useState } from 'react';

interface Tenant {
  id: number;
  full_name: string;
  email: string | null;
  number: string;
  identity: string | null;
  image: string | null;
  address: string;
  occupation: string | null;
  place: string | null;
  emrgency_name: string | null;
  emrgency_number: string | null;
  name: string | null;
  phone: string | null;
  created_at: string;
  updated_at: string;
}

const TenantsPage = () => {
  const [tenantsData, setTenantsData] = useState<Tenant[]>([]);

  useEffect(() => {
    const fetchTenants = async () => {

     instance.get('/api/tenants')
     .then((res) => {
      setTenantsData(res?.data?.data);
       // console.log(res?.data?.data);
       
     })
     .catch((err) => {
       console.error('Error:', err);
     });

   
      };

    fetchTenants();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Tenants Data</h1>
      <table className="w-full mt-4 bg-gray-100">
        <thead>
          <tr>
            <th className="border border-gray-300 bg-gray-200">ID</th>
            <th className="border border-gray-300 bg-gray-200">Full Name</th>
            <th className="border border-gray-300 bg-gray-200">Email</th>
            <th className="border border-gray-300 bg-gray-200">Phone Number</th>
            <th className="border border-gray-300 bg-gray-200">Address</th>
          </tr>
        </thead>
        <tbody>
        
          {tenantsData?.map((tenant) => (
            <tr key={tenant.id}>
              <td className="border border-gray-300">{tenant.id}</td>
              <td className="border border-gray-300">{tenant.full_name}</td>
              <td className="border border-gray-300">{tenant.email}</td>
              <td className="border border-gray-300">{tenant.number}</td>
              <td className="border border-gray-300">{tenant.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TenantsPage;
