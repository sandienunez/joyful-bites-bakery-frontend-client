import React, {Component} from 'react'
import blueberry from '../blueberry.jpg';
import chocolate from '../chocolate.jpg';
import coconut from '../coconut.jpg';
import LikeButton from '../components/LikeButton';

class MenuItems extends Component {
    state = {
        cookiesClicked: false
    }
    handleCookiesClicked = () => {
        this.setState({
            cookiesClicked: !this.state.cookiesClicked
        })
    }
    render() {
        return (

            <div>
                <h1>Click below to check out menu:
                </h1>
                <button onClick={this.handleCookiesClicked}>Cookies</button>
                <p></p>
                {this.state.cookiesClicked
                    ? <div>
                            <img src={blueberry} alt="blueberry" height={200} width={200}/>
                            <h3>Blueberry Lemon
                            </h3>
                            <h4>$3.50
                            </h4>
                            <LikeButton/>
                            <b>
                                <p></p>
                            </b>

                            <img src={chocolate} alt="chocolate" height={200} width={200}/>
                            <h3>Chocolate Chip
                            </h3>
                            <h4>$3.00
                            </h4>
                            <LikeButton/>


                            <b>
                                <p></p>
                            </b>

                            <img src={coconut} alt="coconut" height={200} width={200}/>
                            <h3>Almond Coconut
                            </h3>
                            <h4>$3.25
                            </h4>
                            <LikeButton/>
                        </div>
                    : null 
}

            </div>
        )
    }
}

export default MenuItems;

