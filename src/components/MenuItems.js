import React, {Component} from 'react'
import blueberry from '../blueberry.jpg';
import chocolate from '../chocolate.jpg';
import coconut from '../coconut.jpg';
import LikeButton from '../components/LikeButton';
import '../Orders.css';

class MenuItems extends Component {
//initialize state directly inside class = using a class instance property
// scope is inside the class
//state property = referenced directly
    state = {
        cookiesClicked: false,
        cupcakesClicked: false
    }
    handleCookiesClicked = () => {
        this.setState({
            cookiesClicked: !this.state.cookiesClicked
        })
    }
    handleCupcakesClicked = () => {
        this.setState({
            cupcakesClicked: !this.state.cupcakesClicked
        })
    }
    render() {
        return (

            <div >
                <h2>Click below to check out our menu:
                </h2>
<button onClick={this.handleCookiesClicked}>Cookies</button>
                <p></p>
                {this.state.cookiesClicked
                    ? <div>
                            <img src={blueberry} alt="blueberry" height={200} width={200}/>
                            <h4>Blueberry Lemon
                            </h4>
                            <h5>$3.50
                            </h5>
                            <LikeButton/>
                    <p></p>
                            <img src={chocolate} alt="chocolate" height={200} width={200}/>
                            <h4>Chocolate Chip
                            </h4>
                            <h5>$3.00
                            </h5>
                            <LikeButton/>
<p></p>
                            <img src={coconut} alt="coconut" height={200} width={200}/>
                            <h4>Almond Coconut
                            </h4>
                            <h5>$3.25
                            </h5>
                            <LikeButton/>
                        </div>
                    : null 
}
<p></p>
<button onClick={this.handleCupcakesClicked}>Cupcakes</button>
<p></p>
                {this.state.cupcakesClicked
                    ? <div>
                           <h4>Sold out of cupcakes for today! Check back tomorrow morning at 8am! You can also contact us for any special orders you need. </h4>
                        </div>
                    : null 
}
            </div>
        )
}
}

export default MenuItems;

