import React, {useState} from 'react';
import UniversalRating from "./UniversalRating";
import calendarImg from "../image/calendar.png";
import {useSelector} from "react-redux";
import {getUser} from "../redux/userSlice";

const Comment = ({itemToComment, setItemToComment, rating=true}) => {
    const user=useSelector(getUser);
    class defaultReview {
        constructor(author=user?.username, text="", rating=0, date=new Date()) {
            this.author = author;
            this.text = text;
            this.rating = rating;
            this.date = date;
        }
    }

    const [userReview, setUserReview] = useState(new defaultReview());
    const [resetRating, setResetRating] = useState(Date.now());

    const handleFormInputs = (e)=> {
        const name=e.target.name;
        const value =e.target.value;
        setUserReview(prev=>({...prev, [name]: value}));
    };

    const handleUserRating = (userRating)=>{
        const newRating = Number(userRating)
        setUserReview(prev=>({...prev, rating: newRating}));
    };

    const sendForm = (e)=> {
        e.preventDefault();
        const newId =itemToComment.reviews.length+1;
        setItemToComment(prev=>({...prev, reviews: [...prev.reviews, {...userReview, id: newId}]}));
        setUserReview(new defaultReview());
        setResetRating(Date.now());
    };

    const commentFormBlock = <form
                                    className="universalCommentBlock__form"
                                    onSubmit={sendForm}
                                >
                                    <h3 className="universalCommentBlock__form__title">
                                        Leave your comment:
                                    </h3>
                                    {rating &&
                                        <UniversalRating
                                            reset={resetRating}
                                            handleUserRating = {handleUserRating}
                                            className="universalCommentBlock__form__rating"
                                        />
                                    }
                                    <input
                                        type="text"
                                        name="author"
                                        value={userReview.author}
                                        placeholder="Enter your name"
                                        onChange={handleFormInputs}
                                    />
                                    <textarea
                                        name="text"
                                        value={userReview.text}
                                        placeholder="Enter your review"
                                        maxLength={250}
                                        onChange={handleFormInputs}
                                    />
                                    <button className={`universal-button universalCommentBlock__form__button`}>
                                        Send
                                    </button>
                                </form>;



    return (
        <div className="universalCommentBlock">
            {itemToComment?.reviews.length > 0
                &&
                itemToComment?.reviews.sort((a,b)=>(new Date(b.date)-new Date(a.date))).map(item=>{
                return <div key={item.id} className="universalCommentBlock__item">
                    <div className="universalCommentBlock__item__top">
                        <h5 className="universalCommentBlock__item__top__title">
                            {item.author}
                        </h5>
                        <div className="universalCommentBlock__item__top__date">
                            <img src={calendarImg} alt="calendar"/>
                            <span>{item.date.toLocaleDateString("uk-UA")}</span>
                        </div>
                    </div>
                    {rating &&
                        <UniversalRating
                            fixedValue={item.rating}
                            className="universalCommentBlock__item__rating"
                        />
                    }
                    <p>{item.text}</p>
                </div>
            })
            }
            {commentFormBlock}
        </div>
    );
};

export default Comment;