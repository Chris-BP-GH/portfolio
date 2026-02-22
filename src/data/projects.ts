export interface BilingualText {
  th: string;
  en: string;
}

export interface Project {
  id: string;
  title: BilingualText;
  category: string;
  year: string;
  imagePlaceholder: string;
  description: BilingualText;
  highlights: { th: string[]; en: string[] };
  responsibilities: { th: string[]; en: string[] };
  result: BilingualText;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'smart-farm',
    title: {
      th: 'Smart Farm (ระบบโรงเรือนอัตโนมัติ)',
      en: 'Smart Farm (Hydroponics Automation System)'
    },
    category: 'Factory / Internal Systems',
    year: '2023',
    imagePlaceholder: 'bg-gradient-to-br from-green-900 to-emerald-800',
    description: {
      th: 'ออกแบบระบบคำนวณและตรวจสอบปริมาณสารอาหาร แสงสว่าง และสมดุลแร่ธาตุตามชนิดของพืชที่ปลูกแบบ Hydroponics พร้อมบูรณาการเซนเซอร์ร่วมกับระบบควบคุมเพื่อการปรับแต่งแบบเรียลไทม์และทำงานแบบอัตโนมัติเต็มรูปแบบ',
      en: 'Designed a comprehensive system to calculate and monitor nutrients, lighting, and mineral balance for various hydroponic plant species. Integrated sensors and control systems to enable real-time adjustments and full automation.'
    },
    highlights: {
      th: [
        'ระบบควบคุมอัตโนมัติสำหรับการปลูกพืชแบบ Hydroponics',
        'เซนเซอร์ตรวจวัดคุณภาพเรียลไทม์ (Real-time sensor monitoring)',
        'Dashboard สำหรับแสดงผลข้อมูลและสถานะสภาพแวดล้อม'
      ],
      en: [
        'Fully automated control system for hydroponics',
        'Real-time sensor monitoring for environmental metrics',
        'Interactive dashboard for data visualization and control'
      ]
    },
    responsibilities: {
      th: [
        'ออกแบบสถาปัตยกรรมระบบฮาร์ดแวร์และซอฟต์แวร์',
        'บูรณาการเซนเซอร์เข้ากับไมโครคอนโทรลเลอร์',
        'พัฒนาอัลกอริทึมในการควบคุมและปรับสมดุลแร่ธาตุอัจฉริยะ'
      ],
      en: [
        'Architected hardware and software systems',
        'Integrated environmental sensors with microcontrollers',
        'Developed intelligent algorithms for mineral balancing and control'
      ]
    },
    result: {
      th: 'เพิ่มความแม่นยำในการให้สารอาหารและลดการใช้แรงงานคนลงผ่านระบบอัตโนมัติ',
      en: 'Increased nutrient delivery precision and significantly reduced manual labor through automation.'
    },
    tags: ['sensors', 'control', 'automation', 'dashboard', 'hydroponics']
  },
  
  // ============================================
  // DEMO PLACEHOLDERS (Replace these with real projects later)
  // ============================================
  {
    id: 'demo-amr-fleet',
    title: { th: '[Demo] AMR Fleet Manager', en: '[Demo] AMR Fleet Manager' },
    category: 'Robotics / AMR',
    year: '2024',
    imagePlaceholder: 'bg-gradient-to-br from-indigo-900 to-purple-800',
    description: { th: 'ระบบจำลองการจัดการ Fleet หุ่นยนต์ AMR (Demo Placeholder)', en: 'Simulated AMR Fleet management system (Demo Placeholder)' },
    highlights: { th: ['ระบบ Demo', 'พร้อมใช้งาน'], en: ['Demo System', 'Ready to use'] },
    responsibilities: { th: ['จำลองการทำงาน'], en: ['Mock integration'] },
    result: { th: 'ตัวอย่างข้อมูล', en: 'Placeholder data' },
    tags: ['demo', 'amr', 'fleet']
  },
  {
    id: 'demo-pos-system',
    title: { th: '[Demo] ระบบ POS ร้านอาหาร', en: '[Demo] Restaurant POS System' },
    category: 'POS',
    year: '2023',
    imagePlaceholder: 'bg-gradient-to-br from-orange-900 to-amber-800',
    description: { th: 'ระบบจำลอง POS (Demo Placeholder)', en: 'Simulated POS System (Demo Placeholder)' },
    highlights: { th: ['ระบบ Demo', 'พร้อมใช้งาน'], en: ['Demo System', 'Ready to use'] },
    responsibilities: { th: ['จำลองการทำงาน'], en: ['Mock integration'] },
    result: { th: 'ตัวอย่างข้อมูล', en: 'Placeholder data' },
    tags: ['demo', 'pos']
  },
  {
    id: 'demo-health-app',
    title: { th: '[Demo] Mobile Health Tracker', en: '[Demo] Mobile Health Tracker' },
    category: 'Mobile App',
    year: '2024',
    imagePlaceholder: 'bg-gradient-to-br from-rose-900 to-red-800',
    description: { th: 'แอปมือถือจำลอง (Demo Placeholder)', en: 'Simulated Mobile App (Demo Placeholder)' },
    highlights: { th: ['ระบบ Demo', 'พร้อมใช้งาน'], en: ['Demo System', 'Ready to use'] },
    responsibilities: { th: ['จำลองการทำงาน'], en: ['Mock integration'] },
    result: { th: 'ตัวอย่างข้อมูล', en: 'Placeholder data' },
    tags: ['demo', 'mobile', 'health']
  },
  {
    id: 'demo-warehouse-system',
    title: { th: '[Demo] Warehouse DPS', en: '[Demo] Warehouse DPS' },
    category: 'Factory / Internal Systems',
    year: '2023',
    imagePlaceholder: 'bg-gradient-to-br from-blue-900 to-cyan-800',
    description: { th: 'ระบบคลังสินค้า Digital Picking (Demo Placeholder)', en: 'Digital Picking System (Demo Placeholder)' },
    highlights: { th: ['ระบบ Demo', 'พร้อมใช้งาน'], en: ['Demo System', 'Ready to use'] },
    responsibilities: { th: ['จำลองการทำงาน'], en: ['Mock integration'] },
    result: { th: 'ตัวอย่างข้อมูล', en: 'Placeholder data' },
    tags: ['demo', 'warehouse', 'dps']
  },
  {
    id: 'demo-corporate-web',
    title: { th: '[Demo] Corporate Dashboard Web', en: '[Demo] Corporate Dashboard Web' },
    category: 'Web App',
    year: '2022',
    imagePlaceholder: 'bg-gradient-to-br from-fuchsia-900 to-pink-800',
    description: { th: 'เว็บแดชบอร์ดองค์กร (Demo Placeholder)', en: 'Corporate Dashboard (Demo Placeholder)' },
    highlights: { th: ['ระบบ Demo', 'พร้อมใช้งาน'], en: ['Demo System', 'Ready to use'] },
    responsibilities: { th: ['จำลองการทำงาน'], en: ['Mock integration'] },
    result: { th: 'ตัวอย่างข้อมูล', en: 'Placeholder data' },
    tags: ['demo', 'web', 'dashboard']
  },
  {
    id: 'demo-inspection-bot',
    title: { th: '[Demo] Inspection Robot AI', en: '[Demo] Inspection Robot AI' },
    category: 'Robotics / AMR',
    year: '2024',
    imagePlaceholder: 'bg-gradient-to-br from-teal-900 to-green-800',
    description: { th: 'หุ่นยนต์ตรวจสอบคุณภาพ AI (Demo Placeholder)', en: 'AI Inspection Robot (Demo Placeholder)' },
    highlights: { th: ['ระบบ Demo', 'พร้อมใช้งาน'], en: ['Demo System', 'Ready to use'] },
    responsibilities: { th: ['จำลองการทำงาน'], en: ['Mock integration'] },
    result: { th: 'ตัวอย่างข้อมูล', en: 'Placeholder data' },
    tags: ['demo', 'robotics', 'ai']
  },
  {
    id: 'demo-ecommerce-app',
    title: { th: '[Demo] E-Commerce Backend', en: '[Demo] E-Commerce Backend' },
    category: 'Web App',
    year: '2023',
    imagePlaceholder: 'bg-gradient-to-br from-yellow-900 to-orange-800',
    description: { th: 'ระบบหลังบ้านแบบ Mico-service (Demo Placeholder)', en: 'Microservice backend (Demo Placeholder)' },
    highlights: { th: ['ระบบ Demo', 'พร้อมใช้งาน'], en: ['Demo System', 'Ready to use'] },
    responsibilities: { th: ['จำลองการทำงาน'], en: ['Mock integration'] },
    result: { th: 'ตัวอย่างข้อมูล', en: 'Placeholder data' },
    tags: ['demo', 'backend']
  }
];
