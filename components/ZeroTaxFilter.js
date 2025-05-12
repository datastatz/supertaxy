export default function ZeroTaxFilter({ value, onChange }) {
  return (
    <label className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md cursor-pointer select-none">
      <input
        type="checkbox"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
        className="w-5 h-5 accent-blue-500"
      />
      <span className="text-sm text-gray-700">Zero-tax countries only</span>
    </label>
  );
}
