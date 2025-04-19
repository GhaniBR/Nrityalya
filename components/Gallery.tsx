import { useState } from "react";

type Level = "asamyukta_hastas" | "samyukta_hastas";

interface GalleryItem {
  imgSrc: string;
  caption: string;
}

interface LevelsGallery {
  [key: string]: {
    title: string;
    content: string;
    images: GalleryItem[];
  };
}

const Gallery = () => {
  const [activeLevel, setActiveLevel] = useState<Level>("asamyukta_hastas");

  const levels: LevelsGallery = {
    asamyukta_hastas: {
      title: "Asamyukta Hastas",
      content:
        "Asamyuta hasta mudras or single hand gestures are expressions to be shown by a hand. According to Abhinayadarpanam, there are 28 asamuta hasta mudras.",
      images: [
        { imgSrc: "/images/Basics/Pataka.jpg", caption: "Pataka" },
        { imgSrc: "/images/Basics/Tripataka.jpg", caption: "Tripataka" },
        { imgSrc: "/images/Basics/Ardhapataka.jpg", caption: "Ardhapataka" },
        { imgSrc: "/images/Basics/kartarimukha.jpg", caption: "Kartari Mukha" },
        { imgSrc: "/images/Basics/Mayura.jpg", caption: "Mayura" },
        { imgSrc: "/images/Basics/Ardhachandra.jpg", caption: "Ardhachandra" },
        { imgSrc: "/images/Basics/Arala.jpg", caption: "Arala" },
        { imgSrc: "/images/Basics/Sukatunda.jpg", caption: "Shukatunda" },
        { imgSrc: "/images/Basics/Musti.jpg", caption: "Mushti" },
        { imgSrc: "/images/Basics/Sikhara.jpg", caption: "Shikhara" },
        { imgSrc: "/images/Basics/Kapittha.jpg", caption: "Kapitta" },
        { imgSrc: "/images/Basics/katamukha.jpg", caption: "Kataka Mukha" },
        { imgSrc: "/images/Basics/suchi.jpg", caption: "Suchi" },
        { imgSrc: "/images/Basics/chandrakala.jpg", caption: "Chandrakala" },
        { imgSrc: "/images/Basics/padmakosa.jpg", caption: "Padmakosha" },
        { imgSrc: "/images/Basics/sarpashirsa.jpg", caption: "Sarpashirsha" },
        { imgSrc: "/images/Basics/mrgasirsa.jpg", caption: "Mrigashirsha" },
        { imgSrc: "/images/Basics/simhamukha.jpg", caption: "Simhamukha" },
        { imgSrc: "/images/Basics/kangula.jpg", caption: "Kangula" },
        { imgSrc: "/images/Basics/alapadma.jpg", caption: "Alapadma" },
        { imgSrc: "/images/Basics/catura.jpg", caption: "Catura" },
        { imgSrc: "/images/Basics/bhramara.jpg", caption: "Bhramara" },
        { imgSrc: "/images/Basics/hamsasya.jpg", caption: "Hamsasya" },
        { imgSrc: "/images/Basics/hamsapksa.jpg", caption: "Hamsapaksha" },
        { imgSrc: "/images/Basics/sandamsa.jpg", caption: "Samdamsha" },
        { imgSrc: "/images/Basics/mukula.jpg", caption: "Mukula" },
        { imgSrc: "/images/Basics/tamracuda.jpg", caption: "Tamrachuda" },
        { imgSrc: "/images/Basics/trisula.jpg", caption: "Trishula" },
      ],
    },
    samyukta_hastas: {
      title: "Samyukta Hastas",
      content:
        "Samyuta Hasta mudras or Combined hand gestures are expressions to be shown by both hands. According to abhinaya darpan there are 23 Samuta hasta mudras.",
      images: [
        {
          imgSrc: "images/double hand gestures/anjali.jpg",
          caption: "Anjali",
        },
        {
          imgSrc: "/images/double hand gestures/kapota.jpg",
          caption: "Kapota",
        },
        {
          imgSrc: "/images/double hand gestures/karkata.jpg",
          caption: "Karkata",
        },
        {
          imgSrc: "/images/double hand gestures/svastika.jpg",
          caption: "Svastika",
        },
        { imgSrc: "/images/double hand gestures/Dola.jpg", caption: "dola" },
        {
          imgSrc: "/images/double hand gestures/Puspaputa.jpg",
          caption: "Pushpaputa",
        },
        {
          imgSrc: "/images/double hand gestures/Utsanga.jpg",
          caption: "Utsanga",
        },
        {
          imgSrc: "/images/double hand gestures/Sivalinga.jpg",
          caption: "Shivalinga",
        },
        {
          imgSrc: "/images/double hand gestures/Katakavardhana.jpg",
          caption: "Kataka Vardhana",
        },
        {
          imgSrc: "/images/double hand gestures/Kartarisvastika.jpg",
          caption: "Kartari Swastika",
        },
        {
          imgSrc: "/images/double hand gestures/Sankha.jpg",
          caption: "Shankha",
        },
        {
          imgSrc: "/images/double hand gestures/Chakra.jpg",
          caption: "Chakra",
        },

        { imgSrc: "/images/double hand gestures/Pasa.jpg", caption: "Pasha" },
        {
          imgSrc: "/images/double hand gestures/Kilaka.jpg",
          caption: "Keelaka",
        },
        {
          imgSrc: "/images/double hand gestures/Matsya.jpg",
          caption: "Matsya",
        },
        {
          imgSrc: "/images/double hand gestures/Kurma.jpg",
          caption: "Koorma",
        },
        {
          imgSrc: "/images/double hand gestures/Varaha.jpg",
          caption: "Varaha",
        },
        {
          imgSrc: "/images/double hand gestures/Garuda.jpg",
          caption: "Garuda",
        },
        {
          imgSrc: "/images/double hand gestures/nagabandha.jpg",
          caption: "NagaBandha",
        },
        {
          imgSrc: "/images/double hand gestures/Katva.jpg",
          caption: "Katva",
        },
        {
          imgSrc: "/images/double hand gestures/Sakata.jpg",
          caption: "Sakata",
        },
        {
          imgSrc: "/images/double hand gestures/Bherunda.jpg",
          caption: "Bherunda",
        },
      ],
    },
  };

  return (
    <div className="flex justify-center space-x-4 p-10 max-w-7xl mx-auto">
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Level Selection */}

        <div className="flex space-x-4 mb-8 ">
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
              {level.replace("_", " ").charAt(0).toUpperCase() + level.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Content */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-orange-800 mb-6">
            {levels[activeLevel].title}
          </h2>
          {/* Unique content line per level */}
          <p className="text-orange-700 text-lg mb-8">
            {levels[activeLevel].content}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {levels[activeLevel].images.map((item, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
              >
                <img
                  src={item.imgSrc}
                  alt={item.caption}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 bg-orange-50">
                  <p className="text-orange-900 font-semibold">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Gallery;
