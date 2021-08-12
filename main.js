// only allow certain view to show based on what button we click

document.getElementById("home").addEventListener("click", toggleDisplay)
document.getElementById("about").addEventListener("click", toggleDisplay)
document.getElementById("portfolio").addEventListener("click", toggleDisplay)
document.getElementById("contact").addEventListener("click", toggleDisplay)

function toggleDisplay(event) {
	document.querySelectorAll(".tab").forEach((tab) => {
		tab.style.display = "none"
		if (tab.classList.contains(event.target.id) === true) {
			tab.style.display = "block"
		}
	})
}