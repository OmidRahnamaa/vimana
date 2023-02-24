import React from "react";
import Wrapper from '../../../../HOC/Wrapper'
import { Link } from 'react-router-dom'
import LogoPng from '../../../../Assets/images/logo1.png'
import classes from './Navbar.module.css'
import { RiSearchLine } from 'react-icons/ri'
import { RxPerson } from 'react-icons/rx'
import { HiOutlineShoppingBag } from 'react-icons/hi'

const Navbar = () => {
    return (
        <Wrapper>
            <div className="container">
                <div className={classes.navbar}>
                    <ul className={classes.leftSide}>
                        <div>
                            <a  className={classes.purchaseList}>
                                <HiOutlineShoppingBag />
                                <span>سبد خرید</span>
                            </a>
                            <a  className={classes.account}>
                                <RxPerson />
                                <span>حساب کاربری</span>
                            </a>

                            <a  className={classes.search}>
                                <RiSearchLine />
                                <span>جستجو</span>
                            </a>
                        </div>
                    </ul>
                    <ul className={classes.rightSide}>
                        <div>
                            <li><Link to="/accessories">لوازم جانبی</Link></li>
                            <li><Link to="/men">مردانه</Link></li>
                            <li><Link to="/women">زنانه</Link></li>
                        </div>
                    </ul>
                    <a className={classes.logo}>
                        <img src={LogoPng} alt='test'/>
                    </a>
                </div>
            </div>
        </Wrapper>
    )
}

export default Navbar