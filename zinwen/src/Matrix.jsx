
// import React, { useEffect } from 'react';
// import './Matrix.css';

// import Intro from './Intro.jsx';
// import Nav from './Nav.jsx';


// //updates here 
// function Matrix() {



//     useEffect(() => {


//         const canvas = document.getElementById("matrix");
//         const ctx = canvas.getContext("2d");

//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;

//         const letters = "101000111110101010100110101101010101010";
//         const matrix = letters.split("");

//         const fontSize = 16;
//         const columns = canvas.width / fontSize;
        
//         const drops = [];
//         for (let i = 0; i < columns; i++) {
//             drops[i] = 1;
//         }
        
       

//         function draw() {
//             ctx.fillStyle = "rgba(0,0,0,0.1)";
//             ctx.fillRect(0, 0, canvas.width, canvas.height);

//             ctx.fillStyle = "rgba(0, 255, 0, 0.5)";
//             ctx.font = fontSize + "px monospace";

//             for (let i = 0; i < drops.length; i++) {
//                 const text = matrix[Math.floor(Math.random() * matrix.length)];
//                 ctx.fillText(text, i * fontSize, drops[i] * fontSize);

//                 if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
//                     drops[i] = 0;
//                 }

//                 drops[i]++;
//             }
//         }

//         function animate() {
//             draw();
//             requestAnimationFrame(animate);
//         }

//         animate();

//         window.addEventListener("resize", () => {
//             canvas.width = window.innerWidth;
//             canvas.height = window.innerHeight;
//         });

//         //mobile test
//         function resizeCanvas() {
//             canvas.width = window.innerWidth;
//             canvas.height = window.innerHeight;

//             const columns = Math.floor(canvas.width / fontSize);

//             drops.length = 0;
//             for (let i = 0; i < columns; i++) {
//                 drops[i] = 1;
//             }
//         }

//         window.addEventListener("resize", resizeCanvas);
//         window.addEventListener("orientationchange", resizeCanvas);

//         resizeCanvas();



//     }, []);





//     return (
//         <div className="intro-container">
//             <canvas id="matrix"></canvas>
//             <div className="content-overlay">
//                 {/*inserts here */}
//                 <Nav/>
//                 <Intro />
//             </div>
//         </div>
//     );
// }


// export default Matrix;

import React, { useLayoutEffect, useRef } from "react";
import "./Matrix.css";

import Intro from "./Intro.jsx";
import Nav from "./Nav.jsx";

function Matrix() {
    const canvasRef = useRef(null);

    useLayoutEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const letters = "101000111110101010100110101101010101010";
        const matrix = letters.split("");

        const fontSize = 16;

        let columns;
        let drops = [];

        const setup = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            columns = Math.floor(canvas.width / fontSize);

            // ✅ IMPORTANT FIX: randomize initial positions (prevents blocky start)
            drops = new Array(columns)
                .fill(0)
                .map(() => Math.random() * canvas.height / fontSize);

            // clear canvas immediately
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        };

        setup();

        const draw = () => {
            ctx.fillStyle = "rgba(0,0,0,0.08)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "rgba(0, 255, 0, 0.5)";
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = matrix[Math.floor(Math.random() * matrix.length)];

                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        };

        // ✅ IMPORTANT: first frame BEFORE animation loop (removes startup block)
        draw();

        const animate = () => {
            draw();
            requestAnimationFrame(animate);
        };

        const animationId = requestAnimationFrame(animate);

        const resize = () => {
            setup();
            draw(); // redraw immediately after resize
        };

        window.addEventListener("resize", resize);
        window.addEventListener("orientationchange", resize);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resize);
            window.removeEventListener("orientationchange", resize);
        };
    }, []);

    return (
        <div className="intro-container">
            <canvas ref={canvasRef} />

            <div className="content-overlay">
                <Nav />
                <Intro />
            </div>
        </div>
    );
}

export default Matrix;
