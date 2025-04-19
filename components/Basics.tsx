import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const basicMudras = [
  {
    name: "The Basics of Bharatnatyam (3N)",
    description: (
      <>
        <p className="text-start">
          Bharatanatyam is generally referred to have three distinct streams or
          aspects:
        </p>
        <ul className="text-start list-disc list-inside mt-2">
          <li>
            <strong>Nritta:</strong> Pure dance sequences that are
            non-interpretative, primarily meant to add beauty to the dance form.
            Adavus (described earlier) form the basic component of Nritta.
          </li>
          <li>
            <strong>Nrittya:</strong> Interpretative dance involving emotions
            and expressions. Gestures in this stream convey messages, such as
            depicting a king or indicating morning time.
          </li>
          <li>
            <strong>Natya:</strong> Dance drama, primarily using{" "}
            <em>Abhinaya</em>
            (acting). It involves enacting mythological stories like the
            Ramayana or Krishna Leela.
          </li>
        </ul>
      </>
    ),
  },
  {
    name: "Namaskar - Traditional way to start",
    description: (
      <div className="text-start">
        Before starting out with our sessions, we always do the NAMASKAR. Here
        the dancer bows down in respect to the following:
        <ol className="list-disc list-inside mt-2">
          <li>The musician</li>
          <li>The stage</li>
          <li>God</li>
          <li>Guru</li>
          <li>Audience</li>
        </ol>
        <p className="mt-2">
          The Namaskar is done both before the dance and at the end of it. You
          can find the video for Namaskar{" "}
          <a
            href="https://www.example.com/namaskar-video"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 hover:underline"
          >
            here
          </a>
          .
        </p>
      </div>
    ),
  },
  {
    name: "All about Adavus",
    description: (
      <div className="text-start">
        The word “Adavu” means basic step. Adavus forms the ABC’s of pure
        dancing(Nritta) in bharatanatyam. Just like a combination of alphabets
        give words and thereafter sentences, adavus are combined to form a dance
        sequence in Bharatanatyam.
        <p>An Adavu is the combination of:</p>
        <ul className="list-disc list-inside mt-2">
          <li>Position of the legs (Sthanakam)</li>
          <li>Posture of our standing (Mandalam)</li>
          <li>Walking movement (Chari)</li>
          <li>Hand gestures (nritta hastas)</li>
        </ul>
        <p>
          All the four done in synchronization with Rhythm or Tala is ADAVU.
          Every Adavu will have certain number of steps and would have a BOL or
          Sollukattu or syllable like “Tai Ya- Tai Hi”.
        </p>
        <p>The basic positions described are:</p>
        <ol className="list-disc list-inside mt-2">
          <li>
            <strong>ARAIMANDI</strong>- Half Seated Position
          </li>
          <li>
            <strong>SAMAPADAM</strong>- Legs Together
          </li>
          <li>
            <strong>MANDI</strong>- Full Seated Position
          </li>
        </ol>
        <p>
          The positions “Araimandi” is synonymous with “Ardhamandal” and
          “Samapadam” is synonymous with “Sama” mentioned in my “Day – 1”
          posting.
        </p>
      </div>
    ),
  },
  {
    name: "Bharatnatyam Mudras",
    description: (
      <div className="text-start">
        <p>
          Hand gestures are a basic mode of communication. Gesture is a symbolic
          action by which a thought, a feeling or intention is expressed.
        </p>
        <p>
          Nritta hastas are a very integral part of any classical Indian dance.
          These hastas are more or less common for all the classical dances. In
          Bharatanatyam, hand gestures are used both in Nritta and Nritya.
        </p>
        <p>In Bharatanatyam, hand gestures are divided into two categories:</p>
        <ol className="list-disc list-inside mt-2">
          <li>
            <strong>Asamyukta Hasta</strong>- That which is done with one hand
            or single hand gestures. They are 28 in number.
          </li>
          <li>
            <strong>Samyukta Hasta</strong>- That which is done using both hands
            or double hand gestures. They are 23 in number.
          </li>
        </ol>
        <p>
          Each hand gesture has many applications or Viniyogas which are
          described in Sanskrit Slokas of the Natya Shastra. For example,
          Tripataka used in the Nattu Adavu is used to represent a crown, tree,
          thunder, applying Tilak, etc. The interpretation of the gesture is
          based on the context in which it is used.
        </p>
        <p>
          Most of the hand gestures and Viniyogas in Bharatanatyam are described
          on this site. Please click through the links above. You can also look
          at the resources page and follow the links for hand gesture details on
          other sites.
        </p>
      </div>
    ),
  },
];

const Basics = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center cursor-pointer text-orange-600 hover:text-orange-800 mb-4"
      >
        <ChevronLeft size={20} className="mr-2" /> Back
      </button>

      <h1 className="text-3xl font-bold text-orange-800 mb-6">
        Basic Foundations in Bharatnatyam
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {basicMudras.map((mudra, index) => (
          <div
            key={index}
            className="bg-orange-50 rounded-lg p-6 shadow-md flex flex-col items-center text-center justify-between"
          >
            {/* Optional Image */}
            {/* <img
              src={mudra.image}
              alt={mudra.name}
              className="w-32 h-32 object-cover rounded-lg mb-4"
            /> */}
            <h3 className="text-xl font-semibold text-orange-900">
              {mudra.name}
            </h3>
            <div className="text-orange-700 mt-2 justify-start">
              {mudra.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Basics;
