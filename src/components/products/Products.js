import React from 'react';
import { useQuery, gql } from '@apollo/client';

import './products.css';
import ProductsList from './productsList';

const ALL_PRODUCTS = gql`
  query {
    allProducts {
      id
      date
      image
      title
      intro
      description
      type
      format
      pages
      status
      price
      linktext
      link
    }
  }
`;

export default function Products() {
  const { loading, error, data } = useQuery(ALL_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return <ProductsList data={data.allProducts} />;
}
