
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
            var words = userInput.trim().split(/\s+/);
            var herbName = words[words.length - 1];

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
        turmeric: {
            description: "Turmeric is a golden-yellow spice commonly used in Ayurveda...",
            uses: "Commonly used to alleviate arthritis pain, promote digestive health...",
            precautions: "People with gallbladder issues or those taking blood-thinning medications should exercise caution.",
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
