  // lang.js — สำหรับเปลี่ยนภาษา
  document.addEventListener("DOMContentLoaded", () => {
    const langBtn = document.getElementById("langBtn");
    if (!langBtn) return;

    const currentLang = window.location.pathname.includes("/th/") ? "th" : "en";
    const targetLang = currentLang === "en" ? "th" : "en";
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    // ตั้งค่าปุ่ม
    langBtn.textContent = currentLang === "en" ? "TH" : "EN";

    langBtn.addEventListener("click", () => {
      localStorage.setItem("siteLang", targetLang);
      window.location.href = `/${targetLang}/${currentPage}`;
    });
  });
