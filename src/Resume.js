import React from 'react';
import resumePreview from './Pic/resume-preview.png'; 
import { Download, Mail, MapPin, Sparkles, Phone, ExternalLink } from 'lucide-react';

const Resume = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 transition-all duration-500">
      
      {/* Header ส่วนบน */}
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-4xl font-bold text-brand-text">My <span className="text-brand-primary font-serif italic">Resume</span></h1>
        <a 
          href="/Siripong_kongsub.pdf" 
          download 
          className="flex items-center gap-2 bg-brand-text text-white px-6 py-3 rounded-2xl hover:bg-brand-accent transition shadow-lg"
        >
          <Download size={20} /> Download PDF
        </a>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* คอลัมน์ซ้าย: Preview Card พร้อมปุ่มด้านล่าง */}
        <div className="w-full lg:w-1/3 space-y-8">
          
          <div className="relative group">
            {/* เส้นขอบตกแต่งด้านหลัง */}
            <div className="absolute -top-3 -left-3 w-full h-full border-2 border-brand-primary rounded-3xl"></div>
            
            {/* กล่องการ์ดหลัก */}
            <div className="relative z-10 bg-white p-4 rounded-3xl shadow-xl border border-brand-primary/10 overflow-hidden">
              
              {/* 1. ส่วนแสดงรูปภาพ (ไม่มีข้อความทับแล้ว) */}
              <div className="aspect-[1/1.4] relative rounded-2xl overflow-hidden bg-gray-50 mb-4">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-90 group-hover:opacity-100 transition-all duration-500"
                  style={{ backgroundImage: `url(${resumePreview})` }}
                ></div>
              </div>
              
              {/* 2. ส่วนปุ่มกดด้านล่างรูปภาพ เพื่อความสะดวกในการมองและใช้งาน */}
              <a 
                href="/Siripong_kongsub.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-3 bg-brand-bg text-brand-text border border-brand-primary/20 rounded-xl flex items-center justify-center gap-2 hover:bg-brand-accent hover:text-white hover:border-brand-accent transition-all duration-300 font-bold shadow-sm"
              >
                <ExternalLink size={18} />
                ดูไฟล์ต้นฉบับ
              </a>

            </div>
          </div>

          {/* ข้อมูลติดต่อ (ส่วนเดิม) */}
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-brand-primary/10">
            <h3 className="font-bold text-brand-text mb-6 border-b border-brand-primary/20 pb-2 uppercase tracking-wider text-sm">Contact</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-center gap-3"><Mail size={16} className="text-brand-primary" /> {`boomlee2014@gmail.com`}</li>
              <li className="flex items-center gap-3"><Phone size={16} className="text-brand-primary" /> {`098-495-3281`}</li>
              <li className="flex items-center gap-3"><MapPin size={16} className="text-brand-primary" /> Nonthaburi, Thailand</li>
            </ul>
          </div>
        </div>

        {/* คอลัมน์ขวา: รายละเอียด Resume (ส่วนเดิม) */}
        <div className="w-full lg:w-2/3 space-y-8 text-brand-text">
          <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-pink-100/10 border border-brand-primary/5">
            <h2 className="text-3xl font-bold mb-2">นายศิริพงศ์ คงทรัพย์</h2>
            <p className="text-brand-accent font-medium tracking-widest uppercase text-xs mb-10">Siripong Kongsub</p>

            <section className="mb-12">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3 uppercase tracking-tight">Education</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-brand-primary pl-6">
                  <h4 className="font-bold text-lg">Bachelor of Science in Electronics Computer Technology</h4>
                  <p className="text-sm text-brand-accent font-medium">KMUTNB | 2026 (GPA: 2.94)</p>
                </div>
                <div className="border-l-2 border-brand-primary/30 pl-6">
                  <h4 className="font-bold">Diploma in Information Technology</h4>
                  <p className="text-sm text-gray-500">Pongsawadi Technological College | 2023 (GPAX: 3.69)</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3 uppercase tracking-tight">Work Experience</h3>
              <div className="border-l-2 border-brand-primary pl-6">
                <h4 className="font-bold text-lg">Internship @ Pranangklao Hospital</h4>
                <p className="text-sm text-brand-accent mb-3">Dec 2023 - Feb 2024</p>
                <ul className="text-sm text-gray-600 space-y-1 list-disc ml-4">
                  <li>Repaired computers and printers</li>
                  <li>Computer programmed and system maintenance</li>
                </ul>
              </div>
            </section>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Resume;