import { useParams } from "react-router-dom";
import Description from "components/Description";

const DescriptionPage = () => {
  const { postId } = useParams<{ postId: string }>(); // Extract postId from URL

  console.log("Extracted postId:", postId); // Debugging line

  return (
    <div className="max-w-6xl p-6 mx-auto mt-16 mb-6 bg-white rounded-lg">
      <Description postId={postId || "unknown"} />
    </div>
  );
};

export default DescriptionPage;
