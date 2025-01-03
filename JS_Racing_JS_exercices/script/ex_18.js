function ex18() {
    const drop = document.querySelector(".drag_drop");

    drop.addEventListener("dragover", (event) => {
        event.preventDefault();
    });

    drop.addEventListener("drop", (event) => {
        event.preventDefault();

        const files = event.dataTransfer.files;
        if (files.length > 0) {
            const file = files[0];
            if (file.type.startsWith("image/")) {
                const reader = new FileReader();

                reader.onload = (e) => {
                    const img = document.createElement("img");
                    img.src = e.target.result;
                    img.style.maxWidth = "100%";
                    img.style.maxHeight = "100%";

                    drop.innerHTML = "";
                    drop.appendChild(img);
                };

                reader.readAsDataURL(file);
            } else {
                alert("Met une image valide");
            }
        }
    });
}

window.onload = () => {
    ex18();
};
