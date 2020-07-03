import React, { Component } from 'react';

import dungescape1 from './../resources/images/dungescape_1.jpg';
import demonHunterTshirt from './../resources/images/demon_hunters-tshirt.png';

import './../components/products/products';

import {
  FluidContainer,
  Container,
  Row,
  Col,
  Image
} from './../components/bootstrap/Bootstrap';
import Products from './../components/products/products';

export default class ProductsPage extends Component {
  render() {
    return (
      <FluidContainer>
        <Row>
          <Col>
            <h1>PRODUCTS</h1>
          </Col>
        </Row>
        {/*
        <Row className="product-filter-row">
          <Col className="product-text-filter-col col-12 col-sm-6 col-lg-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search Term"
            />
          </Col>
          <Col className="col-12 col-sm-6 col-lg-4">
            <select className="form-control">
              <option value="0">Alpabetical [A-Z]</option>
              <option value="1">Alpabetical [Z-A]</option>
              <option value="2">Publish Date [Newest-Oldest]</option>
              <option value="3">Publish Date [Oldest-Newest]</option>
              <option value="4">Random</option>
            </select>
          </Col>
				</Row>
				**/}

        {/* Demon Hunters T-shirt **/}
        <Row className="product m-1 pt-3 pb-3">
          <Col className="product-image col-auto">
            <Image src={demonHunterTshirt} />
          </Col>
          <Col className="product-text justify-content-start">
            <h1>Demon Hunters</h1>
            <p>
              <i>Join the Demon Hunters. Protect humankind from evil demons!</i>
              <br />
              The Demon Hunters t-shirts are a tribute to the wonderful ttrpg
              ruleset Yokia Hunters Society
            </p>
            <table className="product-info">
              <tbody>
                <tr>
                  <th scope="row">Format</th>
                  <td>T-shirt</td>
                </tr>
              </tbody>
            </table>
            <Container className="pt-3 pl-0 ml-0">
              <Row>
                <Col>
                  <a
                    href="https://shop.spreadshirt.se/random-rambling-press/"
                    target="_blank"
                  >
                    To buy, go to our Spreadshirt store
                  </a>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>

        {/* Dungescape Issue 1 **/}
        <Row className="product m-1 pt-3 pb-3">
          <Col className="product-image col-auto">
            <Image src={dungescape1} />
          </Col>
          <Col className="product-text justify-content-start">
            <h1>The Dungescape #1</h1>
            <p>
              <i>
                Dark and dank! The Dungeon of abandoned dreams is not a merry
                place to be. Watered down soup and torture is on the day’s menu.
                Not for the weak.
                <br />
                Like all others, you have been imprisoned without a trial,
                unjust and mistreated. The King weeds out the rotten fruits of
                society, his nephew, the court jester, you, all that don’t
                please him. You will perish in the dungeons like the filth you
                are.
              </i>
              <br />
              <br />
              The Dungescape pamphlet adventure was born from two ideas. To
              write a small enough adventure to fit on two pages, and why not
              try to escape a dungeon instead of exploring it.
              <br />
              <br />
              The original Dunescape was a three part adventure played at the
              Borås Game Convention 2019 using the Mörk Borg rules for the first
              time. But from there to here the idea grew beyond two pages and
              being a complete adventure. Now it's more like a start or middle
              of a larger adventure, or a very short one-shot. Or it might be
              used as a hook or a seed for a larger adventure or just a catalyst
              for your own ideas. However you decide to use it, just have fun
              with it.
              <br />
              <br />
              Future Dungescapes will build on this theme and the next will be
              the continuation of this as we have played it. Enjoy!
            </p>
            <table className="product-info">
              <tbody>
                <tr>
                  <th scope="row">Format</th>
                  <td>PDF</td>
                </tr>
                <tr>
                  <th scope="row">Pages</th>
                  <td>2</td>
                </tr>
                <tr>
                  <th scope="row">Status</th>
                  <td>Downloadable</td>
                </tr>
                <tr>
                  <th scope="row">Price</th>
                  <td>Free</td>
                </tr>
              </tbody>
            </table>
            <Container className="pt-3 pl-0 ml-0">
              <Row>
                <Col>
                  <a
                    href="https://www.drivethrurpg.com/product/308610/The-Dungescape-Issue-1"
                    target="_blank"
                  >
                    To download go to DriveThruRPG
                  </a>
                </Col>
              </Row>
            </Container>
            {/*<Container className="pt-3 pl-0">
              <Row>
                <Col>
                  <a href="">Read More about ...</a>
                </Col>
              </Row>
						</Container>
            <Container className="pt-3 pl-0">
              <Row>
                <Col>
                  <input
                    className="btn btn-primary col-10 col-sm-6 col-md-4 col-lg-2"
                    type="button"
                    value="Order"
                  />
                </Col>
              </Row>
            </Container>**/}
          </Col>
        </Row>
      </FluidContainer>
    );
  }
}
