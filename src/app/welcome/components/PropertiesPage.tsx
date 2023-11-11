
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
//=========
 // Define state variables for form inputs
 const [full_name_variable, setFullName] = useState('');
 const [rent_variable, setRent] = useState('');
 const [propertytypeid_variable, setPropertyTypeId] = useState(''); // Assuming it's a number
 const [landloardid_variable, setLandlordId] = useState(''); // Assuming it's a number
 const [area_variable, setArea] = useState('');
 const [deposit_variable, setDeposit] = useState('');
 const [description_variable, setDescription] = useState('');
 const [propertylocationsearch_variable, setPropertyLocationSearch] = useState('');
 const [propertylocationaddress_variable, setPropertyLocationAddress] = useState('');
 const [propertylocationcity_variable, setPropertyLocationCity] = useState('');
 const [propertylocationstate_variable, setPropertyLocationState] = useState('');
 const [propertylocation_variable, setPropertyLocation] = useState('');
 const [propertyamenities_variable, setPropertyAmenities] = useState('');
 const [propertyamenitiesbathroom_variable, setPropertyAmenitiesBathroom] = useState('');
 const [propertyamenitiesbedroom_variable, setPropertyAmenitiesBedroom] = useState('');
 const [propertyamenitiesroom_variable, setPropertyAmenitiesRoom] = useState('');
 const [propertyamenitiesage_variable, setPropertyAmenitiesAge] = useState('');
 const [propertyamenitiespnote_variable, setPropertyAmenitiesNote] = useState('');
 const [propertyimages_variable, setPropertyImages] = useState('');

 



//=========


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

  //======================POST==================

  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior
 // Create a FormData object to send form data as multipart/form-data


    const formData = new FormData();
    formData.append('name', full_name_variable);
    formData.append('rent', rent_variable);
    formData.append('propertytype_id', propertytypeid_variable);
    formData.append('landlord_id', landloardid_variable);
    formData.append('area', area_variable);
    formData.append('deposit', deposit_variable);
    formData.append('description', description_variable);
    formData.append('property_location[search]', propertylocationsearch_variable);
    formData.append('property_location[address]', propertylocationaddress_variable);
    formData.append('property_location[city]', propertylocationcity_variable);
    formData.append('property_location[state]',propertylocationstate_variable);
    formData.append('property_location[post]', propertylocation_variable);
    formData.append('property_amenities[amenities]', propertyamenities_variable);
    formData.append('property_amenities[bathroom]', propertyamenitiesbathroom_variable);
    formData.append('property_amenities[bedroom]', propertyamenitiesbedroom_variable);
    formData.append('property_amenities[room]', propertyamenitiesroom_variable);
    formData.append('property_amenities[age]', propertyamenitiesage_variable);
    formData.append('property_amenities[propertynote]', propertyamenitiespnote_variable);
    // formData.append('property_images[]', propertyimages_variable);

       // Handle multiple files for property images
       if (propertyimages_variable !== null) {
        for (let i = 0; i < propertyimages_variable.length; i++) {
          formData.append('property_images[]', propertyimages_variable[i]);
        }
    }
   
    // console.log(formData);


    try {
      // Make a POST request to store property data
      const res = await instance.post('api/properties/store', formData);

      console.log(res);
      // Optionally, you can update the state with the new property data if needed
      setPropertiesData([...propertiesData, res.data.data]);
      // Reset the form fields after successful submission
      resetFormFields();
    } catch (error) {
      console.error('Error:', error);
    }
  };
  // Helper function to reset form fields after successful submission
const resetFormFields = () => {
  setFullName('');
  setRent('');
  setPropertyTypeId('');
  setLandlordId('');
  setArea('');
  setDeposit('');
  setDescription('');
  setPropertyLocationSearch('');
  setPropertyLocationAddress('');
  setPropertyLocationCity('');
  setPropertyLocationState('');
  setPropertyLocation('');
  setPropertyAmenities('');
  setPropertyAmenitiesBathroom('');
  setPropertyAmenitiesBedroom('');
  setPropertyAmenitiesRoom('');
  setPropertyAmenitiesAge('');
  setPropertyAmenitiesNote('');
  setPropertyImages('');
};
//=========================================================================================

  return (
    <>
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
            {/*  post */}






             {/* Form for adding a new property */}
      <form onSubmit={handleSubmit} className="p-4 bg-gray-300">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Property Name
            </label>
            <input
              type="text"
              value={full_name_variable}
              onChange={(e) => setFullName(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="Enter property name"
            />
          </div>

          <div className="w-full md:w-1/2 px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Rent
            </label>
            <input
              type="text"
              value={rent_variable}
              onChange={(e) => setRent(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="Enter rent amount"
            />
          </div>





          <div className="w-full md:w-1/2 px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Property Type ID
            </label>
            <input
              type="text"
              value={propertytypeid_variable}
              onChange={(e) => setPropertyTypeId(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="Enter property type ID"
            />
          </div>

          <div className="w-full md:w-1/2 px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Landlord ID
            </label>
            <input
              type="text"
              value={landloardid_variable}
              onChange={(e) => setLandlordId(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="Enter landlord ID"
            />
          </div>

          <div className="w-full md:w-1/2 px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Area
            </label>
            <input
              type="text"
              value={area_variable}
              onChange={(e) => setArea(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="Enter property area"
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Deposit
            </label>
            <input
              type="text"
              value={deposit_variable}
              onChange={(e) => setDeposit(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="Enter deposit amount"
            />
          </div>

<div className="w-full md:w-1/2 px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Description
            </label>
            <textarea
              value={description_variable}
              onChange={(e) => setDescription(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="Enter property description"
              // rows="4"
            ></textarea>
          </div>


          <div className="w-full md:w-1/2 px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Property Location Search
            </label>
            <input
              type="text"
              value={propertylocationsearch_variable}
              onChange={(e) => setPropertyLocationSearch(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="Enter property location search"
            />
          </div>



          <div className="w-full md:w-1/2 px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Property Location Address
            </label>
            <input
              type="text"
              value={propertylocationaddress_variable}
              onChange={(e) => setPropertyLocationAddress(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="Enter property location address"
            />
          </div>
          <div className='w-full md:w-1/2 px-3 mb-6'>
            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
               Propert Location City
            </label>
            <input
             type='text'
             value={propertylocationcity_variable}
             onChange={(e)=> setPropertyLocationCity(e.target.value)}
             className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:bg-white  '
             placeholder='Enter Property Location City'
          
            >
            
            </input>

          </div>

          <div className='w-full md:w-1/2 px-3 mb-6'>
            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
               Property State 
            </label>
            <input
             type='text'
             value={propertylocationstate_variable}
             onChange={(e)=> setPropertyLocationState(e.target.value)}
             className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:bg-white  '
             placeholder='Enter Property Location State'
            >
            </input>
          </div>

          <div className='w-full md:w-1/2 px-3 mb-6'>
            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
               Propert Post 
            </label>
            <input
             type='text'
             value={propertylocation_variable}
             onChange={(e)=> setPropertyLocation(e.target.value)}
             className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:bg-white  '
             placeholder='Enter Property Location Post'
            >
            </input>
          </div>


          <div className="w-full md:w-1/2 px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Property Amenities
            </label>
            <input
              type="text"
              value={propertyamenities_variable}
              onChange={(e) => setPropertyAmenities(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="Enter property amenities"
            />
          </div>

          <div className="w-full md:w-1/2 px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Bathroom Count
            </label>
            <input
              type="text"
              value={propertyamenitiesbathroom_variable}
              onChange={(e) => setPropertyAmenitiesBathroom(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="Enter bathroom count"
            />
          </div>

          <div className="w-full md:w-1/2 px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Bedroom Count
            </label>
            <input
              type="text"
              value={propertyamenitiesbedroom_variable}
              onChange={(e) => setPropertyAmenitiesBedroom(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="Enter bedroom count"
            />
          </div>

          <div className="w-full md:w-1/2 px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Room Count
            </label>
            <input
              type="text"
              value={propertyamenitiesroom_variable}
              onChange={(e) => setPropertyAmenitiesRoom(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="Enter bedroom count"
            />
          </div>

          <div className="w-full md:w-1/2 px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Property Amenities Age
            </label>
            <input
              type="text"
              value={propertyamenitiesage_variable}
              onChange={(e) => setPropertyAmenitiesAge(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="Enter property amenities age"
            />
          </div>

          <div className="w-full md:w-1/2 px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Property Amenities Note
            </label>
            <textarea
              value={propertyamenitiespnote_variable}
              onChange={(e) => setPropertyAmenitiesNote(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="Enter property amenities note"
              // rows="4"
            ></textarea>
          </div>

          {/* <div className="w-full md:w-1/2 px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Property Images
            </label>
            <input
              type="file"
              onChange={(e) => setPropertyImages(e.target.files)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              multiple
            />
          </div> */}










         

          
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>

    </>
  );
};

export default PropertiesPage;
