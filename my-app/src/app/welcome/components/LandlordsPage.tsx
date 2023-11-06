
import { instance } from "../../../utils/interceptor";

 import { useEffect, useState } from 'react';
 
 
 
 interface Landlord {
   id: number;
   full_name: string;
   email: string;
   number: string;
   address: string;
 }
 const LandlordsPage = () => {
 
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
     </div>
   );};
 export default LandlordsPage;
