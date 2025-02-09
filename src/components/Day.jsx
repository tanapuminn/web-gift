import React, { useState, useEffect } from 'react'
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';
import Button from '@mui/material/Button';
// import imgDay from '../assets/image7.gif'
import imgDay from '../assets/img1.png'

const Day = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [showYearMonth, setShowYearMonth] = useState(false);
    const [showDays, setShowDays] = useState(false);
    const [showTime, setShowTime] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 100); // Delay ให้ดูนุ่มนวล
        setTimeout(() => setShowYearMonth(true), 500);
        setTimeout(() => setShowDays(true), 1000);
        setTimeout(() => setShowTime(true), 1500);
    }, []);

    const getYearMonthElapsed = (dateString) => {
        const [day, month, year] = dateString.split("/").map(Number);
        const givenDate = new Date(year, month - 1, day);
        const now = new Date();

        let years = now.getFullYear() - givenDate.getFullYear();
        let months = now.getMonth() - givenDate.getMonth();

        if (months < 0) {
            years--;
            months += 12;
        }

        return `${years} ปี ${months} เดือน`;
    };

    const getTimeElapsed = (dateString) => {
        // แปลงวันที่ที่รับมาเป็น Date Object
        const [day, month, year] = dateString.split("/").map(Number);
        const givenDate = new Date(year, month - 1, day); // month - 1 เพราะ JS ใช้ index 0-11

        // วันที่ปัจจุบัน
        const now = new Date();

        // คำนวณเวลาที่ผ่านไปใน milliseconds
        const timeDiff = now - givenDate;

        // แปลง milliseconds เป็น วัน ชั่วโมง และนาที
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        return `${days} วัน ${hours} ชั่วโมง ${minutes} นาที ${seconds} วินาที`;
    };

    return (
        <div className={`p-4 gradient-background transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="font-bold text-black text-2xl m-4">
                <h2>เราคบกันนานแค่ไหนแล้วน้าาา</h2>
            </div>
            <div className="flex justify-center">
                <img src={imgDay} alt="Cute kitten with flowers" className="object-cover" />
            </div>
            <div className="mt-4 mb-5 p-2 rounded-xl bg-[#ffdfed] hover:shadow-lg">
                <p className={`text-2xl font-bold text-[#ff0037] transition-opacity duration-700 ${showYearMonth ? "opacity-100" : "opacity-0"}`}>
                    {getYearMonthElapsed("12/02/2021")}
                </p>
                <p className={`text-xl font-semibold text-[#ff006a] transition-opacity duration-700 ${showDays ? "opacity-100" : "opacity-0"}`}>
                    {getTimeElapsed("12/02/2021").split(" ")[0]} วัน
                </p>
                <p className={`text-lg font-medium text-[#ff006a] transition-opacity duration-700 ${showTime ? "opacity-100" : "opacity-0"}`}>
                    {getTimeElapsed("12/02/2021").split(" ").slice(2).join(" ")}
                </p>
            </div>
            <div className="mb-4">
                <Button href="/home" variant="contained" startIcon={<ReplyRoundedIcon />}>
                    Back
                </Button>
            </div>
        </div>
    )
}

export default Day