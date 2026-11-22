(function () {
  const form = document.getElementById("admissionForm");
  const itemSelect = document.getElementById("itemSelection");
  const slipBox = document.getElementById("slipBox");
  const slipContent = document.getElementById("slipContent");
  const copySlipBtn = document.getElementById("copySlipBtn");
  const printSlipBtn = document.getElementById("printSlipBtn");

  // Preselect course from URL query (?course=...)
  const params = new URLSearchParams(window.location.search);
  const preselectedCourse = params.get("course");
  if (preselectedCourse && itemSelect) {
    const exists = Array.from(itemSelect.options).some((opt) => opt.value === preselectedCourse);
    if (exists) {
      itemSelect.value = preselectedCourse;
    }
  }

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const refCode = "ALIF-" + Math.floor(100000 + Math.random() * 900000);
    const requestType = document.getElementById("requestType").value;
    const item = document.getElementById("itemSelection").value;
    const fullName = document.getElementById("fullName").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim() || "N/A";
    const paymentMethod = document.getElementById("paymentMethod").value;
    const trxId = document.getElementById("trxId").value.trim() || "N/A";
    const notes = document.getElementById("notes").value.trim() || "None";

    slipContent.innerHTML = `
      <p><strong>Reference:</strong> ${refCode}</p>
      <p><strong>Type:</strong> ${requestType}</p>
      <p><strong>Selected:</strong> ${item}</p>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Payment:</strong> ${paymentMethod} (TrxID: ${trxId})</p>
      <p><strong>Notes:</strong> ${notes}</p>
      <p><strong>Center:</strong> ALIF IT CENTER, Gobarchapa Bazar, Badalgachhi, Naogaon (01610-003276)</p>
    `;

    slipBox.classList.remove("hidden");
    slipBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });

  if (copySlipBtn) {
    copySlipBtn.addEventListener("click", () => {
      const text = slipContent.innerText.trim();
      if (text && navigator.clipboard) {
        navigator.clipboard.writeText(text).catch(() => {});
      }
    });
  }

  if (printSlipBtn) {
    printSlipBtn.addEventListener("click", () => {
      window.print();
    });
  }
})();
