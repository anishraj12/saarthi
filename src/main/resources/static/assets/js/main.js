/**
* Template Name: FlexStart
* Updated: Sep 18 2023 with Bootstrap v5.3.2
* Template URL: https://bootstrapmade.com/flexstart-bootstrap-startup-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach(e => e.addEventListener(type, listener))
    } else {
      select(el, all).addEventListener(type, listener)
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 10
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Clients Slider
   */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        aos_init();
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfokio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });

  /**
   * Animation on scroll
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})();



/*loc js*/

function generateMap() {
        const locationInput = document.getElementById('locationInput').value;
        const mapUrl = `https://www.google.com/maps/search/Ayurvedic+hospitals+in+${locationInput}`;
        window.location.href = mapUrl;
    }
    

// herb redirect
document.getElementById('herbs').addEventListener('click', function() {
            // Replace 'https://your-herbs-link.com' with the actual link you want to redirect to
            window.location.href = 'leaf.html';
        });

        

    function changeLanguage(language) {
        if (language === 'Hindi') {
            // Your logic for Hindi language goes here
            console.log('Selected language:', language);
            handleHindiLanguage();
            // You can add more logic or call other functions as needed
        } else if (language === 'Kannada') {
            // Call a different function or perform specific actions for Kannada
            handleKannadaLanguage();
        } else if (language === 'Telugu') {
            // Call a different function or perform specific actions for Kannada
            handleTeluguLanguage();
        }
        else if (language === 'Marathi') {
            // Call a different function or perform specific actions for Kannada
            handleMarathiLanguage();
        }
    }
    
    var hindiflag = 0;
    var kannadaflag = 0;
    var marathiflag = 0;
    var teluguflag = 0;
    function handleHindiLanguage() {
		if(hindiflag === 0){
			
	        console.log('Selected language: Hindi');
	        document.title = "सारथी";
	        document.getElementById('homeLink').innerText = 'होम';
	        document.getElementById('advisorLink').innerText = 'विशेषज्ञ';
	        document.getElementById('locationLink').innerText = 'लोकेशन';
	        document.getElementById('contactLink').innerText = 'संपर्क';
	        document.getElementById('langlink2').innerText ='भाषा';
	        document.getElementById('hindiLink').innerText ='English';
	        document.getElementById('kannadaLink').innerText ='ಕನ್ನಡ';
	        document.getElementById('taluguLink').innerText ='తెలుగు';
	        document.getElementById('MarathiLink').innerText ='मराठी';
	
	        document.getElementById('LoginLink').innerText ='लॉग इन';
	        document.getElementById('WLink').innerText ='सारथी में आपका स्वागत है';
	        document.getElementById('ALink').innerText =`भारत जड़ी-बूटियों का खजाना है,\n एक तरह से यह हमारा हरा सोना है।`;
	        document.getElementById('CLink').innerText ='हम आपकी देखभाल के लिए 24/7 यहां हैं।';
	        document.getElementById('GetLink').innerText ='आरंभ करने';
	        document.getElementById('FLink').innerText ='निरूपण विवरण';
	        document.getElementById('PLink').innerText ='सूत्रीकरण के उपयोग और इसकी सावधानी का सुझाव दें';
	        document.getElementById('TLink').innerText ='इलाज';
	        document.getElementById('RLink').innerText ='सटीक सूत्र अनुशंसा प्राप्त करें';
	        document.getElementById('HLink').innerText ='जड़ी बूटियों की पहचान';
	        document.getElementById('ILink').innerText ='छवि या नाम से जड़ी-बूटियों की पहचान करना';
	        document.getElementById('WhoLink').innerText ='हम कौन हैं';
	        document.getElementById('Who1').innerText ='हमारे आयुर्वेदिक सॉफ्टवेयर में आपका स्वागत है!!';
	        document.getElementById('Who2').innerText ='पारंपरिक हर्बल चिकित्सा पद्धतियों के साथ प्रौद्योगिकी को सहजता से एकीकृत करके आयुर्वेदिक स्वास्थ्य देखभाल में क्रांति लाने के लिए डिज़ाइन किया गया एक अग्रणी मंच। यह सॉफ्टवेयर डॉक्टरों, चिकित्सकों और रोगियों के लिए एक समग्र समाधान प्रदान करने के लिए सावधानीपूर्वक तैयार किया गया है, जिससे आयुर्वेद और व्यक्तिगत हर्बल फॉर्मूलेशन की गहरी समझ की सुविधा मिलती है।';
	        document.getElementById('Who3').innerText ='और पढ़ें';
	
	        document.getElementById('FeatureLink').innerText ='विशेषताएँ';
	        document.getElementById('Feature2').innerText ='आयुर्वेदिक स्वास्थ्य सेवा में क्रांतिकारी बदलाव: व्यक्तिगत कल्याण के लिए एक आधुनिक दृष्टिकोण';
	      
	        document.getElementById('HeadLink1').innerText ='वैयक्तिकृत हर्बल फॉर्मूलेशन';
	        document.getElementById('HeadLink2').innerText ='देखभाल के लिए स्मार्ट अनुशंसाएँ';
	        document.getElementById('HeadLink3').innerText ='जड़ी बूटियों की पहचान';
	        document.getElementById('HeadLink4').innerText ='उपयोगकर्ता के अनुकूल बहुभाषी इंटरफ़ेस';
	        document.getElementById('HeadLink5').innerText ='सूचित देखभाल के लिए समृद्ध जानकारी';
	        document.getElementById('HeadLink6').innerText ='परिशुद्ध स्थान पिन';
	
	        document.getElementById('SuggestLink').innerText ='सुझाए गए उपचार केंद्र';
	        document.getElementById('EnterLink').innerText ='स्थान दर्ज करें:';
	        document.getElementById('MapLink').innerText ='मानचित्र उत्पन्न करें';
	        
	        document.getElementById('QuestionLink').innerText ='एफ .ए .क्यू';
	        document.getElementById('Question0Link').innerText ='अक्सर पूछे जाने वाले प्रश्नों';
	        document.getElementById('Question1Link').innerText ='आयुर्वेदिक सॉफ्टवेयर हर्बल फॉर्मूलेशन को कैसे तैयार करता है?';
	        document.getElementById('Question2Link').innerText ='सॉफ्टवेयर प्रभावी आयुर्वेदिक उपचारों के लिए वैयक्तिकृत हर्बल फॉर्मूलेशन प्रदान करते हुए, गिटीकृत ग्रंथों, लक्षणों और रिपोर्टों का विश्लेषण करने के लिए उन्नत एल्गोरिदम का उपयोग करता है।';
	        document.getElementById('Question3Link').innerText ='कौन से व्यवस्थापक पोर्टल उपलब्ध हैं, और वे उपयोगकर्ताओं को कैसे लाभान्वित करते हैं?';
	        document.getElementById('Question4Link').innerText ='हमारे सॉफ़्टवेयर में तीन व्यवस्थापक पोर्टल (डॉक्टर, प्रैक्टिशनर और रोगी) शामिल हैं जो संचार, हर्बल प्राधिकरण को सुव्यवस्थित करते हैं फॉर्मूलेशन, और आयुर्वेदिक उपचारों के कुशल प्रबंधन के लिए व्यापक निरीक्षण प्रदान करता है।';
	        document.getElementById('Question5Link').innerText ='स्मार्ट अनुशंसाओं के लिए सॉफ़्टवेयर किन कारकों पर विचार करता है?';
	        document.getElementById('Question6Link').innerText ='आदर्श हर्बल फॉर्मूलेशन के लिए बुद्धिमान सुझाव देने के लिए स्मार्ट सिफारिशें रोगी-विशिष्ट कारकों जैसे उम्र, ऊंचाई, वजन, लिंग, ऐतिहासिक बीमारियों और रोगी के व्यवहार (वात, पित्त, कफ) को ध्यान में रखती हैं।';
	        document.getElementById('Question7Link').innerText ='जड़ी-बूटियों की पहचान सुविधा उपयोगकर्ता के ज्ञान को कैसे बढ़ाती है?';
	        document.getElementById('Question8Link').innerText =' उपयोगकर्ता के अनुकूल जड़ी-बूटियों की पहचान करने वाला उपकरण उपयोगकर्ताओं को औषधीय पौधों की आसानी से पहचान करने की अनुमति देकर, प्रकृति और उपचार के बीच संबंध को बढ़ावा देकर आयुर्वेदिक सिद्धांतों की गहरी समझ को बढ़ावा देता है';
	        document.getElementById('Question9Link').innerText ='क्या सॉफ्टवेयर अनेक भाषाओं में उपलब्ध है?';
	        document.getElementById('Question10Link').innerText ='हां, हमारा उपयोगकर्ता-अनुकूल इंटरफ़ेस कई भाषाओं का समर्थन करता है, जो दुनिया भर के डॉक्टरों और चिकित्सकों के लिए पहुंच सुनिश्चित करता है और आयुर्वेदिक अनुसंधान को सरल बनाता है।';
	        document.getElementById('Question11Link').innerText ='जानकारीपूर्ण निर्णय लेने के लिए सॉफ़्टवेयर कौन सी समृद्ध जानकारी प्रदान करता है?';
	        document.getElementById('Question12Link').innerText ='यह सॉफ्टवेयर दवा के गुणों, मतभेदों, पर्यायवाची शब्दों और आयुर्वेद पर व्यापक विवरण प्रदान करता है : विशेषताएँ, सूचित आयुर्वेदिक निर्णय लेने के लिए आवश्यक जानकारी के साथ स्वास्थ्य पेशेवरों को सशक्त बनाना।';
	         
	
	        document.getElementById('ContactLink').innerText ='संपर्क';
	        document.getElementById('Contact2Link').innerText ='संपर्क करें';
	        document.getElementById('AddressLink').innerText ='पता';
	        document.getElementById('SaarthiLink').innerText ='टीम सारथी \n एस आई एच, भारत';
	        document.getElementById('CallLink').innerText ='संपर्क करें';
	        document.getElementById('MailLink').innerText ='हमें ईमेल करें';
	        document.getElementById('OpenLink').innerText ='खुलने का समय';
	        document.getElementById('AlwaysLink').innerText ='हमेशा उपलब्ध \n 24/7';
	
	        
	        var inputElement = document.getElementById('NameLink').getElementsByTagName('input')[0];
	
	        
	        inputElement.placeholder = 'आपका नाम';
	        var inputElement = document.getElementById('EmailLink').getElementsByTagName('input')[0];
	        inputElement.placeholder = 'आपका ईमेल';
	        var inputElement = document.getElementById('SubjectLink').getElementsByTagName('input')[0];
	        inputElement.placeholder = 'विषय';
	        var textareaElement = document.getElementById('Message1Link').getElementsByTagName('textarea')[0];
	        textareaElement.placeholder = 'आपका संदेश';
	        
	
	        document.getElementById('Send1Link').innerText ='मेसेज भेजें';
	        document.getElementById('DescriptionLink').innerText ='हमारे नवोन्वेषी सॉफ्टवेयर के साथ वैयक्तिकृत आयुर्वेदिक देखभाल की खोज करें - समग्र कल्याण के लिए परंपरा और प्रौद्योगिकी को जोड़ना।';
	        document.getElementById('UsefulLink').innerText ='उपयोगी कड़ियां';
	
	        document.getElementById('HomeLink').innerText ='होम पेज';
	        document.getElementById('AboutLink').innerText ='हमारे बारे में';
	        document.getElementById('ServicesLink').innerText ='सेवा';
	        document.getElementById('TermsLink').innerText ='सेवा की शर्तें';
	        document.getElementById('PrivacyLink').innerText ='गोपनीयता नीति';
	        
	        document.getElementById('Services2Link').innerText ='गोपनीयता नीति';
	        document.getElementById('AdvisorLink').innerText ='सलाहकार';
	        document.getElementById('PinLink').innerText ='पिन स्थान';
	        document.getElementById('HerbLink').innerText ='जड़ी बूटी की पहचान';
	        document.getElementById('MultilingualLink').innerText ='बहुभाषी';
	        document.getElementById('AyurvedicLink').innerText ='आयुर्वेदिक नुस्खा बनाना';
	
	        document.getElementById('Contact3Link').innerText ='संपर्क करें';
	        document.getElementById('Team2Link').innerText ='टीम सारथी \n आयुष मंत्रालय \nएस आई एच, भारत';
	        document.getElementById('PhoneLink').innerText ='फ़ोन नंबर';
	        document.getElementById('EMailLink').innerText ='ईमेल';
	        
	        hindiflag = 1;
	        kannadaflag = 0;
	        marathiflag = 0;
	        teluguflag = 0;
		} else{
			hindiflag = 0;
			location.reload();
		}
    }
    function handleKannadaLanguage() {
		if(kannadaflag === 0){
			
        // Your logic for Kannada language goes here
	        console.log('Selected language: Kannada');
	        document.title = "ಸಾರಥಿ";
	        document.getElementById('homeLink').innerText = 'ಮನೆ';
	        document.getElementById('advisorLink').innerText = 'ತಜ್ಞ';
	        document.getElementById('locationLink').innerText = 'ಸ್ಥಳ';
	        document.getElementById('contactLink').innerText = 'ಸಂಪರ್ಕಿಸಿ';
	        document.getElementById('langlink2').innerText ='ಭಾಷೆ';
	        document.getElementById('hindiLink').innerText ='हिंदी';
	        document.getElementById('kannadaLink').innerText ='English';
	        document.getElementById('taluguLink').innerText ='తెలుగు';
	        document.getElementById('MarathiLink').innerText ='मराठी';
	
	        document.getElementById('LoginLink').innerText ='ಲಾಗ್ ಇನ್ ಮಾಡಿ';
	        document.getElementById('WLink').innerText ='ಸಾರಥಿಗೆ ಸ್ವಾಗತ';
	        document.getElementById('ALink').innerText ='ಭಾರತ ಗಿಡಮೂಲಿಕೆಗಳ ಖಜಾನೆ, \n ಒಂದು ರೀತಿಯಲ್ಲಿ ಅದು ನಮ್ಮ ಹಸಿರು ಚಿನ್ನ.';
	        document.getElementById('CLink').innerText ='24/7 ನಿಮ್ಮನ್ನು ನೋಡಿಕೊಳ್ಳಲು ನಾವು ಇಲ್ಲಿದ್ದೇವೆ.';
	        document.getElementById('GetLink').innerText ='ಆರಂಭಿಸಲು';
	        document.getElementById('FLink').innerText ='ಸೂತ್ರೀಕರಣ ವಿವರಣೆ';
	        document.getElementById('PLink').innerText ='ಸೂತ್ರೀಕರಣ ಮತ್ತು ಅದರ ಮುನ್ನೆಚ್ಚರಿಕೆಗಳ ಬಳಕೆಯನ್ನು ಸೂಚಿಸಿ';
	        document.getElementById('TLink').innerText ='ಚಿಕಿತ್ಸೆ';
	        document.getElementById('RLink').innerText ='ನಿಖರವಾದ ಸೂತ್ರ ಶಿಫಾರಸುಗಳನ್ನು ಪಡೆಯಿರಿ';
	        document.getElementById('HLink').innerText ='ಗಿಡಮೂಲಿಕೆಗಳ ಗುರುತಿಸುವಿಕೆ';
	        document.getElementById('ILink').innerText ='ಚಿತ್ರ ಅಥವಾ ಹೆಸರಿನ ಮೂಲಕ ಗಿಡಮೂಲಿಕೆಗಳನ್ನು ಗುರುತಿಸುವುದು';
	        document.getElementById('WhoLink').innerText ='ನಾವು ಯಾರು';
	        document.getElementById('Who1').innerText ='ನಮ್ಮ ಆಯುರ್ವೇದ ಸಾಫ್ಟ್‌ವೇರ್‌ಗೆ ಸುಸ್ವಾಗತ!!';
	        document.getElementById('Who2').innerText ='ಸಾಂಪ್ರದಾಯಿಕ ಗಿಡಮೂಲಿಕೆಗಳ ಚಿಕಿತ್ಸಾ ಪದ್ಧತಿಗಳೊಂದಿಗೆ ತಂತ್ರಜ್ಞಾನವನ್ನು ಮನಬಂದಂತೆ ಸಂಯೋಜಿಸುವ ಮೂಲಕ ಆಯುರ್ವೇದ ಆರೋಗ್ಯ ರಕ್ಷಣೆಯನ್ನು ಕ್ರಾಂತಿಗೊಳಿಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಪ್ರಮುಖ ವೇದಿಕೆ. ವೈದ್ಯರು, ಚಿಕಿತ್ಸಕರು ಮತ್ತು ರೋಗಿಗಳಿಗೆ ಸಮಗ್ರ ಪರಿಹಾರವನ್ನು ಒದಗಿಸಲು ಈ ಸಾಫ್ಟ್‌ವೇರ್ ಅನ್ನು ಎಚ್ಚರಿಕೆಯಿಂದ ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ, ಆಯುರ್ವೇದ ಮತ್ತು ವೈಯಕ್ತಿಕ ಗಿಡಮೂಲಿಕೆಗಳ ಸೂತ್ರೀಕರಣಗಳ ಆಳವಾದ ತಿಳುವಳಿಕೆಯನ್ನು ಸುಲಭಗೊಳಿಸುತ್ತದೆ.';
	        document.getElementById('Who3').innerText ='ಮತ್ತಷ್ಟು ಓದು';
	
	        document.getElementById('FeatureLink').innerText ='ವೈಶಿಷ್ಟ್ಯಗಳು';
	        document.getElementById('Feature2').innerText ='ಕ್ರಾಂತಿಕಾರಿ ಆಯುರ್ವೇದ ಆರೋಗ್ಯ ರಕ್ಷಣೆ: ವೈಯಕ್ತಿಕ ಸ್ವಾಸ್ಥ್ಯಕ್ಕೆ ಆಧುನಿಕ ವಿಧಾನ';
	      
	        document.getElementById('HeadLink1').innerText ='ವೈಯಕ್ತಿಕಗೊಳಿಸಿದ ಹರ್ಬಲ್ ಫಾರ್ಮುಲೇಶನ್';
	        document.getElementById('HeadLink2').innerText ='ಆರೈಕೆಗಾಗಿ ಸ್ಮಾರ್ಟ್ ಶಿಫಾರಸುಗಳು';
	        document.getElementById('HeadLink3').innerText ='ಗಿಡಮೂಲಿಕೆಗಳ ಗುರುತಿಸುವಿಕೆ';
	        document.getElementById('HeadLink4').innerText ='ಬಳಕೆದಾರ ಸ್ನೇಹಿ ಬಹುಭಾಷಾ ಇಂಟರ್ಫೇಸ್';
	        document.getElementById('HeadLink5').innerText ='ತಿಳುವಳಿಕೆಯುಳ್ಳ ಆರೈಕೆಗಾಗಿ ಶ್ರೀಮಂತ ಮಾಹಿತಿ';
	        document.getElementById('HeadLink6').innerText ='ನಿಖರವಾದ ಸ್ಥಳ ಪಿನ್';
	
	        document.getElementById('SuggestLink').innerText ='ಸೂಚಿಸಿದ ಚಿಕಿತ್ಸಾ ಕೇಂದ್ರಗಳು';
	        document.getElementById('EnterLink').innerText ='ಸ್ಥಳವನ್ನು ನಮೂದಿಸಿ:';
	        document.getElementById('MapLink').innerText ='ನಕ್ಷೆಯನ್ನು ರಚಿಸಿ';
	        
	        document.getElementById('QuestionLink').innerText ='ಎಫ್.ಎ.ಕ್ಯೂ';
	        document.getElementById('Question0Link').innerText ='ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು';
	        document.getElementById('Question1Link').innerText ='ಆಯುರ್ವೇದ ಸಾಫ್ಟ್‌ವೇರ್ ಗಿಡಮೂಲಿಕೆಗಳ ಸೂತ್ರೀಕರಣಗಳನ್ನು ಹೇಗೆ ತಯಾರಿಸುತ್ತದೆ?';
	        document.getElementById('Question2Link').innerText ='ಪರಿಣಾಮಕಾರಿ ಆಯುರ್ವೇದ ಚಿಕಿತ್ಸೆಗಳಿಗೆ ವೈಯಕ್ತೀಕರಿಸಿದ ಗಿಡಮೂಲಿಕೆಗಳ ಸೂತ್ರೀಕರಣಗಳನ್ನು ಒದಗಿಸುವ, ಸಮಗ್ರ ಪಠ್ಯಗಳು, ರೋಗಲಕ್ಷಣಗಳು ಮತ್ತು ವರದಿಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಲು ಸಾಫ್ಟ್‌ವೇರ್ ಸುಧಾರಿತ ಅಲ್ಗಾರಿದಮ್‌ಗಳನ್ನು ಬಳಸುತ್ತದೆ.';
	        document.getElementById('Question3Link').innerText ='ಯಾವ ನಿರ್ವಾಹಕ ಪೋರ್ಟಲ್‌ಗಳು ಲಭ್ಯವಿವೆ ಮತ್ತು ಅವು ಬಳಕೆದಾರರಿಗೆ ಹೇಗೆ ಪ್ರಯೋಜನವನ್ನು ನೀಡುತ್ತವೆ?';
	        document.getElementById('Question4Link').innerText ='ನಮ್ಮ ಸಾಫ್ಟ್‌ವೇರ್ ಮೂರು ನಿರ್ವಾಹಕ ಪೋರ್ಟಲ್‌ಗಳನ್ನು (ಡಾಕ್ಟರ್, ಪ್ರಾಕ್ಟೀಷನರ್ ಮತ್ತು ಪೇಷಂಟ್) ಒಳಗೊಂಡಿದೆ, ಅದು ಸಂವಹನವನ್ನು ಸುವ್ಯವಸ್ಥಿತಗೊಳಿಸುತ್ತದೆ, ಸೂತ್ರೀಕರಣಗಳ ಗಿಡಮೂಲಿಕೆಗಳ ಅಧಿಕಾರವನ್ನು ನೀಡುತ್ತದೆ ಮತ್ತು ಆಯುರ್ವೇದ ಚಿಕಿತ್ಸೆಗಳ ಸಮರ್ಥ ನಿರ್ವಹಣೆಗಾಗಿ ಸಮಗ್ರ ಮೇಲ್ವಿಚಾರಣೆಯನ್ನು ಒದಗಿಸುತ್ತದೆ.';
	        document.getElementById('Question5Link').innerText ='ಸ್ಮಾರ್ಟ್ ಶಿಫಾರಸುಗಳಿಗಾಗಿ ಸಾಫ್ಟ್‌ವೇರ್ ಯಾವ ಅಂಶಗಳನ್ನು ಪರಿಗಣಿಸುತ್ತದೆ?';
	        document.getElementById('Question6Link').innerText ='ಸ್ಮಾರ್ಟ್ ಶಿಫಾರಸುಗಳು ರೋಗಿಯ-ನಿರ್ದಿಷ್ಟ ಅಂಶಗಳಾದ ವಯಸ್ಸು, ಎತ್ತರ, ತೂಕ, ಲಿಂಗ, ಐತಿಹಾಸಿಕ ಕಾಯಿಲೆಗಳು ಮತ್ತು ರೋಗಿಯ ನಡವಳಿಕೆ (ವಾತ, ಪಿತ್ತ, ಕಫ) ಆದರ್ಶ ಗಿಡಮೂಲಿಕೆಗಳ ಸೂತ್ರೀಕರಣಕ್ಕೆ ಬುದ್ಧಿವಂತ ಸಲಹೆಗಳನ್ನು ನೀಡಲು ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ.';
	        document.getElementById('Question7Link').innerText ='ಮೂಲಿಕೆ ಗುರುತಿಸುವಿಕೆಯ ವೈಶಿಷ್ಟ್ಯವು ಬಳಕೆದಾರರ ಜ್ಞಾನವನ್ನು ಹೇಗೆ ಹೆಚ್ಚಿಸುತ್ತದೆ?';
	        document.getElementById('Question8Link').innerText ='ಬಳಕೆದಾರ ಸ್ನೇಹಿ ಮೂಲಿಕೆ ಗುರುತಿನ ಸಾಧನವು ಆಯುರ್ವೇದ ತತ್ವಗಳ ಆಳವಾದ ತಿಳುವಳಿಕೆಯನ್ನು ಉತ್ತೇಜಿಸುತ್ತದೆ, ಬಳಕೆದಾರರಿಗೆ ಔಷಧೀಯ ಸಸ್ಯಗಳನ್ನು ಸುಲಭವಾಗಿ ಗುರುತಿಸಲು ಅನುವು ಮಾಡಿಕೊಡುತ್ತದೆ, ಪ್ರಕೃತಿ ಮತ್ತು ಗುಣಪಡಿಸುವಿಕೆಯ ನಡುವಿನ ಸಂಪರ್ಕವನ್ನು ಉತ್ತೇಜಿಸುತ್ತದೆ';
	        document.getElementById('Question9Link').innerText ='ಸಾಫ್ಟ್‌ವೇರ್ ಬಹು ಭಾಷೆಗಳಲ್ಲಿ ಲಭ್ಯವಿದೆಯೇ?';
	        document.getElementById('Question10Link').innerText ='ಹೌದು, ನಮ್ಮ ಬಳಕೆದಾರ ಸ್ನೇಹಿ ಇಂಟರ್ಫೇಸ್ ಬಹು ಭಾಷೆಗಳನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ, ಪ್ರಪಂಚದಾದ್ಯಂತದ ವೈದ್ಯರು ಮತ್ತು ವೈದ್ಯರಿಗೆ ಪ್ರವೇಶವನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ ಮತ್ತು ಆಯುರ್ವೇದ ಸಂಶೋಧನೆಯನ್ನು ಸರಳಗೊಳಿಸುತ್ತದೆ.';
	        document.getElementById('Question11Link').innerText ='ತಿಳುವಳಿಕೆಯುಳ್ಳ ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಲು ಸಾಫ್ಟ್‌ವೇರ್ ಯಾವ ಶ್ರೀಮಂತ ಮಾಹಿತಿಯನ್ನು ಒದಗಿಸುತ್ತದೆ?';
	        document.getElementById('Question12Link').innerText ='ಈ ಸಾಫ್ಟ್‌ವೇರ್ ಔಷಧದ ಗುಣಲಕ್ಷಣಗಳು, ವಿರೋಧಾಭಾಸಗಳು, ಸಮಾನಾರ್ಥಕ ಪದಗಳು ಮತ್ತು ಆಯುರ್ವೇದದ ಕುರಿತು ಸಮಗ್ರ ವಿವರಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ: ವೈಶಿಷ್ಟ್ಯಗಳು, ತಿಳುವಳಿಕೆಯುಳ್ಳ ಆಯುರ್ವೇದ ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಲು ಅಗತ್ಯವಿರುವ ಮಾಹಿತಿಯೊಂದಿಗೆ ಆರೋಗ್ಯ ವೃತ್ತಿಪರರನ್ನು ಸಬಲಗೊಳಿಸುವುದು.';
	         
	
	        document.getElementById('ContactLink').innerText ='ಸಂಪರ್ಕಿಸಿ';
	        document.getElementById('Contact2Link').innerText ='ಸಂಪರ್ಕಿಸಿ';
	        document.getElementById('AddressLink').innerText ='ವಿಳಾಸ';
	        document.getElementById('SaarthiLink').innerText ='ತಂಡ ಸಾರಥಿ SIH, ಭಾರತ';
	        document.getElementById('CallLink').innerText ='ಸಂಪರ್ಕಿಸಿ';
	        document.getElementById('MailLink').innerText ='ನಮಗೆ ಇಮೇಲ್ ಮಾಡಿ';
	        document.getElementById('OpenLink').innerText ='ತೆರೆಯುವ ಸಮಯ';
	        document.getElementById('AlwaysLink').innerText ='ಯಾವಾಗಲೂ ಲಭ್ಯವಿರುತ್ತದೆ \n 24/7';
	
	        // placeholder
	        // document.getElementById('NameLink').innerText = 'आपका नाम';
	        var inputElement = document.getElementById('NameLink').getElementsByTagName('input')[0];
	
	        // Change the placeholder value
	        inputElement.placeholder = 'ನಿಮ್ಮ ಹೆಸರು';
	        var inputElement = document.getElementById('EmailLink').getElementsByTagName('input')[0];
	        inputElement.placeholder = 'ನಿಮ್ಮ ಇಮೇಲ್';
	        var inputElement = document.getElementById('SubjectLink').getElementsByTagName('input')[0];
	        inputElement.placeholder = 'ವಿಷಯ';
	        var textareaElement = document.getElementById('Message1Link').getElementsByTagName('textarea')[0];
	        textareaElement.placeholder = 'ನಿನ್ನ ಸಂದೇಶ';
	        // document.getElementById('SubjectLink').innerText ='विषय';
	        // document.getElementById('MessageLink').innerText ='संदेश';
	
	        document.getElementById('Send1Link').innerText ='ಸಂದೇಶ ಕಳಿಸಿ';
			document.getElementById('DescriptionLink').innerText ='ನಮ್ಮ ಆರೋಗ್ಯ ಸಾಫ್ಟ್‌ವೇರ್‌ನೊಡನೆ ವೈಯಕ್ತಿಕ ಆಯುರ್ವೇದಿಕ ಆರೋಗ್ಯ ಸೇವೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ - ಸಮಗ್ರ ಕಲ್ಯಾಣಕ್ಕಾಗಿ ಪರಂಪರೆಯನ್ನು ಮತ್ತು ತಂತ್ರಾಂಶಗಳನ್ನು ಸೇರಿಸಿ.';
			document.getElementById('UsefulLink').innerText ='ಉಪಯೋಗಕರ ಲಿಂಕ್‌ಗಳು';
			
			document.getElementById('HomeLink').innerText ='ಹೋಮ್ ಪೇಜ್';
			document.getElementById('AboutLink').innerText ='ನಮ್ಮ ಬಗ್ಗೆ';
			document.getElementById('ServicesLink').innerText ='ಸೇವೆಗಳು';
			document.getElementById('TermsLink').innerText ='ಸೇವೆಗಳ ಷರತ್ತುಗಳು';
			document.getElementById('PrivacyLink').innerText ='ಗೋಪ್ಯತಾ ನೀತಿ';
			
			document.getElementById('Services2Link').innerText ='ಸೇವೆಗಳ ಷರತ್ತುಗಳು';
			document.getElementById('AdvisorLink').innerText ='ಸಲಹಾಕಾರ';
			document.getElementById('PinLink').innerText ='ಪಿನ್ ಸ್ಥಾನ';
			document.getElementById('HerbLink').innerText ='ಜಡಿಬೂಟಿಗಳ ಗುರುತು';
			document.getElementById('MultilingualLink').innerText ='ಬಹುಭಾಷಾಂತರ';
			document.getElementById('AyurvedicLink').innerText ='ಆಯುರ್ವೇದಿಕ ಔಷಧಿ ತಯಾರಿಸಿ';
			
			document.getElementById('Contact3Link').innerText ='ಸಂಪರ್ಕ ಮಾಡಿ';
			document.getElementById('Team2Link').innerText ='ತಂಡಕ್ಕೆ ಸಹಕರಿಸುತ್ತಿದ್ದಾರೆ \n ಆಯುಷ್ ಮಂತ್ರಾಲಯ \n ಎಸ್ ಐ ಎಚ್, ಭಾರತ';
			document.getElementById('PhoneLink').innerText ='ಫೋನ್ ಸಂಖ್ಯೆ';
			document.getElementById('EMailLink').innerText ='ಇಮೇಲ್';
			hindiflag = 0;
        	kannadaflag = 1;
        	marathiflag = 0;
        	teluguflag = 0;
		}
		else{
			kannadaflag = 0;
			location.reload();
		}
       
    }
    function handleTeluguLanguage() {
		if(teluguflag === 0){
			
	        // Your logic for Kannada language goes here
	        console.log('Selected language: Telugu');
	        document.title = "సారథి";
			document.getElementById('homeLink').innerText = 'హోమ్';
			document.getElementById('advisorLink').innerText = 'ఆడ్వైజర్';
			document.getElementById('locationLink').innerText = 'స్థానం';
			document.getElementById('contactLink').innerText = 'సంప్రదించండి';
			document.getElementById('langlink2').innerText = 'భాష';
			document.getElementById('hindiLink').innerText = 'हिंदी';
			document.getElementById('kannadaLink').innerText = 'ಕನ್ನಡ';
			document.getElementById('taluguLink').innerText = 'English';
			document.getElementById('MarathiLink').innerText = 'मराठी';
			
			document.getElementById('LoginLink').innerText = 'లాగిన్';
			document.getElementById('WLink').innerText = 'సారథిలో మీరు స్వాగతం';
			document.getElementById('ALink').innerText = 'భారతం హర్బల్ గద్దిల ఖజానా, అంగడిలో అద్దె పొందడానికి అమరికన్ హెచ్ అండ్ బి సోనికి సమానమైనది.';
			document.getElementById('CLink').innerText = 'మీ ఆరోగ్యానికి మరియు ఆరోగ్య చికిత్సక సలహాలకు మేము ప్రతివారం 24/7 ఇక్కడ ఉన్నాము.';
			document.getElementById('GetLink').innerText = 'ప్రారంభించండి';
			document.getElementById('FLink').innerText = 'రివ్యూ వివరాలు';
			document.getElementById('PLink').innerText = 'విధి మరియు అదనపు సూచనలు ఇస్తే, సూచన అవగాహన ఇస్తే';
			document.getElementById('TLink').innerText = 'చికిత్స';
			document.getElementById('RLink').innerText = 'ఖచ్చిత సూచనను పొందండి';
			document.getElementById('HLink').innerText = 'హర్బల్ గద్దిలు గుర్తించండి';
			document.getElementById('ILink').innerText = 'చిత్రం లేదా పేరుకు అనుగుణంగా హర్బల్ గద్దిలను గుర్తించండి';
			document.getElementById('WhoLink').innerText = 'మనమేరు ఎవరు';
			document.getElementById('Who1').innerText = 'మా ఆయుర్వేదిక్ సాఫ్ట్‌వేర్‌లో మీరు స్వాగతం!';
			document.getElementById('Who2').innerText = 'సంప్రదాయాత్మక ఆయుర్వేదిక్ చికిత్సా పద్ధతులతో తాత్కాలికగా గౌరవిస్తున్న టెక్నాలజీని, పరంపరాగత ఔషధ చికిత్సాను ఏకత్రపరచడంగా డిజైన్ చేయడం.';
			document.getElementById('Who3').innerText = 'మరింత చదవండి';
			
			document.getElementById('FeatureLink').innerText = 'విశేషాలు';
			document.getElementById('Feature2').innerText = 'ఆయుర్వేదిక ఆరోగ్య సేవలలో క్రాంతి: వ్యక్తిగత కల్యాణాని';
			document.getElementById('HeadLink1').innerText = 'వ్యక్తిగత హర్బల్ ఫార్మ్యులేషన్';
			document.getElementById('HeadLink2').innerText = 'సమయాన్ని కనబడాలి సూచన';
			document.getElementById('HeadLink3').innerText = 'హెర్బల్ గురించి అరిగిపోవడం';
			document.getElementById('HeadLink4').innerText = 'వినండి సాక్షరం బహుభాషా ఇంటర్‌ఫేస్';
			document.getElementById('HeadLink5').innerText = 'తెలిపిన సమాచారాన్ని కోసం సాంకేతిక సమాచారం';
			document.getElementById('HeadLink6').innerText = 'శుద్ధ స్థాన పిన్';
			
			document.getElementById('SuggestLink').innerText = 'సూచనా కేంద్రం';
			document.getElementById('EnterLink').innerText = 'స్థానం నమోదు చేయండి:';
			document.getElementById('MapLink').innerText = 'మ్యాప్ సృష్టించు';
			
			document.getElementById('QuestionLink').innerText = 'అడఫాక్యూ';
			document.getElementById('Question0Link').innerText = 'అక్కడ కావడానికి ప్రశ్నలు';
			document.getElementById('Question1Link').innerText = 'ఆయుర్వేద సాఫ్ట్‌వేర్ హర్బల్ ఫార్మ్యులేషన్ ఎలా రూపొందిస్తుంది?';
			document.getElementById('Question2Link').innerText = 'సాఫ్ట్‌వేర్ యొక్క వివరాలు';
			document.getElementById('Question3Link').innerText ='ఎవరైనా మేనేజర్ పోర్టల్స్ అందుబాటులో ఉన్నాయా, మరియు వాటిని వినియోగించటానికి వారికి ఎలా లాభాన్వితం చేస్తారు?';
			document.getElementById('Question4Link').innerText ='మా సాఫ్ట్‌వేర్లో మూడు మేనేజర్ పోర్టల్స్ (డాక్టర్, అభ్యర్థకుడు, మరియు రోగి) ఉన్నాయి వార్తా, హర్బల్ మేనేజమెంట్ కార్యకలాపాలు ప్రస్తుతం ఉంటాయి, మరియు ఆయుర్వేదిక చికిత్సాల కౌశలాలను మేనేజ్ చేయడానికి వివరాలు అందిస్తుంది.';
			document.getElementById('Question5Link').innerText ='సాఫ్ట్‌వేర్ని స్మార్ట్ సూజించడానికి అది ఏ కారణాన్ని అందించుకోతుంది?';
			document.getElementById('Question6Link').innerText ='మోడల్ పరికరం, ఉచ్చమైనగా, భారం,';
			document.getElementById('Question7Link').innerText ='జడబూటుల గురించి చర్చించే లింక్ వాడుక వాడుకరి జ్ఞానాన్ని పెంచడానికి ఎలా పెరగిస్తుంది?';
			document.getElementById('Question8Link').innerText ='వాడుకర్లని ఆయుర్వేద సిద్ధాంతాలను గాఢంగా అర్థం చేస్తే, జడబూటులను గుర్తించే ఉపకరణం ద్వారా, ఔషధ వనస్పతులను సులభంగా గుర్తించడానికి వ్యక్తిగత స్వాస్థ్య మరియు చికిత్సా వరకు సంబంధం స్థాపిస్తారు.';
			document.getElementById('Question9Link').innerText ='సాఫ్ట్‌వేర్ ఎంతో భాషలలో అందుబాటులో ఉందా?';
			document.getElementById('Question10Link').innerText ='అవును, మా వినండి - సౌజన్యపూరిత ఇంటర్ఫేస్ ద్వారా డాక్టర్లు మరియు వైద్య సంస్కరణాలకు ప్రవేశం పొందడానికి, అందుబాటులో ఉన్న భాషలను సమర్థిస్తుంది, మరియు ఆయుర్వేదిక అభ్యాసాలకు సులభంగా సహాయక సమాచారాన్ని అందిస్తుంది.';
			document.getElementById('Question11Link').innerText ='యొక్క ఎవరైనా ధృవాంతాలను నేర్పడానికి ఈ సాఫ్ట్‌వేర్ ఎలాంటి ప్రముఖ నిర్ణయాలను అందిస్తుంది?';
			document.getElementById('Question12Link').innerText ='ఈ సాఫ్ట్‌వేర్ ఆయుర్వేదిక ఆరోగ్య పరంపరను';
			document.getElementById('ContactLink').innerText ='సంప్రక్షేం';
			document.getElementById('Contact2Link').innerText ='సంప్రక్షేం చేయండి';
			document.getElementById('AddressLink').innerText ='చిరునామా';
			document.getElementById('SaarthiLink').innerText ='సారథి టీమ్ \n ఎస్ ఎచ్, భారతం';
			document.getElementById('CallLink').innerText ='సంప్రక్షేం చేయండి';
			document.getElementById('MailLink').innerText ='మేము ఇమెయిల్ చేయండి';
			document.getElementById('OpenLink').innerText ='తెరిచిపోవడానికి సమయం';
			document.getElementById('AlwaysLink').innerText ='ఎప్పటికప్పుడు అంగీక';
			var inputElement = document.getElementById('NameLink').getElementsByTagName('input')[0];
			inputElement.placeholder = 'మీ పేరు';
			
			var inputElement = document.getElementById('EmailLink').getElementsByTagName('input')[0];
			inputElement.placeholder = 'మీ ఇమెయిల్';
			
			var inputElement = document.getElementById('SubjectLink').getElementsByTagName('input')[0];
			inputElement.placeholder = 'విషయం';
			
			var textareaElement = document.getElementById('Message1Link').getElementsByTagName('textarea')[0];
			textareaElement.placeholder = 'మీ సందేశం';
			
			document.getElementById('Send1Link').innerText ='సందేశం పంపండి';
			document.getElementById('DescriptionLink').innerText ='మా హెరిటేజ్ సాఫ్ట్‌వేర్‌తో వైయక్తిక ఆయుర్వేద ఆరోగ్య పరంపర - సంపూర్ణ సంస్కార మరియు భౌతిక ఆరోగ్యాన్ని అదకచేత జోడించడానికి.';
			document.getElementById('UsefulLink').innerText ='ఉపయోగకరంగా లింక్‌లు';
			
			document.getElementById('HomeLink').innerText ='హోమ్ పేజీ';
			document.getElementById('AboutLink').innerText ='మా గురించి';
			document.getElementById('ServicesLink').innerText ='సేవలు';
			document.getElementById('TermsLink').innerText ='సేవల నిబంధనలు';
			document.getElementById('PrivacyLink').innerText ='గోప్యాన్ని నిగదించండి';
			
			document.getElementById('Services2Link').innerText ='గోప్యాన్ని నిగదించండి';
			document.getElementById('AdvisorLink').innerText ='సలహాదారుడు';
			document.getElementById('PinLink').innerText ='పిన్ స్థానం';
			document.getElementById('HerbLink').innerText ='హెర్బ్ గురించి';
			document.getElementById('MultilingualLink').innerText ='బహుభాషాకు';
			document.getElementById('AyurvedicLink').innerText ='ఆయుర్వేదిక్ ఔషధం నిర్మించండి';
			
			document.getElementById('Contact3Link').innerText ='సంప్రక్షేంకి వెళందం';
			document.getElementById('Team2Link').innerText ='సారథి టీమ్ \n ఆయుష్య మంత్రాలయం \nఎస్ ఏ హెచ్, భారతం';
			document.getElementById('PhoneLink').innerText ='ఫోన్ నంబర్';
			document.getElementById('EMailLink').innerText ='ఇమెయిల్';
			hindiflag = 0;
        	kannadaflag = 0;
        	marathiflag = 0;
        	teluguflag = 1;

		}
		else{
			teluguflag = 0;
			location.reload();
		}
        // You can add more logic or call other functions as needed
    }
    function handleMarathiLanguage() {
		if(marathiflag === 0){
			
	        // Your logic for Kannada language goes here
	        console.log('Selected language: Marathi');
	        document.title = "सारथी";
			document.getElementById('homeLink').innerText = 'होम';
			document.getElementById('advisorLink').innerText = 'विशेषज्ञ';
			document.getElementById('locationLink').innerText = 'स्थान';
			document.getElementById('contactLink').innerText = 'संपर्क';
			document.getElementById('langlink2').innerText = 'भाषा';
			document.getElementById('hindiLink').innerText = 'हिंदी';
			document.getElementById('kannadaLink').innerText = 'ಕನ್ನಡ';
			document.getElementById('taluguLink').innerText = 'తెలుగు';
			document.getElementById('MarathiLink').innerText = 'English';
			
			document.getElementById('LoginLink').innerText = 'लॉग इन';
			document.getElementById('WLink').innerText = 'सारथी मध्ये आपले स्वागत आहे';
			document.getElementById('ALink').innerText = 'भारत जड़ी-बूटियोंची खजिन आहे, एक प्रकारची ती आमचं हिरवं सोनं आहे.';
			document.getElementById('CLink').innerText = 'आपल्या काळजीसाठी आम्ही 24/7 येथे आहोत.';
			document.getElementById('GetLink').innerText = 'सुरु करा';
			document.getElementById('FLink').innerText = 'निरूपण तपशील';
			document.getElementById('PLink').innerText = 'सूत्रीकरणाचा वापर आणि त्याची सावधानी सुझाव द्या';
			document.getElementById('TLink').innerText = 'उपचार';
			document.getElementById('RLink').innerText = 'सटीक सूत्र सुझाव प्राप्त करा';
			document.getElementById('HLink').innerText = 'जड़ी बूटियोंची ओळख';
			document.getElementById('ILink').innerText = 'चित्र किंवा नावानुसार जड़ी-बूटियोंची ओळख करा';
			document.getElementById('WhoLink').innerText = 'आम्ही कोण आहोत';
			document.getElementById('Who1').innerText = 'आमच्या आयुर्वेदिक सॉफ्टवेअरमध्ये तुमचे स्वागत आहे!!';
			document.getElementById('Who2').innerText = 'परंपरागत औषध चिकित्सा पद्धतींसह प्रौद्योगिकीस सुलभतेने एकत्र करून आयुर्वेदिक स्वास्थ्य काळजीत एक क्रांती आणण्यासाठी डिझाइन केलेलं अग्रणी प्लॅटफॉर्म.';
			document.getElementById('Who3').innerText = 'आणखी वाचा';
			
			document.getElementById('FeatureLink').innerText = 'वैशिष्ट्ये';
			document.getElementById('Feature2').innerText = 'आयुर्वेदिक स्वास्थ्य सेवांत क्रांतिकारी बदल! : वैयक्तिक कल्याणसाठी एक आधुनिक दृष्टिकोन';
			
			document.getElementById('HeadLink1').innerText = 'वैयक्तिक हर्बल फॉर्म्युलेशन';
			document.getElementById('HeadLink2').innerText = 'काळजीसाठी चालक सुचाव';
			document.getElementById('HeadLink3').innerText = 'जड़ी-बूटियोंची ओळख';
			document.getElementById('HeadLink4').innerText = 'वापरकर्ता सुसंगत बहुभाषी इंटरफेस';
			document.getElementById('HeadLink5').innerText = 'सूचित काळजीसाठी समृद्ध माहिती';
			document.getElementById('HeadLink6').innerText = 'शुद्ध स्थान पिन';
			
			document.getElementById('SuggestLink').innerText = 'सुचावित केंद्र';
			document.getElementById('EnterLink').innerText = 'स्थान प्रविष्ट करा:';
			document.getElementById('MapLink').innerText = 'नकाशा तयार करा';
			
			document.getElementById('QuestionLink').innerText = 'एफ.ए.क्यू';
			document.getElementById('Question0Link').innerText = 'अक्सर प्रश्न';
			document.getElementById('Question1Link').innerText = 'आयुर्वेदिक सॉफ्टवेअर हर्बल फॉर्म्युलेशन कसे तयार करतो?';
			document.getElementById('Question2Link').innerText = 'सॉफ्टवेअर प्रभ';
			document.getElementById('Question3Link').innerText ='कोणत्याही प्रबंधक पोर्टल उपलब्ध आहेत, आणि ते वापरकर्त्यांना कसे लाभान्वित करतात?';
			document.getElementById('Question4Link').innerText ='आमच्या सॉफटवेअरमध्ये तीन प्रबंधक पोर्टल (डॉक्टर, प्रॅक्टिशनर, आणि रुग्ण) आहेत ज्या संवाद, हर्बल प्रबंधन सुसंगतपणे करतात आणि आयुर्वेदिक उपचारांचे कुशल प्रबंधन करण्यासाठी विस्तृत निरीक्षण प्रदान करतात।';
			document.getElementById('Question5Link').innerText ='सॉफटवेअरला स्मार्ट सुचवण्यांसाठी ते कोणत्याही कारणांवर विचार करतो?';
			document.getElementById('Question6Link').innerText ='मॉडल उम्र, उच्चता, वजन, लिंग, ऐतिहासिक आजारांची, आणि रुग्णाच्या वर्तनांची उपेक्षा करून, इडिअल हर्बल फॉर्म्युलेशन सुचवण्यासाठी स्मार्ट सुझावांसह सुशिक्षित करण्यासाठी स्मार्ट सिफारिशींना ध्यानाकरून कारणांची उपेक्षा करतो.';
			document.getElementById('Question7Link').innerText ='जड़ी बूटियोंची पहचान सुविधा वापरकर्त्यांच्या ज्ञानाला कसे वाढवते?';
			document.getElementById('Question8Link').innerText ='वापरकर्त्यांना आयुर्वेदिक सिद्धांतांची गहीर समज देण्यासाठी जड़ी-बूटियोंची पहचान करणारे उपकरण द्वारे, औषधीय वनस्पतींची सोपीसोपी पहचान करून आपल्याला स्वास्थ्य आणि उपचारांच्या दरम्यान संबंध स्थापित करते.';
			document.getElementById('Question9Link').innerText ='सॉफटवेअर कितीही भाषांमध्ये उपलब्ध आहे का?';
			document.getElementById('Question10Link').innerText ='हो, आमचे वापरकर्ता-सौजन्यपूर्ण इंटरफेस विश्वभरातील डॉक्टर आणि वैद्यकीय संप्रदायांसाठी प्रवेश सुनिश्चित करण्यासाठी कितीही भाषांचे समर्थन करते आणि आयुर्वेदिक संशोधनांच्या सोप्य आपल्याला देणारे.';
			document.getElementById('Question11Link').innerText ='निर्णय घेण्यासाठी या सॉफटवेअरने कोणतीही समृद्ध योग्य निर्णयांकरिता माहिती पुरवते?';
			document.getElementById('Question12Link').innerText ='हे सॉफटवेअर औषध';
			document.getElementById('ContactLink').innerText ='संपर्क';
			document.getElementById('Contact2Link').innerText ='संपर्क करा';
			document.getElementById('AddressLink').innerText ='पत्ता';
			document.getElementById('SaarthiLink').innerText ='सारथी टीम \n एस आय एच, भारत';
			document.getElementById('CallLink').innerText ='संपर्क करा';
			document.getElementById('MailLink').innerText ='आम्हाला ईमेल करा';
			document.getElementById('OpenLink').innerText ='उघडण्याचा समय';
			document.getElementById('AlwaysLink').innerText ='सदैव उपलब्ध \n 24/7';
			var inputElement = document.getElementById('NameLink').getElementsByTagName('input')[0];
			inputElement.placeholder = 'आपलं नाव';
			
			var inputElement = document.getElementById('EmailLink').getElementsByTagName('input')[0];
			inputElement.placeholder = 'आपला ईमेल';
			
			var inputElement = document.getElementById('SubjectLink').getElementsByTagName('input')[0];
			inputElement.placeholder = 'विषय';
			
			var textareaElement = document.getElementById('Message1Link').getElementsByTagName('textarea')[0];
			textareaElement.placeholder = 'आपलं संदेश';
			
			document.getElementById('Send1Link').innerText ='संदेश पाठवा';
			document.getElementById('DescriptionLink').innerText ='आमच्या नवोन्वेषी सॉफ्टवेअरसह वैयक्तिकृत आयुर्वेदिक काळजी सापडा - समग्र कल्याणासाठी परंपरा आणि तंतूवाद जोडण्यासाठी.';
			document.getElementById('UsefulLink').innerText ='उपयुक्त लिंक';
			
			document.getElementById('HomeLink').innerText ='होम पेज';
			document.getElementById('AboutLink').innerText ='आमच्याबद्दल';
			document.getElementById('ServicesLink').innerText ='सेवा';
			document.getElementById('TermsLink').innerText ='सेवेची अटी';
			document.getElementById('PrivacyLink').innerText ='गोपनीयता धोरण';
			
			document.getElementById('Services2Link').innerText ='गोपनीयता धोरण';
			document.getElementById('AdvisorLink').innerText ='सल्लागार';
			document.getElementById('PinLink').innerText ='पिन स्थान';
			document.getElementById('HerbLink').innerText ='जड़ीबूटी ओळख';
			document.getElementById('MultilingualLink').innerText ='बहुभाषी';
			document.getElementById('AyurvedicLink').innerText ='आयुर्वेदिक औषध तयार करा';
			
			document.getElementById('Contact3Link').innerText ='संपर्क साधा';
			document.getElementById('Team2Link').innerText ='सारथी टीम \n आयुष्य मंत्रालय \nएस आय एच, भारत';
			document.getElementById('PhoneLink').innerText ='फ़ोन नंबर';
			document.getElementById('EMailLink').innerText ='ईमेल';
			hindiflag = 0;
        	kannadaflag = 0;
        	marathiflag = 1;
        	teluguflag = 1;


		}
		else {
			marathiflag=0;
			location.reload();
		}

        // You can add more logic or call other functions as needed
    }
