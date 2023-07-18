import React from 'react';
import classes from "./RelatedPostsArea.module.css";
import RelatedPost from "./RelatedPost";

const RelatedPostsArea = ({relatedPosts, currentLocation}) => {
    const relatedPostsBlock = relatedPosts.map(item=>{
        return <RelatedPost
                    key={item.id}
                    item={item}
                    currentLocation={currentLocation}
                />
    });


    return (
        <div className={classes.relatedPosts}>
            {relatedPostsBlock}
        </div>
    );
};

export default RelatedPostsArea;