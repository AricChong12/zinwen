
import React, { useEffect } from 'react';
import './Matrix.css';

import Intro from './Intro.jsx';

//updates here 
function Matrix() {

    useEffect(() => {
        const canvas = document.getElementById('matrix');
        // Ensure canvas has black background for visibility
        canvas.style.background = 'black';
        const ctx = canvas.getContext('2d');

        let fontSize = 25;
        let letters = '101000111110101010100110101101010101010'.split('');
        let columns, drops;

        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            //canvas.height = document.documentElement.scrollHeight;
            canvas.height = window.innerHeight;
            ctx.font = fontSize + "px monospace";
            columns = Math.floor(canvas.width / fontSize) + 1;
            drops = Array(columns).fill(1);
        };

        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);

        function draw() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < drops.length; i++) {
                const text = letters[Math.floor(Math.random() * letters.length)];
                //ctx.fillStyle = '#00FFFF';
                ctx.fillStyle = 'rgba(0, 255, 0, 0.2)';
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                drops[i]++;
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
                    drops[i] = 0;
                }
            }
        }

        const intervalId = setInterval(draw, 16);

        return () => {
            clearInterval(intervalId);
            window.removeEventListener('resize', setCanvasSize);
        };
    }, []);

    return (
        <div className="intro-container">
            <canvas id="matrix"></canvas>
            <div className="content-overlay">
                {/*inserts here */}
                <Intro />
            </div>
        </div>
    );
}

export default Matrix;
