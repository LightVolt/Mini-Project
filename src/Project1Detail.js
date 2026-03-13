import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Layout, User, MessageSquare, Heart, PlusSquare, ShieldCheck } from 'lucide-react';

// Import รูปภาพทั้งหมดที่คุณส่งมา
import LoginImg from './Project1-1/Login.png';
import SignupImg from './Project1-1/Signup.png';
import HomeImg from './Project1-1/Home.png';
import CommentImg from './Project1-1/Comment.png';
import AddPostImg from './Project1-1/addPost.png';
import FavoriteImg from './Project1-1/Favorite.png';
import AccountImg from './Project1-1/Account.png';

const Project1Detail = () => {
  const screenshots = [
    { img: HomeImg, title: "Home Feed", desc: "แสดงโพสต์ทั้งหมดในรูปแบบ Grid Card ที่สวยงาม", icon: <Layout /> },
    { img: LoginImg, title: "Login System", desc: "รองรับการเข้าสู่ระบบผ่าน Email และ OAuth ต่างๆ", icon: <ShieldCheck /> },
    { img: SignupImg, title: "Registration", desc: "ระบบสมัครสมาชิกใหม่สำหรับผู้ใช้งาน", icon: <User /> },
    { img: CommentImg, title: "Interaction", desc: "ระบบแสดงความคิดเห็นและพูดคุยใต้โพสต์", icon: <MessageSquare /> },
    { img: AddPostImg, title: "Content Creation", desc: "หน้าสร้างโพสต์ใหม่พร้อมระบุรายละเอียดและรูปภาพ", icon: <PlusSquare /> },
    { img: FavoriteImg, title: "Favorites", desc: "จัดเก็บโพสต์ที่ผู้ใช้งานชื่นชอบไว้ในที่เดียว", icon: <Heart /> },
    { img: AccountImg, title: "User Settings", desc: "จัดการโปรไฟล์ การแจ้งเตือน และความเป็นส่วนตัว", icon: <User /> },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 transition-all">
      {/* ส่วนหัวปุ่มย้อนกลับ */}
      <Link to="/projects" className="inline-flex items-center gap-2 text-brand-text hover:text-brand-accent mb-12 font-bold uppercase tracking-widest text-sm">
        <ArrowLeft size={20} /> Back to Projects
      </Link>

      {/* Project Hero Section */}
      <div className="grid lg:grid-cols-2 gap-16 mb-32 items-center">
        <div>
          <h1 className="text-6xl font-bold text-brand-text mb-6">
            Flutter <span className="text-brand-primary font-serif italic">Social App</span>
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed mb-8">
            แอปพลิเคชันกึ่งโซเชียลมีเดียที่พัฒนาด้วย Flutter สำหรับการแชร์รูปภาพและคอนเทนต์ 
            เน้นการออกแบบ UI ที่สะอาดตาและใช้งานง่าย (User-Friendly Design) 
            รองรับระบบฐานข้อมูลและการจัดการสถานะผู้ใช้งานอย่างสมบูรณ์
          </p>
          <div className="flex flex-wrap gap-3">
            {["Flutter", "Dart", "Firebase", "State Management", "UI/UX"].map(tag => (
              <span key={tag} className="bg-white border border-brand-primary/20 px-4 py-2 rounded-full text-xs font-bold text-brand-text shadow-sm">
                #{tag}
              </span>
            ))}
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -top-4 -left-4 w-full h-full border-2 border-brand-primary rounded-[2.5rem]"></div>
          <img src={HomeImg} alt="Hero" className="relative z-10 rounded-[2.5rem] shadow-2xl" />
        </div>
      </div>

      {/* ส่วน Gallery แสดงหน้าจอแอป */}
      <section className="space-y-20">
        <h2 className="text-3xl font-bold text-brand-text text-center mb-20">App <span className="text-brand-primary font-serif italic">Screenshots</span></h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {screenshots.map((item, index) => (
            <div key={index} className="space-y-6 group">
              <div className="bg-white p-4 rounded-[2rem] shadow-xl shadow-pink-100/20 border border-brand-primary/10 overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full aspect-[4/5] object-contain bg-gray-50 rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="px-4">
                <div className="flex items-center gap-3 text-brand-accent mb-2">
                  {item.icon}
                  <h3 className="text-xl font-bold text-brand-text">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Project1Detail;