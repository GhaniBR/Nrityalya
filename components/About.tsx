import React from "react";
import danceImg from "images/Untitled design.png";
import { useNavigate } from "react-router";

export default function About() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-8">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            About Bharatanatyam
          </h1>
          <p className="text-xl text-center mt-2 opacity-90">
            Discover the ancient art form of South India
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Introduction Section */}
        <section className="flex flex-col md:flex-row gap-8 items-start mb-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-orange-800 mb-4">
              The Heritage of Bharatanatyam
            </h2>
            <p className="text-gray-700 mb-4">
              Bharatanatyam is one of India's oldest and most prestigious
              classical dance forms, originating over 2,000 years ago in Tamil
              Nadu, South India. Derived from the ancient text of Natya Shastra,
              it embodies rhythm, expression, and storytelling through graceful
              movements and intricate footwork.
            </p>
            <p className="text-gray-700">
              Originally performed in Hindu temples, this sacred dance form was
              practiced by Devadasis (temple dancers) as a way to worship and
              express devotion. Today, Bharatanatyam has evolved into a globally
              recognized art form while maintaining its spiritual essence and
              technical rigor.
            </p>
          </div>

          <div className="md:w-1/2">
            <div className="bg-gradient-to-br from-orange-600 to-orange-700 p-2 rounded-lg shadow-lg">
              <img
                src={danceImg}
                alt="Bharatanatyam Dance"
                className="w-full max-h-[300px] object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Key Elements Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-orange-800 mb-6 text-center">
            Key Elements of Bharatanatyam
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-500">
              <h3 className="text-xl font-bold text-orange-700 mb-2">Nritta</h3>
              <p className="text-gray-700">
                Pure dance movements without expressive elements, focusing on
                rhythm, timing, and intricate footwork patterns. Nritta
                demonstrates the technical skill of the dancer.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-500">
              <h3 className="text-xl font-bold text-orange-700 mb-2">Natya</h3>
              <p className="text-gray-700">
                The dramatic element that incorporates storytelling through a
                combination of dance, music, and emotional expression, often
                depicting mythological stories and epics.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-500">
              <h3 className="text-xl font-bold text-orange-700 mb-2">
                Abhinaya
              </h3>
              <p className="text-gray-700">
                The art of expression through facial gestures, eye movements,
                and body language. Abhinaya conveys emotions and narratives,
                bringing characters and stories to life.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-500">
              <h3 className="text-xl font-bold text-orange-700 mb-2">Adavus</h3>
              <p className="text-gray-700">
                The fundamental building blocks of Bharatanatyam, consisting of
                basic dance steps. There are over 108 adavus, grouped into
                various categories based on their complexity.
              </p>
            </div>
          </div>
        </section>

        {/* Traditional Attire Section */}
        <section className="flex flex-col-reverse md:flex-row gap-10 items-center mb-16">
          {/* Left Side: Card Grid */}
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {[
                {
                  title: "Silk Costume",
                  description:
                    "The Bharatanatyam saree (costume) is made of silk or silk-blend fabric, often in bright, contrasting colors with gold zari borders. It comes in two styles: pyjama style, where pleats open like a fan when the dancer moves, and skirt style, which features a flared bottom. The costume is designed for flexibility and enhances the dancer's grace on stage. ",
                  image: "images/download.jpg",
                },
                {
                  title: "Ghungroo",
                  description:
                    "Ghungroos (ankle bells) are tied around the dancer’s ankles to create rhythmic sounds that synchronize with footwork. Beginners use around 50-75 bells per leg, while advanced dancers wear 100-200 bells to amplify the beats.",
                  image: "images/Ghungroo ✨️✨️.jpg",
                },
                {
                  title: "Makeup",
                  description:
                    " The makeup is bold and dramatic to highlight facial expressions under stage lights. It includes a thick foundation, darkened eyebrows, kohl-lined eyes with extended wings, a bright red bindi, red or maroon lipstick, and alta (red dye) applied to the hands and feet for emphasis in movements.",
                  image: "images/Bharatanatyam Dancer.jpg",
                },
                {
                  title: "Temple Jewelry",
                  description:
                    "Bharatanatyam dancers wear temple jewellery, which includes gold-plated ornaments like maang tikka (headpiece), surya-chandra (sun and moon on the head), jimikki (earrings), nose rings, necklaces, vanki (armlets), kamarbandh (waist belt), and bangles. These jewellery pieces add elegance and are deeply rooted in tradition.",
                  image: "images/Beautiful dance.jpg",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="w-full min-h-[350px] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl group relative transition-all duration-300"
                >
                  {/* Image Container */}
                  <div className="relative h-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-all duration-300"
                    />

                    {/* Very Subtle Black Overlay on Hover */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </div>

                  {/* Default State: White Background with Title */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-4 transform transition-all duration-300 group-hover:opacity-0">
                    <h3 className="text-lg font-bold text-black">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-700 mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Hover State: No Background, Full Text */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {/* Very subtle gradient only at bottom for text readability */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300"></div>

                    <h3 className="text-lg font-bold text-white relative z-10 shadow-text">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white relative z-10 mt-1 shadow-text">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="md:w-1/2 px-6">
            <h2 className="text-3xl font-bold text-orange-800 mb-4">
              Traditional Attire & Ornaments
            </h2>
            <p className="text-gray-700 mb-4">
              The visual grandeur of Bharatanatyam is enhanced by its
              distinctive costume and jewelry. Every element of the dancer's
              appearance has symbolic significance and practical purpose,
              allowing for a full range of movement while maintaining
              traditional aesthetics.
            </p>
            <p className="text-gray-700">
              The costume typically features vibrant colors, with red, orange,
              and gold being particularly favored for their auspicious
              connotations in Indian culture. Modern performances may
              incorporate contemporary design elements while preserving the
              essential traditional components.
            </p>
          </div>
        </section>

        {/* Add this to your global CSS */}

        {/* Training and Learning Section */}
        <section className="bg-orange-50 p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-3xl font-bold text-orange-800 mb-4 text-center">
            Learning Bharatanatyam
          </h2>
          <p className="text-gray-700 mb-6 text-center max-w-3xl mx-auto">
            Training in Bharatanatyam requires dedication, discipline, and years
            of rigorous practice under the guidance of an experienced guru.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-orange-700 mb-2">
                Arangetram
              </h3>
              <p className="text-gray-700">
                After years of training, a student's first full solo performance
                (Arangetram) marks their formal debut and recognition as a
                dancer.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-orange-700 mb-2">
                Daily Practice
              </h3>
              <p className="text-gray-700">
                Students typically train for 2-3 hours daily, focusing on
                footwork, posture, expressions, and building physical stamina.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-orange-700 mb-2">
                Guru-Shishya Tradition
              </h3>
              <p className="text-gray-700">
                Following the ancient tradition of knowledge transfer, students
                learn through close mentorship with their teacher.
              </p>
            </div>
          </div>
        </section>

        {/* Join Us / Call to Action */}
        <section className="bg-[#f04b00] text-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold mb-4">
            Experience the Art of Bharatanatyam
          </h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Whether you're interested in learning this ancient art form or
            witnessing its beauty through performances, we welcome you to join
            our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-700 px-6 py-3 rounded-lg font-bold transition duration-300 cursor-pointer"
              onClick={() => navigate("/videos")}
            >
              Videos Performances
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
