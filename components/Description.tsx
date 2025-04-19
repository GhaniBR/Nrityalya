import { ChevronLeft } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";

const topicDescriptions: Record<string, string[]> = {
  "The Basics of Bharatnatyam (3N)": [
    "Bharatanatyam is one of the most revered classical dance forms of India, with a history dating back over 2,000 years. It is based on the Natya Shastra, the ancient Sanskrit text on performing arts.",
    "This art form is a blend of expressions (Bhava), melody (Raga), and rhythm (Tala). The key aspects of Bharatanatyam are divided into three streams:",
    "",
    "1️. <strong>Nritta</strong> - Pure dance sequences that are non-interpretative, primarily meant to add aesthetic beauty.",
    "   - It consists of intricate rhythmic patterns performed with graceful movements.",
    "   - Adavus (basic dance units) form the backbone of Nritta.",
    "",
    "2️. <strong>Nritya</strong> - Expressive dance that conveys emotions through hand gestures and facial expressions.",
    "   - This involves Abhinaya (expressive gestures) to narrate a story or depict a mood.",
    "   - Mudras (hand gestures) and facial expressions play a crucial role in storytelling.",
    "",
    "3️. <strong>Natya</strong> - Dramatic representation that involves a combination of dance, dialogue, and acting.",
    "   - This is often used in enacting mythological stories like the Ramayana and Mahabharata.",
  ],

  Namaskar: [
    "Before beginning or concluding a Bharatanatyam performance, a dancer performs <strong>Namaskar</strong> as a gesture of respect and gratitude.",
    "Namaskar is done in reverence to:",
    "",
    "- <strong>The Musician</strong> - for providing rhythmic and melodic support.",
    "- <strong>The Stage (Bhoomi)</strong> - as a sign of respect to the ground on which the dancer performs.",
    "- <strong>God</strong> - seeking divine blessings for a successful performance.",
    "- <strong>The Guru (Teacher)</strong> - honoring the mentor who imparts knowledge.",
    "- <strong>The Audience</strong> - acknowledging their presence and appreciation.",
    "",
    "The Namaskar is performed at the beginning and end of a session. It consists of a series of mudras (hand gestures) and postures that signify humility and devotion.",
  ],

  Adavus: [
    "The word <strong>Adavu</strong> means 'basic step' in Bharatanatyam. Adavus are the fundamental building blocks of the dance and are essential for mastering the technique.",
    "",
    " <strong>An Adavu</strong> is a structured movement that includes:",
    "   - <strong>Sthanakam</strong> - Position of the legs.",
    "   - <strong>Mandalam</strong> - The posture of standing.",
    "   - <strong>Chari</strong> - The movement of walking.",
    "   - <strong>Nritta Hastas</strong> - Hand gestures used in pure dance.",
    "",
    " Each Adavu must be performed in <strong>perfect synchronization with Tala (rhythm)</strong>.",
    " Adavus are categorized into different types based on their rhythm and movement patterns, such as:",
    "   - <strong>Tatta Adavu</strong> - Basic stamping movement.",
    "   - <strong>Natta Adavu</strong> - A combination of footwork and hand gestures.",
    "   - <strong>Kuditta Mettu Adavu</strong> - Jumping and tapping movements.",
    "",
    "<strong>Basic positions used in Adavus:</strong>",
    " <strong>Araimandi</strong> - The half-seated position, essential for fluid movements.",
    " <strong>Samapadam</strong> - A neutral standing position used in various Adavus.",
    " <strong>Mandi</strong> - A fully seated position used in intricate dance sequences.",
    "",
    "Practicing Adavus rigorously helps a dancer develop stamina, precision, and grace.",
  ],

  "Tatta Adavu": [
    "The word <strong>Tatta</strong> literally means 'to tap'. In this adavu, we are taught the Bharatanatyam way of leg tapping. This adavu involves only the use of legs unlike most other adavus.",
    "As described in an earlier post <em>'More about Adavus'</em>, every adavu has a <strong>Bol</strong> or syllable. The Bol is used to provide a rhythm for the steps (like 1-2, 1-2-3 etc.) and also acts as a mnemonic for the steps. The Bol for Tatta adavu is <strong>'tai ya tai hi'</strong>.",
    "Steps:",
    "<strong>1. Tatta Adavu – First Step</strong>",
    "Here is a representation of the steps:",
    "1) While doing this adavu, you need to be in the Ardhamandal(half sitting) posture",
    "<br/><img src='/images/2307605350_30a5ec8471_w.jpg' alt='Tatta Adavu' class='rounded-lg shadow-md w-full max-w-md mx-auto'/>",
    "2) Place your Palms on the waist with the inside of the palm facing outside.",
    "<br/><img src='/images/2543069516_bc9e0aae42_q.jpg' alt='Tatta Adavu' class='rounded-lg shadow-md w-full max-w-md mx-auto'/>",
    "3) Please try to keep a practice of starting every Adavu with your right side(leg in this adavu). So first lift your right leg towards the inner thigh and then tap the floor with flat feet (say “tai ya”).",

    "4) Once the right leg is grounded, repeat the same with the left leg (say ”tai hi”).",

    "5) Continue the steps (“tai-ya”, “tai-hi”) till you have a good feel of the step. We would practice each step 30 times in around 3 minutes. Remember that the one tap each of left and right legs is counted as one step.",
    "<a href='/videos/Tatta Adavu-First Step' class='text-orange-600 underline hover:text-orange-800 font-medium'>Watch Tatta Adavu-First Step Video</a>",
    "<br/>",
    "<strong>2. Tatta Adavu – Second Step</strong>",
    "This is the second part of the Tatta Adavu post. As you read this, I hope you have read the first part posted earlier. If you have tried out the same as part of your current learning or online learning for the first time, my hunch is that you are experiencing some aches and pains. Take heart! That means you are on the right track.",
    "1. Stay in the Ardhamandal (Half seated posture). Place your Palms on the waist with the inside of the palm facing outside.",
    "2. Lift your right leg towards the inner thigh and tap the floor with flat feet (say “tai ya”). Once the right leg is grounded, again lift the same (right) leg and then tap the floor with flat feet (say “tai hi”).",
    "3.After the second tap of the right leg, lift your left leg in a similar fashion and then tap the floor with flat feet (say “tai ya”). Once the Left leg is grounded, again lift the same (left) leg and tap the floor with flat feet (say “tai hi”).",
    "We can now practice the first and second step together for 25 times each. Please note that (”tai-ya”, “tai-hi”) is one count and so for the second step, one count is completed on one side itself i.e. double tap with right leg is one count.In the first step, one count is completed after one tap of right and left legs",
    "</br>",

    "<strong>3. Tatta Adavu – Third Step</strong>",
    "Note that from the third step onwards the Bols are “Tai ya tai hi tai tai tam”. The third step is similar to the first two and as you may have guessed it, you would tap each feet thrice on each side. The detailed steps are below (please note the changes in Bols below):",
    "1. Stay in the Ardhamandal (Half seated posture). Place your Palms on the waist with the inside of the palm facing outside.",
    "2. Lift your right leg towards the inner thigh and tap the floor with flat feet (say “tai ya”). Once the right leg is grounded, lift the same (right) leg and then tap the floor with flat feet (say “tai hi”). Again lift the same leg (right) leg and then tap the floor with flat feet (say “tai tai tam”).",
    "3. After the third tap of the right leg, lift your left leg in a similar fashion and then tap the floor with flat feet (say “tai ya”). Once the Left leg is grounded, again lift the same (left) leg and tap the floor with flat feet (say “tai hi”). Again lift the same (left) leg and tap the floor with flat feet (say “tai tai tam”).",
    "</br>",

    "<strong>4. Tatta Adavu – Fourth Step</strong>",
    "If you have been reading the previous posts on Tatta Adavu, you would have noticed the similarity in the First, Second and Third Steps. The Fourth step is similar and here, we have to tap thrice on one side and tap once on the other side.. Here are the details for this step. Note the changes in Bol (sollukattu) for each of the taps.",
    "1. Stay in the Ardhamandal (Half seated posture). Place your Palms on the waist with the inside of the palm facing outside.",
    "2. Lift your right leg towards the inner thigh and tap the floor with flat feet (say “tai ya”). Once the right leg is grounded, lift the same (right) leg and tap the floor with flat feet (say “tai hi”). Again lift the same leg (right) leg a third time and tap the floor with flat feet (say “tai tai”)",
    "3. After the third tap of the right leg, lift your left leg in a similar fashion and tap the floor with flat feet (say “tam”). With this, we finish one count for this step.",
    "4. For the next count, we begin with the left leg. So, Lift the Left leg towards the inner thigh and tap the floor with flat feet (say “tai ya”), tap again (say “tai hi”) and tap again (say “tai tai”)",
    "5. Once the left leg is grounded lift the right leg and tap with flat feet(say”tam”). This completes the second count for this step.",
    "</br>",

    "<strong>5. Tatta Adavu – Fifth Step</strong>",
    "1. Stay in the Ardhamandal position. Place your palms on the waist with the inside of the palm facing out. Avoid the common pitfalls as you practice the steps in this posture.",
    "2. Lift your right leg towards the inner thigh and tap it on the ground (say”tai ya”), lift the right leg again and tap the floor with flat feet (say”tai hi”). Again lift the same leg (right) and tap the floor with flat feet say (“tai”) , Tap the floor again with the right leg (say”tai”). Lastly again lift your right leg and tap it with flat feet (say”tam”). Here we finish one count.",
    "3.For the second count lift your left leg and tap it on the ground (say”tai ya”), again lift your left leg and tap the floor with flat feet (say”tai hi”). Again tap the left feet flat on the ground (say”tai”) . Tap the floor again with left feet (say”tai) and once again tap a final time with the left feet (say”tam”). ",
    "4. Please note that when we are doing this step “tai ya” & “tai hi” taps are slow. Comparatively, the taps with “tai”, “tai” & “tam” (the last three taps) are fast taps.This is because we are using every syllable to tap in tai, tai & tam. Whereas in the former(“tai ya” and “tai hi”), every two syllable makes one tap.",
    "</br>",

    "<strong>6. Tatta Adavu – Sixth Step</strong>",
    "1. Stay in the Ardhamandal (Half seated posture). Place your Palms on the waist with the inside of the palm facing outside.",
    "2. Starting with your right side tap the leg with flat feet (say”tai”) , tap the same feet again (say”tai”), again tap the right leg with flat feet (say”tat”). Now tap the left leg with flat feet (say”tat”). Once the left leg is grounded tap your right feet (say”tai”), once again tap the right feet to (say”tai”) and finally tap your right feet flat on the floor (say”tam”). This ends one count for this step.",
    "3. Now starting with your left side tap the leg with flat feet (say”tai”) , tap the same feet again (say”tai”), again tap the left leg with flat feet (say”tat”). Now tap the right leg with flat feet (say”tat”). Once the right leg is grounded tap your left feet (say”tai”) once again tap the left feet to (say”tai”) and finally tap your left feet flat on the floor (say”tam”). Here ends the second count.",
  ],
  "Natta Adavu": [
    "'Natta' means to stretch, and so this Adavu involves some stretching compared to the Tatta Adavu we explored earlier. Compared to Tatta Adavu, the Natta Adavu also involves heel contacts of the feet. Theword 'Nattu' in Tamil refers to the 'Perching of heels'. So, get ready for some stretching and synchronization of hands and legs!",
    "The <strong>bols (sollukattu)</strong> for this Adavu is <strong>'tai yum tat ta tai hi ya ha'</strong>. You will notice that the basic leg postures used in this Adavu are <strong>Ardhamandal</strong> and <strong>Alidha</strong>. Ardhamandal was used in Tatta Adavu, and we will see the Alidha postures in the explanation for this Adavu.",
    "Steps:",
    "<strong>1. Natta Adavu – First Step</strong>",
    "“Natta” means to stretch and so the Adavu involves some stretching compared to the Tatta Adavu we explored earlier. And compared to Tatta Adavu, the Natta adavu involves heel contacts of the feet. Thus word “Nattu” in Tamil is also referred to “Perching of heels”. So get ready for some stretching and synchronization of hands and legs!",
    "The bols (sollukattu) for this Adavu is “tai yum tat ta tai hi ya ha”. You would see that the basic leg postures used in this Adavu is Ardhamandal, Alidha , Anjitham, Agartalasancharam and Swastikam. Ardhamandal was used in Tatta Adavu and we will see the Alidha in the explanation for this Adavu below.",
    "Steps:",
    "1. Keep both your hands stretched out in Tripataka mudra facing the floor and be seated in Ardhamandal position.",
    "<br/><img src='/images/2536897802_b953d740a6.jpg' alt='Tatta Adavu' class='rounded-lg shadow-md w-full max-w-md mx-auto'/>",
    "2. Stretch your right leg in Alidha position (See Below). The right leg is stretched in such manner that only the heel is resting on the floor and the toes are facing upwards. Also when one feet is flat and the other one on the heel, the we say it is Anjitham. When one foot is pressed down on the toes with heels lifted, it is called Agartalasancharam.",
    "<br/><img src='/images/2536886440_5c28323767.jpg' alt='Tatta Adavu' class='rounded-lg shadow-md w-full max-w-md mx-auto'/>",
    "<br/><img src='/images/2536836738_c7b3389c7d_m (1).jpg' alt='Tatta Adavu' class='rounded-lg shadow-md w-full max-w-md mx-auto'/>",
    "Simultaneously turn the right arm in Tripataka mudra to face up – say “tai yum”. Note that the left arm remains in Tripataka mudra facing down.",
    "3. Bring your right leg back to Ardhamandal position with a tap and turn the right arm in Tripataka mudra downwards as in 1 above (say “tat ta”).",
    "4. Now, repeat the steps above on the left side. Stretch your left leg in Alidha position (left leg stretched in such manner that the heel rests on the floor) and turn the left arm upwards so that Tripataka gesture face the ceiling (say “tai hi”).",
    "5. Bring your left leg back to Ardhamandal position with a tap and left arm in Tripataka mudra downwards as in 1 above (say “ya ha”).",
    "This completes a full set of “tai yum tat ta tai hi ya ha” and hence makes one count for the first Natta Adavu step.",
    "</br>",

    "<strong>2. Natta Adavu – Second Step</strong>",
    " The second step for Natta Adavu is completely similar. The only change is that you have to repeat the actions twice on each side. This would mean that the bols (sollukattu) “tai yum tat ta tai hi ya ha” is completed on one side before moving to the other side.",
    "1. Keep both your hands stretched out in Tripataka mudra facing the floor and be seated in Ardhamandal position",
    "<br/><img src='/images/1412902872_0dc736efb7_w.jpg' alt='Tatta Adavu' class='rounded-lg shadow-md w-full max-w-md mx-auto'/>",
    "2. Stretch your right leg in Alidha position. The right leg is stretched in such manner that only the heel is resting on the floor and the toes are facing upwards. Simultaneously turn the right arm in Tripataka mudra to face up – say “tai yum”. Note that the left arm remains in Tripataka mudra facing down.",
    "3. Bring your right leg back to Ardhamandal position with a tap and turn the right arm in Tripataka mudra downwards as in 1 above (say “tat ta”).",

    "4. Again, repeat the steps above on same side (right). Stretch your right leg in Alidha position and turn the right arm upwards so that Tripataka mudra face the ceiling (say “tai hi”).",

    "5. Bring your right leg back to Ardhamandal position with a tap and right arm in Tripataka mudra downwards as in 1 above (say “ya ha”). This completes one count for this step.",

    "6. For the second count repeat the actions from two to five (above) on the left side. This completes another count for this step.",
    "</br>",

    "3. Natta Adavu – Third Step",
    "In the third step of Natta Adavu, you will be introduced to a new leg movement where we cross our legs one behind the other. Can give you a formula for the third step: Natta Adavu First step + Crossed legs + Half of Natta Adavu First step. Be in Ardhamandala posture with hands stretched apart and palms in Tripataka facing down as shown in this image.",
    "1. Do the First step of Natta adavu as explained before and say “tai yum tat ta tai hi ya ha”",
    "2. After doing the complete first step, take your right foot behind the left foot such that right leg toes are placed just behind the left foot (Right heel is raised up, while the left foot is flat on the ground). The right hand is placed in front of the chest (elbows bent) with Tripataka gesture facing up and left hand is kept in Tripataka gesture facing down. Say “tai yum”",

    "<div style='display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;'>\
<img src='/images/1468949354_0c7146f15b_w.jpg' alt='Natta Adavu Step 1' class='rounded-lg shadow-md w-full max-w-xs'/>\
<img src='/images/1468949492_bddc335f91_w.jpg' alt='Natta Adavu Step 2' class='rounded-lg shadow-md w-full max-w-xs'/>\
</div>",

    "3. In the same crossed leg posture, raise your left leg which is in the front (while doing this we are balancing on the right leg that is behind) and tap the floor with flat feet. While doing this, the right hand Tripataka is turned to face down. Note that the left hand continues to be in Tripataka facing down. Say “tat ta”",

    "<div style='display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;'>\
<img src='/images/1469004020_cc983bdd7f_w.jpg' alt='Natta Adavu Step 3' class='rounded-lg shadow-md w-full max-w-xs'/>\
<img src='/images/1469082952_6a0c65912d_w.jpg' alt='Natta Adavu Step 4' class='rounded-lg shadow-md w-full max-w-xs'/>\
</div>",

    "4. Now bring the right leg which is behind and stretch it in Alidha. The right hand is stretched with Tripataka gesture facing up. Note that the left hand continues to be in Tripataka facing down. Say “tai hi“.",
    "5. Bring the right leg back to Ardhamandal position with a tap and turn the right arm in Tripataka mudra downwards as in 1 above (say “ya ha”). This completes one count for this step.",
    "This completes one count for the Natta Adavu third step. One count involves three repetitions (sets) of “tai yum tat ta tai hi ya ha”.",

    "<strong>4. Natta Adavu – Fourth Step</strong>",
    "In this step, the hand movement is the same as the first step, but the leg movement changes slightly.",
    "1. Start in Ardhamandal with hands in Tripataka facing downward.",
    "2. Stretch right leg forward in Alidha position (say 'tai yum'), raise right arm facing up.",
    "3. Bring right leg back and hand down (say 'tat ta').",
    "4. Immediately stretch the same leg again in Alidha and right arm up (say 'tai hi').",
    "5. Bring back to position (say 'ya ha').",
    "Repeat the same on the left side for full count.",

    "<strong>5. Natta Adavu – Fifth Step</strong>",
    "In this step, the leg stretches sideways instead of forward, and the hand gesture is more aligned with torso movement.",
    "1. From Ardhamandal, stretch the right leg to the side in Alidha while raising the right hand (say 'tai yum').",
    "2. Return to center with a tap and hand down (say 'tat ta').",
    "3. Repeat the same with the left leg and hand (say 'tai hi ya ha').",

    "<strong>6. Natta Adavu – Sixth Step</strong>",
    "This step introduces diagonal leg movements and coordinating diagonal hand placements.",
    "1. Stretch the right leg diagonally and lift the right arm (Tripataka) to the opposite diagonal (say 'tai yum').",
    "2. Tap and return (say 'tat ta').",
    "3. Repeat on the left side (say 'tai hi ya ha').",

    "<strong>7. Natta Adavu – Seventh Step</strong>",
    "Now you introduce an alternating pattern — right leg forward, left leg forward, with coordinated arm movements.",
    "1. Stretch right leg forward, right arm up (say 'tai yum').",
    "2. Tap back to Ardhamandal, right arm down (say 'tat ta').",
    "3. Stretch left leg forward, left arm up (say 'tai hi').",
    "4. Tap back (say 'ya ha').",
    "Repeat this set for one full count.",

    "<strong>8. Natta Adavu – Eighth Step</strong>",
    "This step has a dynamic transition between front and side stretches.",
    "1. Stretch right leg to the front with right arm up (say 'tai yum').",
    "2. Tap and return (say 'tat ta').",
    "3. Stretch same right leg to the side with right arm lifted (say 'tai hi').",
    "4. Tap and return to Ardhamandal (say 'ya ha').",
    "Repeat the same sequence on the left side.",

    "<strong>9. Natta Adavu – Ninth Step</strong>",
    "In this variation, your arm gestures move in circular motion while the legs continue with Alidha positioning.",
    "1. Stretch right leg and move the right arm in a gentle circular path (say 'tai yum').",
    "2. Tap and bring the arm down (say 'tat ta').",
    "3. Left leg and arm repeat the same motion (say 'tai hi ya ha').",

    "<strong>10. Natta Adavu – Tenth Step</strong>",
    "This step combines forward and backward movements with quick shifts.",
    "1. Move the right leg forward and stretch right arm upward (say 'tai yum').",
    "2. Return to Ardhamandal (say 'tat ta').",
    "3. Move the right leg backward in a small leap, arms diagonally apart (say 'tai hi').",
    "4. Return and finish (say 'ya ha').",
    "Repeat for left side.",

    "<strong>11. Natta Adavu – Eleventh Step</strong>",
    "This step emphasizes height in jumps and grace in arms.",
    "1. Begin in Ardhamandal, jump and stretch right leg slightly outward while raising right arm (say 'tai yum').",
    "2. Land in Ardhamandal (say 'tat ta').",
    "3. Repeat the jump on the left side (say 'tai hi ya ha').",

    "<strong>12. Natta Adavu – Twelfth Step</strong>",
    "This step combines circular and stretching movements on both legs and arms.",
    "1. While in Ardhamandal, rotate upper torso slightly as you stretch right leg (say 'tai yum').",
    "2. Bring it back with a controlled tap (say 'tat ta').",
    "3. Repeat with left leg and synchronized arm rotations (say 'tai hi ya ha').",

    "<strong>13. Natta Adavu – Thirteenth Step</strong>",
    "The final step of this set includes rhythmic stamping combined with elegant hand gestures.",
    "1. Begin in Ardhamandal, raise and stamp the right leg while right arm goes up (say 'tai yum').",
    "2. Follow with a strong downward arm movement and leg tap (say 'tat ta').",
    "3. Repeat the same stamping on the left with matching arm movements (say 'tai hi ya ha').",
  ],

  "Visharu Adavu": [
    " Visharu Adavu involves swinging of hands in different directions, i.e., sideways, up, and down. Leg movements are simple and straight in one line. A concept of shoulder pulls is also introduced later here. This Adavu is also called as <strong>Mardita Adavu</strong> or <strong>Paraval Adavu</strong>. The mudras used are <strong>Alapadma</strong>, <strong>Katakamukha</strong>, <strong>Tripataka</strong>, and <strong>Pataka</strong>. The <strong>sollukettu</strong> or <strong>bols</strong> for this Adavu is <strong>'Ta Tai Tai Ta Dhit Tai Tai Ta'</strong>.",
    "Steps:",
    "1. Visharu Adavu – First Step",
    "2. Visharu Adavu – Second Step",
    "3. Visharu Adavu – Third Step",
    "4. Visharu Adavu – Fourth Step",
    "5. Visharu Adavu – Fifth Step",
    "6. Visharu Adavu – Sixth Step",
    "7. Visharu Adavu – Seventh Step",
    "8. Visharu Adavu – Eighth Step",
  ],

  "TattiMetti Adavu": [
    "'Tatti' means to tap (like in Tatta Adavu) and 'Metti' means a heel contact with the floor. For Metti, one must first be on the toes (either a jump on the toes or just striking a toe) and then flatten the feet while the toes are already firm on the ground. Tatti Metti is one of the most important adavus, and these steps are often used in  <strong>Jatiswarams</strong> and <strong>Tillanas</strong>. Ipersonally love this Adavu for its crisp movements.",
    "The <strong>sollukettu</strong> or <strong>bols</strong> for this Adavu is <strong>'Tat Tai Ta Ha Dhit Tai Ta Ha'</strong>. The mudra used in this Adavu is <strong>Tripataka</strong>.",
    "Steps:",
    "1. Tatti Metti Adavu – First Step",
    "2. Tatti Metti Adavu – Second Step",
    "3. Tatti Metti Adavu – Third Step",
    "4. Tatti Metti Adavu – Fourth Step",
    "5. Tatti Metti Adavu – Fifth Step",
    "6. Tatti Metti Adavu – Sixth Step",
  ],

  "Asamyukta Hastas": [
    "<strong>Asamyukta Hastas</strong> are done using a single hand. The <strong>Natyashastra</strong> mentions 28 Mudras up to <strong>Trishula Mudra</strong>. Additionally, four new mudras have been added to this list: <strong>Kataka, Vyagraha, Ardhasuchi,</strong> and <strong>Palli</strong>. These hand gestures are a part of <strong>Angika Abhinaya</strong>. Below, each of these mudras will be explained with reference to the shlokas of <em>Abhinayadarpana</em>.",
    "List of Single-Hand Gestures:",
    "1. Pataka (Flag) - Used to depict clouds, forest, denial, or blessings.",
    "2. Tripataka (Three Parts of a Flag) - Represents a crown, tree, or an arrow.",
    "3. Ardhapataka (Half Flag) - Symbolizes leaves, a knife, or a flag.",
    "4. Kartarimukha (Scissors Face) - Depicts separation, lightning, or opposition.",
    "5. Mayura (Peacock) - Used to show a bird, vomiting, or a mark.",
    "6. Ardhachandra (Half Moon) - Represents the moon, a spear, or touching the head.",
    "7. Arala (Bent) - Used to show drinking nectar or poisonous substance.",
    "8. Shukatunda (Parrot Head) - Represents a shooting of an arrow or spear.",
    "9. Mushti (Fist) - Depicts holding hair, strength, or fighting.",
    "10. Shikhara (Peak) - Used for a bow, pillar, or husband.",
    "11. Kapittha (Wood Apple) - Depicts Lakshmi, Saraswati, or milking cows.",
    "12. Katakamukha (Opening in a bracelet) - Represents plucking flowers, a pearl necklace, or gentle holding.",
    "13. Suchi (Needle) - Indicates the number one, pointing, or a city.",
    "14. Chandrakala (Digit of the Moon) - Symbolizes the moon, face, or a spear.",
    "15. Padmakosha (Lotus Bud) - Used to show fruits, flowers, or a bunch.",
    "16. Sarpashirsha (Snake Head) - Depicts a serpent, sandal paste, or sprinkling water.",
    "17. Mrigashirsha (Deer Head) - Represents a deer, massage, or women's cheeks.",
    "18. Simhamukha (Lion Face) - Symbolizes a lotus, elephant, or a bell.",
    "19. Kangula (Bell) - Depicts a creeper, small fruit, or a betel nut.",
    "20. Alapadma (Fully Bloomed Lotus) - Used to depict beauty, offering, or circular movement.",
    "21. Chatura (Square) - Indicates a little, cunningness, or gold.",
    "22. Bhramara (Bee) - Represents a bee, Krishna, or Cupid.",
    "23. Hamsasya (Swan’s Beak) - Used for tying thread, painting, or pearl.",
    "24. Hamsapaksha (Swan’s Wing) - Depicts number six, construction, or a bridge.",
    "25. Sandamsha (Pincers) - Used for sacrifice or inner pain.",
    "26. Mukula (Bud) - Symbolizes eating, a flower bud, or a lotus.",
    "27. Tamrachuda (Rooster's Crest) - Used to show a cock or combing.",
    "28. Trishula (Trident) - Represents the trident weapon of Lord Shiva.",
    "Additional (Modern):",
    "29. Kataka - Indicates a bracelet or gentle embrace.",
    "30. Vyagraha - Symbolizes a tiger or ferocity.",
    "31. Ardhasuchi - Represents half a needle or indicating something subtly.",
    "32. Palli - Denotes a lizard or creeping creature.",
  ],

  "Samayukta Hastas": [
    "<strong>Samyukta Hastas</strong> are also called <strong>Double-Hand Gestures</strong> or <strong>Combined Hand Gestures</strong>. Unlike Asamyukta Hastas, these gestures require the use of both palms to convey a message or meaning. For example, the <strong>Anjali Mudra</strong> is a simple gesture where both palms are joined to signify Namaskara or salutations.",
    "List of Double-Hand Gestures (Samyukta Hastas):",
    "1. Anjali - Both palms joined together. Used to show salutation, greeting, or respect.",
    "2. Kapota - Slightly cupped Anjali. Represents respectful gestures, obedience, or conversation.",
    "3. Karkata - Fingers interlocked. Depicts bending branches, stretching limbs, or yawning.",
    "4. Swastika - Both hands crossed at the wrists. Represents a crocodile, a chained door, or to show an auspicious sign.",
    "5. Dola - Hands hanging down on both sides. Used as a resting pose, or to show natural stance.",
    "6. Pushpaputa - Both hands cupped together like holding flowers. Used for offerings, rituals, or accepting blessings.",
    "<br/><img src='/images/2297062203_2da4520567_w.jpg' alt='Tatta Adavu' class='rounded-lg shadow-md w-full max-w-md mx-auto'/>",
    "7. Utsanga - Hands crossed on the chest. Symbolizes embrace, affection, or discipline.",
    "8. Shivalinga - Right hand in Shikhara placed over the left palm (Ardhachandra). Depicts Lord Shiva’s symbolic form.",
    "9. Katakavardhana - One Katakamukha over the other. Represents coronation or garlanding.",
    "10. Kartariswastika - Both hands in Kartarimukha crossed at the wrists. Symbolizes trees, branches, or conflict.",
    "11. Shakata - Hands held in horns formation with thumbs touching. Depicts demons or rakshasas.",
    "12. Shankha - Right hand in thumb-fist inside the left palm with fingers wrapping. Represents the conch used in rituals.",
    "<br/><img src='/images/2297062213_146eaa1e34_w.jpg' alt='Tatta Adavu' class='rounded-lg shadow-md w-full max-w-md mx-auto'/>",
    "13. Chakra - Hands joined with palms open and fingers spread to form a wheel. Symbolizes the Sudarshana Chakra or a divine discus.",
    "14. Samputa - Both palms held together slightly cupped. Represents concealment, secrets, or hiding objects.",
    "15. Pasha - Fingers of both hands interlocked. Used to show bonds, enmity, or imprisonment.",
    "16. Kilaka - Fingers entwined with thumbs up. Denotes affection, playfulness, or friendship.",
    "17. Matsya - Hands crossed with thumbs touching and palms open, resembling a fish. Depicts a fish or aquatic symbolism.",
    "18. Kurma - Similar to Matsya but with palms cupped inward. Symbolizes a tortoise.",
    "19. Varaha - Palms stacked, bottom fingers bent to show snout. Depicts a wild boar.",
    "20. Garuda - Thumbs interlocked and palms spread like wings. Represents the eagle, Garuda.",
    "21. Nagabandha - Serpent entwining pose with fingers twisted. Symbolizes snakes or entwined serpents.",
    "22. Khatva - Arms crossed with fingers in Mushti (fist). Represents a cot or resting platform.",
    "23. Bherunda - Little fingers interlocked with palms facing out. Symbolizes two-headed bird or strength.",
    "24. Avahitta - One hand in Ardhachandra over the other in Pataka near the waist. Denotes modesty or concealment.",
    "<br/><img src='/images/2297856068_e23ccf8f30_w.jpg' alt='Tatta Adavu' class='rounded-lg shadow-md w-full max-w-md mx-auto'/>",
  ],
  "Dashavatara Hastas": [
    " The Avataras of lord Vishnu are Matsya (the Fish), Kurma-the Turtle, Varaha- the Boar, Narasimha, Vamana, Parashurama, Sri Ramachandra, Balarama, Sri krishna, and Kalki. Lets take a look at the slokas (sanskrit verses) and know how each of these gods are represented by a mudra.",

    "1. Matsya Avatara:",
    "Vishnu took the form of a big fish. There is a story about this in Hindu scriptures. The Asuras or the demons snatched the Vedas, the holy books of the Hindus, and went deep inside the sea. At this point, Vishnu changed his form. He became a matsya, that is, a fish. He entered the sea and brought back the Vedas.",
    "<i> Matsyahasta darshayitva tatah skandasamau karau Dhrutavu matsyavatarasya hasta etyabhidhiyate</i>",
    "It says that when hands are held in Matsya gesture, the Matsya avatara is depicted. Also after showing this particular incarnation, it is suggested that both hands in tripataka hasta at shoulder level be used as an inference to show lord Vishnu.",
    "</br>",
    "2. Kurma Avatara:",
    "Kurma is a small fish, and it is a symbol of Vishnu. In the story, Kurma is a small fish, and it is a symbol of Vishnu. Kurma is a small fish, and it is a symbol of Vishnu.",
    "<i>Kurma hasta darsha eitva tatah skandasamau karau Dhrutav kurmavatarasya etybhidhiyate</i>",
    "This Avatara is also shown by using the Kurma hand gesture and later holding the tripataka hasta with both hands at the shoulder level as inference to lord Vishnu.",
    "</br>",
    "3. Varaha Avatara:",
    "Lord Vishnu takes the form of a Boar(varaha). Here the Lord kills the demon Hiranyaksha and saves the vedas.",
    "<i>darshaeyitva varaham tu katiparshva samau karau Dhrutau varahavatarasya devasya kara eshyate</i>",
    "The Varaha hasta is depicted with the use of varaha hand gesture at the stomach level and then placing the hands on the hips.",
    "</br>",

    "4. Narasimha Avatara:",
    "<div style='display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; align-items: flex-start;'>\
  <div style='flex: 1; min-width: 280px;'>\
    <p>Here the lord takes the form of half man and half beast. He assumes the form of lion headed man and proves how the little boy Prahalad was a true devotee.</p>\
    <p><i>vame simhamukham dhrutva dakshine tripatakika narasimha avataraya hasta etyuchate budhaih</i></p>\
    <p>Narasimha avatara is depicted when <strong>Simhamukha hasta</strong> is held in the left hand and <strong>Tripataka hasta</strong> in the right hand.</p>\
  </div>\
  <div style='flex: 1; min-width: 280px;'>\
    <img src='/images/1469082952_6a0c65912d_w.jpg' alt='Natta Adavu Step 4' class='rounded-lg shadow-md w-full max-w-xs'/>\
  </div>\
</div>",

    "</br>",
    "5. Vamana Avatara:",
    "<div style='display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; align-items: flex-start;'>\
  <div style='flex: 1; min-width: 280px;'>\
   <p> Here the lord incarnates himself as a dwarf priest to restore Indra’s authority over the heavens, which was taken away by forceby the demon king Bali and liberates the Asura king Bali.</p>\
   <i> urdhvadho dhruta mushthibhya syanyabhyam yadi sthitaha sa vamanavatarasya hasta etybhidiyate</i>\
<p>Vamana avatara is shown by holding left hand in mushti hasta at the shoulder level (to show the umbrella that he carried) and right hand also in mushti at the level of the the thigh. The inner side to the palm is facing down.</p>\
  </div>\
  <div style='flex: 1; min-width: 280px;'>\
    <img src='/images/1469082952_6a0c65912d_w.jpg' alt='Natta Adavu Step 4' class='rounded-lg shadow-md w-full max-w-xs'/>\
  </div>\
</div>",
    "6. Parashurama Avatara:",
    "<div style='display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; align-items: flex-start;'>\
  <div style='flex: 1; min-width: 280px;'>\
    <p>Parashu means an axe, so the word literally means Rama with an axe. The purpose of the sixth incarnation of Vishnu is considered to be to relieve the earth’s burden by exterminating the sinful and irreligious monarchs.</p>\
    <i>vamam katitate nyasya dakshinerdha patakika dhrutau parashuramasya hasta Etyabhidhiyate.</i>\
    <p>The right hand is held in <strong>Ardhapataka</strong>. This hand is raised up to show the axe. The left hand is kept at the hips.</p>\
  </div>\
  <div style='flex: 1; min-width: 280px;'>\
    <img src='https://onlinebharatanatyam.com/wp-content/uploads/2008/10/parashu1-300x241.jpg' alt='Parashurama' class='rounded-lg shadow-md w-full max-w-xs'/>\
  </div>\
</div>",
    "</br>",

    "7. Ramachandra Avatara:",
    "<div style='display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; align-items: flex-start;'>\
  <div style='flex: 1; min-width: 280px;'>\
    <p>Lord Rama was born to Dasharatha and Kausalya in Ayodhya and is known for his adherence to satya (truth) and dharma despite personal hardship.</p>\
    <i>kapityo dakshine haste vame tu shikharah karaha urdhva dhruto ramachandrahasta etyuchate</i>\
    <p>Hold <strong>Shikhara hasta</strong> in the left hand raised to the head level to show his bow. Right hand in <strong>Kapitta hasta</strong> held at the thigh level.</p>\
  </div>\
  <div style='flex: 1; min-width: 280px;'>\
    <img src='https://onlinebharatanatyam.com/wp-content/uploads/2008/10/rama1-300x281.jpg' alt='Ramachandra' class='rounded-lg shadow-md w-full max-w-xs'/>\
  </div>\
</div>",
    "</br>",

    "8. Balarama Avatara:",
    "<div style='display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; align-items: flex-start;'>\
  <div style='flex: 1; min-width: 280px;'>\
    <p>Balarama, elder brother of Krishna, is known for immense power. His name itself means 'Strength' in Sanskrit.</p>\
    <i>patako dakshine haste mrushirvamakare tatha balaramavatarasya has etyuchate</i>\
    <p>Right hand in <strong>Pataka hasta</strong> and left hand in <strong>Mushti hasta</strong> facing downwards, depicting his weapon—the mace (gada).</p>\
  </div>\
  <div style='flex: 1; min-width: 280px;'>\
    <img src='https://onlinebharatanatyam.com/wp-content/uploads/2008/10/bala1-300x272.jpg' alt='Balarama' class='rounded-lg shadow-md w-full max-w-xs'/>\
  </div>\
</div>",
    "</br>",

    "9. Krishna Avatara:",
    "<div style='display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; align-items: flex-start;'>\
  <div style='flex: 1; min-width: 280px;'>\
    <i>mrugashirshe tu hastabhyam nyonyabhimukhe krute asyopakanthe krushnasya hasta etychate</i>\
    <p>Bring left hand near right cheek. Left hand in <strong>Mrigashirsha hasta</strong> facing inward, right hand also in Mrigashirsha but facing outward. This gesture represents the flute Krishna plays.</p>\
  </div>\
  <div style='flex: 1; min-width: 280px;'>\
    <img src='https://onlinebharatanatyam.com/wp-content/uploads/2008/10/krishna1-300x237.jpg' alt='Krishna' class='rounded-lg shadow-md w-full max-w-xs'/>\
  </div>\
</div>",
    "</br>",

    "10. Kalki Avatara:",
    "<div style='display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; align-items: flex-start;'>\
  <div style='flex: 1; min-width: 280px;'>\
    <p>It is believed that Lord Vishnu will take the form of Kalki to end the Kali Yuga (age of darkness and destruction). Often depicted with a horse's head and human body.</p>\
    <i>patako dakshine vame tripatakah karo dhrutaha kalkya khasyavatarasya hasta etyuchate</i>\
    <p>Kalki Avatara is depicted with right hand in <strong>Pataka hasta</strong> and left hand in <strong>Tripataka hasta</strong>.</p>\
  </div>\
  <div style='flex: 1; min-width: 280px;'>\
    <img src='https://onlinebharatanatyam.com/wp-content/uploads/2008/10/kalki1-300x235.jpg' alt='Kalki' class='rounded-lg shadow-md w-full max-w-xs'/>\
  </div>\
</div>",
    "</br>",
  ],

  "Devta Hastas": [
    "The Abhinaya Darpanam lists the hand gestures used to depict several prominent Hindu deities. These mudras are used in classical Indian dance forms to represent the qualities and iconography associated with each deity.",
    "Here are some of the deities mentioned:",
    "<ul class='list-disc list-inside mt-2'>\
    <li>Brahma</li>\
    <li>Shiva</li>\
    <li>Vishnu</li>\
    <li>Saraswati</li>\
    <li>Parvati</li>\
    <li>Lakshmi</li>\
    <li>Ganesha</li>\
    <li>Kartikeya</li>\
    <li>Manmatha</li>\
    <li>Indra</li>\
    <li>Agni</li>\
    <li>Varuna</li>\
    <li>Yama</li>\
    <li>Nirrti</li>\
    <li>Vayu</li>\
    <li>Kubera</li>\
  </ul>",
    "These deities are frequently invoked in Indian classical performances and worshipped in temples. Each of them has a specific hasta (hand gesture) that represents their essence.",
    "</br>",
  ],
};

interface DescriptionProps {
  postId: string;
}

const Description: React.FC<DescriptionProps> = ({ postId }) => {
  const description = topicDescriptions[postId] || ["Topic not found."];
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [showReadMore, setShowReadMore] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (contentRef.current) {
      setShowReadMore(contentRef.current.scrollHeight > 350);
    }
  }, [description]);

  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className="flex items-center cursor-pointer text-orange-600 hover:text-orange-800 mb-4"
      >
        <ChevronLeft size={20} className="mr-2" /> Back
      </button>

      <div className="p-6 w-full rounded-lg shadow-md bg-orange-50 mx-auto flex flex-col items-center">
        <h1 className="text-2xl font-semibold text-orange-800">{postId}</h1>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            expanded ? "max-h-none" : "max-h-[350px]"
          }`}
        >
          <div
            ref={contentRef}
            className="mt-4 text-orange-700 leading-relaxed space-y-4 text-left"
            dangerouslySetInnerHTML={{
              __html: description.join("<br/>"),
            }}
          />
        </div>

        {showReadMore && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 text-orange-600 hover:text-orange-800 font-medium flex items-center self-start"
          >
            {expanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
    </>
  );
};

export default Description;
