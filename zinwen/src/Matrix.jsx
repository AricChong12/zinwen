
import React, { useEffect } from 'react';
import './Matrix.css';

import Intro from './Intro.jsx';
import Nav from './Nav.jsx';

//updates here 
function Matrix() {



    useEffect(() => {
        /*  //old
        const canvas = document.getElementById('matrix');
        // Ensure canvas has black background for visibility
        canvas.style.background = 'black';
        const ctx = canvas.getContext('2d');

        let fontSize = 18;
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
                ctx.fillStyle = 'rgba(0, 255, 0, 0.5)';
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
        }; */


        const canvas = document.getElementById("matrix");
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const letters = "101000111110101010100110101101010101010";
        const matrix = letters.split("");

        const fontSize = 16;
        const columns = canvas.width / fontSize;

        const drops = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }

        function draw() {
            ctx.fillStyle = "rgba(0,0,0,0.1)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "rgba(0, 255, 0, 0.5)";
            ctx.font = fontSize + "px monospace";

            for (let i = 0; i < drops.length; i++) {
                const text = matrix[Math.floor(Math.random() * matrix.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        }

        function animate() {
            draw();
            requestAnimationFrame(animate);
        }

        animate();

        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });

        //mobile test
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            const columns = Math.floor(canvas.width / fontSize);

            drops.length = 0;
            for (let i = 0; i < columns; i++) {
                drops[i] = 1;
            }
        }

        window.addEventListener("resize", resizeCanvas);
        window.addEventListener("orientationchange", resizeCanvas);

        resizeCanvas();



    }, []);





    return (
        <div className="intro-container">
            <canvas id="matrix"></canvas>
            <div className="content-overlay">
                {/*inserts here */}
                <Nav/>
                <Intro />
            </div>
        </div>
    );
}

export default Matrix;
