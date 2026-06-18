import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = 3000;

// Lazy initialization of Gemini AI
let aiClient: GoogleGenAI | null = null;
function getGeminiClient() {
  if (aiClient) return aiClient;
  const key = process.env.GEMINI_API_KEY;
  if (!key || key === "MY_GEMINI_API_KEY") {
    console.warn("GEMINI_API_KEY is not set or using placeholder, using fallback simulator.");
    return null;
  }
  try {
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
    return aiClient;
  } catch (err) {
    console.error("Failed to initialize GoogleGenAI client:", err);
    return null;
  }
}

// System Instruction for Muhammad Shahzad's portfolio assistant
const SYSTEM_INSTRUCTION = `You are "Shahzad AI", a smart personal assistant on the portfolio website of Muhammad Shahzad.
Your goal is to represent Muhammad Shahzad, a senior-level Full Stack Engineer & AI Specialist from Islamabad, Pakistan (open to remote work / global relocation).

Be polite, technical, professional, yet warm and enthusiastic. Answer questions concisely and provide insights into his skills, experience, and why a company should hire him.

Key Information about Muhammad Shahzad:
- Professional Summary: Senior Full Stack Engineer specializing in scalable backend systems, Node.js, MERN/PERN stacks, and advanced AI integrations. Has 2.5+ years of industry experience.
- Location: Islamabad, Pakistan.
- Open to: Remote roles worldwide or global relocation.
- Contact: shahzaddiyal786@gmail.com, WhatsApp (+92xxxxxxxx), GitHub (shahzad-diyal), LinkedIn (Muhammad Shahzad).
- Core Stack:
  * Backend: Node.js, TypeScript, Express.js, REST APIs, WebSockets, Nest.js, Microservices.
  * Frontend: React.js, Next.js, Redux Toolkit, Tailwind CSS, Framer Motion/Motion.
  * Databases: PostgreSQL, MongoDB, Redis, Firebase.
  * AI Tools: OpenAI (GPT-4o), Anthropic (Claude), Gemini, LangChain, Prompt Engineering, Agentic AI, vector databases.
  * DevOps: Docker, AWS (EC2/S3), GitHub Actions, CI/CD, Hostinger VPS, Vercel.

- Work History:
  1. DH Solutions | Full Stack Engineer (MERN/PERN) (Oct 2025 - Present)
     - Core achievements: Built WeCare Telemedicine platform with video calling and Stripe payment integrations; engineered custom ERP Enterprise platform with robust RBAC and PostgreSQL database migrations; enhanced CI/CD automation pipelines.
  2. CODEDEXIT | MERN Stack Developer (Sep 2024 - Feb 2025)
     - Core achievements: Designed scalable Node APIs, optimized MongoDB databases, secured systems via JWT authentication, deployed via IIS and Hostinger VPS with 99.9% uptime.
  3. Collab Culture Niagara | GoHighLevel Website Developer (Jan 2025 - Sep 2025)
     - Core achievements: Developed lead automation tools, synchronized GoHighLevel CRM via Google App Scripts & webhooks, integrated Firebase storage, managed RBAC.
  4. East & West Web Development and SEO Agency | Associate Full Stack Developer
     - Core achievements: Worked on Django/React/Angular builds, integrated Large Language Models (LLMs) into customer flows, handled CI/CD processes.

- Key Projects:
  1. ERP Enterprise Suite (PERN Stack): Full-featured ERP system with modules for Warehousing, HR, and Accounting. Includes heavy-duty analytics dashboards.
  2. WeCare Telemedicine (React, Node.js, PostgreSQL, Stripe): Patient portal featuring custom audio/video calling, appointment scheduling, and automated subscriptions.
  3. GoMeetSingle (Node.js, MongoDB, WebSockets): Subscription-based social networking platform featuring global instant messaging, push notifications, and geolocation matchups.
  4. TrueNote Marketplace (Next.js, GSAP): Immersive, highly-animated coffee e-commerce site utilizing luxurious micro-interactions and smooth physical scroll.
  5. Panama Global (Laravel APIs, React): Multi-vendor B2B marketplace supporting global payment processors (Stripe, Paypal) and real-time shipping estimate calculations.

If asked how to hire him, suggest using the contact form on this page, sending an email directly to shahzaddiyal786@gmail.com, or connecting on LinkedIn.
Keep responses short, bulleted when sharing lists, and engaging. Never make up projects or claims beyond what is listed above.`;

// 1. API: Portfolio Gemini Chatbot
app.post("/api/chat", async (req, res) => {
  const { message, history } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required." });
  }

  const ai = getGeminiClient();
  if (!ai) {
    // Elegant fallback simulation is used when GEMINI_API_KEY is not defined
    console.log("Simulating Shahzad AI response...");
    const msgLower = message.toLowerCase();
    let reply = "";

    if (msgLower.includes("hire") || msgLower.includes("hiring") || msgLower.includes("recruit")) {
      reply = "Muhammad Shahzad is actively looking for Full Stack React/Node.js/AI roles and is ready for global relocation or remote engagements! Please feel free to drop him an email at **shahzaddiyal786@gmail.com** or send a query via the contact form on this website so we can schedule an interview.";
    } else if (msgLower.includes("skills") || msgLower.includes("technologies") || msgLower.includes("stack")) {
      reply = "Muhammad is specialized in key technologies:\n- **Backend**: Node.js, Express.js, TypeScript, REST APIs, WebSockets\n- **Frontend**: React.js, Next.js, Tailwind CSS, Redux, motion/react\n- **Databases**: PostgreSQL, MongoDB, Redis, Firebase\n- **AI**: Gemini, OpenAI API, Anthropic, Prompt Engineering\n- **DevOps**: Docker, AWS, GitHub Actions, Hostinger VPS";
    } else if (msgLower.includes("project") || msgLower.includes("portfolio")) {
      reply = "Some of Muhammad's marquee projects include:\n1. **ERP Enterprise Suite**: A multi-module PERN stack suite for warehouse, HR, and finance.\n2. **WeCare Telemedicine**: A video-driven medical consultation platform with Stripe.\n3. **GoMeetSingle**: A real-time web-socket connected social application.\n4. **TrueNote Marketplace**: An ultra-immersive animated coffee e-commerce catalog.";
    } else if (msgLower.includes("experience") || msgLower.includes("work") || msgLower.includes("job")) {
      reply = "Muhammad has over **2.5 years of professional experience**:\n- **DH Solutions** (Full Stack Engineer, Oct 2025 - Present): WeCare Telemedicine & ERP Enterprise Suite.\n- **CODEDEXIT** (MERN Developer, Sep 2024 - Feb 2025): Scalable APIs & IIS/Hostinger deployment.\n- **Collab Culture Niagara** (GHL Specialist, Jan 2025 - Sep 2025): CRM automations and scripts.\n- **East & West Agency** (Associate Developer): Django and AI integration solutions.";
    } else {
      reply = `Hello! I'm "Shahzad AI", Muhammad Shahzad's representative virtual agent. Muhammad is a highly skilled Full Stack Engineer with 2.5+ years of experience building high-performance systems with Node.js, PostgreSQL/MongoDB, React, and AI integrations (like the one powering me!).

How can I help you find out about Muhammad today? Feel free to ask about his background, specific projects, skills, or relocation options.`;
    }

    // Small delay to simulate network/AI response
    await new Promise((resolve) => setTimeout(resolve, 600));
    return res.json({ text: reply });
  }

  try {
    // Generate content using gemini-3.5-flash as prescribed for basic assistant/QA tasks
    const promptMessage = `User Message: ${message}\n\nChat History context:\n${JSON.stringify(history || [])}`;
    
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: promptMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const replyText = response.text || "I apologize, I am unable to generate a response at this time. Please contact Muhammad directly!";
    return res.json({ text: replyText });
  } catch (error: any) {
    console.error("Error communicating with Gemini API:", error);
    return res.status(500).json({ error: "Gemini server communication failed. Using fallback.", details: error.message });
  }
});

// 2. API: Contact Form Submission Log
app.post("/api/contact", (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please fill out all required fields." });
  }

  console.log(`[CONTACT RECEIVED]
Name: ${name}
Email: ${email}
Subject: ${subject || "No Subject"}
Message: ${message}
Timestamp: ${new Date().toISOString()}
`);

  // Simulated email delivery or persistence in log. 
  // In a real application, integration with Resend/EmailJS can be performed.
  // We provide a successful response with interactive feedback.
  return res.json({
    success: true,
    message: "Thank you for reaching out! Muhammad has received your contact details and will respond within 24 hours.",
  });
});

// 3. Setup Vite server for static and hot reload configuration
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
