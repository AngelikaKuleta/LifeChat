import React from 'react';
import {ShopItem} from './ShopItem';
import Avatars from './Avatars';
import "./Shop.css";

class Shop extends React.Component {
    state = {
        items : [
            {name: "theme", price:"54" },
            {name: "theme", price:"54" },
            {name: "theme", price:"54" },
            {name: "theme", price:"54" },
            {name: "theme", price:"54" }
        ],
        user: {money: 700, 
            itemsBought: []
        } 
    }

    handleButtonClick = (e, index) => {
        if (this.state.items[index].price > this.state.user.money) {
            alert('You have not enough gold')
        } else {
            this.setState(prevState => ({
                user: {
                    ...prevState.user,
                    money: this.state.user.money - this.state.items[index].price,
                    itemsBought:  [...this.state.user.itemsBought, this.state.items[index] ]
                }
                }
            ))
        }

    }

    render() {
        return (
            <div>
                <div className='shop'>
                    {this.state.items.map((el,index) => 
                    <ShopItem name={el.name} key={index} price={el.price} handleClick={(e) => this.handleButtonClick(e, index)} />)
                    }
                    <Avatars />
                </div> 
            </div>
        );
    }
}

export default Shop;