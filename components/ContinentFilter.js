export default function ContinentFilter({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">All Continents</option>
      <option value="AF">Africa</option>
      <option value="EU">Europe</option>
      <option value="AS">Asia</option>
      <option value="OC">Oceania</option>
      <option value="SA">South America</option>
      <option value="NO">North America</option>
    </select>
  );
}
