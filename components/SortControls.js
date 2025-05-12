export default function SortControls({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">Sort by</option>
      <option value="lowest-corporate-tax">Lowest Corporate Tax</option>
      <option value="highest-corporate-tax">Highest Corporate Tax</option>
      <option value="lowest-income-tax">Lowest Income Tax</option>
      <option value="highest-income-tax">Highest Income Tax</option>
      <option value="lowest-vat">Lowest VAT</option>
      <option value="highest-vat">Highest VAT</option>
      <option value="highest-total-tax">Highest Total Tax Burden</option>
    </select>
  );
}
