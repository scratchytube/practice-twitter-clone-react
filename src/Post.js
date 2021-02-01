import React from 'react'
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import './Post.css'

const Post = ({
    displayName,
    userName,
    verified,
    timestamp,
    text,
    image,
    avatar
}) => {
    return(
        <div className="post" >
            <div className="post_avatar" >
                <Avatar src="https://img.begroup.co/-C0GPz-i5WwA/AAAAAAAAAAI/AAAAAAAAABE/-lceuv_PyAQ/.jpg"/>
            </div>
            <div className="post__body" >
                <div className="post__header" >
                    <div className="post__headerText" >
                        <h3>Sara jay<span className="post__headerSpecial" >
                            <VerifiedUserIcon className="post__badge"/> @bpsahota
                            </span> 
                        </h3>
                    </div>
                    <div className="post_headerDescription" >
                        <p>I challenge you to a deepthroat</p>
                    </div>
                </div>
                <img src="https://cdni.pornpics.com/1280/7/83/57918215/57918215_086_03cd.jpg" alt="sara darling" />
                <div className="post__footer" >
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    )
}

export default Post