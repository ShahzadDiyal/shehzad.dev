import { Project, Experience, SkillGroup, BlogPost, Service, Testimonial } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "erp",
    title: "ERP Enterprise Suite",
    description: "Enterprise-grade PERN stack ERP system managing accounting, HR, warehouse, inventory loggers, and analytics workflows with dense visual dashboards.",
    category: "Enterprise System",
    techStack: ["React.js", "Node.js", "PostgreSQL", "Express.js", "Tailwind CSS", "Recharts"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/shahzad-diyal/erp-enterprise-suite",
    demoUrl: "https://erp-enterprise.vercel.app",
    features: [
      "Modular Warehousing with dynamic item and supply trackers.",
      "Comprehensive HR management including payroll and shift scheduling.",
      "Dual-entry accounting ledger with real-time financial logs.",
      "PostgreSQL database clustering and active schema migrations."
    ],
    caseStudy: {
      overview: "A business-critical ERP software designed to unite disconnected divisions of global distribution companies. Built to replace fragmented custom tools with a secure, united system.",
      challenge: "Aggregating huge volumes of inventory updates and accounting logs in real-time caused Postgres locks and significant operational delays under peak transactional load.",
      solution: "Engineered transactional segregation, optimized indexes, migrated slow complex loops into custom views/functions at the Postgres level, and implemented a caching engine via Redis.",
      impact: "Reduced operational reporting times from 5 minutes to less than 1.2 seconds, supporting 20,000+ daily concurrent updates without failure."
    }
  },
  {
    id: "wecare",
    title: "WeCare Telemedicine Platform",
    description: "Patient-centered healthcare application featuring custom audio/video consultations, subscription pipelines, automated records, and live appointments.",
    category: "Healthcare",
    techStack: ["React.js", "Node.js", "PostgreSQL", "WebSockets", "Stripe", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/shahzad-diyal/wecare-telemed",
    demoUrl: "https://wecare-telemed.vercel.app",
    features: [
      "Custom audio/video channels with peer connection protocols.",
      "Secure patients clinical files using strict Role-Based Access controls (RBAC).",
      "Dynamic pricing structure powered by deep Stripe subscriptions.",
      "SMS and email consultation reminders powered by automations."
    ],
    caseStudy: {
      overview: "WeCare connects patients globally with professional medical consultants. Preserving security and ensuring immediate quality visual calls were top system values.",
      challenge: "Handling unreliable client network strengths during consultation calls, and guaranteeing compliance with strict medical data handling rules (data secrecy / HIPAA ideals).",
      solution: "Configured resilient video streaming fallbacks and dynamic bandwidth selection. Set up encrypted PostgreSQL columns and fine-grained authorization middleware (RBAC).",
      impact: "Hosted 45,000+ secure consultation hours with zero leaks and maintained video latency under 120ms on 4G cellular links."
    }
  },
  {
    id: "gomeetsingle",
    title: "GoMeetSingle Social Platform",
    description: "Subscription-driven social portal supporting instant chat channels, real-time geography notifications, matching formulas, and push notifications.",
    category: "Social App",
    techStack: ["React.js", "Node.js", "MongoDB", "Express.js", "WebSockets", "Material UI"],
    image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/shahzad-diyal/gomeetsingle",
    demoUrl: "https://gomeetsingle.vercel.app",
    features: [
      "Real-time bidirectional message broadcasts over custom WebSocket servers.",
      "Accurate geolocation pairing querying localized MongoDB indices.",
      "Instant browser alerts using Google Firebase push models.",
      "Custom media storage using cloud storage caches."
    ],
    caseStudy: {
      overview: "An immersive, high-availability premium matching portal designed to accommodate high loads of instant messages, updates, and localized geolocation match sweeps.",
      challenge: "WebSocket message delivery suffered bottleneck delays during high traffic spikes, and search speeds plummeted inside larger location vectors.",
      solution: "Established a horizontal cluster of PM2 Node workers, introduced Redis adapter pub-sub events, and added optimized 2dsphere location indices in MongoDB.",
      impact: "Boosted system performance to process up to 8,000 chat actions per second, reducing location matching calculations down from 3s to 85ms."
    }
  },
  {
    id: "truenote",
    title: "TrueNote Marketplace",
    description: "Premium coffee store with GSAP smooth physical momentum scrolling, responsive dark interfaces, 3D product previews, and secure checkout integrations.",
    category: "E-Commerce",
    techStack: ["Next.js", "React.js", "GSAP", "Tailwind CSS", "Framer Motion", "Stripe"],
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/shahzad-diyal/truenote",
    demoUrl: "https://truenote-coffee.vercel.app",
    features: [
      "Cinematic product animations featuring precise GSAP dynamic scroll triggers.",
      "Elegant dark layouts highlighting crisp premium coffee items.",
      "Interactive cart with client persistence and multi-level coupons.",
      "Integrated secure payment pipelines using full-feature Stripe elements."
    ],
    caseStudy: {
      overview: "A premium, luxury user-journey designed for coffee connoisseurs, emphasizing smooth animations, fluid visual responsive models, and frictionless shop transactions.",
      challenge: "Heavy imagery and extensive structural animations frequently locked client rendering threads, causing layout lag on less powerful mobile devices.",
      solution: "Refined scroll handlers by debouncing actions, compressed and lazy-loaded assets, and utilized CSS hardware acceleration properties for Framer & GSAP routines.",
      impact: "Reduced desktop/mobile bundle size by 35% and achieved a full 60FPS scrolling experience across both modern systems and mobile hand-units."
    }
  },
  {
    id: "panama",
    title: "Panama Global Multi-Vendor",
    description: "Robust scalable B2B multi-vendor trading platform driving live currency switching, global Stripe/Paypal integrations, and custom commercial shipping logs.",
    category: "B2B Trading",
    techStack: ["Laravel", "React.js", "MySQL", "Tailwind CSS", "REST APIs"],
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/shahzad-diyal/panama-global",
    demoUrl: "https://panamaglobal.com",
    features: [
      "Highly scalable multi-vendor merchant dashboards and stock loggers.",
      "Live currency estimation converters linked with top trading databases.",
      "Comprehensive multi-gateway checkout networks (Stripe, Paypal & wire routing).",
      "Automated logistics billing and tax-bracket generation based on coordinates."
    ],
    caseStudy: {
      overview: "Panama Global operates as a bridge linking hundreds of local suppliers with corporate global clients. The site enforces dynamic pricing, custom shipping models, and secure merchant systems.",
      challenge: "Synchronizing hundreds of local merchant stock tables and updating global shipping estimates dynamically across complex shipping hubs took too long.",
      solution: "Implemented pre-compiled inventory cache tables, introduced query optimizations, and integrated webhooks with top global shipping handlers (UPS, DHL, FedEx).",
      impact: "Secured reliable transactions, boosted page transitions, and facilitated $2.4M in transacted merchandise during its first year."
    }
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "dh",
    role: "Full Stack Engineer (MERN/PERN)",
    company: "DH Solutions",
    duration: "Oct 2025 – Present",
    achievements: [
      "Leading core development of WeCare Telemedicine system, incorporating zero-lag live micro-video consult networks and seamless multi-tiered Stripe pricing models.",
      "Spearheading Enterprise ERP Suite design, consolidating warehousing loggers, payroll algorithms, dual accounting ledgers, and securing database modules via strict Postgres RBAC patterns.",
      "Formulated scalable database schema designs, achieving clean PostgreSQL clustering to support high concurrent update peaks.",
      "Automated complete container builds via custom GitHub Actions and Docker orchestration pipelines, raising release speed by 40%."
    ],
    tags: ["MERN/PERN", "PostgreSQL", "WebSockets", "Stripe API", "Docker", "CI/CD"]
  },
  {
    id: "codedexit",
    role: "MERN Stack Developer",
    company: "CODEDEXIT",
    duration: "Sep 2024 – Feb 2025",
    achievements: [
      "Engineered clean REST APIs in Node.js, maintaining comprehensive authentication routines via robust, tamper-resistant JSON Web Token (JWT) strategies.",
      "Refined heavy MongoDB aggregator queries, reducing primary query workloads and speeding up client fetch actions by more than 50%.",
      "Directed application deployments on Hostinger Linux cloud droplets and Microsoft IIS, introducing secure SSL, reverse proxy systems, and establishing 99.9% target service uptime.",
      "Collaborated on visual responsive wireframe models in React.js, enhancing visual cohesion across primary navigation modules."
    ],
    tags: ["Node.js", "MongoDB", "Express.js", "JWT Security", "IIS", "Hostinger Cloud"]
  },
  {
    id: "collab",
    role: "GoHighLevel Website Developer",
    company: "Collab Culture Niagara",
    duration: "Jan 2025 – Sep 2025",
    achievements: [
      "Crafted custom automation handlers using Google Apps Script to synchronize third-party systems directly with GoHighLevel CRM webhooks.",
      "Created structured Firebase real-time database networks to cache lead coordinates and sync dynamic content blocks.",
      "Orchestrated complex auto-responder templates, elevating agency engagement and reducing manual client lead follow-up times by 75%.",
      "Established secure multi-tiered user privileges (RBAC) to delegate localized dashboards to individual marketers."
    ],
    tags: ["CRM Automations", "Google Apps Script", "Firebase", "Webhooks", "Lead Flow"]
  },
  {
    id: "eastwest",
    role: "Associate Full Stack Developer",
    company: "East & West Web Development and SEO Agency",
    duration: "Jan 2024 - Aug 2024",
    achievements: [
      "Developed high-converting landing pages and full-featured business portals using Django, Angular, and React frameworks.",
      "Integrated Large Language Models (LLM APIs) to power custom business chatbot interfaces and lead generation utilities.",
      "Built resilient, test-driven backend routes with automated unit test suites.",
      "Identified and resolved critical SEO ranking obstacles, boost client visibility, organic search volume, and performance scores to 95+."
    ],
    tags: ["Django", "Angular", "React", "LLM APIs", "SEO Audit", "Backend Test"]
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Backend Architecture",
    iconName: "Server",
    skills: [
      { name: "Node.js (Next-tier)", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Express.js", level: 95 },
      { name: "REST APIs & SOAP", level: 95 },
      { name: "WebSockets / Socket.io", level: 88 },
      { name: "Scale Microservices", level: 80 }
    ]
  },
  {
    category: "Frontend Engineering",
    iconName: "Layout",
    skills: [
      { name: "React.js (v18/19)", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "Tailwind CSS & v4", level: 98 },
      { name: "Redux Toolkit / Context", level: 90 },
      { name: "Framer Motion", level: 85 },
      { name: "Responsive UI", level: 95 }
    ]
  },
  {
    category: "Databases & Storage",
    iconName: "Database",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 92 },
      { name: "Redis Caching", level: 82 },
      { name: "Firebase (Firestore/Auth)", level: 88 }
    ]
  },
  {
    category: "AI & Modern Integrations",
    iconName: "Cpu",
    skills: [
      { name: "OpenAI API (GPT Models)", level: 92 },
      { name: "Anthropic / Claude APIs", level: 88 },
      { name: "Gemini SDK Integration", level: 90 },
      { name: "Prompt Engineering & Agents", level: 90 }
    ]
  },
  {
    category: "DevOps & Cloud Systems",
    iconName: "Cloud",
    skills: [
      { name: "Docker Containerization", level: 85 },
      { name: "AWS S3 / EC2", level: 80 },
      { name: "GitHub Actions CI/CD", level: 88 },
      { name: "Vercel / VPS Setup", level: 92 }
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: "fullstack",
    title: "Premium Full Stack Development",
    description: "End-to-end web architectures engineered for raw speed, security, and responsive design. Bypassing traditional bottlenecks using modern React and Node patterns.",
    iconName: "Globe"
  },
  {
    id: "mern_pern",
    title: "Enterprise MERN/PERN Architectures",
    description: "Database heavy-lifters using MongoDB or PostgreSQL, secured at the core, and linked cleanly to lightning-fast interfaces using optimized queries and Redis streams.",
    iconName: "Layers"
  },
  {
    id: "ai_integrations",
    title: "AI Specialist Operations",
    description: "Plugging Gemini, OpenAI, Claude, or local LLMs into live business routines. Developing custom AI prompts, vector searches, data agents, and representational bots.",
    iconName: "Cpu"
  },
  {
    id: "rest_apis",
    title: "Scalable API Development",
    description: "Rigorous, clean API structures featuring rate limit guards, JWT security, nested resource resolution, complete documentation, and flawless SDK compatibility.",
    iconName: "Code2"
  },
  {
    id: "saas_dev",
    title: "SaaS & CRM Systems Integration",
    description: "Setting up central platforms with robust lead capture, webhooks synchronization, Firebase real-time caching, and dynamic CRM automation configurations.",
    iconName: "Users"
  },
  {
    id: "devops",
    title: "Docker & Cloud DevOps Solutions",
    description: "Formulating CI/CD pipelines via GitHub Actions, building Docker images, configuring Linux cloud droplets (Hostinger / AWS), and achieving high uptime rates.",
    iconName: "CloudLightning"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    body: "Muhammad possesses an exceptional technical caliber. He took command of our database migration to PostgreSQL and built our telemetry routes seamlessly. A senior-tier backend operator you can rely on completely.",
    author: "Zainab Malik",
    role: "VP of Engineering",
    company: "DH Solutions",
    avatarSeed: "zainab"
  },
  {
    id: "t2",
    body: "Shahzad exceeded all expectations in deploying our customized CRM pipeline. He combined Google App Scripts, live webhooks, and Firebase to trim our operating cycle. Complete communication from start to end.",
    author: "Liam O'Connor",
    role: "Founder",
    company: "Niagara Digital Agencies",
    avatarSeed: "liam"
  },
  {
    id: "t3",
    body: "His expertise in Node.js and AI APIs helped us build a highly intelligent search agent. Shahzad was quick, highly specialized, and delivered premium clean code optimized for AWS.",
    author: "Faisal Rahman",
    role: "Technical Lead",
    company: "CODEDEXIT",
    avatarSeed: "faisal"
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: "node-scalability",
    title: "Mastering Node.js Scalability: PM2 Clustering vs Worker Threads",
    description: "Learn how to optimize your production Node.js applications under heavy computational loads by matching PM2 multi-process clusters with core Worker Threads.",
    date: "May 12, 2026",
    readTime: "7 min read",
    category: "Node.js",
    tags: ["Node.js", "System Design", "Backend Architecture", "PM2"],
    content: `## The Road to Infinite Throughput in Node.js

Node.js is famous for its single-threaded, asynchronous event loop. While this model is incredibly efficient for I/O-bound operations (like database queries and network fetches), it struggles under CPU-heavy calculations (like cryptographic computations, heavy JSON parsing, or image processing). 

To build enterprise-grade applications, we must understand when to use **PM2 clustering** (multi-process scaling) versus **Worker Threads** (multi-threaded parallelism).

### 1. The PM2 Clustering Protocol (Horizontal Multi-Process)

PM2 clustering leverages Node's core \`cluster\` module to spawn multiple instances of your application, automatically distributing incoming network requests between processes (typically via round-robin allocation).

This is ideal for scaling server capacity across multi-core processors:
\`\`\`bash
# Start your application in cluster mode utilizing all available cores
pm2 start server.js -i max
\`\`\`

#### Key Benefits of PM2 Clustering:
- **Zero Downtime Reloads**: PM2 restarts processes one-by-one to maintain 100% service uptime during hot deployments.
- **Fail-safe Auto-restarts**: Crashed processes due to unhandled exceptions are instantly rebooted.
- **Direct Load Balancing**: Port sharing allows a single entry-point (e.g., port 3000) to serve requests across all clustered processes.

### 2. When to Deploy Worker Threads (Vertical CPU Scaling)

If you are running complex ML algorithms, processing massive CSV uploads, or performing extensive math transformations, clustering won't help you because any single process will still lock its event loop. This is where \`worker_threads\` shine.

Worker threads share memory regions by utilizing \`SharedArrayBuffer\`, enabling rapid message exchanges without the severe performance costs of full process spawning.

\`\`\`typescript
import { Worker, isMainThread, parentPort } from 'worker_threads';

if (isMainThread) {
  // Main thread spawns a worker process
  const worker = new Worker(__filename);
  worker.on('message', (result) => console.log('CPU Task Done:', result));
  worker.postMessage({ data: 'massive_array_to_sort' });
} else {
  // Worker process listens and runs high CPU calculations
  parentPort?.on('message', ({ data }) => {
    const result = heavySortingTask(data);
    parentPort?.postMessage(result);
  });
}
\`\`\`

### Summary: The Ultimate Hybrid Scaling Architecture

For maximum resilience and throughput:
1. Wrap your main express server inside **PM2 cluster mode** to balance incoming web requests.
2. Delegate localized CPU-intensive bottlenecks (such as file encoding, PDF building, or prompt formatting) to a pool of **Worker Threads** to keep your primary servers responsive to new requests.`
  },
  {
    id: "ai-minds",
    title: "Architecting Context-Aware AI Integrations using Gemini & Chat Memories",
    description: "Step-by-step assembly of high-speed developer agents using the official Google GenAI SDK. Structuring bullet-proof system instructions and state persistence.",
    date: "Jun 02, 2026",
    readTime: "9 min read",
    category: "AI Integration",
    tags: ["AI", "Gemini API", "TypeScript", "Prompt Engineering"],
    content: `## Bridging Large Language Models into Practical Business Ecosystems

Many AI developers rely on basic client queries that fail to retain local system parameters. Building a professional AI integration—such as a custom portfolio companion or an auto-categorizer—requires a secure, stateful backend architecture.

Here, we'll build a state-aware backend agent with the official \`@google/genai\` SDK.

### 1. Clean Server-Side Core Setup

Always keep your API credentials safe on the server side using \`dotenv\` and instantiate using named parameters:

\`\`\`typescript
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build', // Telemetry standard
    }
  }
});
\`\`\`

### 2. Establishing Strict System Borders

Providing unstructured prompts triggers chaotic, unpredictable model behaviors. Always supply detailed, immutable system directions via the configuration parameters. This anchors the model's persona, preventing hallucinations or unwanted promotional fluff:

\`\`\`typescript
const response = await ai.models.generateContent({
  model: 'gemini-3.5-flash',
  contents: "How are you today?",
  config: {
    systemInstruction: "You are representing a veteran engineer. Respond concisely, utilizing bullet points for listings, and use a dark tech styling tone.",
    temperature: 0.45,
  }
});
console.log(response.text);
\`\`\`

### 3. Preserving Chat Contexts Efficiently

To preserve historical accuracy in conversations without accumulating massive billable token weights:
- Store last 10 messages within a sliding-window database or client-side storage state.
- Concatenate them securely into the context array, guiding the AI on current conversational threads.
- Never output raw raw system objects to the client — keep endpoints narrow and clean.`
  },
  {
    id: "react-perf-tips",
    title: "6 Crucial Hooks & Architecture Tweaks for Smooth 60FPS Framer Motion Animations",
    description: "Say goodbye to visual lag. A compilation of techniques to eliminate rendering overhead, manage layout offsets, and force GPU-layer compositing in React 19.",
    date: "Jun 14, 2026",
    readTime: "5 min read",
    category: "React Performance",
    tags: ["React 19", "Framer Motion", "CSS GPU", "Web Dev"],
    content: `## Speed is the Ultimate Feature of Modern Portfolios

Beautiful animations can quickly degrade user experience if they cause dropping frame rates. Recruiting panels browsing from laptops or mobile phones will immediately discard lagging applications. 

Let's address the most common React bottlenecks when implementing heavy visual portfolios.

### 1. Combatting React 19 re-renders in useEffect
When updating scroll percentages, never trigger global states repeatedly inside short execution windows. 

Instead of updating global states (which triggers component rebuilds), use **Framer Motion's \`useScroll\` or \`useMotionValue\`**. These directly alter DOM properties bypassing React's virtual tree reconciler.

\`\`\`typescript
import { motion, useScroll, useTransform } from "motion/react";

export function ElegantScrollComponent() {
  const { scrollYProgress } = useScroll();
  // Directly bind opacity to scroll position. No state updates!
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <motion.div style={{ opacity }}>
      <h1>Entering the Arena</h1>
    </motion.div>
  );
}
\`\`\`

### 2. Forcing Hardware Compositing with 'will-change'

Ensure your animated elements are promoted to their own rendering layers on the GPU. This isolates them, sparing the CPU from recalculating page layers repeatedly.

Add this class helper to critical cards or floating indicators:
\`\`\`css
.gpu-composit {
  will-change: transform, opacity;
  transform: translate3d(0, 0, 0);
}
\`\`\`

### 3. Staggering Dynamic Child Ingresses

When showing list arrays (like skill collections or timelines), stagger animation entries. Staggering prevents simultaneous rendering spikes and organizes entry flow into clean visual beats.

\`\`\`typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};
\`\`\``
  }
];
