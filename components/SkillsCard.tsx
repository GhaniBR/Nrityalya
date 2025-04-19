import { use, useState } from "react";
import { ChevronRight, Star, Play } from "lucide-react";
import { useNavigate } from "react-router";
import SliderAnimation from "./SliderAnimation";
type Level = "basics" | "adavus" | "mudras&bhedas";

interface Levels {
  [key: string]: {
    title: string;
    topics: string[];
  };
}

const SkillsCard = () => {
  const navigate = useNavigate();
  const [activeLevel, setActiveLevel] = useState<Level>("basics");
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const levels: Levels = {
    basics: {
      title: "Basic Foundations",
      topics: ["The Basics of Bharatnatyam (3N)", "Namaskar", "Adavus"],
    },
    adavus: {
      title: "Adavus Concepts",
      topics: [
        "Tatta Adavu",
        "Natta Adavu",
        "Visharu Adavu",
        "TattiMetti Adavu",
      ],
    },
    mudras_bhedas: {
      title: "Mudras & Bhedas",
      topics: [
        "Asamyukta Hastas",
        "Samayukta Hastas",
        "Dashavatara Hastas",
        "Devta Hastas",
      ],
    },
  };
  const toggleFavorite = (topic: string) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(topic)) {
        newFavorites.delete(topic);
      } else {
        newFavorites.add(topic);
      }
      return newFavorites;
    });
  };

  const featuredLessons = [
    {
      id: "bi5oVX0Sp9s",
      title: "Basic Mudra Series 1",
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
  ];

  return (
    <div>
      {/* Feature Section */}
      <SliderAnimation />
      <section className="relative p-10 max-w-6xl mx-auto bg-[#fa7721] rounded-lg shadow-lg text-center mt-16 mb-6 text-white">
        <h2 className="text-3xl font-bold mb-4">Try our AI Feature</h2>

        <p className="text-xl mb-6 max-w-3xl mx-auto leading-relaxed">
          Ready to practice your <span className="font-semibold">Mudras</span>{" "}
          and perfect your
          <span className="font-semibold"> postures</span>? Try our new
          <span className="font-semibold"> AI Camera Mode</span> — perform live
          and check if your hand gestures and body alignment are correct.
        </p>

        <div className="flex justify-center">
          <button
            onClick={() => navigate("/gesture")}
            className="bg-white text-[#f54a00] px-6 py-3 rounded-lg font-bold transition duration-300 shadow-md flex items-center cursor-pointer"
          >
            <span className="mr-2">📷</span> Try Mudras with AI Camera
          </button>
        </div>
      </section>

      <div className="flex justify-center space-x-4 p-10 max-w-7xl mx-auto">
        <main className="max-w-6xl mx-auto px-4 py-8">
          {/* Level Selection */}
          <div className="flex space-x-4 mb-8">
            {Object.keys(levels).map((level) => (
              <button
                key={level}
                onClick={() => setActiveLevel(level as Level)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeLevel === level
                    ? "bg-orange-600 text-white"
                    : "bg-white text-orange-600 hover:bg-orange-100"
                }`}
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </button>
            ))}
          </div>

          {/* Current Level Content */}
          <div className="bg-white rounded-xl shadow-lg p-6 relative">
            <h2 className="text-2xl font-bold text-orange-800 mb-6">
              {levels[activeLevel].title}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {levels[activeLevel].topics.map((topic, index) => (
                <div
                  key={index}
                  className="bg-orange-50 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-orange-900">
                      {topic}
                    </h3>
                    <Star
                      className={`cursor-pointer ${
                        favorites.has(topic)
                          ? "text-orange-600"
                          : "text-orange-400"
                      }`}
                      size={20}
                      style={{
                        fill: favorites.has(topic) ? "#FFA500" : "white",
                      }}
                      onClick={() => toggleFavorite(topic)}
                    />
                  </div>
                  <p className="text-orange-700 mb-4">
                    Learn the fundamental aspects of {topic.toLowerCase()} in
                    Bharatnatyam.
                  </p>
                  {/* Start Learning Button */}
                  <button
                    onClick={() => navigate(`/description/${topic}`)} // Updated route to navigate to the description
                    className="flex items-center cursor-pointer text-orange-600 hover:text-orange-800"
                  >
                    <span>Start Learning</span>
                    <ChevronRight size={16} className="ml-2" />
                  </button>
                </div>
              ))}
            </div>

            {/* View More Button - Unique for Each Section */}
            {activeLevel !== "basics" && (
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => navigate(`/${activeLevel}`)} // Navigate to the level description route
                  className="flex items-center cursor-pointer text-orange-600 hover:text-orange-800 font-medium"
                >
                  <span>Read More</span>
                  <ChevronRight size={20} className="ml-2" />
                </button>
              </div>
            )}
          </div>

          {/* Featured Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-orange-800 mb-6">
              Featured Lessons
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {featuredLessons.map((lesson, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  {/* YouTube Video Embed */}
                  <div className="bg-orange-200 h-48 flex items-center justify-center">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${lesson.id}`}
                      title={lesson.title}
                      frameBorder="0"
                      allowFullScreen
                      className="rounded-t-lg"
                    ></iframe>
                  </div>

                  {/* Video Details */}
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2 text-orange-900">
                      {lesson.title}
                    </h3>
                    <p className="text-gray-600">{lesson.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Button */}
            <div className="flex justify-end mt-6">
              <button
                onClick={() => navigate("/videos")}
                className="flex items-center cursor-pointer text-orange-600 hover:text-orange-800 font-medium"
              >
                <span>View All</span>
                <ChevronRight size={20} className="ml-2" />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SkillsCard;
