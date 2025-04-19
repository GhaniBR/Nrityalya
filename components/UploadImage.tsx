import { useEffect, useRef, useState } from "react";

function GestureRecognition() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [prediction, setPrediction] = useState("");
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [mode, setMode] = useState<"hand" | "body">("hand");

  useEffect(() => {
    return () => closeCamera(); // Cleanup on unmount
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      // Wait for next tick to ensure videoRef is in DOM
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          console.log("Camera started and video element found.");
        } else {
          console.warn("videoRef is null when setting srcObject.");
        }
      }, 100); // slight delay ensures DOM update completes

      setIsCameraOn(true);
    } catch (error) {
      console.error("Error accessing webcam:", error);
    }
  };

  const closeCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsCameraOn(false);
  };

  const captureAndSendFrame = async () => {
    if (!videoRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    canvas.toBlob(async (blob) => {
      if (blob) {
        const formData = new FormData();
        formData.append("file", blob, "frame.jpg");

        const endpoint =
          mode === "hand"
            ? "http://localhost:8000/predict/hand/"
            : "http://localhost:8000/predict/body/";

        try {
          const response = await fetch(endpoint, {
            method: "POST",
            body: formData,
          });

          const data = await response.json();
          if (data.hand_gesture) setPrediction(data.hand_gesture);
          if (data.body_pose) setPrediction(data.body_pose);
        } catch (error) {
          console.error("Error fetching prediction:", error);
        }
      }
    }, "image/jpeg");
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isCameraOn) {
      interval = setInterval(captureAndSendFrame, 1000);
    }
    return () => clearInterval(interval);
  }, [isCameraOn, mode]);

  const baseButtonClass =
    "px-4 py-2 font-semibold rounded-lg transition-all duration-300";
  const activeButtonClass = "bg-[#f54a00] text-white";
  const inactiveButtonClass = "bg-gray-300 text-gray-800";

  const bodyButtonClass =
    mode === "body"
      ? `${baseButtonClass} ${activeButtonClass}`
      : `${baseButtonClass} ${inactiveButtonClass}`;

  const handButtonClass =
    mode === "hand"
      ? `${baseButtonClass} ${activeButtonClass}`
      : `${baseButtonClass} ${inactiveButtonClass}`;

  // ========== UI Render Start ==========

  // For BODY mode full screen layout
  if (mode === "body" && isCameraOn) {
    return (
      <div className="w-screen h-screen bg-gray-100 flex flex-col items-center justify-start p-4">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="w-[80vw] h-[73vh] rounded-lg shadow-md"
        />
        <canvas ref={canvasRef} width="640" height="480" className="hidden" />

        <h3 className="text-lg font-semibold text-gray-700 mt-4">
          Prediction:{" "}
          <span className="text-[#f54a00]">{prediction || "N/A"}</span>
        </h3>

        <div className="flex gap-4 mt-4">
          <button onClick={() => setMode("hand")} className={handButtonClass}>
            Hand Gesture
          </button>
          <button onClick={() => setMode("body")} className={bodyButtonClass}>
            Body Pose
          </button>
        </div>

        <button
          onClick={closeCamera}
          className="mt-4 px-6 py-2 text-white font-semibold rounded-lg transition-all duration-300 bg-[#f54a00] hover:bg-[#c03b00] focus:outline-none focus:ring-2 focus:ring-[#f54a00]"
        >
          Close Camera
        </button>
      </div>
    );
  }

  // For HAND mode or BODY mode with camera OFF
  return (
    <div
      className={`flex flex-col items-center justify-center bg-gray-100 p-6 ${
        mode === "body" && isCameraOn ? "min-h-screen" : "min-h-[74.2vh]"
      }`}
    >
      <div
        className={`bg-white rounded-lg shadow-lg flex flex-col items-center transition-all duration-500 ${
          mode === "body" && isCameraOn
            ? "w-screen h-screen p-2"
            : "w-full max-w-lg p-6"
        }`}
      >
        {/* Always mounted so ref is available */}
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className={`rounded-lg transition-all duration-500 ease-in-out ${
            isCameraOn ? "block" : "hidden"
          } ${mode === "body" ? "w-[95vw] h-[80vh]" : "w-full h-[320px]"}`}
        />

        <canvas ref={canvasRef} width="640" height="480" className="hidden" />

        {/* Prediction only in body mode */}
        {mode === "body" && isCameraOn && (
          <h3 className="text-lg font-semibold text-gray-700 mt-4">
            Prediction:{" "}
            <span className="text-[#f54a00]">{prediction || "N/A"}</span>
          </h3>
        )}

        {/* Content shown only in hand mode or when camera is OFF in body mode */}
        {(mode === "hand" || !isCameraOn) && (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mt-4 text-center">
              Real-Time Gesture & Body Pose Recognition
            </h2>
            <h3 className="text-lg font-semibold text-gray-700 mt-2">
              Prediction:{" "}
              <span className="text-[#f54a00]">{prediction || "N/A"}</span>
            </h3>
          </>
        )}

        <div className="flex flex-col items-center mt-4 gap-4">
          <div className="flex gap-4">
            <button onClick={() => setMode("hand")} className={handButtonClass}>
              Hand Gesture
            </button>
            <button onClick={() => setMode("body")} className={bodyButtonClass}>
              Body Pose
            </button>
          </div>

          <button
            onClick={isCameraOn ? closeCamera : startCamera}
            className="px-6 py-2 text-white font-semibold rounded-lg transition-all duration-300 bg-[#f54a00] hover:bg-[#c03b00] focus:outline-none focus:ring-2 focus:ring-[#f54a00]"
          >
            {isCameraOn ? "Close Camera" : "Open Camera"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default GestureRecognition;
