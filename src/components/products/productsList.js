import React, { useState } from 'react';
import { Row, Col, Image } from './../../components/bootstrap/Bootstrap';

import { product_image_path } from './../../Config';
import ProductTitle from './productTitle';
import ProductIntro from './productIntro';
import ProductDescription from './productDescription';
import ProductInformation from './productInformation';
import ProductLink from './productLink';

import './products.css';
import ProductFilter from './productsFilter';

export default function ProductsList(props) {
  const [data, setData] = useState(props.data);
  const [filteredData, setFilterData] = useState(props.data);

  const filterData = (filter) => {
    var output = data.filter((product) => product.pages === '1');
    setFilterData(output);
  };

  return (
    <>
      <ProductFilter onFilterChange={(filter) => filterData(filter)} />
      {filteredData.map((item) => (
        <Row key={item.id} className="product m-1 pt-3 pb-3">
          <Col className="product-image col-auto">
            <Image src={product_image_path + item.image} />
          </Col>
          <Col className="product-text justify-content-start">
            <ProductTitle title={item.title} />
            <ProductIntro intro={item.intro} />
            <ProductDescription description={item.description} />
            <ProductInformation item={item} />
            <ProductLink linkText={item.linktext} link={item.link} />
          </Col>
        </Row>
      ))}
    </>
  );
}
