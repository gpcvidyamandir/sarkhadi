/* =========================================
   SCHOOL WEBSITE - EASY EDIT SETTINGS
   ========================================= */

const SCHOOL = {

  name: "घनश्याम प्रसाद चौकरया विद्या मंदिर",
  location: "सरखड़ी",

  founder: "श्री रामकृष्ण चौकरया जी",

  phone: "+91 70245 92100",

  whatsapp: "917024592100",

  blog: "http://gpcvidhyamandir.blogspot.com/",

  facebook:
    "https://www.facebook.com/profile.php?id=61590847181923",

  instagram:
    "https://www.instagram.com/g.p.c_vidhya_mandir_sarkhadi?stkn=NDV6NWd6Y3VtcXJu",

  /* ===== HOME PAGE ADVERTISEMENT ===== */

  noticeTitle: "ADMISSION OPEN 2026–27",

  noticeText:
    "अपने बच्चे के उज्ज्वल भविष्य की मजबूत नींव के लिए आज ही विद्यालय से संपर्क करें।",

  noticeButton:
    "Admission Details →",

  noticeLink:
    "admissions.html"

};


/* =========================================
   AUTOMATIC SETTINGS
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {


  /* SCHOOL NAME */

  document.querySelectorAll("[data-school-name]")
    .forEach(el => {

      el.textContent = SCHOOL.name;

    });


  /* LOCATION */

  document.querySelectorAll("[data-school-location]")
    .forEach(el => {

      el.textContent = SCHOOL.location;

    });


  /* FOUNDER */

  document.querySelectorAll("[data-founder]")
    .forEach(el => {

      el.textContent = SCHOOL.founder;

    });


  /* PHONE */

  document.querySelectorAll("[data-phone]")
    .forEach(el => {

      el.textContent = SCHOOL.phone;

      el.href =
        "tel:" +
        SCHOOL.phone.replace(/\s/g, "");

    });


  /* WHATSAPP */

  document.querySelectorAll("[data-whatsapp]")
    .forEach(el => {

      el.href =
        "https://wa.me/" +
        SCHOOL.whatsapp;

    });


  /* FACEBOOK */

  document.querySelectorAll("[data-facebook]")
    .forEach(el => {

      el.href = SCHOOL.facebook;

    });


  /* INSTAGRAM */

  document.querySelectorAll("[data-instagram]")
    .forEach(el => {

      el.href = SCHOOL.instagram;

    });


  /* BLOG */

  document.querySelectorAll("[data-blog]")
    .forEach(el => {

      el.href = SCHOOL.blog;

    });


  /* TAGLINE */

  document.querySelectorAll("[data-tagline]")
    .forEach(el => {

      el.textContent =
        "ज्ञान से विकास, संस्कार से उत्कर्ष";

    });


  /* YEAR */

  document.querySelectorAll("[data-year]")
    .forEach(el => {

      el.textContent =
        new Date().getFullYear();

    });


  /* =====================================
     ADVERTISEMENT BANNER
     ===================================== */

  const noticeTitle =
    document.querySelector("[data-notice-title]");

  const noticeText =
    document.querySelector("[data-notice-text]");

  const noticeButton =
    document.querySelector("[data-notice-button]");


  if (noticeTitle) {

    noticeTitle.textContent =
      SCHOOL.noticeTitle;

  }


  if (noticeText) {

    noticeText.textContent =
      SCHOOL.noticeText;

  }


  if (noticeButton) {

    noticeButton.textContent =
      SCHOOL.noticeButton;

    noticeButton.href =
      SCHOOL.noticeLink;

  }


  /* =====================================
     CLOSE BANNER
     ===================================== */

  const closeNotice =
    document.querySelector("[data-close-notice]");

  const noticeBanner =
    document.querySelector("[data-notice-banner]");


  if (closeNotice && noticeBanner) {

    closeNotice.addEventListener("click", function () {

      noticeBanner.style.display = "none";

    });

  }

});

// ================= ADMISSION ENQUIRY FORM =================

document.addEventListener("DOMContentLoaded", function () {

  const forms = document.querySelectorAll("#admissionEnquiryForm");

  forms.forEach(function (form) {

    form.addEventListener("submit", function (e) {

      e.preventDefault();

      const submitButton = form.querySelector(".enquiry-submit");

      submitButton.disabled = true;
      submitButton.innerText = "⏳ Submitting...";

      const formData = {
        parentName: document.getElementById("parentName").value,
        studentName: document.getElementById("studentName").value,
        mobile: document.getElementById("mobile").value,
        admissionClass: document.getElementById("class").value,
        location: document.getElementById("location").value,
        message: document.getElementById("message").value
      };

      fetch("https://script.google.com/macros/s/AKfycbyvG3s07748UGrkoSWc5hYdDGXd1cX4Q4Y7uxmbM67PjldemibaNG3yR2H3VJ8lkivM/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify(formData)
      })
      .then(function () {

        alert("✅ आपकी Admission Enquiry सफलतापूर्वक भेज दी गई है। विद्यालय की टीम जल्द आपसे संपर्क करेगी।");

        form.reset();

        submitButton.disabled = false;
        submitButton.innerText = "📩 Submit Admission Enquiry";

      })
      .catch(function (error) {

        alert("❌ Enquiry भेजने में समस्या हुई। कृपया दोबारा प्रयास करें।");

        submitButton.disabled = false;
        submitButton.innerText = "📩 Submit Admission Enquiry";

        console.error(error);
      });

    });

  });

});
// =====================================================
// PROFESSIONAL ANNOUNCEMENT SYSTEM
// =====================================================

document.addEventListener("DOMContentLoaded", function () {

    const banner = document.getElementById("school-announcement");

    // Banner मौजूद नहीं है तो कुछ न करें
    if (!banner) return;

    // Announcement data मौजूद है तो उससे content भरें
    if (typeof ANNOUNCEMENT !== "undefined") {

        document.getElementById("announcementBadge").textContent =
            ANNOUNCEMENT.badge;

        document.getElementById("announcementTitle").textContent =
            ANNOUNCEMENT.title;

        document.getElementById("announcementDescription").textContent =
            ANNOUNCEMENT.description;

        document.getElementById("announcementHighlight").textContent =
            ANNOUNCEMENT.highlight;

        const primaryButton =
            document.getElementById("announcementPrimary");

        primaryButton.textContent =
            ANNOUNCEMENT.primaryButton.text;

        primaryButton.href =
            ANNOUNCEMENT.primaryButton.link;

        const secondaryButton =
            document.getElementById("announcementSecondary");

        secondaryButton.textContent =
            ANNOUNCEMENT.secondaryButton.text;

        secondaryButton.href =
            ANNOUNCEMENT.secondaryButton.link;

        // show:false होने पर banner hide करें
        if (ANNOUNCEMENT.show === false) {
            banner.style.display = "none";
        }
    }

});


// =====================================================
// CLOSE ANNOUNCEMENT
// =====================================================

function closeAnnouncement() {

    const banner =
        document.getElementById("school-announcement");

    if (banner) {
        banner.style.display = "none";
    }

}
/* =====================================================
   SCHOOL ASSISTANT - CHATBOT LOGIC
   ===================================================== */

function toggleAssistant() {

    const box = document.getElementById("assistantBox");

    if (box.style.display === "block") {
        box.style.display = "none";
    } else {
        box.style.display = "block";

        setTimeout(() => {
            document.getElementById("assistantInput").focus();
        }, 100);
    }
}


/* -----------------------------------------------------
   ADD MESSAGE
----------------------------------------------------- */

function addAssistantMessage(message, type) {

    const messages = document.getElementById("assistantMessages");

    const div = document.createElement("div");

    div.className = "assistantMessage " + type;

    div.innerHTML = message;

    messages.appendChild(div);

    messages.scrollTop = messages.scrollHeight;
}


/* -----------------------------------------------------
   QUICK BUTTON QUESTIONS
----------------------------------------------------- */

function askSchool(type) {

    let question = "";
    let answer = "";

    if (type === "admission") {

        question = "Admission ke baare mein bataiye.";

        answer =
            "🎓 <b>Admission Information</b><br><br>" +
            "हमारे विद्यालय में <b>Nursery से कक्षा 8वीं</b> तक " +
            "अध्ययन की सुविधा उपलब्ध है।<br><br>" +
            "Admission से संबंधित जानकारी के लिए विद्यालय से " +
            "सीधे संपर्क करें।<br><br>" +
            "📞 <b>70245 92100</b><br>" +
            "📞 <b>91318 34016</b>";

    }

    else if (type === "classes") {

        question = "School mein kaun-kaun si classes hain?";

        answer =
            "📚 <b>Classes</b><br><br>" +
            "हमारे विद्यालय में <b>Nursery से कक्षा 8वीं</b> तक " +
            "कक्षाएँ संचालित होती हैं।<br><br>" +
            "विद्यालय में Hindi और English medium की सुविधा उपलब्ध है।";

    }

    else if (type === "timing") {

        question = "School ki timing kya hai?";

        answer =
            "🕐 <b>School Timing</b><br><br>" +
            "School timing की नवीनतम जानकारी के लिए " +
            "कृपया विद्यालय से संपर्क करें।<br><br>" +
            "📞 70245 92100";

    }

    else if (type === "location") {

        question = "School kaha hai?";

        answer =
            "📍 <b>School Location</b><br><br>" +
            "घनश्याम प्रसाद चौकरया विद्या मंदिर सरखड़ी<br>" +
            "ग्राम सरखड़ी, जिला दमोह, मध्य प्रदेश<br><br>" +
            "नीचे <b>Map</b> button से school की location देख सकते हैं।";

    }

    else if (type === "contact") {

        question = "School ka contact number kya hai?";

        answer =
            "📞 <b>Contact Us</b><br><br>" +
            "70245 92100<br>" +
            "91318 34016<br><br>" +
            "आप नीचे दिए गए <b>Call</b> या <b>WhatsApp</b> button का भी उपयोग कर सकते हैं।";

    }

    else if (type === "facilities") {

        question = "School mein kya facilities hain?";

        answer =
            "🏫 <b>School Facilities</b><br><br>" +
            "हमारा विद्यालय विद्यार्थियों को बेहतर शिक्षा " +
            "और learning environment प्रदान करने के लिए " +
            "कार्य करता है।<br><br>" +
            "Facilities की विस्तृत जानकारी के लिए school से संपर्क करें।";

    }

    addAssistantMessage(question, "user");

    setTimeout(function () {

        addAssistantMessage(answer, "bot");

    }, 300);
}


/* -----------------------------------------------------
   TEXT QUESTION
----------------------------------------------------- */

function sendAssistantMessage() {

    const input = document.getElementById("assistantInput");

    const question = input.value.trim();

    if (question === "") {
        return;
    }

    addAssistantMessage(question, "user");

    input.value = "";

    setTimeout(function () {

        const answer = getSchoolAnswer(question);

        addAssistantMessage(answer, "bot");

    }, 400);
}


/* -----------------------------------------------------
   SCHOOL ANSWER ENGINE
----------------------------------------------------- */

function getSchoolAnswer(question) {

    const q = question.toLowerCase();


    /* Admission */

    if (
        q.includes("admission") ||
        q.includes("admission kab") ||
        q.includes("प्रवेश") ||
        q.includes("दाखिला")
    ) {

        return (
            "🎓 <b>Admission</b><br><br>" +
            "हमारे विद्यालय में <b>Nursery से कक्षा 8वीं</b> तक " +
            "प्रवेश की सुविधा उपलब्ध है।<br><br>" +
            "Admission की वर्तमान जानकारी के लिए " +
            "विद्यालय से संपर्क करें।"
        );

    }


    /* Classes */

    if (
        q.includes("class") ||
        q.includes("classes") ||
        q.includes("कक्षा") ||
        q.includes("कौन सी क्लास")
    ) {

        return (
            "📚 <b>Classes</b><br><br>" +
            "हमारे विद्यालय में <b>Nursery से कक्षा 8वीं</b> तक " +
            "कक्षाएँ संचालित होती हैं।"
        );

    }


    /* School */

    if (
        q.includes("school") ||
        q.includes("विद्यालय") ||
        q.includes("स्कूल")
    ) {

        return (
            "🏫 <b>घनश्याम प्रसाद चौकरया विद्या मंदिर सरखड़ी</b><br><br>" +
            "विद्यालय Nursery से कक्षा 8वीं तक शिक्षा प्रदान करता है।"
        );

    }


    /* Location */

    if (
        q.includes("location") ||
        q.includes("address") ||
        q.includes("kaha") ||
        q.includes("कहाँ") ||
        q.includes("कहा") ||
        q.includes("पता") ||
        q.includes("लोकेशन")
    ) {

        return (
            "📍 <b>School Address</b><br><br>" +
            "ग्राम सरखड़ी, जिला दमोह, मध्य प्रदेश।<br><br>" +
            "📍 School की exact location देखने के लिए नीचे दिए गए Map button का उपयोग करें।"
        );

    }


    /* Contact */

    if (
        q.includes("contact") ||
        q.includes("number") ||
        q.includes("phone") ||
        q.includes("mobile") ||
        q.includes("संपर्क") ||
        q.includes("नंबर")
    ) {

        return (
            "📞 <b>Contact</b><br><br>" +
            "70245 92100<br>" +
            "91318 34016"
        );

    }


    /* Timing */

    if (
        q.includes("timing") ||
        q.includes("time") ||
        q.includes("समय") ||
        q.includes("टाइम")
    ) {

        return (
            "🕐 <b>School Timing</b><br><br>" +
            "School timing की latest जानकारी के लिए " +
            "कृपया विद्यालय से संपर्क करें।<br><br>" +
            "📞 70245 92100"
        );

    }


    /* Fees */

    if (
        q.includes("fee") ||
        q.includes("fees") ||
        q.includes("फीस") ||
        q.includes("शुल्क")
    ) {

        return (
            "💰 <b>Fee Information</b><br><br>" +
            "Fee structure की वर्तमान जानकारी के लिए " +
            "कृपया विद्यालय से संपर्क करें।<br><br>" +
            "📞 70245 92100"
        );

    }


    /* WhatsApp */

    if (
        q.includes("whatsapp") ||
        q.includes("व्हाट्सएप")
    ) {

        return (
            "💬 आप नीचे दिए गए <b>WhatsApp</b> button पर click करके " +
            "विद्यालय से सीधे WhatsApp पर संपर्क कर सकते हैं।"
        );

    }


    /* Greeting */

    if (
        q.includes("hello") ||
        q.includes("hi") ||
        q.includes("hii") ||
        q.includes("namaste") ||
        q.includes("नमस्ते")
    ) {

        return (
            "Namaste! 👋<br><br>" +
            "घनश्याम प्रसाद चौकरया विद्या मंदिर सरखड़ी में आपका स्वागत है।<br><br>" +
            "मैं admission, classes, timing, location और contact " +
            "से संबंधित जानकारी देने में आपकी मदद कर सकता हूँ।"
        );

    }


    /* Default */

    return (
        "😊 मुझे इस सवाल की पूरी जानकारी अभी उपलब्ध नहीं है।<br><br>" +
        "आप <b>Admission, Classes, Timing, Location, Fees या Contact</b> " +
        "के बारे में पूछ सकते हैं।<br><br>" +
        "📞 जरूरत होने पर विद्यालय से सीधे संपर्क करें:<br>" +
        "<b>70245 92100</b>"
    );
}
