
function sendMessage() {
    var userInput = document.getElementById("userInput").value.toLowerCase();
    var chatContainer = document.getElementById("chatContainer");

    if (userInput.trim() !== "") {
        appendMessage("You", userInput, "user-message");

        // Handle different user inputs
        if (userInput.includes("hello") || userInput.includes("hi")) {
            appendMessage("Bot", "Hello! How can I help you today?", "bot-message");
        } else if (userInput.includes("bye") || userInput.includes("goodbye")) {
            appendMessage("Bot", "Goodbye! If you have more questions, feel free to ask.", "bot-message");
        } else {
            // Split the user input into words and get the last word
            // var words = userInput.trim().split(/\s+/);
            // var herbName = words[words.length - 1];
            var herbName = userInput.trim();

            if (herbName) {
                var herbInfo = getHerbInfo(herbName);
                appendMessage("Saarthi", herbInfo, "bot-message");
            } else {
                appendMessage("Bot", "I'm sorry, I didn't understand that. Please ask about an Ayurvedic herb.", "bot-message");
            }
        }

        document.getElementById("userInput").value = "";

        // Scroll to the bottom of the chatContainer without a delay
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
}

function appendMessage(sender, message, className) {
    var chatContainer = document.getElementById("chatContainer");
    var messageElement = document.createElement("div");
    messageElement.className = className;

    // Create a <p> element for each line in the message
    message.split('<br>').forEach(function (line) {
        var lineElement = document.createElement("p");
        lineElement.innerHTML = line;
        messageElement.appendChild(lineElement);
    });

    chatContainer.appendChild(messageElement);

    // Scroll to the bottom of the chatContainer
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function getHerbInfo(herbName) {
    // Convert herbName to lowercase for case-insensitive comparison
    herbName = herbName.toLowerCase();

    const herbData = {
        ginger: {
            description : "Ginger is a flowering plant with a rhizome that is widely used as a spice and folk medicine...",
        types: [
            "Fresh Ginger",
            "Dried Ginger",
            "Ground Ginger",
            "Pickled Ginger",
            "Candied Ginger"
        ],
        uses: "Used to add flavor to various dishes, alleviate nausea, reduce inflammation, and as a remedy for digestive issues.",
        benefits: [
            "Anti-Inflammatory Properties",
            "Nausea Relief",
            "Digestive Aid",
            "Immune-Boosting",
            "Pain Reduction"
        ],
        precautions: "Excessive consumption of ginger may cause gastrointestinal discomfort. Consult a healthcare professional for specific concerns."
        },
        turmeric: {
            description: "Turmeric is a golden-yellow spice commonly used in Ayurveda...",
            uses: "Commonly used to alleviate arthritis pain, promote digestive health...",
            precautions: "People with gallbladder issues or those taking blood-thinning medications should exercise caution.",
        },
        honey: {
            description: "Honey is a sweet and viscous substance produced by bees...",
            uses: "Commonly used to soothe sore throats, as a natural sweetener, and for its potential antibacterial properties...",
            precautions: "Infants under the age of one should not consume honey due to the risk of botulism. People with allergies to bee products should avoid honey."

        },

        neem: {
            description: "Neem is an evergreen tree native to India. It has a bitter taste and is valued for its medicinal properties...",
            uses: "Used to treat skin conditions, support oral health, and boost the immune system.",
            precautions: "Pregnant or breastfeeding women should avoid neem supplements. Excessive use may cause kidney or liver damage.",
        },
        ashwagandha: {
            description: "Ashwagandha, also known as Indian ginseng, is an adaptogenic herb. It helps the body adapt to stress and promotes overall well-being...",
            uses: "Used to manage stress, improve energy levels, and support cognitive function.",
            precautions: "People with autoimmune diseases, thyroid disorders, or diabetes should consult a healthcare professional before using ashwagandha.",
        },
        holyBasil: {
            description: "Holy Basil, also known as Tulsi, is a sacred plant in Hinduism. It is highly valued for its medicinal properties...",
            uses: "Used to reduce stress, promote respiratory health, and support the immune system.",
            precautions: "People with hypothyroidism should use Holy Basil cautiously.",
        },
        brahmi: {
            description: "Brahmi, also known as Bacopa monnieri, is a herb used in Ayurveda for cognitive enhancement and stress management...",
            uses: "Used to improve memory, reduce anxiety, and support overall brain health.",
            precautions: "Pregnant or breastfeeding women and people with thyroid disorders should consult a healthcare professional before using Brahmi.",
        },
        amla: {
            description: "Amla, also known as Indian gooseberry, is rich in Vitamin C and is known for its antioxidant properties...",
            uses: "Used to support immune function, promote hair health, and improve digestion.",
            precautions: "Excessive intake may cause digestive issues, so it should be consumed in moderation.",
        },
        giloy: {
            description: "Giloy, also known as Tinospora cordifolia, is a versatile herb in Ayurveda...",
            uses: "Used for boosting immunity, treating chronic fever, and supporting respiratory health.",
            precautions: "People with diabetes should monitor their blood sugar levels when using Giloy.",
        },
        triphala: {
            description: "Triphala is a combination of three fruits: Amla, Bibhitaki, and Haritaki...",
            uses: "Known for its digestive benefits, supporting detoxification, and promoting healthy skin.",
            precautions: "Excessive use may lead to digestive discomfort. Consult a healthcare professional if needed.",
        },
        gotuKola: {
            description: "Gotu Kola, also known as Centella asiatica, is a herb with rejuvenating properties...",
            uses: "Used for promoting wound healing, improving cognitive function, and supporting skin health.",
            precautions: "Pregnant women should consult a healthcare professional before using Gotu Kola.",
        },
        shatavari: {
            description: "Shatavari, also known as Asparagus racemosus, is a renowned herb for women's health...",
            uses: "Used to balance hormones, support reproductive health, and ease menstrual discomfort.",
            precautions: "People with certain medical conditions should consult a healthcare professional before using Shatavari.",
        },
        haritaki: {
            description: "Haritaki, also known as Terminalia chebula, is one of the three fruits in Triphala...",
            uses: "Known for its digestive benefits, promoting detoxification, and supporting respiratory health.",
            precautions: "Excessive use may lead to digestive discomfort. Consult a healthcare professional if needed.",
        },
        arjuna: {
            description: "Arjuna, also known as Terminalia arjuna, is a heart-friendly herb in Ayurveda...",
            uses: "Used to support cardiovascular health, manage blood pressure, and strengthen the heart muscles.",
            precautions: "People with specific medical conditions should consult a healthcare professional before using Arjuna.",
        },
        vidanga: {
            description: "Vidanga, also known as Embelia ribes, is a potent herb with anthelmintic properties...",
            uses: "Used for expelling intestinal worms, promoting digestive health, and supporting oral hygiene.",
            precautions: "Excessive use may lead to certain side effects. Consult a healthcare professional if needed.",
        },
        bhringraj: {
            description: "Bhringraj, also known as Eclipta alba, is a popular herb for hair care in Ayurveda...",
            uses: "Used to promote hair growth, reduce hair fall, and support overall hair health.",
            precautions: "People with specific allergies or skin conditions should perform a patch test before using Bhringraj.",
        },
        punarnava: {
            description: "Punarnava, also known as Boerhavia diffusa, is a diuretic herb in Ayurveda...",
            uses: "Used to support kidney health, reduce fluid retention, and maintain urinary tract function.",
            precautions: "People with kidney disorders should consult a healthcare professional before using Punarnava.",
        },
        vacha: {
            description: "Vacha, also known as Acorus calamus, is a herb known for its cognitive benefits...",
            uses: "Used to improve memory, enhance cognitive function, and support overall brain health.",
            precautions: "Pregnant or breastfeeding women and people with certain medical conditions should consult a healthcare professional before using Vacha.",
        },
        jatamansi: {
            description: "Jatamansi, also known as Nardostachys jatamansi, is a calming herb in Ayurveda...",
            uses: "Used to reduce stress, promote relaxation, and support emotional well-being.",
            precautions: "People with specific medical conditions should consult a healthcare professional before using Jatamansi.",
        },
        manjistha: {
            description: "Manjistha, also known as Rubia cordifolia, is a blood-purifying herb in Ayurveda...",
            uses: "Used to support skin health, detoxify the blood, and promote overall well-being.",
            precautions: "People with specific medical conditions should consult a healthcare professional before using Manjistha.",
        },
        trikatu: {
            description: "Trikatu is a combination of three pungent herbs: Black Pepper, Long Pepper, and Ginger...",
            uses: "Known for its digestive benefits, promoting metabolism, and supporting respiratory health.",
            precautions: "People with specific medical conditions should consult a healthcare professional before using Trikatu.",
        },
        yastimadhu: {
            description: "Yastimadhu, also known as Licorice, is a sweet-tasting herb in Ayurveda...",
            uses: "Used to soothe the throat, support respiratory health, and promote digestive comfort.",
            precautions: "People with certain medical conditions should consult a healthcare professional before using Yastimadhu.",
        },
        guggul: {
            description: "Guggul, also known as Commiphora wightii, is a resin with anti-inflammatory properties...",
            uses: "Used to support joint health, promote cardiovascular health, and maintain cholesterol levels.",
            precautions: "People with certain medical conditions should consult a healthcare professional before using Guggul.",
        },
        chitrak: {
            description: "Chitrak, also known as Plumbago zeylanica, is a warming herb in Ayurveda...",
            uses: "Used to support digestion, promote metabolism, and maintain healthy weight.",
            precautions: "Pregnant or breastfeeding women and people with certain medical conditions should consult a healthcare professional before using Chitrak.",
        },
        kalmegh: {
            description: "Kalmegh, also known as Andrographis paniculata, is a bitter herb with immune-boosting properties...",
            uses: "Used to support immune function, reduce inflammation, and promote overall well-being.",
            precautions: "People with specific medical conditions should consult a healthcare professional before using Kalmegh.",
        },
        kutki: {
            description: "Kutki, also known as Picrorhiza kurroa, is a bitter-tasting herb used in Ayurveda...",
            uses: "Used to support liver health, promote digestion, and maintain a healthy respiratory system.",
            precautions: "People with liver disorders should consult a healthcare professional before using Kutki.",
        },
        varuna: {
            description: "Varuna, also known as Crataeva nurvala, is a diuretic herb in Ayurveda...",
            uses: "Used to support kidney health, reduce fluid retention, and maintain urinary tract function.",
            precautions: "People with kidney disorders should consult a healthcare professional before using Varuna.",
        },
        katuki: {
            description: "Katuki, also known as Picrorhiza kurroa, is a bitter herb used in Ayurveda...",
            uses: "Used to support liver health, promote digestion, and maintain a healthy respiratory system.",
            precautions: "People with liver disorders should consult a healthcare professional before using Katuki.",
        },
        arjuna: {
            description: "Arjuna, also known as Terminalia arjuna, is a heart-friendly herb in Ayurveda...",
            uses: "Used to support cardiovascular health, manage blood pressure, and strengthen the heart muscles.",
            precautions: "People with specific medical conditions should consult a healthcare professional before using Arjuna.",
        },
        vidanga: {
            description: "Vidanga, also known as Embelia ribes, is a potent herb with anthelmintic properties...",
            uses: "Used for expelling intestinal worms, promoting digestive health, and supporting oral hygiene.",
            precautions: "Excessive use may lead to certain side effects. Consult a healthcare professional if needed.",
        },
        bhringraj: {
            description: "Bhringraj, also known as Eclipta alba, is a popular herb for hair care in Ayurveda...",
            uses: "Used to promote hair growth, reduce hair fall, and support overall hair health.",
            precautions: "People with specific allergies or skin conditions should perform a patch test before using Bhringraj.",
        },
        punarnava: {
            description: "Punarnava, also known as Boerhavia diffusa, is a diuretic herb in Ayurveda...",
            uses: "Used to support kidney health, reduce fluid retention, and maintain urinary tract function.",
            precautions: "People with kidney disorders should consult a healthcare professional before using Punarnava.",
        },
        vacha: {
            description: "Vacha, also known as Acorus calamus, is a herb known for its cognitive benefits...",
            uses: "Used to improve memory, enhance cognitive function, and support overall brain health.",
            precautions: "Pregnant or breastfeeding women and people with certain medical conditions should consult a healthcare professional before using Vacha.",
        },
        jatamansi: {
            description: "Jatamansi, also known as Nardostachys jatamansi, is a calming herb in Ayurveda...",
            uses: "Used to reduce stress, promote relaxation, and support emotional well-being.",
            precautions: "People with specific medical conditions should consult a healthcare professional before using Jatamansi.",
        },
        manjistha: {
            description: "Manjistha, also known as Rubia cordifolia, is a blood-purifying herb in Ayurveda...",
            uses: "Used to support skin health, detoxify the blood, and promote overall well-being.",
            precautions: "People with specific medical conditions should consult a healthcare professional before using Manjistha.",
        },
        trikatu: {
            description: "Trikatu is a combination of three pungent herbs: Black Pepper, Long Pepper, and Ginger...",
            uses: "Known for its digestive benefits, promoting metabolism, and supporting respiratory health.",
            precautions: "People with specific medical conditions should consult a healthcare professional before using Trikatu.",
        },
        yastimadhu: {
            description: "Yastimadhu, also known as Licorice, is a sweet-tasting herb in Ayurveda...",
            uses: "Used to soothe the throat, support respiratory health, and promote digestive comfort.",
            precautions: "People with certain medical conditions should consult a healthcare professional before using Yastimadhu.",
        },
        guggul: {
            description: "Guggul, also known as Commiphora wightii, is a resin with anti-inflammatory properties...",
            uses: "Used to support joint health, promote cardiovascular health, and maintain cholesterol levels.",
            precautions: "People with certain medical conditions should consult a healthcare professional before using Guggul.",
        },
        chitrak: {
            description: "Chitrak, also known as Plumbago zeylanica, is a warming herb in Ayurveda...",
            uses: "Used to support digestion, promote metabolism, and maintain healthy weight.",
            precautions: "Pregnant or breastfeeding women and people with certain medical conditions should consult a healthcare professional before using Chitrak.",
        },
        kalmegh: {
            description: "Kalmegh, also known as Andrographis paniculata, is a bitter herb with immune-boosting properties...",
            uses: "Used to support immune function, reduce inflammation, and promote overall well-being.",
            precautions: "People with specific medical conditions should consult a healthcare professional before using Kalmegh.",
        },
        kutki: {
            description: "Kutki, also known as Picrorhiza kurroa, is a bitter-tasting herb used in Ayurveda...",
            uses: "Used to support liver health, promote digestion, and maintain a healthy respiratory system.",
            precautions: "People with liver disorders should consult a healthcare professional before using Kutki.",
        },


        diabetes: {
            description: "Diabetes is a chronic condition that affects how your body turns food into energy...",
            symptoms: [
                "Increased Thirst",
                "Frequent Urination",
                "Extreme Hunger",
                "Unexplained Weight Loss",
                "Fatigue",
                "Blurred Vision",
                "Slow-Healing Sores",
                "Frequent Infections",
                "Tingling or Numbness in Hands or Feet",
                "Areas of Darkened Skin"
            ],
            management: "Diabetes is often managed through a combination of medication, diet, and lifestyle changes.",
            precautions: "Consult with a healthcare professional for personalized advice and treatment plans."
        },
        hypertension: {
            description: "Hypertension, or high blood pressure, is a common condition in which the force of the blood against the artery walls is consistently too high...",
            symptoms: [
                "Severe Headache",
                "Fatigue or Confusion",
                "Vision Problems",
                "Chest Pain",
                "Difficulty Breathing",
                "Irregular Heartbeat"
            ],
            management: "Managing hypertension involves lifestyle modifications, medication, and regular monitoring of blood pressure.",
            precautions: "Follow the prescribed treatment plan and make healthy lifestyle choices to control blood pressure."
        },
        influenza: {
            description: "Influenza, commonly known as the flu, is a contagious respiratory illness caused by influenza viruses...",
            symptoms: [
                "Fever or Chills",
                "Cough",
                "Sore Throat",
                "Runny or Stuffy Nose",
                "Muscle or Body Aches",
                "Headaches",
                "Fatigue",
                "Vomiting and Diarrhea (more common in children)"
            ],
            management: "Influenza is typically managed with rest, fluids, and over-the-counter medications to relieve symptoms.",
            precautions: "Get vaccinated annually, practice good hygiene, and avoid close contact with sick individuals."
        },
        migraine: {
            description: "A migraine is a type of headache characterized by a throbbing or pulsing sensation, usually on one side of the head...",
            symptoms: [
                "Throbbing or Pulsing Headache",
                "Sensitivity to Light and Sound",
                "Nausea and Vomiting",
                "Aura (visual disturbances) in some cases"
            ],
            management: "Migraines can be managed with medications to relieve symptoms, lifestyle changes, and identifying triggers.",
            precautions: "Consult with a healthcare professional for an accurate diagnosis and personalized treatment plan."
        },
        arthritis: {
            description: "Arthritis is a term used to describe inflammation of the joints, and it can affect one or multiple joints...",
            symptoms: [
                "Joint Pain",
                "Swelling",
                "Stiffness",
                "Decreased Range of Motion"
            ],
            management: "Arthritis management includes medications, physical therapy, and lifestyle changes to improve joint function.",
            precautions: "Individuals with arthritis should work with healthcare providers to develop a comprehensive management plan."
        },
        asthma: {
            description: "Asthma is a chronic respiratory condition that causes inflammation of the airways, leading to difficulty in breathing...",
            symptoms: [
                "Shortness of Breath",
                "Wheezing",
                "Coughing",
                "Chest Tightness"
            ],
            management: "Asthma is managed with bronchodilators, corticosteroids, and lifestyle changes to control symptoms.",
            precautions: "Individuals with asthma should have an action plan, avoid triggers, and have regular check-ups with healthcare providers."
        },
        heart_disease: {
            description: "Heart disease, also known as cardiovascular disease, refers to a class of diseases that involve the heart or blood vessels...",
            symptoms: [
                "Chest Pain or Discomfort",
                "Shortness of Breath",
                "Fatigue",
                "Rapid or Irregular Heartbeat",
                "Swelling in Legs, Ankles, or Abdomen"
            ],
            management: "Heart disease is managed with medications, lifestyle changes, and in some cases, surgical procedures.",
            precautions: "Maintain a heart-healthy lifestyle, including a balanced diet, regular exercise, and regular health check-ups."
        },
        common_cold: {
            description: "The common cold is a viral infection of the upper respiratory tract, typically caused by rhinoviruses...",
            symptoms: [
                "Runny or Stuffy Nose",
                "Sneezing",
                "Coughing",
                "Sore Throat",
                "Mild Body Aches",
                "Fatigue"
            ],
            management: "The common cold is managed with rest, fluids, and over-the-counter medications to relieve symptoms.",
            precautions: "Practice good hygiene, including handwashing, to prevent the spread of the virus."
        },
        osteoporosis: {
            description: "Osteoporosis is a condition characterized by weakened bones, increasing the risk of fractures...",
            symptoms: [
                "Back Pain",
                "Loss of Height Over Time",
                "A Stooped Posture",
                "Bone Fractures"
            ],
            management: "Osteoporosis is managed with medications, calcium and vitamin D supplements, and lifestyle changes.",
            precautions: "Preventive measures include a diet rich in calcium and vitamin D, regular weight-bearing exercise, and avoiding smoking and excessive alcohol."
        },
        anxiety_disorder: {
            description: "Anxiety disorder is a mental health condition characterized by excessive worry, fear, or apprehension...",
            symptoms: [
                "Excessive Worry",
                "Restlessness",
                "Fatigue",
                "Difficulty Concentrating",
                "Irritability",
                "Muscle Tension",
                "Sleep Disturbances"
            ],
            management: "Anxiety disorder is managed with therapy, medications, and lifestyle changes to reduce stress and promote mental well-being.",
            precautions: "Individuals with anxiety disorder should seek professional help, practice relaxation techniques, and maintain a healthy lifestyle."
        },
        
            diabetes: {
                description: "Diabetes is a chronic condition that affects the body's ability to regulate blood sugar...",
                symptoms: [
                    "Increased Thirst",
                    "Frequent Urination",
                    "Extreme Hunger",
                    "Unexplained Weight Loss",
                    "Fatigue",
                    "Blurred Vision",
                    "Slow-Healing Sores",
                    "Frequent Infections",
                    "Tingling or Numbness in Hands or Feet",
                    "Areas of Darkened Skin"
                ],
                management: "Diabetes is managed with medication, insulin therapy, dietary changes, and regular physical activity.",
                precautions: "People with diabetes should monitor blood sugar levels, maintain a healthy diet, and have regular medical check-ups."
            },
            hypertension: {
                description: "Hypertension, or high blood pressure, is a condition where the force of the blood against the artery walls is consistently too high...",
                symptoms: [
                    "Headache",
                    "Shortness of Breath",
                    "Dizziness",
                    "Chest Pain",
                    "Fatigue"
                ],
                management: "Hypertension is managed with lifestyle changes, medication, and regular blood pressure monitoring.",
                precautions: "Maintain a healthy diet, engage in regular physical activity, limit alcohol intake, and avoid tobacco to manage hypertension."
            },
            arthritis: {
                description: "Arthritis is a condition characterized by inflammation of the joints, leading to pain and stiffness...",
                symptoms: [
                    "Joint Pain",
                    "Swelling",
                    "Stiffness",
                    "Decreased Range of Motion",
                    "Redness and Heat Around Joints"
                ],
                management: "Arthritis is managed with medications, physical therapy, lifestyle changes, and in severe cases, surgery.",
                precautions: "Engage in regular exercise, maintain a healthy weight, and protect joints to manage and prevent arthritis symptoms."
            },
            insomnia: {
                description: "Insomnia is a sleep disorder characterized by difficulty falling asleep, staying asleep, or having poor-quality sleep...",
                symptoms: [
                    "Difficulty Falling Asleep",
                    "Frequent Awakening During the Night",
                    "Waking Up Too Early",
                    "Daytime Fatigue",
                    "Irritability"
                ],
                management: "Insomnia is managed with sleep hygiene practices, cognitive-behavioral therapy, and in some cases, medications.",
                precautions: "Establish a consistent sleep routine, create a sleep-friendly environment, and limit caffeine and electronic devices before bedtime."
            },
            depression: {
                description: "Depression is a mental health disorder characterized by persistent feelings of sadness, hopelessness, and a lack of interest in activities...",
                symptoms: [
                    "Persistent Sadness",
                    "Loss of Interest or Pleasure",
                    "Changes in Appetite",
                    "Sleep Disturbances",
                    "Fatigue",
                    "Feelings of Worthlessness",
                    "Difficulty Concentrating"
                ],
                management: "Depression is managed with psychotherapy, medications, and support from mental health professionals.",
                precautions: "Seek professional help, maintain a strong support system, and prioritize self-care to manage and cope with depression."
            },
            headache: {
                description: "Headache is a common pain in the head or neck region that can vary in intensity and duration...",
                causes: [
                    "Tension",
                    "Migraine",
                    "Cluster Headaches",
                    "Sinus Infections",
                    "Eye Strain",
                    "Dehydration"
                ],
                management: "Management may include rest, hydration, over-the-counter pain relievers, and addressing the underlying cause.",
                precautions: "Identify triggers, manage stress, and maintain a healthy lifestyle to prevent headaches."
            },
            backpain: {
                description: "Back pain can occur in the upper, middle, or lower back and may result from various causes...",
                causes: [
                    "Muscle Strain",
                    "Poor Posture",
                    "Herniated Disc",
                    "Arthritis",
                    "Osteoporosis",
                    "Spinal Stenosis"
                ],
                management: "Management may involve rest, physical therapy, pain medications, and lifestyle adjustments.",
                precautions: "Maintain good posture, engage in regular exercise, and use proper lifting techniques to prevent back pain."
            },
            jointpain: {
                description: "Joint pain refers to discomfort, aches, or soreness in any of the body's joints and can affect mobility...",
                causes: [
                    "Arthritis",
                    "Injury",
                    "Bursitis",
                    "Gout",
                    "Lupus",
                    "Infection"
                ],
                management: "Management may include medications, physical therapy, joint injections, and lifestyle modifications.",
                precautions: "Maintain a healthy weight, engage in low-impact exercises, and protect joints to prevent joint pain."
            },
            musclepain: {
                description: "Muscle pain, or myalgia, is discomfort or soreness in muscles and can result from various causes...",
                causes: [
                    "Overexertion",
                    "Injury",
                    "Muscle Tension",
                    "Infection",
                    "Certain Medications"
                ],
                management: "Management may involve rest, heat or cold therapy, stretching, and over-the-counter pain relievers.",
                precautions: "Warm-up before exercise, stay hydrated, and practice good ergonomics to prevent muscle pain."
            },
            toothache: {
                description: "A toothache is pain or discomfort around a tooth and may result from dental issues or other factors...",
                causes: [
                    "Tooth Decay",
                    "Gum Infection",
                    "Tooth Sensitivity",
                    "Impacted Wisdom Tooth",
                    "Jaw Injury"
                ],
                management: "Management may include dental treatment, pain medications, and oral hygiene practices.",
                precautions: "Maintain good oral hygiene, avoid excessive sugar intake, and have regular dental check-ups to prevent toothaches."
            },
            cough: {
                description: "Coughing is a natural reflex that helps clear the airways of irritants and mucus...",
                causes: [
                    "Viral Infections (Common Cold, Flu)",
                    "Allergies",
                    "Environmental Irritants",
                    "Smoking",
                    "Gastroesophageal Reflux Disease (GERD)"
                ],
                management: "Management may include rest, staying hydrated, cough medications, and addressing the underlying cause.",
                precautions: "Practice good respiratory hygiene, avoid smoking, and stay away from known allergens to prevent coughing."
            },
            cold: {
                description: "The common cold is a viral infection that affects the upper respiratory tract and may cause symptoms like...",
                symptoms: [
                    "Runny or Stuffy Nose",
                    "Sneezing",
                    "Coughing",
                    "Sore Throat",
                    "Fatigue",
                    "Mild Fever"
                ],
                management: "Management may include rest, staying hydrated, over-the-counter cold medications, and symptom relief.",
                precautions: "Practice good hand hygiene, avoid close contact with sick individuals, and maintain a healthy immune system to prevent colds."
            },
            toothache: {
                description: "A toothache is pain or discomfort around a tooth and may result from dental issues or other factors...",
                causes: [
                    "Tooth Decay",
                    "Gum Infection",
                    "Tooth Sensitivity",
                    "Impacted Wisdom Tooth",
                    "Jaw Injury"
                ],
                management: "Management may include dental treatment, pain medications, and oral hygiene practices.",
                precautions: "Maintain good oral hygiene, avoid excessive sugar intake, and have regular dental check-ups to prevent toothaches."
            },
            migraine: {
                description: "A migraine is a type of headache characterized by severe pain, throbbing, and other symptoms...",
                causes: [
                    "Genetic Factors",
                    "Hormonal Changes",
                    "Triggers (Certain Foods, Stress, Lack of Sleep)",
                    "Environmental Factors"
                ],
                management: "Management may include rest in a dark, quiet room, medications, identifying triggers, and lifestyle adjustments.",
                precautions: "Identify and avoid triggers, manage stress, and maintain a regular sleep schedule to prevent migraines."
            },
            jointPain: {
                description: "Joint pain refers to discomfort, aches, or soreness in any of the body's joints and can affect mobility...",
                causes: [
                    "Arthritis",
                    "Injury",
                    "Bursitis",
                    "Gout",
                    "Lupus",
                    "Infection"
                ],
                management: "Management may include medications, physical therapy, joint injections, and lifestyle modifications.",
                precautions: "Maintain a healthy weight, engage in low-impact exercises, and protect joints to prevent joint pain."
            },
            acidity:{
                description: "Acidity, also known as acid reflux or heartburn, is a condition where stomach acid flows back into the esophagus...",
                symptoms: "Common symptoms include burning sensation in the chest, regurgitation of acidic content, and discomfort after eating.",
                remedies: "To alleviate acidity, individuals may try dietary changes, such as avoiding spicy or acidic foods, and lifestyle modifications, including eating smaller meals and avoiding lying down after eating.",
                precautions: "People with chronic or severe acidity should consult a healthcare professional for proper diagnosis and treatment."

            },
            kneepain:{
                description: "Knee pain is a common condition that can be caused by various factors, including injury, overuse, or underlying medical conditions...",
                symptoms: "Symptoms may include pain, swelling, stiffness, and difficulty in movement.",
                remedies: "Treatment for knee pain may involve rest, ice, compression, elevation (RICE), physical therapy, pain relievers, and in some cases, surgical intervention.",
                precautions: "Individuals with persistent or severe knee pain should seek medical advice for an accurate diagnosis and appropriate treatment."

            },
            shoulderpain:{

                description: "Shoulder pain is a common issue that can result from various causes, including muscle strain, injury, or underlying medical conditions...",
                symptoms: "Symptoms may include pain, stiffness, reduced range of motion, and difficulty lifting or moving the arm.",
                remedies: "To alleviate shoulder pain, individuals may try rest, ice, gentle exercises, and over-the-counter pain relievers. Physical therapy may be recommended for persistent cases.",
                precautions: "People experiencing chronic or severe shoulder pain should consult a healthcare professional for proper evaluation and personalized treatment."
            },
            fever: {
                "description": "Fever is a common symptom of various illnesses and infections characterized by an elevated body temperature.",
                "causes": [
                  "Viral infections (e.g., influenza, COVID-19)",
                  "Bacterial infections (e.g., urinary tract infections)",
                  "Inflammatory conditions",
                  "Heat-related illnesses",
                  "Certain medications"
                ],
                "symptoms": [
                  "Elevated body temperature",
                  "Chills and sweats",
                  "Headache",
                  "Muscle aches",
                  "Fatigue",
                  "Loss of appetite"
                ],
                "treatments": [
                  "Rest and hydration",
                  "Over-the-counter fever-reducing medications (e.g., acetaminophen, ibuprofen)",
                  "Prescription antiviral or antibiotics (if applicable)",
                  "Cool compresses"
                ],
                "prevention": [
                  "Frequent handwashing",
                  "Avoiding close contact with sick individuals",
                  "Getting vaccinated (for preventable diseases)"
                ],
                "whenToSeeDoctor": "Consult a doctor if the fever persists for more than a few days, is very high, or is accompanied by severe symptoms.",
                "emergencySymptoms": [
                  "Difficulty breathing",
                  "Seizures",
                  "Persistent vomiting",
                  "Chest pain",
                  "Confusion or altered mental state"
                ],
                "emergencyAction": "Seek immediate medical attention if any of these emergency symptoms occur."
              }
        

        
        
        
        // Add more herbs with detailed information
    };

    const selectedHerb = herbData[herbName];

    if (selectedHerb) {
        const description = `<b>Description:</b><br>${selectedHerb.description}`;
        const uses = `<b>Uses:</b><br>${selectedHerb.uses}`;
        const precautions = `<b>Precautions:</b><br>${selectedHerb.precautions}`;

        return `${description}<br><br>${uses}<br><br>${precautions}`;
    } else {
        return "Sorry, I don't have information about that herb.";
    }
}

// Add event listener for the "Enter" key
document.getElementById("userInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
