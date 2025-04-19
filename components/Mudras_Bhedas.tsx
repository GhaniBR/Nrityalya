import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const mudrasBhedas = [
  {
    name: "Greeva Bheda - Neck Movements",
    description: (
      <div className="text-justify">
        <p>
          Greeva Bheda refers to the different ways the neck moves to express
          emotions and enhance storytelling in dance:
        </p>
        <p>
          Neck movements are an integral part of most Indian classical dance
          forms. When performed smoothly and delicately, they enhance both{" "}
          <strong>Nritta</strong> and <strong>Abhinaya</strong>. These movements
          play a significant role in expressing emotions and adding grace to a
          performance.
        </p>

        <p>Types of Neck Movements</p>
        <ul className="list-disc list-inside mt-2">
          <li>
            <strong>Sundari:</strong> Moving the neck from side to side (also
            called Attami).
          </li>
          <li>
            <strong>Tirashchina:</strong> Moving the neck in a V-shape.
          </li>
          <li>
            <strong>Parivartita:</strong> Moving the neck in a semicircle or
            moon-like shape.
          </li>
          <li>
            <strong>Prakampita:</strong> Moving the neck forward and back.
          </li>
        </ul>

        <p>
          <strong>Shloka for Greeva Bheda:</strong>
        </p>
        <blockquote>
          "Sundari cha Tirashchina tathaiva Parivartita<br></br>
          Prakampita cha bhavagnair gneya greeva chaturvidha"
        </blockquote>
      </div>
    ),
  },
  {
    name: "Shiro Bheda - Head Movements",
    description: (
      <>
        <p>
          Head movements, also known as <strong>Shirobheda</strong>, refer to
          the positions of the head while expressing various emotions or
          performing intricate dance movements. There are nine types of head
          movements.
        </p>
        <p>Types of Head Movements</p>
        <ul className="list-disc list-inside mt-2">
          <li>
            <strong>Sama:</strong> Keeping the head straight.
          </li>
          <li>
            <strong>Udvahitam:</strong> Looking upwards.
          </li>
          <li>
            <strong>Adhomukham:</strong> Looking down.
          </li>
          <li>
            <strong>Alolitam:</strong> Circular movement of the head.
          </li>
          <li>
            <strong>Dhutam:</strong> Moving the head from right to left.
          </li>
          <li>
            <strong>Kampitam:</strong> Nodding the head up and down.
          </li>
          <li>
            <strong>Paravrittam:</strong> Brisk turning of the head to the right
            or left.
          </li>
          <li>
            <strong>Ukshiptam:</strong> Turning and raising the head to a
            slanting position.
          </li>
          <li>
            <strong>Parivahittam:</strong> Quick, small shakes of the head.
          </li>
        </ul>
        <p>
          <strong>Shloka for Shiro Bheda:</strong>
        </p>
        <blockquote>
          "Sama udvahitam adhomukha-lolitam Dhutam<br></br>
          kampitam cha paravrittam ukshiptam parivahitam<br></br>
          navdhakathitam shirasa natyashastra visharadaihi."
        </blockquote>
      </>
    ),
  },
  {
    name: "Drishti Bheda - Eye Movements",
    description: (
      <>
        <p>
          Drishthi in Sanskrit means “Vision.” In relation to our eyes, it means
          “sight” or “to see.” The classification of these eye movements is
          based on how we move the eye balls. In fact, we use each of them in
          our everyday routine, it’s just a matter of identifying them with
          their names. There are eight types of eye movements given in the
          shastras:
        </p>
        <p>Types of Eye Movements</p>
        <ul className="list-disc list-inside mt-2">
          <li>
            <strong>Sama:</strong> Eyes kept still without any movement.
          </li>
          <li>
            <strong>Alokita:</strong> Rolling the eyeballs in a circular
            pattern.
          </li>
          <li>
            <strong>Saachi:</strong> Looking through the corner of the eyes.
          </li>
          <li>
            <strong>Pralokita:</strong> Moving the eyes side to side.
          </li>
          <li>
            <strong>Nimilita:</strong> Half-shut eyes, focusing the eyeballs
            towards the heart.
          </li>
          <li>
            <strong>Ullokita:</strong> Looking upwards.
          </li>
          <li>
            <strong>Anuvritta:</strong> Rapid movement of the eyes up and down.
          </li>
          <li>
            <strong>Avalokita:</strong> Looking down.
          </li>
        </ul>
        <p>
          <strong>Shloka for Drishti Bheda:</strong>
        </p>
        <blockquote>
          "Samam Alokitam Saachi pralokita Nimility<br></br>
          Ullokita-anuvritte cha tatha chaiva-avalokitam<br></br>
          Ithyashtho drishthi bhedaha syu kirtitah purvasuribhi"
        </blockquote>
      </>
    ),
  },
];

const Mudrabhedas = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-orange-600 hover:text-orange-800 mb-4"
      >
        <ChevronLeft size={20} className="mr-2" /> Back
      </button>

      <h1 className="text-3xl font-bold text-orange-800 mb-6">
        Mudrabhedas in Bharatanatyam
      </h1>

      <div className="grid md:grid-cols-1 gap-6">
        {mudrasBhedas.map((mudra, index) => (
          <div
            key={index}
            className="bg-orange-50 rounded-lg p-6 shadow-md flex flex-col items-center text-center"
          >
            <h3 className="text-xl font-semibold text-orange-900">
              {mudra.name}
            </h3>
            <p className="text-orange-700 mt-2 text-left">
              {mudra.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mudrabhedas;
