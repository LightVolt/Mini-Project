import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import รูปภาพโปรเจกต์ของคุณจากโฟลเดอร์ src
import Project1Img from './Pic/flutter-login.png';

const Projects = () => {
    const projectList = [
        {
            id: 1,
            title: "Flutter Project",
            description: "Mobile app development by Flutter",
            image: Project1Img,
            link: "/project1detail"
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 transition-all duration-500">

            <header className="mb-20">
                <h1 className="text-5xl font-bold text-brand-text mb-4">
                    My <span className="text-brand-primary font-serif italic">Projects</span>
                </h1>
                <p className="text-gray-500 max-w-2xl leading-relaxed">
                    รวบรวมผลงานนวัตกรรมและการออกแบบที่สร้างสรรค์ขึ้นระหว่างการศึกษาในสาขา ECT
                </p>
            </header>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-20">
                {projectList.map((project) => (
                    <div key={project.id} className="group cursor-pointer">

                        {/* แก้ไขส่วนกรอบรูปภาพให้พอดี (Contain) และมีพื้นหลังจางๆ */}
                        <div className="relative overflow-hidden rounded-2xl mb-8 aspect-video shadow-xl shadow-pink-100/20 bg-white/50 border border-brand-primary/5">

                            {/* Overlay สีชมพูจางๆ สไตล์ซากุระ */}
                            <div className="absolute inset-0 bg-brand-primary/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>

                            <img
                                src={project.image}
                                alt={project.title}

                                className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-700 ease-out relative z-0"
                            />

                            {/* ปุ่มดูรายละเอียดเวลา Hover */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 bg-brand-text/20 backdrop-blur-[2px]">
                                <Link
                                    to={project.link}
                                    className="bg-white text-brand-text px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-brand-accent hover:text-white transition-all shadow-2xl"
                                >
                                    <ExternalLink size={18} /> View Case Study
                                </Link>
                            </div>
                        </div>

                        <div className="text-center space-y-3 px-4">
                            <h2 className="text-3xl font-serif text-brand-text group-hover:text-brand-accent transition-colors uppercase tracking-tight">
                                {project.title}
                            </h2>
                            <p className="text-gray-500 leading-relaxed text-sm lg:text-base italic">
                                {project.description}
                            </p>
                            <div className="w-12 h-[1px] bg-brand-primary/40 mx-auto mt-4"></div>
                        </div>
                    </div>
                ))}
            </div>

            <footer className="mt-40 text-center border-t border-brand-primary/20 pt-20 pb-10">
                <h3 className="text-2xl font-bold text-brand-text mb-6">มีโปรเจกต์ที่น่าสนใจอยากคุยกับผม</h3>
                <p className="text-gray-500 mb-10">สามารถติดต่อผมได้ผ่านช่องทางในหน้า Resume ครับ</p>
                <div className="flex justify-center gap-4">
                    <Sparkles className="text-yellow-400" />
                    <Sparkles className="text-brand-primary" />
                </div>
            </footer>
        </div>
    );
};

export default Projects;