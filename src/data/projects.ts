export interface Project {
    id: string;
    title: string;
    description: string;
    category: 'Robotics / AMR' | 'Web App' | 'Mobile App' | 'Factory / Internal Systems' | 'POS' | 'Other';
    tags: string[];
    year: string;
    demoUrl?: string;
    githubUrl?: string;
    imagePlaceholder: string;
    highlights: string[];
    responsibilities: string[];
    result: string;
}

export const projects: Project[] = [
    {
        id: 'amr-fleet-manager',
        title: 'AMR Fleet Manager',
        description: 'A centralized dashboard to monitor and orchestrate an entire fleet of automated mobile robots in real-time.',
        category: 'Robotics / AMR',
        tags: ['ROS2', 'React', 'Node.js', 'WebSockets'],
        year: '2023',
        demoUrl: '#',
        githubUrl: '#',
        imagePlaceholder: 'bg-gradient-to-br from-indigo-900 to-purple-800',
        highlights: [
            'Real-time position tracking and path visualization',
            'Task assignment optimization algorithms',
            'Low-latency WebSocket communication'
        ],
        responsibilities: [
            'Architected the full-stack solution from ROS bridging to Web UI',
            'Implemented real-time data streaming and map rendering'
        ],
        result: 'Reduced robot conflict incidents by 40% and improved fleet efficiency.'
    },
    {
        id: 'factory-vision-inspection',
        title: 'Factory Vision Inspection System',
        description: 'Automated quality control system using computer vision to detect defects on a fast-moving production line.',
        category: 'Factory / Internal Systems',
        tags: ['Python', 'OpenCV', 'PyTorch', 'FastAPI'],
        year: '2022',
        demoUrl: '#',
        imagePlaceholder: 'bg-gradient-to-br from-blue-900 to-cyan-800',
        highlights: [
            'Sub-millisecond defect detection',
            'Integration with existing PLC systems',
            'High-throughput asynchronous API'
        ],
        responsibilities: [
            'Developed the core vision processing pipeline',
            'Deployed models at the edge using TensorRT'
        ],
        result: 'Increased defect detection rate to 99.8%.'
    },
    {
        id: 'cinematic-portfolio',
        title: 'Cinematic Developer Portfolio',
        description: 'A modern, responsive portfolio with scroll animations, starry background, and a responsive grid layout.',
        category: 'Web App',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
        year: '2024',
        demoUrl: '#',
        githubUrl: '#',
        imagePlaceholder: 'bg-gradient-to-br from-slate-900 to-black',
        highlights: [
            'Smooth scroll and intersection observer reveals',
            'Accessible focus-trapping modal',
            'Data-driven content'
        ],
        responsibilities: [
            'Designed and built the complete frontend',
            'Set up CI/CD with GitHub Actions'
        ],
        result: 'Created a reusable template for personal branding.'
    },
    {
        id: 'retail-pos-app',
        title: 'Modern Retail POS App',
        description: 'Tablet-first point of sale software enabling quick checkouts, inventory management, and reports.',
        category: 'POS',
        tags: ['React Native', 'Redux Toolkit', 'SQLite'],
        year: '2021',
        demoUrl: '#',
        imagePlaceholder: 'bg-gradient-to-br from-teal-900 to-emerald-800',
        highlights: [
            'Offline-first architecture with background sync',
            'Barcode scanner hardware integration',
            'Custom UI for fast-paced retail environments'
        ],
        responsibilities: [
            'Built cross-platform retail application',
            'Optimized local database queries'
        ],
        result: 'Deployed across 15 retail locations, reducing transaction times by 20%.'
    },
    {
        id: 'logistics-mobile-app',
        title: 'Logistics Driver App',
        description: 'Mobile companion app for delivery drivers with route optimization, signature capture, and status updates.',
        category: 'Mobile App',
        tags: ['Flutter', 'Dart', 'Firebase'],
        year: '2023',
        demoUrl: '#',
        imagePlaceholder: 'bg-gradient-to-br from-orange-900 to-amber-800',
        highlights: [
            'Turn-by-turn navigation integration',
            'Offline caching and signature capture',
            'Push notifications for real-time dispatch updates'
        ],
        responsibilities: [
            'Led mobile application development',
            'Integrated mapping and routing APIs'
        ],
        result: 'Adopted by 200+ active drivers.'
    },
    {
        id: 'event-ticketing-platform',
        title: 'Event Ticketing Web Platform',
        description: 'High-availability ticketing platform supporting massive traffic spikes during popular event sales.',
        category: 'Web App',
        tags: ['Next.js', 'PostgreSQL', 'Redis', 'AWS'],
        year: '2022',
        demoUrl: '#',
        githubUrl: '#',
        imagePlaceholder: 'bg-gradient-to-br from-pink-900 to-red-800',
        highlights: [
            'Robust queueing system for fair ticket allocation',
            'Dynamic seat selection maps',
            'PCI-compliant payment integration'
        ],
        responsibilities: [
            'Architected the frontend seat selection interface',
            'Implemented caching strategies to handle load'
        ],
        result: 'Successfully handled 50,000 concurrent users during peak sales.'
    }
];
