import Image from "next/image";

export default function TaxCard({
  country,
  continent,
  corporateTax,
  incomeTax,
  vatRate,
  iso,
}) {
  return (
    <div className="relative bg-white border border-zinc-200 shadow-lg rounded-2xl p-5 hover:scale-[1.015] transition-transform duration-200">
      {/* Flag in top-right */}
      <div className="absolute top-3 right-3">
        <Image
          src={`https://flagsapi.com/${iso}/flat/64.png`}
          alt={`${country} flag`}
          width={32}
          height={24}
        />
      </div>

      <h2 className="text-xl font-semibold mb-1">{country}</h2>
      <p className="text-sm text-gray-500 mb-2">Continent: {continent}</p>
      <div className="space-y-1 text-sm">
        <p>Corporate Tax: {corporateTax}%</p>
        <p>(Highest) Income Tax: {incomeTax}%</p>
        <p>VAT: {vatRate}%</p>
      </div>
    </div>
  );
}
