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
            ctx.fillStyle = "rgba(255, 255, 255, 0.5)"; // Use semi-transparent white to fill rectangles
            rectangles.forEach(rect => {
                ctx.fillRect(rect.startX, rect.startY, rect.w, rect.h);
            });
            if (currentRect) {
                ctx.fillRect(currentRect.startX, currentRect.startY, currentRect.w, currentRect.h);
            }
        }
    }

    document.getElementById('upload').addEventListener('change', function(e) {
        const reader = new FileReader();
        reader.onload = function(event) {
            image.onload = function() {
                canvas.width = image.width;
                canvas.height = image.height;
                imageLoaded = true;
                rectangles = []; // Reset rectangles when a new image is loaded
                draw();
            };
            image.src = event.target.result;
        };
        reader.readAsDataURL(e.target.files[0]);
    });

    canvas.addEventListener('mousedown', mouseDown, false);
    canvas.addEventListener('mouseup', mouseUp, false);
    canvas.addEventListener('mousemove', mouseMove, false);

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
            rectangles.push(currentRect);
            currentRect = null;
        }
        drag = false;
        draw();
    }

    function mouseMove(e) {
        if (drag && imageLoaded && currentRect) {
            currentRect.w = (e.pageX - canvas.offsetLeft) - currentRect.startX;
            currentRect.h = (e.pageY - canvas.offsetTop) - currentRect.startY;
            draw();
        }
    }

    document.getElementById('submit').addEventListener('click', async function() {
        if (confirm('Are you sure you want to submit this image?')) {
            const formData = new FormData();
            const blobPromises = rectangles.map((rect, index) => new Promise(resolve => {
                const rectCanvas = document.createElement('canvas');
                rectCanvas.width = rect.w;
                rectCanvas.height = rect.h;
                const rectCtx = rectCanvas.getContext('2d');
                rectCtx.drawImage(canvas, rect.startX, rect.startY, rect.w, rect.h, 0, 0, rect.w, rect.h);
                rectCanvas.toBlob(blob => {
                    formData.append(`image${index}`, blob, `section${index}.png`);
                    resolve();
                }, 'image/png');
            }));

            Promise.all(blobPromises).then(() => {
                submitImage(formData);
            });
        }
    });

    async function submitImage(formData) {
        try {
            const response = await fetch('http://127.0.0.1:8000/upload/', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                console.log('Images successfully submitted!');
                const result = await response.json();
                alert('Images processed: ' + result.message);
            } else {
                console.error('Failed to submit images', response.statusText);
                alert('Error processing images: ' + response.statusText);
            }
        } catch (error) {
            console.error('Error submitting images:', error);
            alert('Network or server error.');
        }
    }
});
