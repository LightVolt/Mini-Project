import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

// อย่าลืมตรวจสอบชื่อไฟล์และ Path ของรูปภาพให้ถูกต้องนะครับ
import SakuraImage from './Pic/cherry blossom.png'; 

const Home = () => {
  return (
    // ครอบด้วย container ขนาดใหญ่และเว้นระยะตามสไตล์ Wix
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 transition-colors duration-500">
      
      {/* --- Section 1: Hero (Wix Style Split Layout) --- */}
      <section className="flex flex-col lg:flex-row items-center gap-12 mb-32 pt-16">
        
        {/* ฝั่งรูปภาพ: ใส่รูป 3D Model หรือรูปตัวคุณศิริพงศ์ */}
        <div className="w-full lg:w-1/2">
          <div className="relative">
            {/* กล่องเส้นขอบ offset ที่เป็นลูกเล่นเฉพาะตัวแบบ Wix */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-brand-primary rounded-2xl"></div>
            
            {/* นำรูปภาพที่คุณส่งมาใส่ที่นี่ */}
            <img 
              src={SakuraImage} 
              alt="Sakura-Themed Portfolio Image" 
              className="relative z-10 rounded-2xl transition-all duration-700 shadow-2xl shadow-pink-100/30"
            />
            
            {/* ป้าย Label เล็กๆ เพิ่มความเป็นทางการ */}
            <div className="absolute -bottom-6 -right-6 bg-brand-primary p-6 rounded-2xl z-20 hidden md:block">
              <p className="text-white font-bold italic">Student of ECT</p>
            </div>
          </div>
        </div>

        {/* ฝั่งข้อความ: ใช้ Typography สไตล์นิตยสาร */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-brand-accent font-medium tracking-[0.2em] uppercase text-sm">Welcome to my portfolio</h2>
          <h1 className="text-6xl lg:text-8xl font-bold text-brand-text leading-tight">
            Siripong <br />
            {/* ใช้ font-serif และ italic ในบางส่วนเพื่อความพรีเมียม */}
            <span className="text-brand-primary font-serif italic font-normal">Kongsub</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
            ยินดีต้อนรับสู่ Portfolio ของ นายศิริพงศ์ คงทรัพย์ สาขา (ECT)
          </p>
          <div className="pt-6">
            <Link to="/projects" className="inline-flex items-center gap-4 group">
              <span className="w-12 h-12 rounded-full border border-brand-text flex items-center justify-center group-hover:bg-brand-text group-hover:text-white transition-all">
                <ArrowRight size={20} />
              </span>
              <span className="font-bold tracking-widest uppercase text-sm">ดูผลงาน</span>
            </Link>
          </div>
        </div>
      </section>

      {/* --- Section 2: Wix Grid Highlights (แบ่งครึ่งชัดเจน) --- */}
      <section className="border-t border-brand-primary/30 pt-20 pb-32">
        <div className="flex justify-between items-end mb-12">
          <h3 className="text-3xl font-bold text-brand-text">Quick Links <Sparkles className="inline text-yellow-400" /></h3>
        </div>

        {/* ใช้ Grid และ gap น้อยๆ เพื่อให้การ์ดดูเชื่อมต่อกัน */}
        <div className="grid md:grid-cols-3 gap-1">
          {/* Card 1: Resume */}
          <Link to="/Resume" className="group bg-white p-12 border border-gray-100 hover:bg-brand-secondary/20 transition-all relative overflow-hidden">
            {/* ใส่ตัวเลขขนาดใหญ่จางๆ เป็นดีไซน์ที่พบบ่อยใน Wix Portfolio ระดับพรีเมียม */}
            <h4 className="text-5xl font-serif italic text-brand-primary/30 absolute top-4 right-4 group-hover:text-brand-primary transition-colors">01</h4>
            <h5 className="text-xl font-bold mb-4">MY RESUME</h5>
            <p className="text-gray-400 text-sm">ประวัติ ทักษะด้าน Programming & AI และประสบการณ์</p>
          </Link>

          {/* Card 2: Transcript */}
          <Link to="/Transcript" className="group bg-white p-12 border border-gray-100 hover:bg-brand-secondary/20 transition-all relative overflow-hidden">
            <h4 className="text-5xl font-serif italic text-brand-primary/30 absolute top-4 right-4 group-hover:text-brand-primary transition-colors">02</h4>
            <h5 className="text-xl font-bold mb-4">TRANSCRIPT</h5>
            <p className="text-gray-400 text-sm">ผลการเรียนและวิชาที่เชี่ยวชาญในสายงาน ECT</p>
          </Link>

          {/* Card 3: 3D Projects (Inverted Color สไตล์ Wix) */}
          <Link to="/projects" className="group bg-brand-text p-12 text-white hover:bg-brand-accent transition-all relative overflow-hidden">
            <h4 className="text-5xl font-serif italic text-white/10 absolute top-4 right-4">03</h4>
            <h5 className="text-xl font-bold mb-4 text-white">MY WORKS</h5>
            <p className="text-white/60 text-sm">รวมผลงาน 3D Model, AI Projects และนวัตกรรมการศึกษาทั้งหมด</p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;