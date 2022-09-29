import styles from "./styles.module.css";
import { useState } from "react";
const Main = () => {
    const handlecopy = () => {
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
      };
    const URL = "https://www.youtube.com/watch?v=yt4-qlU__iM";
    const [url, setUrl] = useState(URL);
    function ytVidId(url) {
        var p =
        /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
        return url.match(p) ? RegExp.$1 : false;
    }
    
    function ImageLink({ src, url }) {
        return <>
      <br />
      <small className='text-center'>Right-Click and "Save Image As"</small>
      <br /><br/>
      <div className='form-group container'>
        <input className='form-control' type="text" defaultValue={src} readOnly />
      </div>
      <br/>
      <img className='img-thumbnail img-responsive' src={src} alt={`Youtube thumbnail for video ${url}`} style={{ maxWidth: "100%", height: 'auto' }} />
      <br />
      <br/>
    </>
  }

  const handleLogout = () => {
      localStorage.removeItem("token");
      window.location.reload();
	};
    const id = ytVidId(url);
    // const url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    const large = `https://i3.ytimg.com/vi/${id}/maxresdefault.jpg`;
	return (
        <>
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Create thumbnail</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>

		</div>
        <div className={styles.main_container}>
        <div className="container">
      <br/><br/>
      <h1 className='text-center'>Youtube Video Thumbnail Downloader</h1>
      <br/><br/>
      <p className='text-center' style={{ maxWidth: "500px", margin: "auto" }}>
        To get the video thumbnail of any YouTube Video enter the regular URL of
        the video into the textbox below.
      </p>
      <p className='text-center'>
        Your URL should look like this: <br />
        <em>{URL}</em>
      </p>
      <div className='form-group container'>
        <label for="url">Enter Youtube Video URL:</label>
      {/* <input className='form-control' type="text" value="https://www.youtube.com/watch?v=dQw4w9WgXcQ" onChange={(e) => setUrl(e.target.value)} /> */}
      {/* <input className='form-control' type="text" value="https://www.youtube.com/watch?v=dQw4w9WgXcQ"/> */}
      <input className='form-control' id="mybox" type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
      <button  className="btn btn-primary mx-1 my-2" onClick={handlecopy}>
          Copy
        </button>
      </div>
      {/* <ImageLink  url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" /> */}
      <ImageLink key={large} src={large} url={url} />
      <button  className="btn btn-primary mx-1 my-2" onClick={handlecopy}>
          Copy
        </button>
    </div>
        </div>
        </>
	);
};

export default Main;