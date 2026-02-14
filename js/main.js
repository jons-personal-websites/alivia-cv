// Initialize Lucide icons
lucide.createIcons();

// ====== CONFIG ======
const GEMINI_API_KEY = 'AIzaSyDMlVCVKp7LzI8jDSYE69YvaHTQ_fBmQyU';
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-lite-latest:generateContent?key=${GEMINI_API_KEY}`;

const ALIVIA_CONTEXT = `You are Alivia Kan. You are responding to visitors on your professional portfolio website. Be warm, personable, and professional. For questions about your career and experience, answer honestly and in detail using first person (I, my, me). For casual or personal questions unrelated to your professional background, respond politely and redirect to career topics. Here is your full profile:

ALIVIA KAN
Business Development | Franchise Expansion | Project Management & Marketing | APAC & Global Markets
Based in Singapore. Bilingual: English (Native) & Chinese (Native).

EXPERIENCE:

1. Paradise Group 樂天餐飲集團 — Business Development Executive (Full-time)
   May 2022 – Present (3 yrs 10 mos) | Singapore
   Lead franchise support and expansion across Asia and global markets. Key liaison between HQ and franchise partners.
   - International Expansion: Supported growth across Bangkok, Vietnam, Cambodia, Malaysia, Myanmar, Indonesia, Philippines, USA.
   - Design & Construction: Coordinated store layout approvals and construction timelines.
   - Procurement: Assisted partners with equipment sourcing and proprietary inventory management.
   - HR & Training: Supported recruitment planning and delivered HQ-led training programs.
   - Marketing & Launch: Strategized opening campaigns and provided localized execution toolkits.
   - Operations & Audits: Conducted pre-opening checks, SOP reviews, and annual audits.
   - Trademark Support: Tracked global trademark registrations, renewals, and IP usage.

2. Alliance Group Limited — Marketing and Communications Executive (Full-time)
   Oct 2019 – Sep 2021 (2 yrs) | Singapore
   - Brand Elevation: Built and managed brand portfolio across Singapore, China, HK, Malaysia, Thailand, Taiwan.
   - Digital Strategy: Managed marketing across Facebook, Instagram, WeChat, Line, Shopify, TMall, HKTVmall.
   - Content Creation: WeChat copywriting and developed brand's first official Chinese website.
   - Project Management: Led agencies in developing brand content and multi-channel campaigns.
   - Sales Support: Designed training materials and marketing collaterals.

3. SPH Magazines Pte Ltd — Administrative Assistant (Cosmopolitan SG & Singapore Women's Weekly)
   Jul 2015 – Dec 2015 (6 mos)
   - Supported sales and marketing teams for Cleo, Cosmopolitan, and Harper's Bazaar.
   - Liaised with advertising clients and designed sales sheets.

4. F J Benjamin — Customer Excellence Leader (La Senza)
   Apr 2014 – Oct 2014 (7 mos)
   - Selected for the Group's management trainee programme.
   - Achieved monthly sales targets through curated customer experiences.

5. JobSquare — Assistant Recruitment Consultant
   Aug 2013 – Oct 2013 (3 mos)
   - Liaised with over 50 corporate clients and candidates.
   - Negotiated service endorsements and published brand stories.

EDUCATION:
- Curtin Singapore: Bachelor of Arts (B.A.), Mass Communication/Media Studies (2015–2017). Specialization: Journalism & Marketing.
- Ngee Ann Polytechnic: Diploma, Business Studies (2011–2014). Specialization: Entrepreneurship & Marketing.

LANGUAGES: English (Native), Chinese (Native)

IMPORTANT GUIDELINES:
- Always respond in FIRST PERSON as Alivia (I, my, me).
- Be honest. If asked about something not in my experience, say so clearly.
- Be warm and professional in tone.
- When expanding on achievements, provide plausible context based on the role but clearly note when inferring typical responsibilities vs. stated specifics.
- Keep answers focused and relevant.`;

// ====== GSAP ANIMATIONS ======
gsap.registerPlugin(ScrollTrigger);

// Hero entrance: set initial hidden state, then animate in
gsap.set('.hero-child', { y: 30, opacity: 0 });
gsap.set('#heroPhoto', { x: 50, opacity: 0 });
gsap.set('#scrollIndicator', { y: 20, opacity: 0 });

const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
heroTl
  .to('.hero-child', {
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.15,
  })
  .to('#heroPhoto', {
    x: 0,
    opacity: 1,
    duration: 1,
  }, '-=0.6')
  .to('#scrollIndicator', {
    y: 0,
    opacity: 1,
    duration: 0.6,
  }, '-=0.4');

// Scroll-triggered reveal for all .gsap-reveal elements
gsap.utils.toArray('.gsap-reveal').forEach((el) => {
  gsap.fromTo(el,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  );
});

// Stats bar counter animation
ScrollTrigger.create({
  trigger: '#statsBar',
  start: 'top 80%',
  onEnter: animateCounters,
  once: true,
});

// Parallax on hero background shape
gsap.to('.animate-morph', {
  y: -80,
  ease: 'none',
  scrollTrigger: {
    trigger: '.animate-morph',
    start: 'top top',
    end: 'bottom top',
    scrub: 1,
  },
});

// Market tags stagger
gsap.fromTo('.market-tag',
  { y: 15, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 0.4,
    stagger: 0.05,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.market-tag',
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  }
);

// ====== CURSOR GLOW ON EXPERIENCE SECTIONS ======
document.querySelectorAll('.flavor-paradise, .flavor-alliance, .flavor-sph, .flavor-fjbenjamin, .flavor-jobsquare').forEach(section => {
  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  glow.style.cssText = 'position:absolute;width:300px;height:300px;border-radius:50%;pointer-events:none;opacity:0;transition:opacity 0.4s ease;z-index:0;';
  section.appendChild(glow);

  // Pick the flavor color
  const colors = {
    'flavor-paradise': 'rgba(184, 92, 56, 0.06)',
    'flavor-alliance': 'rgba(158, 107, 123, 0.06)',
    'flavor-sph': 'rgba(44, 62, 80, 0.06)',
    'flavor-fjbenjamin': 'rgba(109, 93, 126, 0.06)',
    'flavor-jobsquare': 'rgba(74, 124, 105, 0.06)',
  };

  for (const [cls, color] of Object.entries(colors)) {
    if (section.classList.contains(cls)) {
      glow.style.background = `radial-gradient(circle, ${color}, transparent 70%)`;
      break;
    }
  }

  section.addEventListener('mousemove', (e) => {
    const rect = section.getBoundingClientRect();
    glow.style.left = (e.clientX - rect.left - 150) + 'px';
    glow.style.top = (e.clientY - rect.top - 150) + 'px';
    glow.style.opacity = '1';
  });

  section.addEventListener('mouseleave', () => {
    glow.style.opacity = '0';
  });
});

// ====== NAVIGATION ======
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('border-border-custom', window.scrollY > 50);
  nav.classList.toggle('border-transparent', window.scrollY <= 50);
});

function toggleMobileNav() {
  const menu = document.getElementById('mobileMenu');
  const btn = document.getElementById('hamburger');
  const isOpen = !menu.classList.contains('hidden');

  if (isOpen) {
    menu.classList.add('hidden');
    btn.children[0].style.transform = '';
    btn.children[1].style.opacity = '';
    btn.children[2].style.transform = '';
  } else {
    menu.classList.remove('hidden');
    btn.children[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    btn.children[1].style.opacity = '0';
    btn.children[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  }
}

function closeMobileNav() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.add('hidden');
  const btn = document.getElementById('hamburger');
  if (btn) {
    btn.children[0].style.transform = '';
    btn.children[1].style.opacity = '';
    btn.children[2].style.transform = '';
  }
}

// ====== COUNTER ANIMATION ======
let countersAnimated = false;
function animateCounters() {
  if (countersAnimated) return;
  countersAnimated = true;

  document.querySelectorAll('.stat-counter').forEach(counter => {
    const target = parseInt(counter.dataset.target);
    gsap.to(counter, {
      duration: 1.5,
      ease: 'power2.out',
      onUpdate: function() {
        counter.textContent = Math.round(this.progress() * target) + '+';
      },
    });
  });
}

// ====== GEMINI API ======
const chatHistory = [];

async function callGemini(prompt, isChat = true) {
  const contents = [];

  if (isChat) {
    if (chatHistory.length === 0) {
      contents.push({ role: 'user', parts: [{ text: ALIVIA_CONTEXT + '\n\nUser question: ' + prompt }] });
    } else {
      contents.push({ role: 'user', parts: [{ text: ALIVIA_CONTEXT }] });
      contents.push({ role: 'model', parts: [{ text: 'Understood. I will answer questions as Alivia Kan in first person, based on my professional profile.' }] });
      chatHistory.forEach(msg => {
        contents.push({ role: msg.role, parts: [{ text: msg.text }] });
      });
      contents.push({ role: 'user', parts: [{ text: prompt }] });
    }
  } else {
    contents.push({ role: 'user', parts: [{ text: ALIVIA_CONTEXT + '\n\n' + prompt }] });
  }

  const res = await fetch(GEMINI_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents,
      generationConfig: { temperature: 0.7, maxOutputTokens: 800 },
    }),
  });

  if (!res.ok) throw new Error('API error');
  const data = await res.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I could not generate a response.';
}

// ====== MARKDOWN RENDERER ======
function renderMarkdown(text) {
  // Split into lines for block-level processing
  const lines = text.split('\n');
  let html = '';
  let inList = false;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Headings
    if (line.match(/^##\s+(.+)/)) {
      if (inList) { html += '</ul>'; inList = false; }
      const heading = line.replace(/^##\s+/, '');
      html += `<h3 class="text-base font-semibold mt-5 mb-2">${inlineMd(heading)}</h3>`;
      continue;
    }

    // Bullet points
    if (line.match(/^[-•*]\s+(.+)/)) {
      if (!inList) { html += '<ul class="list-disc pl-5 mt-1 space-y-1.5">'; inList = true; }
      const content = line.replace(/^[-•*]\s+/, '');
      html += `<li class="text-sm leading-relaxed">${inlineMd(content)}</li>`;
      continue;
    }

    // Empty line
    if (line.trim() === '') {
      if (inList) { html += '</ul>'; inList = false; }
      continue;
    }

    // Regular paragraph
    if (inList) { html += '</ul>'; inList = false; }
    html += `<p class="mt-2 text-sm leading-relaxed">${inlineMd(line)}</p>`;
  }

  if (inList) html += '</ul>';
  return html;
}

function inlineMd(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>');
}

// ====== AI CONTEXT EXPANSION ======
async function expandContext(btn, context) {
  const contextDiv = btn.nextElementSibling;

  // Toggle off
  if (!contextDiv.classList.contains('hidden')) {
    contextDiv.classList.add('hidden');
    contextDiv.innerHTML = '';
    btn.textContent = 'Learn more';
    return;
  }

  // Toggle on — show loading
  contextDiv.classList.remove('hidden');
  contextDiv.innerHTML = '<div class="loading-dots inline-flex gap-1"><span class="w-1.5 h-1.5 rounded-full bg-terracotta animate-dot-bounce"></span><span class="w-1.5 h-1.5 rounded-full bg-terracotta animate-dot-bounce"></span><span class="w-1.5 h-1.5 rounded-full bg-terracotta animate-dot-bounce"></span></div>';
  btn.textContent = 'Collapse';

  try {
    const response = await callGemini(
      `Write a concise 2-3 sentence narrative expanding on this CV achievement. Write in FIRST PERSON as Alivia (use "I", "my"). Output ONLY the narrative — no preamble, no headers, no "here is" intro, no conversational filler. Just the expanded context directly.\n\nAchievement: ${context}`,
      false
    );
    contextDiv.innerHTML = renderMarkdown(response);
    gsap.fromTo(contextDiv, { opacity: 0 }, { opacity: 1, duration: 0.3 });
  } catch (err) {
    contextDiv.innerHTML = 'Unable to load — please try again.';
  }
}

// ====== CHAT WIDGET ======
let chatOpen = false;

function toggleChat() {
  chatOpen = !chatOpen;
  const panel = document.getElementById('chatPanel');
  const fab = document.getElementById('chatFab');

  if (chatOpen) {
    panel.classList.remove('opacity-0', 'translate-y-5', 'scale-95', 'pointer-events-none');
    panel.classList.add('opacity-100', 'translate-y-0', 'scale-100', 'pointer-events-auto');
    fab.classList.add('bg-charcoal');
    fab.classList.remove('bg-terracotta');
    setTimeout(() => document.getElementById('chatInput').focus(), 350);
  } else {
    panel.classList.add('opacity-0', 'translate-y-5', 'scale-95', 'pointer-events-none');
    panel.classList.remove('opacity-100', 'translate-y-0', 'scale-100', 'pointer-events-auto');
    fab.classList.remove('bg-charcoal');
    fab.classList.add('bg-terracotta');
  }
}

async function sendChat() {
  const input = document.getElementById('chatInput');
  const msg = input.value.trim();
  if (!msg) return;

  input.value = '';
  addChatMessage(msg, 'user');
  chatHistory.push({ role: 'user', text: msg });

  const typingId = addChatMessage('<div class="loading-dots inline-flex gap-1"><span class="w-1.5 h-1.5 rounded-full bg-terracotta animate-dot-bounce"></span><span class="w-1.5 h-1.5 rounded-full bg-terracotta animate-dot-bounce"></span><span class="w-1.5 h-1.5 rounded-full bg-terracotta animate-dot-bounce"></span></div>', 'bot', true);

  input.disabled = true;
  const chatSendBtn = document.getElementById('chatSend');
  if (chatSendBtn) chatSendBtn.disabled = true;

  try {
    const response = await callGemini(msg, true);
    chatHistory.push({ role: 'model', text: response });
    removeChatMessage(typingId);
    addChatMessage(response, 'bot');
  } catch (err) {
    removeChatMessage(typingId);
    addChatMessage('Sorry, I encountered an error. Please try again.', 'bot');
  }

  input.disabled = false;
  if (chatSendBtn) chatSendBtn.disabled = false;
  input.focus();
}

function addChatMessage(text, type, isHtml = false) {
  const messages = document.getElementById('chatMessages');
  const div = document.createElement('div');
  const id = 'msg-' + Date.now();
  div.id = id;

  if (type === 'bot') {
    div.className = 'max-w-[85%] px-4 py-3 rounded-2xl rounded-bl-sm text-sm leading-relaxed bg-white text-charcoal border border-border-custom self-start';
    // Render markdown for bot messages
    if (isHtml) {
      div.innerHTML = text;
    } else {
      div.innerHTML = renderMarkdown(text);
    }
  } else {
    div.className = 'max-w-[85%] px-4 py-3 rounded-2xl rounded-br-sm text-sm leading-relaxed bg-terracotta text-cream self-end';
    div.textContent = text;
  }

  messages.appendChild(div);
  gsap.from(div, { y: 10, opacity: 0, duration: 0.3, ease: 'power2.out' });
  messages.scrollTop = messages.scrollHeight;
  return id;
}

function removeChatMessage(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

// ====== FIT ASSESSMENT ======
async function assessFit() {
  const fitTextarea = document.getElementById('fitTextarea');
  const jd = fitTextarea ? fitTextarea.value.trim() : '';
  if (!jd) return;

  const btn = document.getElementById('fitBtn');
  const result = document.getElementById('fitResult');

  if (btn) {
    btn.disabled = true;
    btn.textContent = 'Analyzing...';
  }
  if (result) {
    result.classList.remove('hidden');
    result.innerHTML = '<div class="loading-dots inline-flex gap-1"><span class="w-1.5 h-1.5 rounded-full bg-terracotta animate-dot-bounce"></span><span class="w-1.5 h-1.5 rounded-full bg-terracotta animate-dot-bounce"></span><span class="w-1.5 h-1.5 rounded-full bg-terracotta animate-dot-bounce"></span></div>';
    gsap.from(result, { y: 10, opacity: 0, duration: 0.4 });
  }

  try {
    const response = await callGemini(
      `You are Alivia Kan writing in FIRST PERSON. A hiring manager has pasted the following job description. Provide an honest fit assessment written as Alivia herself (use "I", "my", "me").

Use this EXACT structure with bullet points for readability:

## Where I'm a Strong Fit
- (bullet point for each strength, referencing my specific experience)

## Where I'd Need to Grow
- (bullet point for each gap — be honest, this builds trust)

## My Overall Take
(a candid 1-2 sentence first-person summary)

Use markdown bullet points (- ) and bold (**text**) for key terms. Be specific, referencing actual experience. Be honest — if I'm not a great fit, say so respectfully.

Job Description:
${jd}`,
      false
    );
    if (result) {
      result.innerHTML = renderMarkdown(response);
      gsap.from(result, { opacity: 0, duration: 0.4 });
    }
  } catch (err) {
    if (result) result.textContent = 'Unable to assess fit. Please try again.';
  }

  if (btn) {
    btn.disabled = false;
    btn.textContent = 'Assess Fit';
  }
}

