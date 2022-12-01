import React from 'react'

class Cart extends React.Component{
    
    state ={
        Cart_Item_Name:"Apple i3 Iphone",
        Cart_Item_Img:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-pink?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1657641867367",
        Cart_Item_Price:129900,
        Cart_Item_Qty :1,
        Cart_Item_Total:129900
    }
    plushandler =() =>{
       this.setState({Cart_Item_Qty: this.state.Cart_Item_Qty+1})
    }
    minushandler = () =>{
    this.setState({Cart_Item_Qty: this.state.Cart_Item_Qty-1})
    }
    render(){
        return(
            <>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>Iphone Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                    </tr>
                    </thead>
                <tbody>
                    <tr>
                    <td>{this.state.Cart_Item_Name}</td>
                    <td><img src={this.state.Cart_Item_Img} alt="" height="100px" /></td>
                    <td>{this.state.Cart_Item_Price}</td>
                    <td><i className='fa fa-minus-circle' onClick={this.minushandler}></i>{this.state.Cart_Item_Qty}<i className='fa fa-plus-circle' onClick={this.plushandler}></i></td>
                    
                    <td>{this.state.Cart_Item_Qty * this.state.Cart_Item_Price}</td>


                    </tr>
                </tbody>
            </table>
            </>
        )
    }
}
export default Cart
