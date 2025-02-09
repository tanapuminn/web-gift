import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Message = () => {
    const navigate = useNavigate();
    const [click, setClick] = useState(false)
    return (
        <div className="flex items-center justify-center min-h-screen gradient-background">
            {!click ? (
                <div className="relative w-72 h-96 bg-pink-500 rounded-2xl shadow-lg flex flex-col items-center justify-center p-4">
                    {/* ข้อความด้านบน */}
                    <h2 className="text-white text-lg font-semibold">Happy Anniversary 4 Year!</h2>

                    {/* ปุ่มกด */}
                    <button className="mt-10 px-6 py-3 bg-white rounded-full shadow-md flex items-center space-x-2 hover:bg-pink-200 cursor-pointer transition-transform duration-200 ease-in-out transform hover:-translate-y-1 active:translate-y-0" onClick={() => setClick(true)}>
                        <span className="text-red-500 text-xl">❤️</span>
                        <span className="text-gray-700 font-medium">Send Love</span>
                    </button>

                    {/* ข้อความด้านล่าง */}
                    <p className="absolute bottom-4 text-white text-sm">❤️ With Love ❤️</p>

                    {/* สติกเกอร์ตกแต่ง */}
                    <div className="absolute top-4 left-4 text-lg">🌹</div>
                    <div className="absolute bottom-4 left-4 text-lg">🎁</div>
                    <div className="absolute top-2 right-4 text-lg">🎀</div>
                </div>
            ) : (
                <div className="relative w-72 h-96 bg-pink-500 rounded-2xl shadow-lg flex flex-col items-center justify-center p-4">
                    {/* ข้อความด้านบน */}
                    <h2 className="text-back bg-white rounded-2xl text-lg font-semibold">
                        "ผ่านมาอีก 1 ปี ปีนี้ก็เข้าปีที่ 4 แล้วนะขอบคุณที่ยังคอยอยู่ข้างๆกันเสมอนะ และก็อยากให้   
                        เรายังคงเติบโตไปด้วยกันอีกนานๆ นะครับ รักนะ ❤️"
                        <h2>（*＾-＾*）</h2>
                    </h2>
                    

                    {/* ปุ่มกด */}
                    <button className="mt-10 px-6 py-3 bg-white rounded-full shadow-md flex items-center space-x-2 hover:bg-pink-200 cursor-pointer transition-transform duration-200 ease-in-out transform hover:-translate-y-1 active:translate-y-0" onClick={() => navigate('/home')}>
                        <span className="text-red-500 text-xl">❌</span>
                        <span className="text-gray-700 font-medium">Back</span>
                    </button>

                    {/* ข้อความด้านล่าง */}
                    <p className="absolute bottom-4 text-white text-sm">❤️ With Love ❤️</p>

                    {/* สติกเกอร์ตกแต่ง */}
                    <div className="absolute top-4 left-4 text-lg">🌹</div>
                    <div className="absolute bottom-4 left-4 text-lg">🎁</div>
                    <div className="absolute top-2 right-4 text-lg">🎀</div>
                </div>
            )
            }
        </div>
    )
}

export default Message