import React from 'react';
// 1. Import รูปภาพพรีวิวใบเกรด (เตรียมไฟล์นี้ไว้ในโฟลเดอร์ src นะครับ)
import transcriptPreview from './Pic/transcript-preview.png'; 
import { Download, ExternalLink, Sparkles } from 'lucide-react';

const Transcript = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-center transition-all duration-500">
      
      {/* ส่วนหัว: หัวข้อและปุ่มดาวน์โหลด */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <div className="text-left">
          <h1 className="text-4xl font-bold text-brand-text mb-2">
            Academic <span className="text-brand-primary font-serif italic">Transcript</span>
          </h1>
          <p className="text-gray-500">ผลการเรียนระดับปริญญาตรี สาขา ECT (GPA: 2.94)</p>
        </div>
        
        {/* ปุ่มดาวน์โหลดไฟล์ PDF ต้นฉบับ */}
        <a 
          href={`${process.env.PUBLIC_URL}/Transcript.pdf`}
          target="_blank" 
          rel="noreferrer"
          download 
          className="flex items-center gap-2 bg-brand-text text-white px-8 py-4 rounded-2xl hover:bg-brand-accent transition shadow-lg font-bold"
        >
          <Download size={20} /> Download PDF
        </a>
      </div>

      {/* ส่วนแสดงพรีวิวใบเกรด */}
      <div className="max-w-2xl mx-auto relative group">
        {/* เส้นขอบตกแต่งด้านหลังสไตล์ Wix */}
        <div className="absolute -top-4 -right-4 w-full h-full border-2 border-brand-primary rounded-[2.5rem]"></div>
        
        <div className="relative z-10 bg-white p-6 rounded-[2.5rem] shadow-2xl shadow-pink-100/30 border border-brand-primary/10 overflow-hidden">
          
          {/* ส่วนรูปภาพพรีวิว: ปรับความชัดเจนตามที่คุณต้องการ */}
          <div className="aspect-[1/1.4] relative rounded-2xl overflow-hidden bg-brand-bg mb-6">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-90 group-hover:opacity-100 transition-all duration-500"
              style={{ backgroundImage: `url(${transcriptPreview})` }}
            ></div>
            
            {/* Overlay ตกแต่งเวลา Hover */}
            <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          </div>
          
          {/* ปุ่มสำหรับเปิดไฟล์ต้นฉบับเพื่อให้ดูได้ชัดเจนขึ้น */}
          <a 
            href="/Transcript.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full py-4 bg-brand-bg text-brand-text border border-brand-primary/20 rounded-xl flex items-center justify-center gap-2 hover:bg-brand-accent hover:text-white hover:border-brand-accent transition-all duration-300 font-bold shadow-sm"
          >
            <ExternalLink size={20} />
            เปิดดูไฟล์ต้นฉบับ (View Full Scale)
          </a>
        </div>
      </div>
    </div>
  );
};

export default Transcript;