import React from 'react'
import './Widgets.css'
import SearchIcon from '@material-ui/icons/Search';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from 'react-twitter-embed'

const Widgets = () => {
return(
    <div className="widgets" >
        <div className="widgets__input" >
            <SearchIcon className="widgets_searchIcon" />
            <input placeholder="suck it" type="text" />
        </div>

        <div className="widgets__widgetContainer" >
            <h2>What's happenin</h2>

            <TwitterTweetEmbed tweetId={"858551177860055040"} />

            <TwitterTimelineEmbed 
            sourceType="profile"
            screenName="WSBgod"
            options={{ height: 400 }}
            />

            <TwitterShareButton
            url={"pornhub.com"}
            options={{ text: "i luv pinot", via: "scratchytube" }}
            />


        </div>


    </div>
)
}

export default Widgets