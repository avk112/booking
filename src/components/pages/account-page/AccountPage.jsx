import React,{useEffect} from 'react';
import classes from "./AccountPage.module.css";
import Breadcrumbs from "../../Breadcrumbs";
import UniversalBanner from "../../UniversalBanner";
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../../../redux/userSlice";
import {Link} from "react-router-dom";
import {deleteOrder, getOrders} from "../../../redux/bookingSlice";
import deleteGrey from "../../../image/delete-grey.png";


const AccountPage = () => {
    const dispatch = useDispatch();
    const reducedUser=useSelector(getUser);
    const orders = useSelector(getOrders);
    const fullUser = JSON.parse(localStorage.getItem("userData"));
    const user={...reducedUser, password : fullUser.password};
    const infoRows = ["username", "email", "password", "orders"];

    const breakOrder = (id)=> {
        dispatch(deleteOrder(id));
    };

    const ordersBlock = orders.length > 0
        ? orders.map(item=>{
            return <div key={item.id} className={classes.accountPage__item__ordersBlock__order}>
                        <ul  className={classes.accountPage__item__ordersBlock__order__ul}>
                            <li>
                                <h5>Car</h5>
                                <span>{item.name}</span>
                            </li>
                            <li>
                                <h5>Route</h5>
                                <span>{item.destinations.startCity} - {item.destinations.finishCity}</span>
                            </li>
                            <li>
                                <h5>Period</h5>
                                <span>{item.days} days from {new Date(item.dates[0]).toLocaleDateString("uk-UA")} till {new Date(item.dates[1]).toLocaleDateString("uk-UA")}</span>
                            </li>
                            <li>
                                <h5>Price</h5>
                                <span>${item.price}</span>
                            </li>
                        </ul>
                        <img
                            src={deleteGrey}
                            alt="delete"
                            title="Delete order"
                            onClick={()=>breakOrder(item.id)}
                        />
                    </div>
        })
        : <h3 className={classes.accountPage__item__subtitle}>
            No orders yet
        </h3>


    const infoBlock = infoRows.map((item, index)=>{
        return <div key={index} className={classes.accountPage__item}>
                    <h4 className={classes.accountPage__item__title}>
                        Your {item}:
                    </h4>
                    {item==="orders"
                        ? <div className={classes.accountPage__item__ordersBlock}>
                                {ordersBlock}
                            </div>
                        : <h3 className={classes.accountPage__item__subtitle}>
                            {user[item]}
                          </h3>
                    }

                </div>
    });


    const emptyAccount =  <>
                            <h1 className="universal-container__header" >Your account doesn't exist yet</h1>
                            <p className="universal-container__subheader" >
                                <Link to="/login">Log in or register </Link>
                                to complete access
                            </p>
                        </>;

    useEffect(()=>{
        window.scroll(0, 0);
    }, []);

    return (
        <>
            <UniversalBanner
                title="My Account"
                innerBlock={ <Breadcrumbs/>}
            />
            <div className={`universal-container ${classes.accountPage}`}>
                {user?.username
                 ?
                    infoBlock
                 :
                    emptyAccount
                }
            </div>
        </>
    );
};

export default AccountPage;