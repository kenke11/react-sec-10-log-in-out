import React from "react";
import mealsImg from "../../assets/meals.jpg"
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <React.Fragment>
            <header className="fixed top-0 left-0 w-full h-20 bg-red-900 text-white flex justify-between items-center shadow z-10 px-10p">
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className="main-img">
                <img src={mealsImg} alt="meals"/>
            </div>
        </React.Fragment>
    )
}

export default Header;