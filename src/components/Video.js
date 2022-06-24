import React, {useState} from "react";
import video from "../data/video"

function Video() {
    const [upvote, setUpvote] = useState(video.upvotes)
    const [downvote, setDownVote] = useState(video.downvotes)

    function handleUpVotes() {
        setUpvote(upvote + 1)
    }

    function handleDownVotes() {
        setDownVote(downvote + 1)
    }
    return(
        <div>
            <button onClick={handleUpVotes} className="upvotes"> {upvote}</button>
            <button onClick={handleDownVotes} className="downvotes">{downvote}</button>
        </div>
    )
}
export default Video