export default function VatFilter({ value, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <label htmlFor="vat" className="text-sm text-gray-700 whitespace-nowrap">
        Has VAT?
      </label>
      <select
        id="vat"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Any</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    </div>
  );
}
