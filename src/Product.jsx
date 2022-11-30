import React from "react";

class Product extends React.Component {
  state = {
    Product_Name: "APPLE iPhone 13 (Starlight, 128 GB)",
    Product_img:
      "https://rukminim1.flixcart.com/image/832/832/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg?q=70 ",
    Product_Price: 65999,
    Product_qty: 1,
    Product_Total: 65999,

    object2: {
      Product_Name: "APPLE 2020 Macbook Air M1",
      Product_img:
        "https://rukminim1.flixcart.com/image/832/832/l4hcx3k0/computer/e/l/j/macbook-air-thin-and-light-laptop-apple-original-imagfdeqqe6kkuxw.jpeg?q=70 ",
      Product_Price: 89999,
      Product_qty: 1,
      Product_Total: 89999,
    },
  };
  incrhandler = () => {
    this.setState({ Product_qty: this.state.Product_qty + 1 });
  };
  dcrhandler = () => {
    this.setState({ Product_qty: this.state.Product_qty - 1 });
  };
  render() {
    return (
      <>
        <hr></hr>
        <h1>PRODUCT COMPONENT </h1>
        <table className="table table-hover">
          <thead>
            <tr>
              <td>Product Name</td>
              <td>Image</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Total Price</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.Product_Name}</td>
              <td>
                <img src={this.state.Product_img} alt="" height="100px" />
              </td>
              <td>{this.state.Product_Price}</td>
              <td>
                <i className="fa fa-minus-circle" onClick={this.dcrhandler}></i>
                {this.state.Product_qty}{" "}
                <i className="fa fa-plus-circle" onClick={this.incrhandler}></i>
              </td>
              <td>{this.state.Product_qty * this.state.Product_Price}</td>
            </tr>
            
          </tbody>
        </table>
      </>
    );
  }
}
export default Product;