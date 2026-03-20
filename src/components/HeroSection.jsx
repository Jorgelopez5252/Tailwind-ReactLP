import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import { useComingSoon } from "../components/ComingSoonContext";

const HeroSection = () => {
  const videos = [video1, video2];
  const { openComingSoon } = useComingSoon();

  return (
    <div id="hero" className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtuCraft build tools{" "}
        <span className="bg-linear-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          for developers
        </span>
      </h1>

      <p className="text-lg text-center mt-10 text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        powerful development tools. Get started today and turn your imagination
        into immersive reality.
      </p>

 <div className="flex flex-col sm:flex-row justify-center items-center my-10">
  <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      openComingSoon();
    }}
    className="bg-linear-to-r from-orange-500 to-orange-800 py-3 px-4 my-2 sm:mx-3 rounded-md"
  >
    Start for Free
  </a>

  <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      openComingSoon();
    }}
    className="py-3 px-4 my-2 sm:mx-3 rounded-md border"
  >
    Documentation
  </a>
</div>

      <div className="flex flex-col lg:flex-row mt-10 justify-center items-center">
        {/* map through the videos array and render a video element for each video source */}
        {videos.map((video, index) => (
          <video
            key={index}
            autoPlay
            loop
            muted
            playsInline
            className="rounded-lg w-full lg:w-1/2 max-w-xl border border-orange-700 shadow-orange-400 mx-2 my-4"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
      </div>
    </div>
  );
};

export { HeroSection };
