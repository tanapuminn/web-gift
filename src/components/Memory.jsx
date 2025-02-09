import React, { useState } from 'react'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img6 from '../assets/img6.png'
import img7 from '../assets/img7.png'
import img8 from '../assets/img8.png'
import img9 from '../assets/img9.png'
import img10 from '../assets/img10.png'
import img11 from '../assets/img11.png'
import img12 from '../assets/img12.png'
import { useNavigate } from 'react-router-dom';

const Memory = () => {
    const images = [
        img12,
        img7,
        img8,
        img9,
        img10,
        img11,
        img6,
        img4,
        img3,
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };
    return (
        <div className="flex items-center justify-center min-h-screen gradient-background ">
            <div className="relative w-72 h-[500px] bg-[#ffafd1] rounded-[2rem] shadow-lg">
                {/* ข้อความด้านบน */}
                <p className="absolute mt-4 w-full text-center text-white font-bold text-lg">
                    "My memories with you."
                </p>

                {/* ภาพสไลด์ */}
                <div className="relative mt-12 w-full h-[70%] flex items-center justify-center">
                    <img
                        src={images[currentIndex]}
                        alt="Memory"
                        className="w-[85%] h-full rounded-2xl object-cover shadow-lg"
                    />
                    {/* ปุ่มเปลี่ยนรูป */}
                    <button
                        className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow-md hover:cursor-pointer"
                        onClick={nextSlide}
                    >
                        💞
                    </button>
                </div>

                {/* Pagination (จุดแสดงสถานะสไลด์) */}
                <div className="absolute bottom-10 flex justify-center w-full">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`h-2 w-2 mx-1 rounded-full ${index === currentIndex ? "bg-pink-500" : "bg-gray-300"
                                }`}
                        ></span>
                    ))}
                </div>

                {/* ปุ่ม Back to Menu ใต้จุดสไลด์ */}
                <div className="mt-4 absolute bottom-2 left-1/2 transform -translate-x-1/2">
                    <button
                        className="px-4 py-1 text-gray-600 bg-white border border-gray-300 rounded-full shadow-md text-sm hover:bg-pink-200 cursor-pointer transition-transform duration-200 ease-in-out transform hover:-translate-y-1 active:translate-y-0"
                        onClick={() => navigate('/home')}
                    >
                        Back to Menu
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Memory