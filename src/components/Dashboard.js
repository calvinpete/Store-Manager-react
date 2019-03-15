import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
import fetchAllProducts from '../actions/fetchAllAction';
import MenuHeader from './Menu';


export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchAllProducts();
  }

  render() {
    const allProducts = data => data.map(product => (
      <tr key={product.product_id}>
        <td className="uppercase-first">{product.product_name}</td>
        <td className="uppercase-first center-align">{product.details}</td>
        <td className="center-align">{product.quantity}</td>
        <td className="center-align">{product.created_on}</td>
        <td className="center-align">{product.last_modified}</td>
        <td className="right-align">{product.price}</td>
      </tr>
    ));
    if (this.props.products === []) return null;
    return (
      <Container>
        <MenuHeader />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md ml-sm-auto pt-3 px-4">
              <div className="table-responsive">
                <table className="table table-hover">
                  <caption>List of all products in store</caption>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th className="center-align">Details</th>
                      <th className="center-align">Quantity</th>
                      <th className="center-align">Added on</th>
                      <th className="center-align">Last Modified</th>
                      <th className="right-align">price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allProducts(this.props.products)}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  products: state.fetchAllReducer.products,
});

export default connect(mapStateToProps, { fetchAllProducts })(Dashboard);
