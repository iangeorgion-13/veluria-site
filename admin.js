document.addEventListener("click", function (e) {
  if (e.target.classList.contains("approve")) {
    const row = e.target.closest("tr");
    const status = row.querySelector(".status");

    status.className = "status active";
    status.textContent = "Active";

    e.target.textContent = "Pause";
    e.target.className = "btn pause";
  }

  if (e.target.classList.contains("pause")) {
    const row = e.target.closest("tr");
    const status = row.querySelector(".status");

    status.className = "status paused";
    status.textContent = "Paused";

    e.target.textContent = "Resume";
    e.target.className = "btn resume";
  }

  if (e.target.classList.contains("resume")) {
    const row = e.target.closest("tr");
    const status = row.querySelector(".status");

    status.className = "status active";
    status.textContent = "Active";

    e.target.textContent = "Pause";
    e.target.className = "btn pause";
  }
});
document.addEventListener("click", function (e) {

  if (e.target.classList.contains("flag")) {
    const row = e.target.closest("tr");
    const status = row.querySelector(".status");

    status.className = "status pending";
    status.textContent = "Flagged";
  }

  if (e.target.classList.contains("remove")) {
    const row = e.target.closest("tr");
    const status = row.querySelector(".status");

    status.className = "status removed";
    status.textContent = "Removed";

    row.style.opacity = "0.4";
  }

});