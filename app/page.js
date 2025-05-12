'use client';
import Image from "next/image";
import { useState } from "react";
import TaxCard from "@/components/TaxCard";
import countries from "@/data/countries.json";
import NavBar from "@/components/Navbar";
import SortControls from "@/components/SortControls";
import ContinentFilter from "@/components/ContinentFilter";
import VatFilter from "@/components/VatFilter";
import ZeroTaxFilter from "@/components/ZeroTaxFilter";
import SearchBox from "@/components/SearchBox";

export default function Home() {
  const [filters, setFilters] = useState({
    sort: "",
    continent: "",
    vat: "",
    zeroTaxOnly: false,
    search: "",
  });

  const sortedCountries = [...countries].sort((a, b) => {
    switch (filters.sort) {
      case "lowest-corporate-tax":
        return a["Corporate Tax Rate"] - b["Corporate Tax Rate"];
      case "highest-corporate-tax":
        return b["Corporate Tax Rate"] - a["Corporate Tax Rate"];
      case "lowest-income-tax":
        return a["Highest Income Tax Rate"] - b["Highest Income Tax Rate"];
      case "highest-income-tax":
        return b["Highest Income Tax Rate"] - a["Highest Income Tax Rate"];
      case "lowest-vat":
        return a["VAT Rate"] - b["VAT Rate"];
      case "highest-vat":
        return b["VAT Rate"] - a["VAT Rate"];
      default:
        return 0;
    }
  });

  const filteredCountries = sortedCountries.filter((country) => {
    if (filters.continent && country.Continent !== filters.continent) return false;
    if (filters.vat === "yes" && country["VAT Rate"] === 0) return false;
    if (filters.vat === "no" && country["VAT Rate"] > 0) return false;
    if (filters.zeroTaxOnly && (
      country["Corporate Tax Rate"] !== 0 ||
      country["Highest Income Tax Rate"] !== 0 ||
      country["VAT Rate"] !== 0
    )) return false;
    if (filters.search && !country.Country.toLowerCase().includes(filters.search.toLowerCase())) return false;
    return true;
  });

  return (
    <>
      <NavBar />
      <div className="flex flex-wrap gap-4 items-center justify-center p-4">
        <SearchBox
          value={filters.search}
          onChange={(search) => setFilters({ ...filters, search })}
        />
        <ContinentFilter
          value={filters.continent}
          onChange={(continent) => setFilters({ ...filters, continent })}
        />
        <VatFilter
          value={filters.vat}
          onChange={(vat) => setFilters({ ...filters, vat })}
        />
        <ZeroTaxFilter
          value={filters.zeroTaxOnly}
          onChange={(val) => setFilters({ ...filters, zeroTaxOnly: val })}
        />
        <SortControls
          value={filters.sort}
          onChange={(sort) => setFilters({ ...filters, sort })}
        />
      </div>

      <div className="min-h-screen bg-gray-50 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCountries.map((country) => (
          <TaxCard
            key={country.Country}
            country={country.Country}
            continent={country.Continent}
            corporateTax={country["Corporate Tax Rate"]}
            incomeTax={country["Highest Income Tax Rate"]}
            vatRate={country["VAT Rate"]}
            iso={country.ISO}
          />
        ))}
      </div>
    </>
  );
}
