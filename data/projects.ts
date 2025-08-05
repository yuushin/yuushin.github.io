export interface ProjectData {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  images: string[];
  video?: string;
  tags: string[];
  link: string;
  githubLink?: string;
  accentColor: string;
  timeline: string;
  team: string;
  role: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
}

export const projectsData: ProjectData[] = [
  {
    id: "fintech-mobile-app",
    title: "Financial Mobile App",
    description:
      "Complete mobile banking experience with intuitive money management features and real-time analytics.",
    longDescription:
      "A comprehensive mobile banking application that revolutionizes how users interact with their finances. Built with a focus on security, usability, and real-time data visualization.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=400&fit=crop",
    ],
    tags: ["Mobile", "Fintech", "React Native", "UI/UX"],
    link: "#",
    githubLink: "https://github.com",
    accentColor: "bg-gradient-primary",
    timeline: "6 months",
    team: "4 people",
    role: "Lead UI/UX Designer & Frontend Developer",
    challenge:
      "Traditional banking apps were complex and intimidating for users. The challenge was to create an intuitive interface that made financial management accessible while maintaining the highest security standards.",
    solution:
      "We designed a clean, gesture-based interface with clear visual hierarchy and implemented biometric authentication. The app features real-time spending analytics, budget tracking, and seamless money transfers with intuitive animations that guide users through complex financial operations.",
    results: [
      "40% increase in user engagement",
      "25% reduction in support tickets",
      "95% user satisfaction rating",
      "50% faster transaction completion",
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "Redux",
      "Figma",
      "Chart.js",
      "Biometric APIs",
    ],
  },
  {
    id: "ecommerce-dashboard",
    title: "E-commerce Dashboard",
    description:
      "Admin dashboard for online retailers with comprehensive analytics, inventory management, and customer insights.",
    longDescription:
      "A powerful admin dashboard that gives e-commerce businesses complete control over their operations, from inventory to customer analytics.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&h=400&fit=crop",
    ],
    tags: ["Dashboard", "E-commerce", "React", "Data Viz"],
    link: "#",
    githubLink: "https://github.com",
    accentColor: "bg-gradient-accent",
    timeline: "4 months",
    team: "6 people",
    role: "Senior UI Designer & Data Visualization Specialist",
    challenge:
      "E-commerce businesses needed a unified platform to manage inventory, track sales, and understand customer behavior across multiple channels. Existing solutions were fragmented and difficult to use.",
    solution:
      "Created a comprehensive dashboard with real-time analytics, automated inventory alerts, and customer segmentation tools. The interface prioritizes the most critical metrics while allowing deep dives into detailed reports through progressive disclosure.",
    results: [
      "60% improvement in inventory accuracy",
      "35% increase in operational efficiency",
      "Reduced time-to-insight by 70%",
      "99.9% uptime achieved",
    ],
    technologies: [
      "React",
      "D3.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Recharts",
    ],
  },
  {
    id: "healthcare-platform",
    title: "Healthcare Platform",
    description:
      "Patient management system with appointment scheduling, medical records, and telemedicine capabilities.",
    longDescription:
      "A comprehensive healthcare platform that streamlines patient care through digital appointment management, secure medical records, and integrated telemedicine features.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=600&h=400&fit=crop",
    ],
    tags: ["Healthcare", "Web App", "Vue.js", "Design System"],
    link: "#",
    accentColor: "bg-gradient-secondary",
    timeline: "8 months",
    team: "8 people",
    role: "Lead UX Designer & Design System Architect",
    challenge:
      "Healthcare providers struggled with fragmented systems that made patient management inefficient and error-prone. Compliance with healthcare regulations while maintaining usability was critical.",
    solution:
      "Developed a HIPAA-compliant platform with intuitive patient management, integrated scheduling, and secure telemedicine. Created a comprehensive design system that ensures consistency across all healthcare workflows while prioritizing accessibility.",
    results: [
      "45% reduction in administrative time",
      "85% patient satisfaction increase",
      "100% HIPAA compliance maintained",
      "30% improvement in appointment efficiency",
    ],
    technologies: [
      "Vue.js",
      "Vuetify",
      "WebRTC",
      "FHIR",
      "PostgreSQL",
      "Sketch",
    ],
  },
  {
    id: "ai-writing-assistant",
    title: "AI Writing Assistant",
    description:
      "Intelligent writing companion with grammar checking, style suggestions, and collaboration features.",
    longDescription:
      "An AI-powered writing assistant that helps users improve their writing through intelligent suggestions, real-time collaboration, and advanced grammar checking.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
    ],
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    tags: ["AI/ML", "SaaS", "Writing", "React"],
    link: "#",
    githubLink: "https://github.com",
    accentColor: "bg-gradient-primary",
    timeline: "10 months",
    team: "12 people",
    role: "Product Designer & AI/UX Researcher",
    challenge:
      "Writers needed intelligent assistance that could understand context and provide meaningful suggestions without interrupting their creative flow. The challenge was making AI suggestions feel natural and helpful rather than intrusive.",
    solution:
      "Designed an unobtrusive interface that provides contextual suggestions through subtle highlights and side panels. Implemented real-time collaboration features and created an AI feedback system that learns from user preferences to provide increasingly relevant suggestions.",
    results: [
      "70% improvement in writing efficiency",
      "90% user retention after 30 days",
      "50% reduction in editing time",
      "Featured in top productivity tools",
    ],
    technologies: [
      "React",
      "OpenAI API",
      "WebSockets",
      "MongoDB",
      "Python",
      "TensorFlow",
    ],
  },
  {
    id: "travel-planning-app",
    title: "Travel Planning App",
    description:
      "All-in-one travel companion with itinerary planning, booking management, and local recommendations.",
    longDescription:
      "A comprehensive travel planning application that combines itinerary management, booking coordination, and personalized local recommendations in one seamless experience.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1539650116574-75c0c6dee9d9?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    ],
    tags: ["Travel", "Mobile", "Maps", "Flutter"],
    link: "#",
    accentColor: "bg-gradient-accent",
    timeline: "7 months",
    team: "5 people",
    role: "Mobile UX Designer & Flutter Developer",
    challenge:
      "Travelers used multiple apps for planning, booking, and discovering local experiences. The fragmented experience led to missed opportunities and travel stress.",
    solution:
      "Created a unified platform that integrates trip planning, booking management, and location-based recommendations. Implemented offline capabilities and real-time sync to ensure travelers have access to their plans regardless of connectivity.",
    results: [
      "80% of users plan entire trips in app",
      "65% increase in user trip satisfaction",
      "40% growth in bookings through platform",
      "Top travel app in 3 countries",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Google Maps API",
      "Firebase",
      "REST APIs",
      "Figma",
    ],
  },
  {
    id: "koi-design-system",
    title: "Koi, Design System",
    description:
      "Comprehensive component library and design tokens for a major enterprise software company.",
    longDescription:
      "A scalable design system that standardizes design and development practices across multiple product teams at a Fortune 500 company.",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop",
    ],
    tags: [
      "Design System",
      "Figma",
      "Components",
      "Documentation",
    ],
    link: "#",
    accentColor: "bg-gradient-secondary",
    timeline: "12 months",
    team: "15 people",
    role: "Design System Lead & Component Architect",
    challenge:
      "The company had inconsistent design patterns across 20+ products, leading to poor user experiences and development inefficiencies. Teams were rebuilding similar components repeatedly.",
    solution:
      "Built a comprehensive design system with 150+ components, design tokens, and extensive documentation. Created automated testing and deployment pipelines to ensure consistency and implemented adoption tracking across all product teams.",
    results: [
      "90% faster component development",
      "75% reduction in design inconsistencies",
      "100% adoption across product teams",
      "Saved 200+ development hours monthly",
    ],
    technologies: [
      "Figma",
      "Storybook",
      "React",
      "SCSS",
    ],
  },
];

export function getProjectById(
  id: string,
): ProjectData | undefined {
  return projectsData.find((project) => project.id === id);
}

export function getAllProjects(): ProjectData[] {
  return projectsData;
}

export function getFeaturedProjects(
  limit: number = 4,
): ProjectData[] {
  return projectsData.slice(0, limit);
}

// Protected projects data (sensitive/confidential projects)
export const protectedProjectsData: ProjectData[] = [
  {
    id: "red-cloak",
    title: "Red Cloak TDR (Threat Detection & Response) ",
    description:
      "The launch of Red Cloak TDR identify malicious activity across endpoints, networks, and cloud environments.",
    longDescription:
      "A comprehensive redesign of a Fortune 500 bank's digital customer portal, focusing on modern security practices, improved accessibility, and streamlined financial workflows. This project involved extensive user research with high-net-worth clients and regulatory compliance considerations.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      //"img/F-22.jpeg",
    images: [
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=400&fit=crop",
    ],
    tags: [
      "Confidential",
      "Enterprise",
      "Banking",
      "Security",
      "Fintech",
    ],
    link: "#",
    accentColor: "bg-gradient-primary",
    timeline: "8 months",
    team: "Lead Designer + 3 developers + Compliance team",
    role: "Lead UX Designer & Security UX Specialist",
    challenge:
      "The existing banking platform had outdated security UX patterns that created friction while actual security vulnerabilities existed in the user flow. The bank needed to modernize without disrupting existing customer workflows or violating strict financial regulations.",
    solution:
      "Conducted extensive security UX audits and implemented progressive security measures that actually improved usability. Created a new information architecture that reduced customer support calls while increasing security compliance. All designs were validated through penetration testing and regulatory review.",
    results: [
      "78% reduction in security-related support calls",
      "45% improvement in task completion rates",
      "100% regulatory compliance maintained",
      "Zero security incidents post-launch",
      "35% increase in digital channel usage",
    ],
    technologies: [
      "Figma",
      "Principle",
      "Compliance Tools",
      "Security Testing",
      "React",
      "Multi-factor Auth",
    ],
  },
  {
    id: "stealth-startup",
    title: "AI Healthcare Platform",
    description:
      "Product design for a stealth-mode healthcare startup developing AI-powered diagnostic tools. Currently in private beta.",
    longDescription:
      "Designing the complete user experience for a revolutionary AI-powered healthcare diagnostic platform. The project involves complex data visualization, clinician workflows, and patient communication systems while maintaining strict medical privacy standards.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=600&h=400&fit=crop",
    ],
    tags: [
      "AI",
      "Healthcare",
      "Stealth",
      "Beta",
      "Machine Learning",
    ],
    link: "#",
    accentColor: "bg-gradient-secondary",
    timeline: "6 months (ongoing)",
    team: "Solo Designer + CTO + 2 AI researchers",
    role: "Principal Product Designer & AI/UX Researcher",
    challenge:
      "Creating intuitive interfaces for complex AI diagnostic tools that medical professionals can trust and understand. The challenge included explaining AI decision-making processes to clinicians while maintaining workflow efficiency in high-pressure medical environments.",
    solution:
      "Developed a layered information design that presents AI insights with clear confidence indicators and reasoning paths. Created specialized interfaces for different medical roles and implemented extensive user testing with healthcare professionals. Built prototypes that demonstrate AI transparency through progressive disclosure.",
    results: [
      "95% clinician trust rating in beta testing",
      "40% faster diagnostic workflow completion",
      "100% accuracy in AI explanation comprehension",
      "Zero critical workflow errors in testing",
      "Interest from 3 major hospital systems",
    ],
    technologies: [
      "Figma",
      "Principle",
      "Python",
      "TensorFlow",
      "HIPAA Tools",
      "Clinical Workflow Systems",
    ],
  },
  {
    id: "blockchain-security-platform",
    title: "Enterprise Blockchain Security Platform",
    description:
      "Confidential design of a next-generation blockchain security platform for institutional cryptocurrency management and DeFi protocols.",
    longDescription:
      "Leading the UX design for a revolutionary blockchain security platform that serves major financial institutions entering the cryptocurrency space. The platform combines advanced threat detection, smart contract auditing, and institutional-grade wallet management with an intuitive interface that makes complex blockchain operations accessible to traditional finance professionals.",
    image:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1639815188546-c43c240ff4df?w=600&h=400&fit=crop",
    ],
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    tags: [
      "Confidential",
      "Blockchain",
      "Cybersecurity",
      "DeFi",
      "Enterprise",
    ],
    link: "#",
    accentColor: "bg-gradient-secondary",
    timeline: "10 months",
    team: "Lead Designer + 2 UX researchers + 6 blockchain developers + Security team",
    role: "Principal UX Designer & Blockchain UX Specialist",
    challenge:
      "Traditional finance institutions needed to enter the cryptocurrency space but existing blockchain tools were too complex and lacked enterprise-grade security features. The challenge was creating an interface that made blockchain operations intuitive for traditional finance professionals while maintaining the highest security standards.",
    solution:
      "Designed a layered security interface that abstracts complex blockchain operations into familiar financial workflows. Created comprehensive data visualization for threat detection and implemented progressive disclosure for smart contract interactions. Built extensive user testing protocols with finance professionals and developed a design system specifically for blockchain security interfaces.",
    results: [
      "90% reduction in blockchain operation complexity",
      "Zero security incidents across 50+ institutional clients",
      "65% faster onboarding for traditional finance users",
      "100% compliance with regulatory frameworks",
      "Featured as top enterprise blockchain solution",
    ],
    technologies: [
      "Figma",
      "Blockchain APIs",
      "Security Testing",
      "D3.js",
      "Web3",
      "Smart Contract Tools",
    ],
  },
  {
    id: "government-contract",
    title: "Public Sector Digital Transformation",
    description:
      "UI/UX design for a government digital services platform improving citizen access to public services.",
    longDescription:
      "Leading the design of a comprehensive digital government platform that consolidates multiple public services into a single, accessible interface. The project required extensive accessibility compliance, multi-language support, and integration with legacy government systems.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    ],
    tags: [
      "Government",
      "Public Sector",
      "Digital Services",
      "Accessibility",
    ],
    link: "#",
    accentColor: "bg-gradient-accent",
    timeline: "12 months",
    team: "Design Team Lead + 5 designers + Gov stakeholders",
    role: "Design Team Lead & Accessibility Specialist",
    challenge:
      "Government services were scattered across dozens of websites with inconsistent experiences and poor accessibility. Citizens faced significant barriers when trying to access essential services, particularly elderly and disabled users.",
    solution:
      "Created a unified service design that consolidates 15+ government services into a single platform. Implemented WCAG 2.1 AAA standards throughout and designed multilingual support for the region's diverse population. Conducted extensive usability testing with diverse citizen groups including accessibility-focused sessions.",
    results: [
      "85% reduction in service completion time",
      "97% accessibility compliance achieved",
      "60% decrease in citizen support requests",
      "100% positive feedback from disability advocacy groups",
      "Adopted as model by 3 other government agencies",
    ],
    technologies: [
      "Figma",
      "Accessibility Tools",
      "Gov Design System",
      "Multi-language CMS",
      "Legacy System APIs",
      "User Testing Platforms",
    ],
  },
];

export function getProtectedProjectById(
  id: string,
): ProjectData | undefined {
  return protectedProjectsData.find(
    (project) => project.id === id,
  );
}

export function getAllProtectedProjects(): ProjectData[] {
  return protectedProjectsData;
}

// Combined function to get any project (public or protected)
export function getAnyProjectById(
  id: string,
): ProjectData | undefined {
  return getProjectById(id) || getProtectedProjectById(id);
}