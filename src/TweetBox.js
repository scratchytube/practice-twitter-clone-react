import React from 'react'
import './TweetBox.css'
import { Button, Avatar } from '@material-ui/core';

const TweetBox = () => {
    return (
        <div className="tweetBox" >
            <form>
                <div className="tweetBox__input" >
                    <Avatar src="https://m.media-amazon.com/images/I/41jTDZiISeL.jpg" />
                    <input placeholder="What's poppin" type="text"/>
                </div>
                    <input 
                    className="tweetBox__inputImage"
                    placeholder="Enter pinot" 
                    type="text" />
                <Button className="tweetBox__tweetButton" >Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox