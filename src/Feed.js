import React, { useState, useEffect } from 'react'
import TweetBox from './TweetBox'
import Post from './Post'
import './Feed.css'
import db from './firebase'

const Feed = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => (
        setPosts(snapshot.docs.map(doc => doc.data()))
    ))
    }, [])

    console.log(posts)


    return (
        <div className="feed">
            {/* Header */}
            
            <div className="feed__header" >
                <h2>Home</h2>
            </div>

            {/* Tweetbox */}
            <TweetBox />

            <Post 
            displayName="Sara Jay" 
            userName="@sarajay" 
            verified={true}
            text="oh snap its working from firebase"
            avatar='https://img.begroup.co/-C0GPz-i5WwA/AAAAAAAAAAI/AAAAAAAAABE/-lceuv_PyAQ/.jpg'
            image="https://cdni.pornpics.com/1280/7/83/57918215/57918215_086_03cd.jpg"
            />
            {/* <Post />
            <Post />
            <Post />
            <Post />
            <Post /> */}

            

        </div>
    )
}

export default Feed