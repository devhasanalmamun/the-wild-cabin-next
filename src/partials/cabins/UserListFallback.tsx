export default function UserListFallback() {
  return (
    <div className="mt-6">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mx-auto mb-4" />
      <p className="text-center text-gray-600 mb-4">Loading cabins...</p>

      <ul className="space-y-2">
        {Array.from({ length: 5 }).map((_, idx) => (
          <li key={idx} className="h-6 bg-gray-200 rounded animate-pulse" />
        ))}
      </ul>
    </div>
  );
}
