import video from "../data/video.js";
import Video from "./Video";
import Comments from "./Comments"

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <h2>{video.title}</h2>
      <p>{video.views} Views | Uploaded at {video.createdAt}</p>
      <Video />
      <br></br>
      <Comments comments={video.comments} />
    </div>
  );
}

export default App;
