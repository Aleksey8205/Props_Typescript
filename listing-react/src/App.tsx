import React from "react";
import Listing from './Listing.tsx'; 
import './App.css';
import type { ListingItem } from './ListingItem';

import listingsData from './assets/etsy.json';

function filterListings(listings: any[]): ListingItem[] {
  return listings.map((item) => ({
    listing_id: item.listing_id,
    url: item.url,
    MainImage: item.MainImage && item.MainImage.url_570xN ? { url_570xN: item.MainImage.url_570xN } : { url_570xN: '' },
    title: item.title,
    currency_code: item.currency_code,
    price: item.price,
    quantity: item.quantity,
  }));
}

const listings: ListingItem[] = filterListings(listingsData);

function App() {
  return (
    <div className="App">
      <Listing items={listings} />
    </div>
  );
}

export default App;