const modals = document.querySelectorAll("[data-modal]");

modals.forEach((trigger) => {
  trigger.addEventListener("click", (e) => {
    e.preventDefault();
    const modal = document.getElementById(trigger.dataset.modal);

    modal.classList.add("open");
    document.body.classList.add("modal-open");

    const exits = modal.querySelectorAll(".modal-exit");

    const escapeKayDown = (e) => {
      if (e.key === "Escape") {
        modal.classList.remove("open");
        document.body.classList.remove("modal-open");

        document.removeEventListener("keydown", escapeKayDown);
      }
    };

    document.addEventListener("keydown", escapeKayDown);

    exits.forEach((exit) => {
      exit.addEventListener("click", (e) => {
        e.preventDefault();

        modal.classList.remove("open");
        document.body.classList.remove("modal-open");

        document.removeEventListener("keydown", escapeKayDown);
      });
    });
  });
});
