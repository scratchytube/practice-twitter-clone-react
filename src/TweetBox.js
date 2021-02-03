import React, { useState } from 'react'
import './TweetBox.css'
import { Button, Avatar } from '@material-ui/core';
import db from './firebase'

const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState("")
    const [tweetImage, setTweetImage] = useState("")

    const sendTweet = e => {
    e.preventDefault()

    db.collection('posts').add({
        displayName: "Sara Jay",
        userName: "@sarajay",
        verified: true,
        avatar: "https://m.media-amazon.com/images/I/41jTDZiISeL.jpg",
        text: tweetMessage,
        image: tweetImage
    })

    setTweetMessage("")
    setTweetImage("")
    }

    return (
        <div className="tweetBox" >
            <form onSubmit={sendTweet} >
                <div className="tweetBox__input" >
                    <Avatar src="https://m.media-amazon.com/images/I/41jTDZiISeL.jpg" />
                    <input 
                    placeholder="What's poppin" 
                    type="text"
                    value={tweetMessage}
                    onChange={(e) => setTweetMessage(e.target.value)}
                    />
                </div>
                    <input 
                    className="tweetBox__inputImage"
                    placeholder="Enter pinot" 
                    type="text" 
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    />
                <Button 
                type="submit"
                name="submit"
                className="tweetBox__tweetButton" >Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox