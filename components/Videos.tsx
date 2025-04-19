import { useState } from "react";
import { ChevronLeft, PlayCircle } from "lucide-react";
import { useNavigate } from "react-router";

const Videos = () => {
  const navigate = useNavigate();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videos = [
    {
      id: "bi5oVX0Sp9s",
      title: "Basic Mudra Series 1 (single hand)",
      description: "Learn the fundamental hand gestures of Bharatnatyam.",
    },
    {
      id: "hsfg1FLnPsE",
      title: "Basic Mudra Series 2 (double hand)",
      description:
        "Learn the fundamental double hand gestures of Bharatnatyam.",
    },
    {
      id: "X1P32pHt7Ds",
      title: "Bharatanatyam Namaskar",
      description:
        "This is a traditional way to start a practice or performance",
    },
    {
      id: "pcLkq4TFs1g",
      title: "Ardhamandala in Bharatanatyam",
      description:
        "Ardhamandala is the fundamental posture of Bharatanatyam also known as Ayatam, Araimandi, Ukkaramandala, or the Half sitting posture.",
    },
    {
      id: "T661gaOzTqs",
      title: "Tatta Adavu in Bharatanatyam",
      description:
        "A basic rhythmic footwork technique involving striking the feet on the ground.",
    },
    {
      id: "zxUzIWUWXdA",
      title: "Natta Adavu in Bharatanatyam",
      description: "A graceful movement combining footwork and hand gestures.",
    },
    {
      id: "IXvE_0Tqtmw",
      title: "Visharu Adavu in Bharatanatyam",
      description: "A flowing movement that involves arm and leg coordination.",
    },
    {
      id: "qAdoCJfsCbU",
      title: "TattiMetti Adavu in Bharatanatyam",
      description:
        "Alternating between striking the feet and raising the heels.",
    },
    {
      id: "-t6WCTcMyMQ",
      title: "Teermanam Adavu in Bharatanatyam",
      description:
        "A concluding step used to mark the end of a rhythmic sequence.",
    },
    {
      id: "abWsQj3v07w",
      title: "Sarikal Adavu in Bharatanatyam",
      description: "Sliding movements that add fluidity to dance sequences.",
    },
    {
      id: "QihmjYclHtc",
      title: "KudittaMetta Adavu in Bharatanatyam",
      description:
        "A jump followed by a strong heel strike for sharp expressions.",
    },
    {
      id: "eRempC9B07U",
      title: "Sutral (Murka) Adavu in Bharatanatyam",
      description: "Circular movements adding dynamism to performances.",
    },
    {
      id: "btrbK0rvXuA",
      title: "Jaati Adavu in Bharatanatyam",
      description: "Variations in rhythm and speed enhancing expressiveness.",
    },
    {
      id: "A2ZYHPqMIc0",
      title: "Mandi Adavu in Bhartanatyam",
      description:
        "Steps performed in a seated (deep squat) position, demanding agility.",
    },
    {
      id: "NQOOY3Zl53A",
      title: "Korvai or a Dance sequence",
      description: " A combination of adavus forming a structured sequence.",
    },
    {
      id: "JZ3gKWQvObg",
      title: "Alarippu",
      description: "A traditional opening dance that unfolds rhythmically.",
    },
    {
      id: "vQrFz22xGKg",
      title: "Pushpanjali",
      description: " An offering of flowers, expressing devotion and respect.",
    },
    {
      id: "jMxojhYWWAc",
      title: "Shlokam",
      description: " A Sanskrit verse recited to invoke divine blessings.",
    },
    {
      id: "ZSZAf1VEtjU",
      title: "Natesha Kautukam",
      description: "A dance dedicated to Lord Nataraja, the cosmic dancer.",
    },
    {
      id: "RXOFqNjKRzA",
      title: "Jatiswaram",
      description:
        "Pure dance sequences showcasing rhythmic and melodic patterns.",
    },
    {
      id: "OnDbi_NHU5E",
      title: "Mallari",
      description: "A vigorous temple dance performed to traditional beats.",
    },
    {
      id: "Mm-wZjx7qho",
      title: "Tillana",
      description:
        "A fast-paced, energetic piece marking the climax of a performance.",
    },
    {
      id: "yKVHGpEm8eM",
      title: "Shiro Bheda",
      description:
        "Head movements, also known as Shirobheda, refer to the positions of the head while expressing various emotions or performing intricate dance movements.",
    },
  ];

  return (
    <div className="flex justify-center space-x-4 p-10 max-w-7xl mx-auto">
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="flex justify-start -ml-3.5 mb-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-orange-600 hover:text-orange-800 font-medium cursor-pointer"
          >
            <ChevronLeft size={20} className="ml-2" />
            <span>Back</span>
          </button>
        </div>
        <h2 className="text-2xl font-bold text-orange-800 mb-6">
          All Dance Videos
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div
                className="relative bg-orange-200 h-48 flex items-center justify-center cursor-pointer"
                onClick={() => setActiveVideo(video.id)}
              >
                {activeVideo === video.id ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                    title={video.title}
                    frameBorder="0"
                    allow="autoplay"
                    allowFullScreen
                    className="rounded-t-lg"
                  ></iframe>
                ) : (
                  <>
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                    {/* Play Button Overlay */}
                    {/* <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-t-lg">
                      <PlayCircle size={60} className="text-white opacity-80 hover:opacity-100 transition duration-300" />
                    </div> */}
                  </>
                )}
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 text-orange-900">
                  {video.title}
                </h3>
                <p className="text-gray-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Videos;
