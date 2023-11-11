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
  // for post
  const [full_name_variable, setFullnameVariable] = useState('');
  const [email_variable, setEmailVariable] = useState('');
  const [number_variable, setNumberVariable] = useState('');
  const [address_variable, setAddressVariable] = useState('');
  //==========
   
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
 
 //======================POST
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('full_name', full_name_variable);
    formData.append('email', email_variable);
    formData.append('number', number_variable);
    formData.append('address', address_variable);
    // console.log(formData);
    instance.post('api/tenants/store', formData).then((res) => {
      console.log(res)
    } )
      .catch(error => {
        console.error('Error:', error);
      });
  };
//========
  return (
    <>
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
    <div className="p-4 bg-gray3">
        {/* ... */}
        <input
          type="text"
          placeholder="Full Name"
          value={full_name_variable}
          onChange={(e) => setFullnameVariable(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email_variable}
          onChange={(e) => setEmailVariable(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={number_variable}
          onChange={(e) => setNumberVariable(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          value={address_variable}
          onChange={(e) => setAddressVariable(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>

    </>
  );
};

export default TenantsPage;
