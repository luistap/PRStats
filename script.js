document.addEventListener("DOMContentLoaded", function() {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let rectangles = [];
    let currentRect = null;
    let drag = false;
    let imageLoaded = false;
    let image = new Image();

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        if (imageLoaded) {
            ctx.fillStyle = "#FFFFFF"; // Set color to solid white
            rectangles.forEach(rect => {
                ctx.fillRect(rect.startX, rect.startY, rect.w, rect.h);
            });
            if (currentRect) {
                ctx.fillRect(currentRect.startX, currentRect.startY, currentRect.w, currentRect.h);
            }
        }
    }

    function mouseDown(e) {
        currentRect = {
            startX: e.pageX - canvas.offsetLeft,
            startY: e.pageY - canvas.offsetTop,
            w: 0,
            h: 0
        };
        drag = true;
    }

    function mouseUp() {
        if (currentRect) {
            rectangles.push(currentRect); // Save the rectangle
            currentRect = null; // Reset current rectangle
        }
        drag = false;
        draw(); // Redraw all rectangles
    }

    function mouseMove(e) {
        if (drag && imageLoaded && currentRect) {
            currentRect.w = (e.pageX - canvas.offsetLeft) - currentRect.startX;
            currentRect.h = (e.pageY - canvas.offsetTop) - currentRect.startY;
            draw();
        }
    }

    document.getElementById('upload').addEventListener('change', function(e) {
        const reader = new FileReader();
        reader.onload = function(event) {
            image.onload = function() {
                canvas.width = image.width;
                canvas.height = image.height;
                imageLoaded = true;
                rectangles = []; // Reset rectangles list on new image load
                draw();
            };
            image.src = event.target.result;
        };
        reader.readAsDataURL(e.target.files[0]);
    });

    canvas.addEventListener('mousedown', mouseDown, false);
    canvas.addEventListener('mouseup', mouseUp, false);
    canvas.addEventListener('mousemove', mouseMove, false);
});
