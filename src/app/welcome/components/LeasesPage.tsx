import { useEffect, useState } from 'react';
import { instance } from "../../../utils/interceptor";

interface Lease {
  id: number;
  rent: string;
  lease_start: string;
  lease_end: string;
  due_date: string;
  total_payment: string;
  paid_payment: string;
  tenant: {
    full_name: string;
  };
  unit: {
    title: string;
  };
  property: {
    name: string;
  };
  image_url: string | null;
}

const LeasesPage = () => {
  const [leasesData, setLeasesData] = useState<Lease[]>([]);

  
   useEffect(() => {
     const fetchLeases = async () => {

      instance.get('/api/leases')
      .then((res) => {
        setLeasesData(res?.data?.data);
        // console.log(res?.data?.data);
        
      })
      .catch((err) => {
        console.error('Error:', err);
      });

    
       };

    fetchLeases();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Leases</h1>
      <table className="w-full mt-4 bg-gray-100">
        <thead>
          <tr>
            <th className="border border-gray-300 bg-gray-200">ID</th>
            <th className="border border-gray-300 bg-gray-200">Rent</th>
            <th className="border border-gray-300 bg-gray-200">Lease Start</th>
            <th className="border border-gray-300 bg-gray-200">Lease End</th>
            <th className="border border-gray-300 bg-gray-200">Due Date</th>
            <th className="border border-gray-300 bg-gray-200">Total Payment</th>
            <th className="border border-gray-300 bg-gray-200">Paid Payment</th>
            <th className="border border-gray-300 bg-gray-200">Tenant</th>
            <th className="border border-gray-300 bg-gray-200">Unit</th>
            <th className="border border-gray-300 bg-gray-200">Property</th>
            <th className="border border-gray-300 bg-gray-200">Image</th>
          </tr>
        </thead>
        <tbody>
          {leasesData?.map((lease) => (
            <tr key={lease.id}>


<td className="border border-gray-300">{lease.id}</td>
<td className="border border-gray-300">{lease.rent}</td>
<td className="border border-gray-300">{lease.lease_start}</td>
<td className="border border-gray-300">{lease.lease_end}</td>
<td className="border border-gray-300">{lease.due_date}</td>
<td className="border border-gray-300">{lease.total_payment}</td>
<td className="border border-gray-300">{lease.paid_payment}</td>
<td className="border border-gray-300">
  {lease.tenant ? lease.tenant.full_name : 'N/A'}
</td>
<td className="border border-gray-300">
  {lease.unit ? lease.unit.title : 'N/A'}
</td>
<td className="border border-gray-300">
  {lease.property ? lease.property.name : 'N/A'}
</td>
<td className="border border-gray-300">
  {lease.image_url ? (
    <img src={lease.image_url} alt={lease.tenant ? lease.tenant.full_name : 'No Tenant'} className="w-16 h-16" />
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

export default LeasesPage;
