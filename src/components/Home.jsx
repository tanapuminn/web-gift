import React, { useState } from 'react'
import PinField from "react-pin-field";
import './style/Home.css'
import Button from '@mui/material/Button';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import imgDay from '../assets/image7.gif'

const Home = () => {
    const [code, setCode] = useState("");
    const [key, setKey] = useState(0);
    const navigate = useNavigate();

    const handleConfirm = () => {
        if (code === '120221') {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Success",
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                navigate('/home');
            });
        } else {
            Swal.fire({
                title: "ลองนึกดูใหม่อีกทีซิ!",
                icon: "question",
                draggable: true
            }).then(() => {
                setCode(""); // รีเซ็ตค่า
                setKey(prevKey => prevKey + 1); // เปลี่ยน key เพื่อ force re-render
            });
        }
    };
    return (
        <div className="Pin home-container m-4">
            <div className="font-bold text-[#ff0000] text-2xl m-4">
                <h1>❤ Happy Aniversary ❤</h1>
            </div>
                <h2 className='text-[#ff0000] font-bold'>Special gift for you...</h2>
            <div className="font-bold text-white text-2xl m-4">
                <h1>Enter password</h1>
            </div>
            <PinField
                key={key}
                className="field-a"
                type='password'
                onChange={setCode}
                length={6}
                onComplete={handleConfirm}
                format={k => k.toUpperCase()}
                value={code}
            />
            <div className='flex justify-center m-4'>
                <img src={imgDay} alt="Cute kitten with flowers" className='w-fit' />
            </div>
        </div>
    )
}

export default Home