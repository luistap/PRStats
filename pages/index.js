// pages/index.js
import { useState, useEffect, useRef } from 'react';

export default function Home() {
    const [image, setImage] = useState(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        if (image) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            // Fit image within canvas size
            const scale = Math.min(canvas.parentElement.offsetWidth / image.width, canvas.parentElement.offsetHeight / image.height);
            const width = image.width * scale;
            const height = image.height * scale;
            canvas.width = width;
            canvas.height = height;
            ctx.clearRect(0, 0, width, height);
            ctx.drawImage(image, 0, 0, width, height);
        }
    }, [image]);

    const handleFileChange = event => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => {
                    setImage(img);
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <header className="flex justify-between items-center bg-charcoal p-4 text-white">
                <img src="/logo.png" alt="Logo" className="h-8" />
                <div>
                    <a href="https://youtube.com/yourchannel" className="mr-4">YouTube</a>
                    <a href="https://x.com/yourprofile">X</a>
                </div>
            </header>
            <div className="flex flex-1">
                <aside className="w-1/4 bg-gray-800 p-4 text-white">
                    <h2 className="text-lg mb-4">Match Details</h2>
                    <div className="mb-4">
                        <label className="block mb-2">Map</label>
                        <select className="w-full p-2">
                            <option>Kafe Dostoyevsky</option>
                            <option>Border</option>
                            <option>Clubhouse</option>
                            <option>Oregon</option>
                            <option>Skyscraper</option>
                            <option>Nighthaven Labs</option>
                            <option>Bank</option>
                            <option>Chalet</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Match Type</label>
                        <select className="w-full p-2">
                            <option>Seeding</option>
                            <option>Playoff - Regular</option>
                            <option>Playoff - Finals</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-2">Score</label>
                        <select className="w-full p-2">
                            <option>8-7</option>
                            <option>7-8</option>
                        </select>
                    </div>
                </aside>
                <main className="flex-1 flex items-center justify-center">
                    <canvas ref={canvasRef} className="max-w-full max-h-full border-4 border-gray-200"></canvas>
                </main>
            </div>
        </div>
    );
}
