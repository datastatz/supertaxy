'use client';
import Image from 'next/image';
import { useState } from 'react';
import TaxCard from '@/components/TaxCard';
import countries from '@/data/countries.json';
import NavBar from '@/components/Navbar';
import SortControls from '@/components/SortControls';
import ContinentFilter from '@/components/ContinentFilter';
import VATFilter from '@/components/VatFilter';
import ZeroTaxFilter from '@/components/ZeroTaxFilter';
import SearchBox from '@/components/SearchBox';

export default function Home() {
  const [filters, setFilters] = useState({
    sort: '',
    continent: '',
    vat: '',
    zeroTax: false,
    search: '',
  });

  const filteredCountries = countries.filter((country) => {
    // Search by name
    if (
      filters.search &&
      !country.Country.toLowerCase().includes(filters.search.toLowerCase())
    ) {
      return false;
    }

    // Filter by continent
    if (filters.continent && country.Continent !== filters.continent) {
      return false;
    }

    // VAT filter
    if (filters.vat === 'has-vat' && country['VAT Rate'] === 0) {
      return false;
    }
    if (filters.vat === 'no-vat' && country['VAT Rate'] > 0) {
      return false;
    }

    // Zero tax filter
    if (
      filters.zeroTax &&
      !(
        country['Corporate Tax Rate'] === 0 &&
        country['Highest Income Tax Rate'] === 0 &&
        country['VAT Rate'] === 0
      )
    ) {
      return false;
    }

    return true;
  });

  const sortedCountries = [...filteredCountries].sort((a, b) => {
    switch (filters.sort) {
      case 'lowest-corporate-tax':
        return a['Corporate Tax Rate'] - b['Corporate Tax Rate'];
      case 'highest-corporate-tax':
        return b['Corporate Tax Rate'] - a['Corporate Tax Rate'];
      case 'lowest-income-tax':
        return a['Highest Income Tax Rate'] - b['Highest Income Tax Rate'];
      case 'highest-income-tax':
        return b['Highest Income Tax Rate'] - a['Highest Income Tax Rate'];
      case 'lowest-vat':
        return a['VAT Rate'] - b['VAT Rate'];
      case 'highest-vat':
        return b['VAT Rate'] - a['VAT Rate'];
      case 'highest-total-tax':
        return (
          b['Corporate Tax Rate'] +
          b['Highest Income Tax Rate'] +
          b['VAT Rate'] -
          (a['Corporate Tax Rate'] +
            a['Highest Income Tax Rate'] +
            a['VAT Rate'])
        );
      case 'lowest-total-tax':
        return (
          a['Corporate Tax Rate'] +
          a['Highest Income Tax Rate'] +
          a['VAT Rate'] -
          (b['Corporate Tax Rate'] +
            b['Highest Income Tax Rate'] +
            b['VAT Rate'])
        );
      default:
        return 0;
    }
  });

  return (
    <>
      <NavBar />
      <div className="p-4 space-y-4">
        <div className="flex flex-wrap gap-4">
          <SearchBox
            value={filters.search}
            onChange={(search) => setFilters({ ...filters, search })}
          />
          <ContinentFilter
            value={filters.continent}
            onChange={(continent) => setFilters({ ...filters, continent })}
          />
          <VATFilter
            value={filters.vat}
            onChange={(vat) => setFilters({ ...filters, vat })}
          />
          <ZeroTaxFilter
            checked={filters.zeroTax}
            onChange={(zeroTax) => setFilters({ ...filters, zeroTax })}
          />
          <SortControls
            value={filters.sort}
            onChange={(sort) => setFilters({ ...filters, sort })}
          />
        </div>
      </div>
      <div className="min-h-screen bg-gray-50 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedCountries.map((country) => (
          <TaxCard
            key={country.Country}
            country={country.Country}
            continent={country.Continent}
            corporateTax={country['Corporate Tax Rate']}
            incomeTax={country['Highest Income Tax Rate']}
            vatRate={country['VAT Rate']}
            iso={country.ISO}
          />
        ))}
      </div>
    </>
  );
}
