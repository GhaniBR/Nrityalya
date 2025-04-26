import { useEffect, useRef, useState } from "react";

function GestureRecognition() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isCameraOn, setIsCameraOn] = useState(false);

  // Hand mudra detection states
  const [mudra, setMudra] = useState("");
  const [mudraConfidence, setMudraConfidence] = useState(0);
  const [availableMudras, setAvailableMudras] = useState<string[]>([]);

  // Body pose detection states
  const [bodyPose, setBodyPose] = useState("");

  // Mode selection
  const [detectionMode, setDetectionMode] = useState<"hands" | "body">("hands");

  useEffect(() => {
    // Fetch available mudras when component mounts
    fetch("http://localhost:8000/mudras")
      .then((response) => response.json())
      .then((data) => {
        if (data.mudras) {
          setAvailableMudras(data.mudras);
        }
      })
      .catch((error) => console.error("Error fetching mudras:", error));

    // Add voice command event listeners
    const handleStartCamera = () => startCamera();
    const handleStopCamera = () => closeCamera();
    const handleSwitchMode = (event: CustomEvent) => {
      setDetectionMode(event.detail);
    };

    window.addEventListener('startCamera', handleStartCamera);
    window.addEventListener('stopCamera', handleStopCamera);
    window.addEventListener('switchMode', handleSwitchMode as EventListener);

    return () => {
      closeCamera(); // Cleanup camera
      // Remove event listeners
      window.removeEventListener('startCamera', handleStartCamera);
      window.removeEventListener('stopCamera', handleStopCamera);
      window.removeEventListener('switchMode', handleSwitchMode as EventListener);
    };
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        console.log("Camera started.");
      }
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
    setMudra("");
    setBodyPose("");
    setMudraConfidence(0);
  };

  const captureFrame = () => {
    if (!videoRef.current || !canvasRef.current) return null;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return null;

    // Draw the current video frame to the canvas
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    // Convert the canvas content to base64
    return canvas.toDataURL("image/jpeg");
  };

  const detectHandMudra = async (base64Image: string) => {
    if (detectionMode !== "hands") return;

    try {
      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image: base64Image,
        }),
      });

      const data = await response.json();
      if (data.mudra) {
        setMudra(data.mudra);
        setMudraConfidence(data.confidence);
      }
    } catch (error) {
      console.error("Error detecting hand mudra:", error);
    }
  };

  const detectBodyPose = async (base64Image: string) => {
    if (detectionMode !== "body") return;

    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image: base64Image,
        }),
      });

      const data = await response.json();
      if (data.prediction) {
        setBodyPose(data.prediction);
      }
    } catch (error) {
      console.error("Error detecting body pose:", error);
    }
  };

  const captureAndProcessFrame = async () => {
    const base64Image = captureFrame();
    if (!base64Image) return;

    if (detectionMode === "hands") {
      await detectHandMudra(base64Image);
    }

    if (detectionMode === "body") {
      await detectBodyPose(base64Image);
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isCameraOn) {
      interval = setInterval(captureAndProcessFrame, 1000);
    }
    return () => clearInterval(interval);
  }, [isCameraOn, detectionMode]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-6xl p-6 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4 text-[#f54a00]">
          Advanced Gesture Recognition
        </h2>

        {/* Detection Mode Selection */}
        <div className="flex justify-center mb-4">
          <div className="flex space-x-4">
            <button
              onClick={() => setDetectionMode("hands")}
              className={`px-4 py-2 rounded-lg ${
                detectionMode === "hands"
                  ? "bg-[#f54a00] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Hand Mudras
            </button>
            <button
              onClick={() => setDetectionMode("body")}
              className={`px-4 py-2 rounded-lg ${
                detectionMode === "body"
                  ? "bg-[#f54a00] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Body Poses
            </button>
            {/* <button
              onClick={() => setDetectionMode("both")}
              className={`px-4 py-2 rounded-lg ${
                detectionMode === "both" 
                  ? "bg-[#f54a00] text-white" 
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Both
            </button> */}
          </div>
        </div>

        {/* Camera View */}
        <div className="w-full">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className={`rounded-lg w-full h-[420px] ${
              isCameraOn ? "block" : "hidden"
            } bg-gray-200 object-cover`}
          />

          <canvas ref={canvasRef} width="640" height="480" className="hidden" />
        </div>

        {/* Results Display */}
        {isCameraOn && (
          <div className="mt-6 w-full flex flex-col md:flex-row justify-around">
            {detectionMode === "hands" && (
              <div className="bg-gray-50 p-4 rounded-lg mb-4 md:mb-0 md:w-5/12">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Hand Mudra Detection
                </h3>
                <div className="p-3 bg-white rounded shadow-sm">
                  <p className="text-lg">
                    Detected:{" "}
                    <span className="font-medium text-[#f54a00]">
                      {mudra || "No mudra detected"}
                    </span>
                  </p>
                  {mudraConfidence > 0 && (
                    <p className="text-sm text-gray-600 mt-1">
                      Confidence: {(mudraConfidence * 100).toFixed(2)}%
                    </p>
                  )}
                </div>
              </div>
            )}

            {detectionMode === "body" && (
              <div className="bg-gray-50 p-4 rounded-lg md:w-5/12">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Body Pose Detection
                </h3>
                <div className="p-3 bg-white rounded shadow-sm">
                  <p className="text-lg">
                    Detected:{" "}
                    <span className="font-medium text-[#f54a00]">
                      {bodyPose || "No pose detected"}
                    </span>
                  </p>
                  {mudraConfidence > 0 && (
                    <p className="text-sm text-gray-600 mt-1">
                      Confidence: {(mudraConfidence * 100).toFixed(2)}%
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Camera Controls */}
        <div className="mt-6 flex gap-4">
          {!isCameraOn ? (
            <button
              onClick={startCamera}
              className="px-6 py-2 bg-[#f54a00] text-white font-semibold rounded-lg hover:bg-[#c03b00] transition-all"
            >
              Start Camera
            </button>
          ) : (
            <button
              onClick={closeCamera}
              className="px-6 py-2 bg-[#f54a00] text-white font-semibold rounded-lg hover:bg-[#c03b00] transition-all"
            >
              Stop Camera
            </button>
          )}
        </div>

        {/* Available Mudras Display */}
        {availableMudras.length > 0 && detectionMode !== "body" && (
          <div className="mt-6 w-full">
            <h3 className="text-md font-medium text-gray-700 mb-2">
              Available Mudras:
            </h3>
            <div className="flex flex-wrap gap-2">
              {availableMudras.map((mudra, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm"
                >
                  {mudra}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GestureRecognition;
