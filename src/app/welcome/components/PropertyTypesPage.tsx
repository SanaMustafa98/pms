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

//==post

  const [typeVariable, setTypeVariable] = useState<string>('');
  const [descriptionVariable, setDescriptionVariable] = useState<string>('');
  //===



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


    //======================POST

    const handleSubmit = () => {
      const formData = new FormData();
      formData.append('type', typeVariable);
      
      formData.append('description', descriptionVariable);
      // console.log(formData);
  
  
      instance.post('api/property-type/store', formData).then((res) => {
        console.log(res)
      }
      )
        .catch(error => {
          console.error('Error:', error);
  
        });
    };
  //========

  return (
    <>
   
    <div className="p-4">
      <h1 className="text-2xl font-bold">Property Types</h1>
      <table className="w-full mt-4 bg-gray-100">
        <thead>
          <tr>
            <th className="border border-black bg-gray-200">ID</th>
            <th className="border border-black bg-gray-200">Type</th>
            <th className="border border-black bg-gray-200">Description</th>
            <th className="border border-black bg-gray-200">Business ID</th>
            <th className="border border-black bg-gray-200">Created At</th>
            <th className="border border-black bg-gray-200">Updated At</th>
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



    

      {/* Form for submitting new data */}
      <form className="bg-gray-200 border border-black p-6 rounded-md">
      <h1 className="text-2xl font-bold mb-4">Property Types</h1>

      {/* Form for submitting new data */}
      <div className="mt-4 bg-gray-300 p-4 rounded-md">
        <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type:</label>
        <input
          type="text"
          id="type"
          value={typeVariable}
          onChange={(e) => setTypeVariable(e.target.value)}
          className="mt-1 p-2 border rounded-md w-full"
        />

        <div className="mt-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
          <textarea
            id="description"
            value={descriptionVariable}
            onChange={(e) => setDescriptionVariable(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        <button onClick={handleSubmit} className="mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Submit</button>
      </div>
    </form>




    </>
  );
};

export default PropertyTypesPage;
