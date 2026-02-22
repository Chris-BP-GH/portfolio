export interface BilingualText {
  th: string;
  en: string;
}

export interface BilingualArray {
  th: string[];
  en: string[];
}

export interface Project {
  id: string;
  title: BilingualText;
  description: BilingualText;
  category: 'Robotics / AMR' | 'Web App' | 'Mobile App' | 'Factory / Internal Systems' | 'POS' | 'Other';
  tags: string[];
  year: string;
  demoUrl?: string;
  githubUrl?: string;
  imagePlaceholder: string;
  highlights: BilingualArray;
  responsibilities: BilingualArray;
  result: BilingualText;
}

export const projects: Project[] = [
  {
    id: 'amr-fleet-manager',
    title: { th: 'ระบบจัดการหุ่นยนต์ AMR', en: 'AMR Fleet Manager' },
    description: {
      th: 'แดชบอร์ดศูนย์กลางสำหรับตรวจสอบและมอบหมายคำสั่งให้กับหุ่นยนต์โลจิสติกส์แบบเรียลไทม์',
      en: 'A centralized dashboard to monitor and orchestrate an entire fleet of automated mobile robots in real-time.'
    },
    category: 'Robotics / AMR',
    tags: ['ROS2', 'React', 'Node.js', 'WebSockets'],
    year: '2023',
    demoUrl: '#',
    githubUrl: '#',
    imagePlaceholder: 'bg-gradient-to-br from-indigo-900 to-purple-800',
    highlights: {
      th: [
        'ติดตามตำแหน่งและจำลองเส้นทางแบบเรียลไทม์',
        'อัลกอริทึมเพิ่มประสิทธิภาพการแจกจ่ายงาน',
        'การสื่อสารความหน่วงต่ำผ่าน WebSockets'
      ],
      en: [
        'Real-time position tracking and path visualization',
        'Task assignment optimization algorithms',
        'Low-latency WebSocket communication'
      ]
    },
    responsibilities: {
      th: [
        'ออกแบบสถาปัตยกรรมตั้งแต่ชั้นกลาง (ROS Bridge) ถึง Web UI',
        'พัฒนาระบบสตรีมมิ่งข้อมูลและเรนเดอร์แผนที่'
      ],
      en: [
        'Architected the full-stack solution from ROS bridging to Web UI',
        'Implemented real-time data streaming and map rendering'
      ]
    },
    result: {
      th: 'ลดปัญหาหุ่นยนต์ชนกันได้ถึง 40% และเพิ่มประสิทธิภาพของระบบโลจิสติกส์โดยรวม',
      en: 'Reduced robot conflict incidents by 40% and improved fleet efficiency.'
    }
  },
  {
    id: 'factory-vision-inspection',
    title: { th: 'ระบบตรวจสอบคุณภาพสินค้าอัตโนมัติ', en: 'Factory Vision Inspection System' },
    description: {
      th: 'ระบบตรวจสอบความผิดปกติของชิ้นงานบนสายพานผลิตด้วยกล้องอุตสาหกรรมและ Computer Vision',
      en: 'Automated quality control system using computer vision to detect defects on a fast-moving production line.'
    },
    category: 'Factory / Internal Systems',
    tags: ['Python', 'OpenCV', 'PyTorch', 'FastAPI'],
    year: '2022',
    demoUrl: '#',
    imagePlaceholder: 'bg-gradient-to-br from-blue-900 to-cyan-800',
    highlights: {
      th: [
        'ตรวจจับข้อบกพร่องในระดับเสี้ยววินาที',
        'เชื่อมต่อสัญญาณกับระบบ PLC เดิมของโรงงาน',
        'API ประสิทธิภาพสูงเพื่อรองรับงานปริมาณมหาศาล'
      ],
      en: [
        'Sub-millisecond defect detection',
        'Integration with existing PLC systems',
        'High-throughput asynchronous API'
      ]
    },
    responsibilities: {
      th: [
        'พัฒนาระบบประมวลผลข้อมูลภาพถ่ายหลัก',
        'นำโมเดลปรับใช้กับการทำงานที่ขอบ (Edge computing) ด้วย TensorRT'
      ],
      en: [
        'Developed the core vision processing pipeline',
        'Deployed models at the edge using TensorRT'
      ]
    },
    result: {
      th: 'เพิ่มความแม่นยำในการตรวจหาตำหนิได้ถึง 99.8%',
      en: 'Increased defect detection rate to 99.8%.'
    }
  },
  {
    id: 'cinematic-portfolio',
    title: { th: 'เว็บไซต์ Portfolio แนวภาพยนตร์', en: 'Cinematic Developer Portfolio' },
    description: {
      th: 'แฟ้มผลงานในรูปแบบ Web Application ที่มีการเคลื่อนไหวแบบ 60fps และธีมอวกาศ',
      en: 'A modern, responsive portfolio with scroll animations, starry background, and a responsive grid layout.'
    },
    category: 'Web App',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    year: '2024',
    demoUrl: '#',
    githubUrl: '#',
    imagePlaceholder: 'bg-gradient-to-br from-slate-900 to-black',
    highlights: {
      th: [
        'การเลื่อนหน้าผสานกับระบบ Intersection Observer',
        'โมดอลที่เข้าถึงง่าย (A11y) ควบคุมการกด tab อัตโนมัติ',
        'สามารถแก้ไขเนื้อหาทั้งหมดได้จากไฟล์ Data กลาง'
      ],
      en: [
        'Smooth scroll and intersection observer reveals',
        'Accessible focus-trapping modal',
        'Data-driven content'
      ]
    },
    responsibilities: {
      th: [
        'ออกแบบ UI/UX และพัฒนาส่วนหน้า (Frontend) ทั้งหมด',
        'ติดตั้งระบบ CI/CD บน GitHub Actions'
      ],
      en: [
        'Designed and built the complete frontend',
        'Set up CI/CD with GitHub Actions'
      ]
    },
    result: {
      th: 'สร้าง Template ต่อยอดง่ายสำหรับนำเสนอประวัติและผลงาน',
      en: 'Created a reusable template for personal branding.'
    }
  },
  {
    id: 'retail-pos-app',
    title: { th: 'ระบบ POS ร้านค้าปลีก', en: 'Modern Retail POS App' },
    description: {
      th: 'ระบบ Point-of-Sale สำหรับใช้งานผ่าน Tablet ช่วยจัดการสินค้าคงคลังและสรุปยอดขายอย่างรวดเร็ว',
      en: 'Tablet-first point of sale software enabling quick checkouts, inventory management, and reports.'
    },
    category: 'POS',
    tags: ['React Native', 'Redux Toolkit', 'SQLite'],
    year: '2021',
    demoUrl: '#',
    imagePlaceholder: 'bg-gradient-to-br from-teal-900 to-emerald-800',
    highlights: {
      th: [
        'ระบบสถาปัตยกรรมทำงานแบบออฟไลน์เป็นหลัก ซิงค์เมื่อมีเน็ตเวิร์ก',
        'เชื่อมต่อเครื่องอ่านบาร์โค้ดฮาร์ดแวร์ภายนอก',
        'สร้าง UI เพื่อรองรับการกดแบบรวดเร็วในร้านที่วุ่นวาย'
      ],
      en: [
        'Offline-first architecture with background sync',
        'Barcode scanner hardware integration',
        'Custom UI for fast-paced retail environments'
      ]
    },
    responsibilities: {
      th: [
        'สร้างแอปพลิเคชันหลักด้วย React Native',
        'ปรับปรุงประสิทธิภาพการ query ข้อมูลในเครื่อง'
      ],
      en: [
        'Built cross-platform retail application',
        'Optimized local database queries'
      ]
    },
    result: {
      th: 'นำไปใช้งานกว่า 15 สาขา ช่วยลดเวลาในการชำระเงินต่อคิวถึง 20%',
      en: 'Deployed across 15 retail locations, reducing transaction times by 20%.'
    }
  },
  {
    id: 'logistics-mobile-app',
    title: { th: 'แอปพลิเคชันจัดการคนขับพัสดุ', en: 'Logistics Driver App' },
    description: {
      th: 'แอปมือถือคู่หูสำหรับพนักงานขับรถส่งของ พร้อมระบบคำนวณเส้นทางและเซ็นรับของ',
      en: 'Mobile companion app for delivery drivers with route optimization, signature capture, and status updates.'
    },
    category: 'Mobile App',
    tags: ['Flutter', 'Dart', 'Firebase'],
    year: '2023',
    demoUrl: '#',
    imagePlaceholder: 'bg-gradient-to-br from-orange-900 to-amber-800',
    highlights: {
      th: [
        'เชื่อมต่อระบบแผนที่นำทางแบบ Turn-by-turn',
        'แคชข้อมูลแบบออฟไลน์และระบบเซ็นชื่อรับสินค้า',
        'Push notifications แจ้งเตือนสถานะงานใหม่จากศูนย์ควบคุม'
      ],
      en: [
        'Turn-by-turn navigation integration',
        'Offline caching and signature capture',
        'Push notifications for real-time dispatch updates'
      ]
    },
    responsibilities: {
      th: [
        'เป็นผู้นำทีมพัฒนาแอปพลิเคชันบนมือถือ',
        'เชื่อมต่อ API แผนที่และเส้นทางการจราจร'
      ],
      en: [
        'Led mobile application development',
        'Integrated mapping and routing APIs'
      ]
    },
    result: {
      th: 'พนักงานขับรถนำไปใช้งานประจำวันมากกว่า 200 คน',
      en: 'Adopted by 200+ active drivers.'
    }
  },
  {
    id: 'event-ticketing-platform',
    title: { th: 'แพลตฟอร์มจำหน่ายตั๋วอีเวนต์', en: 'Event Ticketing Web Platform' },
    description: {
      th: 'แพลตฟอร์มจองบัตรคิวประสิทธิภาพสูง รองรับทราฟฟิกพุ่งกระฉูดในเวลาที่มีอีเวนต์ยอดนิยม',
      en: 'High-availability ticketing platform supporting massive traffic spikes during popular event sales.'
    },
    category: 'Web App',
    tags: ['Next.js', 'PostgreSQL', 'Redis', 'AWS'],
    year: '2022',
    demoUrl: '#',
    githubUrl: '#',
    imagePlaceholder: 'bg-gradient-to-br from-pink-900 to-red-800',
    highlights: {
      th: [
        'ระบบคิวแบบรัดกุมยุติธรรม สำหรับจัดสรรตั๋วที่นั่ง',
        'แผนที่การเลือกที่นั่งแบบ Interactive และ Dynamic',
        'การชำระเงินที่สอดคล้องกับมาตรฐานความปลอดภัย PCI'
      ],
      en: [
        'Robust queueing system for fair ticket allocation',
        'Dynamic seat selection maps',
        'PCI-compliant payment integration'
      ]
    },
    responsibilities: {
      th: [
        'ออกแบบโครงสร้าง Frontend หน้าจอเลือกที่นั่ง',
        'ปรับปรุงกลยุทธ์ Caching เพื่อรองรับการทำงานช่วงผู้เยี่ยมชมหนาแน่น'
      ],
      en: [
        'Architected the frontend seat selection interface',
        'Implemented caching strategies to handle load'
      ]
    },
    result: {
      th: 'ประสบความสำเร็จในการรับรองผู้ใช้งาน 50,000 คนพร้อมกันในช่วงพีคสุด',
      en: 'Successfully handled 50,000 concurrent users during peak sales.'
    }
  }
];
