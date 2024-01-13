import Header from "../components/header";
export default function home() {
  return (
    <div className="main ">
      <Header />
      <div className="content px-6 mt-5">
        <div className="video_container">
          <h1>hello world</h1>
          <video src="video.mp4"></video>
        </div>
      </div>
    </div>
  );
}
