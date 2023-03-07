import Breadcrumb from "@/components/Common/Breadcrumb";
import Video from "@/components/Video";

const VideoPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Video Page"
        description="Watch a short demo video of Astrus."
      />
      <Video />
    </>
  );
};

export default VideoPage;
