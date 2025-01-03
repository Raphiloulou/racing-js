function ex07() {
    const canvas = document.querySelector("footer > div > canvas");

    const pointsTriangle = [
        { x: 6, y: 6 },
        { x: 14, y: 10 },
        { x: 6, y: 14 }
    ];

    const audio = new Audio("./triangle.ogg");

    canvas.addEventListener("click", (event) => {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        if (InTriangle(x, y)) {
            audio.play();
        }
    });


window.onload = () => {
    ex07();
};
