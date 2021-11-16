// component ตระกร้าสินค้า
import { MyCartContext } from "../management/context"
import CartItem from "./CartItem"
const Cart=()=>{
    const {cart,total,formatNumber} = MyCartContext()
    if(cart.length === 0){
        return(
            <div className="shopping-cart">
                <div className="empty">ไม่มีสินค้าในตระกร้า</div>
            </div>
        )
    }else{
        return(
            <div className="shopping-cart">
                <div className="title">สินค้าในตระกร้า</div>
                {cart.map((data,index)=>{
                    return <CartItem key={index} {...data}/>
                })}
                <div className="footer">ยอดชำระเงินรวม {formatNumber(total)} บาท</div>
            </div>
        )
    }
}

export default Cart