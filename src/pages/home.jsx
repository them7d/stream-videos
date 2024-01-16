import Header from "../components/header";
export default function home() {
  return (
    <div className="main ">
      <Header />
      <div className="content px-6 mt-5 flex">
        <div className="video_container w-[70%]">
          <video src="video.mp4" className="w-full h-auto" controls></video>
        </div>
        <div className="chat h-full shadow rounded-xl bg-gray-100 mx-5 grow flex items-end min-h-[400px]">
            <input type="text" className="w-full p-2 bg-transparent focus:outline-none" placeholder="Enter Comment"/>
          <button type="submit">
            </button>
          </div>
      </div>
    </div>
  );
}
