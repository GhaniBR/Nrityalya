import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const adavusContent = [
  {
    name: "Teermanam Adavu",
    description: (
      <>
        <p>
          <strong>Teermanam</strong> means to conclude, an ending, or a final
          stage. Thus, the steps in these adavus are used to end a dance
          sequence or jathis. It is done in a set of three steps or repeated
          thrice. Most of the time, these steps are performed at a fast pace,
          known as <strong>Dhruta Kala</strong>.
        </p>
        <p>
          The <strong>bols</strong> or syllables of this Adavu are{" "}
          <strong>"Dhit Dhit Tai"</strong>. Some schools also use{" "}
          <strong>"Gi Na Tom"</strong>.
        </p>
        <p>
          The hand gestures used in this Adavu are <strong>Tripataka</strong>,{" "}
          <strong>Pataka</strong>, <strong>Alapadma</strong>, and{" "}
          <strong>Katakamukha</strong>.
        </p>
        <p>Steps</p>
        <ul className="list-disc list-inside mt-2">
          <li>
            <a href="#">Teermanam Adavu – First Step</a>
          </li>
          <li>
            <a href="#">Teermanam Adavu – Second Step</a>
          </li>
          <li>
            <a href="#">Teermanam Adavu – Third Step</a>
          </li>
          <li>
            <a href="#">Teermanam Adavu – Fourth Step</a>
          </li>
          <li>
            <a href="#">Teermanam Adavu – Fifth Step</a>
          </li>
          <li>
            <a href="#">Teermanam Adavu – Sixth Step</a>
          </li>
          <li>
            <a href="#">Teermanam Adavu – Seventh Step</a>
          </li>
          <li>
            <a href="#">
              Teermanam Adavu – Seventh, Eighth, and Ninth Step (Explanation)
            </a>
          </li>
          <li>
            <a href="#">Teermanam Adavu – Eighth Step (Video)</a>
          </li>
          <li>
            <a href="#">Teermanam Adavu – Ninth Step (Video)</a>
          </li>
          <li>
            <a href="#">Teermanam Adavu – Tenth Step (Video)</a>
          </li>
          <li>
            <a href="#">Teermanam Adavu – Eleventh Step (Explanation)</a>
          </li>
          <li>
            <a href="#">Teermanam Adavu – Eleventh Step (Video)</a>
          </li>
          <li>
            <a href="#">Teermanam Adavu – Twelfth Step (Explanation)</a>
          </li>
          <li>
            <a href="#">Teermanam Adavu – Twelfth Step (Video)</a>
          </li>
        </ul>
      </>
    ),
  },
  {
    name: "Sarikal Adavu",
    description: (
      <>
        <p>
          <strong>Sarikal</strong> means to slide. Here, as one foot is lifted
          and placed, the other foot slides towards it. Then the feet take the{" "}
          <strong>Anchita</strong> position, where the feet rest on the heel.
          This position is also called <strong>Tadittam</strong>. Then both the
          feet tap together with a slight jump.
        </p>
        <p>
          The <strong>bols</strong> (syllables or sollukettu) of this Adavu are{" "}
          <strong>"Tai Ya Tai Hi"</strong> or{" "}
          <strong>"Tai Ya Tai Ya Tai Hi Tai Hi"</strong>.
        </p>
        <p>Steps</p>
        <ol className="list-disc list-inside mt-2">
          <li>
            <a href="#">Sarikal Adavu – First Step (Explanation)</a>
          </li>
          <li>
            <a href="#">Sarikal Adavu – First Step (Video)</a>
          </li>
          <li>
            <a href="#">
              Sarikal Adavu – Second, Third, and Fourth Variation (Explanation)
            </a>
          </li>
          <li>
            <a href="#">Sarikal Adavu – Second and Third Variation (Video)</a>
          </li>
          <li>
            <a href="#">Sarikal Adavu – Fifth Variation (Video)</a>
          </li>
        </ol>
      </>
    ),
  },
  {
    name: "KudittaMetta Adavu",
    description: (
      <>
        <p>
          <strong>Kuditta Metta</strong> refers to jumping on the toes and then
          striking the heels. The initial jump, though not very obvious, is
          crucial. Both jumping and striking the heels are executed in the{" "}
          <strong>Araimandi</strong> position. It is also known as{" "}
          <strong>Guditta Metta</strong>.
        </p>
        <p>
          I have read somewhere (cannot recollect the source) that Kuditta Metta
          is also referred to as <strong>Kutta Adavu</strong>. This may be
          because the movement of jumping on the heels is called{" "}
          <strong>Kuttanam</strong> in the Chari Bhedas (Types of Walks). Thus,
          the name Kutta Adavu. Your thoughts and opinions in this regard are
          welcome.
        </p>
        <p>
          The <strong>bols</strong> (syllables or sollukettu) of this Adavu are{" "}
          <strong>"Tai Gha, Tai Ghi"</strong>.
        </p>
        <p>Steps</p>
        <ol className="list-disc list-inside mt-2">
          <li>
            <a href="#">Kuditta Metta Adavu – First and Second Variation</a>
          </li>
          <li>
            <a href="#">Kuditta Metta Adavu – Third and Fourth Variation</a>
          </li>
          <li>
            <a href="#">Kuditta Metta Adavu – Fifth and Sixth Variation</a>
          </li>
          <li>
            <a href="#">Kuditta Metta Adavu – Seventh Variation</a>
          </li>
        </ol>
      </>
    ),
  },
];

const Adavus = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (contentRef.current) {
      setShowReadMore(contentRef.current.scrollHeight > 350);
    }
  }, []);
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
        Adavus in Bharatnatyam
      </h1>
      <div className="grid grid-cols-1 gap-6">
        {adavusContent.map((adavu, index) => (
          <div
            key={index}
            className="bg-orange-50 rounded-lg p-6 shadow-md flex flex-col items-center"
          >
            <h3 className="text-xl font-semibold text-orange-900">
              {adavu.name}
            </h3>
            <div className="text-orange-700 mt-2 text-left">
              {adavu.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Adavus;
