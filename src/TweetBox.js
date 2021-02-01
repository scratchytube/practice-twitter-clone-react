import React from 'react'
import './TweetBox.css'
import { Button, Avatar } from '@material-ui/core';

const TweetBox = () => {
    return (
        <div className="tweetBox" >
            <form>
                <div className="tweetBox__input" >
                    <Avatar src="https://ci.rdtcdn.com/m=eaSaaTbWx/media/videos/200804/25/11758/original/4.jpg" />
                    <input placeholder="haaaaan" type="text"/>
                    {/* <input placeholder="Enter pinot" type="text" /> */}
                </div>
                <Button>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox