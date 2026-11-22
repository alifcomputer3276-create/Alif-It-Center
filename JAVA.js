(function () {
  const SYLLABI = {
    office: {
      bn: {
        title: "বেসিক কম্পিউটার ও অফিস অ্যাপ্লিকেশন — সিলেবাস",
        items: [
          "কম্পিউটার ফান্ডামেন্টালস, উইন্ডোজ ফাইল ও ফোল্ডার ম্যানেজমেন্ট",
          "বিজয় ও অভ্র লেআউটে বাংলা টাইপিং এবং ইংরেজি টাইপিং অনুশীলন",
          "Microsoft Word: সিভি, আবেদনপত্র, পেজ সেটআপ, এডিট-লক ও PDF তৈরি",
          "Microsoft Excel: বেসিক ফর্মুলা, বিল/স্যালারি শিট ও ডেটা এন্ট্রি",
          "Microsoft PowerPoint: প্রেজেন্টেশন স্লাইড ও ইন্টারনেট/ই-মেইল ব্যবহার"
        ]
      },
      en: {
        title: "Basic Computer & Office Application — Syllabus",
        items: [
          "Computer fundamentals and Windows file/folder organization",
          "Bangla (Bijoy & Avro) and English typing practice",
          "Microsoft Word: CVs, letters, page setup, edit-lock & PDF creation",
          "Microsoft Excel: Basic formulas, salary/billing sheets & data entry",
          "Microsoft PowerPoint: Slide presentations & internet/email essentials"
        ]
      }
    },
    graphic: {
      bn: {
        title: "গ্রাফিক ডিজাইন ও প্রিন্ট মিডিয়া — সিলেবাস",
        items: [
          "Adobe Illustrator ও Adobe Photoshop-এর মূল টুলস ও লেয়ার ধারণা",
          "লোগো, ভিজিটিং কার্ড, ব্যানার, ফ্লায়ার ও ফেসবুক পোস্ট ডিজাইন",
          "রঙের সামঞ্জস্য, টাইপোগ্রাফি ও প্রিন্ট-রেডি ফাইল প্রস্তুতকরণ"
        ]
      },
      en: {
        title: "Graphic Design & Print Media — Syllabus",
        items: [
          "Core tools and layer workflows in Adobe Illustrator & Photoshop",
          "Logos, visiting cards, banners, flyers & social media posts",
          "Color harmony, typography & print-ready file export"
        ]
      }
    },
    web: {
      bn: {
        title: "ওয়েব ডিজাইন ও ফ্রিল্যান্সিং — সিলেবাস",
        items: [
          "HTML5 স্ট্রাকচার এবং CSS3 লেআউট, ফ্লেক্স/গ্রিড ও রেসপনসিভ ডিজাইন",
          "ওয়েবসাইট অর্গানাইজেশন এবং GitHub Pages-এ সাইট পাবলিশ করা",
          "ক্লায়েন্ট ব্রিফ বোঝা, প্রজেক্ট ডেলিভারি ও ফ্রিল্যান্সিং ওয়ার্কফ্লো"
        ]
      },
      en: {
        title: "Web Design & Freelancing — Syllabus",
        items: [
          "HTML5 structure and CSS3 layouts, flex/grid & responsive design",
          "Website file organization and publishing via GitHub Pages",
          "Client communication, project delivery & freelancing workflow"
        ]
      }
    },
    database: {
      bn: {
        title: "ডেটাবেজ প্রোগ্রামিং — সিলেবাস",
        items: [
          "ডেটাবেজের ধারণা, টেবিল ডিজাইন, প্রাইমারি/ফরেন কি ও রিলেশনশিপ",
          "SQL কোয়েরি: SELECT, INSERT, UPDATE, DELETE, JOIN ও ফিল্টারিং",
          "ডেটা ব্যাকআপ, নিরাপত্তা এবং অ্যাপ্লিকেশন/ওয়েবের সাথে সংযোগের ধারণা"
        ]
      },
      en: {
        title: "Database Programming — Syllabus",
        items: [
          "Database concepts, table design, keys & relationships",
          "SQL queries: SELECT, INSERT, UPDATE, DELETE, JOIN & filtering",
          "Data backup, integrity & application integration basics"
        ]
      }
    },
    data: {
      bn: {
        title: "ডেটা অ্যানালাইসিস — সিলেবাস",
        items: [
          "Excel-এ ডেটা ক্লিনিং, Pivot Table, Lookup ও চার্ট বিশ্লেষণ",
          "SQL দিয়ে বড় ডেটাসেট থেকে প্রয়োজনীয় তথ্য সংক্ষেপ ও যাচাই",
          "ড্যাশবোর্ড ডিজাইন এবং সহজ ও কার্যকর রিপোর্ট উপস্থাপন"
        ]
      },
      en: {
        title: "Data Analysis — Syllabus",
        items: [
          "Data cleaning, Pivot Tables, Lookup & charts in Excel",
          "Querying and summarizing datasets with SQL",
          "Building clear dashboards and analytical reports"
        ]
      }
    }
  };

  let currentLang = localStorage.getItem("alif_lang") || "bn";

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("alif_lang", lang);
    document.documentElement.lang = lang === "bn" ? "bn" : "en";

    document.querySelectorAll("[data-bn][data-en]").forEach((el) => {
      el.textContent = el.getAttribute(lang === "bn" ? "data-bn" : "data-en");
    });
  }

  // Section switcher on index.html
  const sectionButtons = document.querySelectorAll("[data-section]");
  const sections = document.querySelectorAll(".page-section");
  const mainNav = document.getElementById("mainNav");
  const menuToggle = document.getElementById("menuToggle");

  function showSection(sectionId) {
    if (!sections.length) return;
    sections.forEach((sec) => {
      sec.classList.toggle("active", sec.id === sectionId);
    });
    document.querySelectorAll(".nav-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-section") === sectionId);
    });
    if (mainNav) mainNav.classList.remove("open");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  sectionButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const target = btn.getAttribute("data-section");
      if (document.getElementById(target)) {
        if (btn.tagName === "A") e.preventDefault();
        showSection(target);
      }
    });
  });

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      mainNav.classList.toggle("open");
    });
  }

  // Service filter
  const filterButtons = document.querySelectorAll(".filter-btn");
  const serviceCards = document.querySelectorAll(".service-card");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");
      filterButtons.forEach((b) => b.classList.toggle("active", b === btn));

      serviceCards.forEach((card) => {
        const cat = card.getAttribute("data-category");
        card.style.display = filter === "all" || cat === filter ? "" : "none";
      });
    });
  });

  // Syllabus modal
  const modal = document.getElementById("syllabusModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalList = document.getElementById("modalList");
  const closeModalBtn = document.getElementById("closeModalBtn");

  document.querySelectorAll(".syllabus-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-course");
      const data = SYLLABI[key]?.[currentLang] || SYLLABI[key]?.bn;
      if (!data || !modal) return;

      modalTitle.textContent = data.title;
      modalList.innerHTML = data.items.map((item) => `<li>${item}</li>`).join("");
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
    });
  });

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  }

  if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Copy helper
  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
  }

  document.querySelectorAll("[data-copy]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const val = btn.getAttribute("data-copy");
      copyText(val);
      const oldText = btn.textContent;
      btn.textContent = currentLang === "bn" ? "কপি হয়েছে ✓" : "Copied ✓";
      setTimeout(() => {
        btn.textContent = oldText;
      }, 1600);
    });
  });

  const langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      applyLanguage(currentLang === "bn" ? "en" : "bn");
    });
  }

  applyLanguage(currentLang);
})();