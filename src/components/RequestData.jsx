
export default function RequestsDataPage() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    loadRequests();
  }, []);

  const loadRequests = () => {
    const storedRequests = JSON.parse(localStorage.getItem('contactRequests')) || [];
    setRequests(storedRequests);
  };

  const deleteRequest = (index) => {
    const updatedRequests = [...requests];
    updatedRequests.splice(index, 1);
    localStorage.setItem('contactRequests', JSON.stringify(updatedRequests));
    setRequests(updatedRequests);
  };

  const clearAllData = () => {
    if (window.confirm('Are you sure you want to delete all request data?')) {
      localStorage.removeItem('contactRequests');
      setRequests([]);
    }
  };

  return (
    <section className="py-14 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-blue-900">All Request Data</h2>
          <button
            onClick={clearAllData}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2"
          >
            <Trash2 className="w-4 h-4" />
            Clear All Data
          </button>
        </div>

        <div className="bg-white shadow rounded-2xl overflow-hidden">
          {requests.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <List className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <p className="text-lg">No requests found yet.</p>
              <p className="text-sm">Submit a contact form to see data here.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-900 text-white">
                  <tr>
                    <th className="p-4 text-left">Date & Time</th>
                    <th className="p-4 text-left">Name</th>
                    <th className="p-4 text-left">Company</th>
                    <th className="p-4 text-left">Email</th>
                    <th className="p-4 text-left">Phone</th>
                    <th className="p-4 text-left">Message</th>
                    <th className="p-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {requests.map((request, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50 even:bg-gray-50">
                      <td className="p-4 text-sm">
                        {new Date(request.timestamp).toLocaleString()}
                      </td>
                      <td className="p-4 font-medium">{request.name}</td>
                      <td className="p-4">{request.company || 'N/A'}</td>
                      <td className="p-4">
                        <a href={`mailto:${request.email}`} className="text-blue-600 hover:underline">
                          {request.email}
                        </a>
                      </td>
                      <td className="p-4">
                        <a href={`tel:${request.phone}`} className="text-blue-600 hover:underline">
                          {request.phone}
                        </a>
                      </td>
                      <td className="p-4 max-w-xs" title={request.message}>
                        <div className="line-clamp-2 text-sm">{request.message}</div>
                      </td>
                      <td className="p-4">
                        <button
                          onClick={() => deleteRequest(index)}
                          className="text-red-500 hover:text-red-700 p-2 rounded hover:bg-red-50 transition-colors"
                          title="Delete request"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500">
          Total requests: {requests.length}
        </div>
      </div>
    </section>
  );
}

