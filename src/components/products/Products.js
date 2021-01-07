import React from 'react';
import { Row, Col, Image } from './../../components/bootstrap/Bootstrap';
import { useQuery, gql } from '@apollo/client';

import ProductTitle from './productTitle';
import ProductIntro from './productIntro';
import ProductDescription from './productDescription';
import ProductInformation from './productInformation';
import ProductLink from './productLink';

import './products.css';

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

const Products = () => {
  const { loading, error, data } = useQuery(ALL_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.allProducts.map((item) => (
    <Row key={item.id} className="product m-1 pt-3 pb-3">
      <Col className="product-image col-auto">
        <Image
          src={'http://randomramblingpress.se/images/products/' + item.image}
        />
      </Col>
      <Col className="product-text justify-content-start">
        <ProductTitle title={item.title} />
        <ProductIntro intro={item.intro} />
        <ProductDescription description={item.description} />
        <ProductInformation item={item} />
        <ProductLink linkText={item.linktext} link={item.link} />
      </Col>
    </Row>
  ));
};

export default Products;
