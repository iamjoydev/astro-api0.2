export default function StatusCard({ status }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6">
      <h2 className="text-lg font-semibold mb-2">System Status</h2>
      {status ? (
        <>
          <p>Last Updated: {status.lastUpdated || "Never"}</p>
          <p>Cache Size: {status.cacheSize} bytes</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}