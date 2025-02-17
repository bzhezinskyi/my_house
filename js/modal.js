const modals = document.querySelectorAll("[data-modal]");

modals.forEach((trigger) => {
  trigger.addEventListener("click", (e) => {
    e.preventDefault();
    const modal = document.getElementById(trigger.dataset.modal);
    if (trigger.tagName === "IMG") {
      modal.children[0].children[0].src = trigger.src;
    }
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
      exit.addEventListener("click", () => {
        modal.classList.remove("open");
        document.body.classList.remove("modal-open");

        document.removeEventListener("keydown", escapeKayDown);
      });
    });
  });
});
