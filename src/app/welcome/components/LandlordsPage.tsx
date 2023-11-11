
import { instance } from "../../../utils/interceptor";
// import{const} from "../../../utils/constants";
import { useEffect, useState } from 'react';



interface Landlord {
  id: number;
  full_name: string;
  email: string;
  number: string;
  address: string;
}
const LandlordsPage = () => {
  // for post
  const [full_name_variable, setFullnameVariable] = useState('');
  const [email_variable, setEmailVariable] = useState('');
  const [number_variable, setNumberVariable] = useState('');
  const [address_variable, setAddressVariable] = useState('');
  //==========

  const [landlordsData, setLandlordsData] = useState<Landlord[]>([]);
  useEffect(() => {
    const fetchLandlords = async () => {

      instance.get('/api/landlords')
        .then((res) => {
          setLandlordsData(res?.data?.data);
          // console.log(res?.data?.data);

        })
        .catch((err) => {
          console.error('Error:', err);
        });


    };
    fetchLandlords();
  }, []);
  //======================POST

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('full_name', full_name_variable);
    formData.append('email', email_variable);
    formData.append('number', number_variable);
    formData.append('address', address_variable);
    // console.log(formData);


    instance.post('api/landlord/store', formData).then((res) => {
      console.log(res)
    }
    )
      .catch(error => {
        console.error('Error:', error);

      });
  };
//========


  return (
    <div className="p-4 bg-gray3">
      <div className="flex justify-between items-center">

        <h1 className="text-2xl font-bold">Landlords Data</h1>
      </div>
      <div className="flex space-x-4">
        <input
          className="border border-gray-300 rounded px-2 py-1"
          type="text"
          placeholder="Search..."
        />
        <button className="bg-blue text-white
            border border-white 
           px-3 py-1 rounded">Search</button>
      </div>

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
          {landlordsData?.map((landlord) => (
            <tr key={landlord.id}>
              <td className="border border-gray-300">{landlord.id}</td>
              <td className="border border-gray-300">{landlord.full_name}</td>
              <td className="border border-gray-300">{landlord.email}</td>
              <td className="border border-gray-300">{landlord.number}</td>
              <td className="border border-gray-300">{landlord.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
    </div>


  );
};
export default LandlordsPage;
