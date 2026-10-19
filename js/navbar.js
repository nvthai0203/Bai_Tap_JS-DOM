const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".bai-content");
const activeClass = "bg-emerald-500";

navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.dataset.target;

        sections.forEach((section) => {
            section.classList.toggle("hidden", section.id !== targetId);
        });

        navLinks.forEach((item) => {
            const isActive = item.dataset.target === targetId;
            item.classList.toggle(activeClass, isActive);
            item.classList.toggle("text-white", isActive);
        });
    });
});
