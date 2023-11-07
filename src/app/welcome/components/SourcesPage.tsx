
import { useEffect, useState } from 'react';
import { instance } from "../../../utils/interceptor";

interface Source {
  id: number;
  source: string;
  created_at: string;
  updated_at: string;
}

const SourcesPage = () => {
  const [sourcesData, setSourcesData] = useState<Source[]>([]);

  
    useEffect(() => {
      const fetchSources = async () => {
 
       instance.get('/api/sources')
       .then((res) => {
        setSourcesData(res?.data?.data);
         // console.log(res?.data?.data);
         
       })
       .catch((err) => {
         console.error('Error:', err);
       });
 
     
        };
  
        
    fetchSources();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Sources Data</h1>
      <table className="w-full mt-4 bg-gray-100">
        <thead>
          <tr>
            <th className="border border-gray-300 bg-gray-200">ID</th>
            <th className="border border-gray-300 bg-gray-200">Source</th>
            <th className="border border-gray-300 bg-gray-200">Created At</th>
            <th className="border border-gray-300 bg-gray-200">Updated At</th>
          </tr>
        </thead>
        <tbody>
          {sourcesData?.map((source) => (
            <tr key={source.id}>
              <td className="border border-gray-300">{source.id}</td>
              <td className="border border-gray-300">{source.source}</td>
              <td className="border border-gray-300">{source.created_at}</td>
              <td className="border border-gray-300">{source.updated_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SourcesPage;
