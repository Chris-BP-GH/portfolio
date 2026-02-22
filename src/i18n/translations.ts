export type Language = 'th' | 'en';

export const translations = {
  nav: {
    home: { th: 'หน้าแรก', en: 'Home' },
    about: { th: 'เกี่ยวกับ', en: 'About' },
    projects: { th: 'ผลงาน', en: 'Projects' },
    experience: { th: 'ประสบการณ์', en: 'Experience' },
    skills: { th: 'ทักษะ', en: 'Skills' },
    contact: { th: 'ติดต่อ', en: 'Contact' },
  },
  hero: {
    role: { th: 'นักพัฒนาซอฟต์แวร์', en: 'Developer' },
    subtitle: { 
      th: 'ผู้สร้างสรรค์ระบบตั้งแต่ Robotics/AMR, Web Apps, Mobile Apps, Factory Systems, POS ไปจนถึงซอฟต์แวร์เฉพาะทาง', 
      en: 'Dev who builds across Robotics/AMR, Web Apps, Mobile Apps, Factory Systems, POS, and custom software.' 
    },
    ctaProjects: { th: 'ดูผลงาน', en: 'Explore Work' },
    ctaContact: { th: 'ติดต่องาน', en: 'Contact Me' },
    scroll: { th: 'เลื่อนลง', en: 'Scroll' },
  },
  about: {
    titlePrefix: { th: 'ประวัติ', en: 'PROFILE' },
    title: { th: 'สำรวจพรมแดนใหม่ของซอฟต์แวร์.', en: 'Explore new frontiers in software.' },
    p1: {
      th: 'ผมเป็น Senior Frontend Engineer และ UI Motion Designer ที่หลงใหลในการสร้างสรรค์แอปพลิเคชันที่เชื่อมโยงโลกจริงและโลกดิจิทัลเข้าด้วยกัน ผลงานของผมครอบคลุมตั้งแต่ Full-stack Development, ระบบจัดการหุ่นยนต์ AMR, ระบบ POS สำหรับร้านค้า ไปจนถึงเว็บแพลตฟอร์มที่รองรับทุกอุปกรณ์',
      en: 'I am a senior frontend engineer and UI motion designer with a passion for building applications that span across the physical and digital worlds. My work covers full-stack development, robotic fleet management (AMR), point-of-sale systems, and responsive web platforms.'
    },
    p2: {
      th: 'ผมให้ความสำคัญกับการสร้างประสบการณ์ที่ลื่นไหลและดูเป็นมืออาชีพ (Cinematic UX) โดยไม่ลดทอนประสิทธิภาพหรือการเข้าถึง ไม่ว่าจะเป็นการจัดการเส้นทางหุ่นยนต์ในโรงงาน หรือการรังสรรค์พิกเซลบนหน้า Landing Page ผมสามารถทำให้ระบบมีชีวิตขึ้นมาได้',
      en: 'I focus on creating immersive, cinematic user experiences that don\'t compromise on performance or accessibility. Whether it\'s routing fleets of robots on a factory floor or crafting a pixel-perfect landing page, I bring systems to life.'
    },
    whatIBuild: { th: 'สิ่งที่ผมสร้าง', en: 'What I Build' },
    buildChips: {
      th: ['Robotics / AMR', 'เว็บแอปพลิเคชัน', 'แอปพลิเคชันมือถือ', 'ระบบโรงงาน', 'ระบบ POS', 'ซอฟต์แวร์เฉพาะทาง'],
      en: ['Robotics / AMR', 'Web Apps', 'Mobile Apps', 'Factory Systems', 'POS', 'Custom Software']
    },
    stats: {
      expLabel: { th: 'ปี ประสบการณ์', en: 'Years Exp' },
      projectsLabel: { th: 'ผลงาน', en: 'Projects' },
      deploymentsLabel: { th: 'การติดตั้งจริง', en: 'Deployments' },
      passionLabel: { th: 'ความหลงใหล', en: 'Passion' }
    }
  },
  projects: {
    titlePrefix: { th: 'ผลงานที่เลือกสรร', en: 'SELECTED WORK' },
    title: { th: 'ผลงานเด่น.', en: 'Featured Projects.' },
    filterAll: { th: 'ทั้งหมด', en: 'All' },
    noProjects: { th: 'ไม่พบผลงานในหมวดหมู่นี้', en: 'No projects found in this category.' },
    liveUrl: { th: 'ดูเว็บไซต์', en: 'Live' },
    source: { th: 'ซอร์สโค้ด', en: 'Source' },
    highlights: { th: 'จุดเด่น', en: 'Highlights' },
    responsibilities: { th: 'ความรับผิดชอบ', en: 'Responsibilities' },
    result: { th: 'ผลลัพธ์ / ผลกระทบ', en: 'Result / Impact' }
  },
  experience: {
    titlePrefix: { th: 'ประวัติการทำงาน', en: 'TIMELINE' },
    title: { th: 'ประสบการณ์.', en: 'Experience.' },
    timeline: {
      th: [
        {
          period: '2021 — ปัจจุบัน',
          role: 'Senior Frontend Engineer',
          company: 'Logitics & Robotics Co',
          summary: 'นำทีมพัฒนา Frontend สำหรับระบบจัดการ fleet หุ่นยนต์ AMR และระบบภายในโรงงาน',
          bullets: [
            'ออกแบบสถาปัตยกรรมแอปพลิเคชัน React ข้ามแพลตฟอร์มสำหรับหุ่นยนต์ AMR กว่า 50 ตัว',
            'ลดระยะเวลาการโหลดทรัพยากรลง 40% ผ่านการสตรีม WebSocket ที่ปรับแต่งมาอย่างดี',
            'เป็นที่ปรึกษา (Mentor) ให้กับนักพัฒนาจูเนียร์ 4 คน ในด้าน React และ TypeScript'
          ]
        },
        {
          period: '2018 — 2021',
          role: 'Full Stack Engineer',
          company: 'Retail Solutions Inc',
          summary: 'พัฒนาซอฟต์แวร์ Point-of-Sale และแอปพลิเคชันมือถือสำหรับเครือข่ายร้านค้ารายย่อย',
          bullets: [
            'สร้างระบบ POS ที่เน้นแท็บเล็ตเป็นหลักด้วย React Native และ Redux',
            'พัฒนาระบบซิงค์ข้อมูลแบบ offline-first โดยใช้ SQLite',
            'ออกแบบไลบรารีโค้ด UI แบบคัสตอมที่ถูกนำไปใช้ใน 3 ผลิตภัณฑ์ที่แตกต่างกัน'
          ]
        },
        {
          period: '2015 — 2018',
          role: 'Software Developer',
          company: 'Creative Tech Agency',
          summary: 'สร้าง Landing Pages, ผลิตภัณฑ์ SaaS เฉพาะทาง และประสบการณ์เว็บแบบอินเตอร์แอกทีฟ',
          bullets: [
            'ส่งมอบเว็บแอปพลิเคชันที่ตอบสนองทุกอุปกรณ์กว่า 20 โปรเจกต์ ให้กับลูกค้าองค์กร',
            'สร้างแอนิเมชัน CSS/JS เฉพาะทางสำหรับแคมเปญการตลาดแบรนด์ชั้นนำ',
            'เชื่อมต่อ API บุคคลที่สาม (Third-party) มากมาย รวมถึง Stripe และ SendGrid'
          ]
        }
      ],
      en: [
        {
          period: '2021 — PRESENT',
          role: 'Senior Frontend Engineer',
          company: 'Logitics & Robotics Co',
          summary: 'Lead frontend development for AMR fleet management and internal factory systems.',
          bullets: [
            'Architected cross-platform React application for 50+ AMR robots.',
            'Reduced loading times by 40% through optimized WebSocket streaming.',
            'Mentored a team of 4 junior developers in React and TypeScript best practices.'
          ]
        },
        {
          period: '2018 — 2021',
          role: 'Full Stack Engineer',
          company: 'Retail Solutions Inc',
          summary: 'Developed Point-of-Sale software and mobile apps for retail chains.',
          bullets: [
            'Built a tablet-first POS system using React Native and Redux.',
            'Implemented offline-first sync engine using SQLite.',
            'Designed a custom UI component library used across 3 distinct products.'
          ]
        },
        {
          period: '2015 — 2018',
          role: 'Software Developer',
          company: 'Creative Tech Agency',
          summary: 'Created landing pages, custom SaaS products, and interactive web experiences.',
          bullets: [
            'Delivered 20+ responsive web applications for various enterprise clients.',
            'Created bespoke CSS/JS animations for high-profile marketing campaigns.',
            'Integrated multiple third-party APIs including Stripe and SendGrid.'
          ]
        }
      ]
    }
  },
  skills: {
    titlePrefix: { th: 'ทักษะความสามารถ', en: 'SKILLS' },
    title: { th: 'ความเชี่ยวชาญหลัก.', en: 'Core Capabilities.' },
    categories: {
      th: [
        {
          title: 'วิทยาการหุ่นยนต์ (Robotics & AMR)',
          skills: ['ROS / ROS2', 'C++', 'Python', 'Navigation Stack', 'Sensor Fusion', 'LiDAR / Vision', 'DDS (FastDDS)']
        },
        {
          title: 'พัฒนาส่วนหน้า (Frontend Engineering)',
          skills: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js / WebGL', 'Redux Toolkit']
        },
        {
          title: 'ระบบหลังบ้านและ API (Backend & APIs)',
          skills: ['Node.js', 'FastAPI', 'Python', 'PostgreSQL', 'Redis', 'WebSockets', 'GraphQL']
        },
        {
          title: 'โครงสร้างพื้นฐาน (Infra & DevOps)',
          skills: ['Docker / Compose', 'Linux (Ubuntu)', 'Nginx', 'GitHub Actions', 'AWS Essentials', 'Bash Scripting']
        }
      ],
      en: [
        {
          title: 'Robotics & AMR',
          skills: ['ROS / ROS2', 'C++', 'Python', 'Navigation Stack', 'Sensor Fusion', 'LiDAR / Vision', 'DDS (FastDDS)']
        },
        {
          title: 'Frontend Engineering',
          skills: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js / WebGL', 'Redux Toolkit']
        },
        {
          title: 'Backend & APIs',
          skills: ['Node.js', 'FastAPI', 'Python', 'PostgreSQL', 'Redis', 'WebSockets', 'GraphQL']
        },
        {
          title: 'Infra & DevOps',
          skills: ['Docker / Compose', 'Linux (Ubuntu)', 'Nginx', 'GitHub Actions', 'AWS Essentials', 'Bash Scripting']
        }
      ]
    }
  },
  contact: {
    titlePrefix: { th: 'ก้าวต่อไป', en: 'NEXT STEPS' },
    title: { th: 'มาร่วมสร้างสรรค์ไปด้วยกัน.', en: 'Let\'s Build Together.' },
    subtitle: { 
      th: 'ไม่ว่าคุณจะต้องการ Frontend ที่ตอบสนองเยี่ยม, Dashboard ควบคุม AMR หรือสถาปัตยกรรมระบบเต็มรูปแบบ—กล่องข้อความของผมเปิดกว้างเสมอ', 
      en: 'Whether you need a dynamic frontend, an AMR control dashboard, or a complete system architecture—my inbox is always open.' 
    },
    sendEmail: { th: 'ส่งอีเมล', en: 'SEND EMAIL' },
    copyEmail: { th: 'คัดลอกอีเมล', en: 'COPY EMAIL' },
    copied: { th: 'คัดลอกแล้ว!', en: 'COPIED!' }
  }
};

type NestedKeyOf<ObjectType extends object> = 
  {[Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
  ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
  : `${Key}`
}[keyof ObjectType & (string | number)];

export type TranslationKey = NestedKeyOf<typeof translations>;
