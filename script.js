/* ============================================================
   KORVEN — JavaScript: Theme, Language, Form, Animations
   ============================================================ */

(function () {
  'use strict';

  /* ============================================================
     CONFIGURATION
     ============================================================ */
  const CONFIG = {
    // ⚠️ IMPORTANTE: Substitua pela URL do seu webhook do n8n
    WEBHOOK_URL: 'https://your-n8n-instance.example.com/webhook/korven-contact',
    FORM_SUCCESS_HIDE_DELAY: 8000,
  };

  /* ============================================================
     TRANSLATIONS
     ============================================================ */
  const TRANSLATIONS = {
    pt: {
      'nav.services': 'Serviços',
      'nav.why': 'Por que nós',
      'nav.process': 'Processo',
      'nav.contact': 'Falar com especialista',

      // Hero
      'hero.badge': 'Especialistas em Software B2B',
      'hero.title1': 'Seu negócio merece',
      'hero.title2': 'software sob medida',
      'hero.subtitle': 'Desenvolvemos sistemas personalizados que automatizam processos, aumentam a eficiência e impulsionam o crescimento da sua empresa — com tecnologia de alto nível e entrega ágil.',
      'hero.cta1': 'Solicitar solução',
      'hero.cta2': 'Ver serviços',
      'hero.stat1': 'Projetos entregues',
      'hero.stat2': 'Satisfação dos clientes',
      'hero.stat3': 'Anos de experiência',

      // Trusted
      'trusted.label': 'Confiado por empresas que buscam excelência tecnológica',
      'trust.secure': 'Segurança Garantida',
      'trust.certified': 'ISO Certificado',
      'trust.support': 'Suporte 24/7',
      'trust.team': 'Time Dedicado',
      'trust.agile': 'Entrega Ágil',

      // Services
      'services.tag': 'O que fazemos',
      'services.title': 'Soluções completas para sua empresa crescer',
      'services.subtitle': 'Cada projeto é único. Desenvolvemos com base nas necessidades reais do seu negócio.',
      'service1.title': 'Sistemas Personalizados',
      'service1.desc': 'Desenvolvemos sistemas sob medida para os fluxos únicos da sua empresa. Desde ERPs internos até plataformas complexas de gestão.',
      'service1.f1': 'ERP & CRM Customizados',
      'service1.f2': 'Painéis de Gestão (Dashboards)',
      'service1.f3': 'Automação de Processos',
      'service2.title': 'Plataformas Web',
      'service2.desc': 'Aplicações web de alta performance, seguras e escaláveis, prontas para milhares de usuários simultâneos.',
      'service2.f1': 'SaaS Multi-tenant',
      'service2.f2': 'Portais B2B & B2C',
      'service2.f3': 'APIs & Integrações',
      'service3.title': 'Aplicativos Mobile',
      'service3.desc': 'Apps iOS e Android nativos ou híbridos que conectam sua empresa com clientes e equipes em qualquer lugar.',
      'service3.f1': 'iOS & Android',
      'service3.f2': 'Apps de Gestão Interna',
      'service3.f3': 'Push Notifications',
      'service4.title': 'Integrações & APIs',
      'service4.desc': 'Conectamos seus sistemas existentes, eliminando silos de dados e criando um ecossistema digital integrado.',
      'service4.f1': 'Integração com ERPs',
      'service4.f2': 'APIs RESTful & GraphQL',
      'service4.f3': 'Automação via Webhooks',
      'service5.title': 'Dados & Analytics',
      'service5.desc': 'Transformamos dados brutos em inteligência estratégica. Dashboards executivos, relatórios e análises preditivas.',
      'service5.f1': 'Business Intelligence',
      'service5.f2': 'Relatórios Automáticos',
      'service5.f3': 'Análise Preditiva com IA',
      'service6.title': 'Infraestrutura Cloud',
      'service6.desc': 'Arquitetura cloud escalável, segura e resiliente. Deploy automatizado, monitoramento e alta disponibilidade.',
      'service6.f1': 'AWS / GCP / Azure',
      'service6.f2': 'DevOps & CI/CD',
      'service6.f3': 'Segurança & Compliance',

      // Why
      'why.tag': 'Diferenciais',
      'why.title': 'Por que escolher a Korven?',
      'why.subtitle': 'Não somos uma software house genérica. Somos parceiros estratégicos comprometidos com o sucesso do seu negócio.',
      'why1.title': 'Precisão Técnica',
      'why1.desc': 'Código limpo, arquitetura robusta e boas práticas de engenharia em cada linha. Zero gambiarras, 100% escalável.',
      'why2.title': 'Transparência Total',
      'why2.desc': 'Você acompanha cada etapa do desenvolvimento. Reuniões semanais, relatórios detalhados e acesso ao progresso em tempo real.',
      'why3.title': 'Entrega no Prazo',
      'why3.desc': '98% dos nossos projetos são entregues dentro do prazo estabelecido. Planejamento rigoroso e metodologia ágil comprovada.',
      'why4.title': 'Parceria de Longo Prazo',
      'why4.desc': 'Não entregamos e sumimos. Oferecemos suporte contínuo, manutenção e evolução do sistema conforme seu negócio cresce.',

      // Process
      'process.tag': 'Como funciona',
      'process.title': 'Do briefing ao deploy em etapas claras',
      'step1.title': 'Entendimento',
      'step1.desc': 'Reunião de briefing para mapear sua necessidade, objetivos e contexto do negócio.',
      'step2.title': 'Proposta',
      'step2.desc': 'Elaboramos uma proposta técnica detalhada com escopo, prazo e investimento.',
      'step3.title': 'Desenvolvimento',
      'step3.desc': 'Sprints ágeis com entregas incrementais e feedback constante da sua parte.',
      'step4.title': 'Deploy & Suporte',
      'step4.desc': 'Lançamento assistido, treinamento da equipe e suporte contínuo pós-entrega.',

      // Tech
      'tech.tag': 'Stack',
      'tech.title': 'Tecnologias de ponta que utilizamos',
      'tech.subtitle': 'Escolhemos as melhores ferramentas do mercado para cada tipo de solução.',
      'tech.frontend': 'Frontend',
      'tech.backend': 'Backend',
      'tech.database': 'Banco de Dados',
      'tech.cloud': 'Cloud & DevOps',

      // Contact
      'contact.tag': 'Vamos conversar',
      'contact.title': 'Pronto para transformar sua empresa com tecnologia?',
      'contact.desc': 'Preencha o formulário e nossa equipe entrará em contato em até 24 horas com uma análise inicial do seu projeto.',
      'highlight1.title': 'Resposta em 24h',
      'highlight1.desc': 'Análise técnica inicial sem custo',
      'highlight2.title': 'NDA Garantido',
      'highlight2.desc': 'Sigilo total sobre seu projeto',
      'highlight3.title': 'Consulta Gratuita',
      'highlight3.desc': 'Sem compromisso inicial',

      // Form
      'form.name': 'Nome completo',
      'form.name_ph': 'Seu nome completo',
      'form.company': 'Empresa',
      'form.company_ph': 'Nome da sua empresa',
      'form.email': 'E-mail corporativo',
      'form.email_ph': 'seu@empresa.com',
      'form.phone': 'Telefone / WhatsApp',
      'form.phone_ph': '+55 (11) 99999-9999',
      'form.segment': 'Segmento da empresa',
      'form.segment_ph': 'Selecione o segmento',
      'form.project': 'Tipo de projeto',
      'form.project_ph': 'Selecione o tipo de projeto',
      'form.budget': 'Faixa de investimento',
      'form.budget_ph': 'Selecione a faixa',
      'form.message': 'Descreva seu projeto',
      'form.message_ph': 'Conte sobre o problema que precisa resolver, funcionalidades desejadas, prazo e qualquer outro detalhe relevante...',
      'form.terms': 'Concordo com a <a href="#" class="form-link">Política de Privacidade</a> e autorizo o contato da Korven.',
      'form.submit': 'Enviar solicitação',
      'form.success_title': 'Solicitação enviada com sucesso!',
      'form.success_desc': 'Nossa equipe entrará em contato em até 24 horas. Fique atento ao seu e-mail!',
      'form.error_global': 'Erro ao enviar. Tente novamente ou nos contate pelo e-mail.',

      // Form validation
      'val.required': 'Este campo é obrigatório.',
      'val.email': 'Insira um e-mail válido.',
      'val.terms': 'Você precisa aceitar os termos para continuar.',

      // Select options
      'seg.retail': 'Varejo & E-commerce',
      'seg.finance': 'Finanças & Fintech',
      'seg.health': 'Saúde & Healthtech',
      'seg.education': 'Educação & Edtech',
      'seg.logistics': 'Logística & Supply Chain',
      'seg.industry': 'Indústria & Manufatura',
      'seg.services': 'Serviços Profissionais',
      'seg.other': 'Outro',
      'proj.system': 'Sistema / Software interno',
      'proj.web_app': 'Aplicação Web / SaaS',
      'proj.mobile': 'Aplicativo Mobile',
      'proj.api': 'API & Integrações',
      'proj.dashboard': 'Dashboard / BI',
      'proj.automation': 'Automação de Processos',
      'proj.other': 'Outro',
      'budget.1': 'R$ 5.000 – R$ 15.000',
      'budget.2': 'R$ 15.000 – R$ 50.000',
      'budget.3': 'R$ 50.000 – R$ 150.000',
      'budget.4': 'Acima de R$ 150.000',
      'budget.5': 'Ainda não definido',

      // Footer
      'footer.tagline': 'Transformando negócios através da tecnologia.',
      'footer.company': 'Empresa',
      'footer.contact': 'Contato',
      'footer.copy': '© 2025 Korven. Todos os direitos reservados.',
      'footer.sub': 'Desenvolvido com precisão e excelência.',
    },

    en: {
      'nav.services': 'Services',
      'nav.why': 'Why us',
      'nav.process': 'Process',
      'nav.contact': 'Talk to an expert',

      // Hero
      'hero.badge': 'B2B Software Specialists',
      'hero.title1': 'Your business deserves',
      'hero.title2': 'tailor-made software',
      'hero.subtitle': 'We build custom systems that automate processes, increase efficiency and drive growth — with high-level technology and agile delivery.',
      'hero.cta1': 'Request a solution',
      'hero.cta2': 'View services',
      'hero.stat1': 'Projects delivered',
      'hero.stat2': 'Client satisfaction',
      'hero.stat3': 'Years of experience',

      // Trusted
      'trusted.label': 'Trusted by companies seeking technological excellence',
      'trust.secure': 'Guaranteed Security',
      'trust.certified': 'ISO Certified',
      'trust.support': '24/7 Support',
      'trust.team': 'Dedicated Team',
      'trust.agile': 'Agile Delivery',

      // Services
      'services.tag': 'What we do',
      'services.title': 'Complete solutions for your company to grow',
      'services.subtitle': 'Every project is unique. We develop based on the real needs of your business.',
      'service1.title': 'Custom Systems',
      'service1.desc': 'We build tailor-made systems for your company\'s unique workflows. From internal ERPs to complex management platforms.',
      'service1.f1': 'Custom ERP & CRM',
      'service1.f2': 'Management Dashboards',
      'service1.f3': 'Process Automation',
      'service2.title': 'Web Platforms',
      'service2.desc': 'High-performance, secure and scalable web applications, ready for thousands of simultaneous users.',
      'service2.f1': 'Multi-tenant SaaS',
      'service2.f2': 'B2B & B2C Portals',
      'service2.f3': 'APIs & Integrations',
      'service3.title': 'Mobile Apps',
      'service3.desc': 'Native or hybrid iOS and Android apps that connect your company with clients and teams anywhere.',
      'service3.f1': 'iOS & Android',
      'service3.f2': 'Internal Management Apps',
      'service3.f3': 'Push Notifications',
      'service4.title': 'Integrations & APIs',
      'service4.desc': 'We connect your existing systems, eliminating data silos and creating an integrated digital ecosystem.',
      'service4.f1': 'ERP Integrations',
      'service4.f2': 'RESTful & GraphQL APIs',
      'service4.f3': 'Webhook Automation',
      'service5.title': 'Data & Analytics',
      'service5.desc': 'We transform raw data into strategic intelligence. Executive dashboards, reports and predictive analytics.',
      'service5.f1': 'Business Intelligence',
      'service5.f2': 'Automated Reports',
      'service5.f3': 'AI Predictive Analysis',
      'service6.title': 'Cloud Infrastructure',
      'service6.desc': 'Scalable, secure and resilient cloud architecture. Automated deployment, monitoring and high availability.',
      'service6.f1': 'AWS / GCP / Azure',
      'service6.f2': 'DevOps & CI/CD',
      'service6.f3': 'Security & Compliance',

      // Why
      'why.tag': 'Differentials',
      'why.title': 'Why choose Korven?',
      'why.subtitle': 'We are not a generic software house. We are strategic partners committed to the success of your business.',
      'why1.title': 'Technical Precision',
      'why1.desc': 'Clean code, robust architecture and engineering best practices in every line. Zero shortcuts, 100% scalable.',
      'why2.title': 'Full Transparency',
      'why2.desc': 'You follow every step of the development. Weekly meetings, detailed reports and real-time access to progress.',
      'why3.title': 'On-time Delivery',
      'why3.desc': '98% of our projects are delivered within the established deadline. Rigorous planning and proven agile methodology.',
      'why4.title': 'Long-term Partnership',
      'why4.desc': 'We don\'t deliver and disappear. We offer continuous support, maintenance and system evolution as your business grows.',

      // Process
      'process.tag': 'How it works',
      'process.title': 'From briefing to deploy in clear steps',
      'step1.title': 'Understanding',
      'step1.desc': 'Briefing meeting to map your needs, objectives and business context.',
      'step2.title': 'Proposal',
      'step2.desc': 'We prepare a detailed technical proposal with scope, timeline and investment.',
      'step3.title': 'Development',
      'step3.desc': 'Agile sprints with incremental deliveries and constant feedback from you.',
      'step4.title': 'Deploy & Support',
      'step4.desc': 'Assisted launch, team training and continuous post-delivery support.',

      // Tech
      'tech.tag': 'Stack',
      'tech.title': 'Cutting-edge technologies we use',
      'tech.subtitle': 'We choose the best tools on the market for each type of solution.',
      'tech.frontend': 'Frontend',
      'tech.backend': 'Backend',
      'tech.database': 'Database',
      'tech.cloud': 'Cloud & DevOps',

      // Contact
      'contact.tag': 'Let\'s talk',
      'contact.title': 'Ready to transform your business with technology?',
      'contact.desc': 'Fill out the form and our team will contact you within 24 hours with an initial analysis of your project.',
      'highlight1.title': 'Response within 24h',
      'highlight1.desc': 'Initial technical analysis at no cost',
      'highlight2.title': 'NDA Guaranteed',
      'highlight2.desc': 'Total confidentiality about your project',
      'highlight3.title': 'Free Consultation',
      'highlight3.desc': 'No initial commitment',

      // Form
      'form.name': 'Full name',
      'form.name_ph': 'Your full name',
      'form.company': 'Company',
      'form.company_ph': 'Your company name',
      'form.email': 'Corporate email',
      'form.email_ph': 'you@company.com',
      'form.phone': 'Phone / WhatsApp',
      'form.phone_ph': '+1 (555) 000-0000',
      'form.segment': 'Company segment',
      'form.segment_ph': 'Select your segment',
      'form.project': 'Project type',
      'form.project_ph': 'Select project type',
      'form.budget': 'Investment range',
      'form.budget_ph': 'Select range',
      'form.message': 'Describe your project',
      'form.message_ph': 'Tell us about the problem you need to solve, desired features, deadline and any other relevant details...',
      'form.terms': 'I agree to the <a href="#" class="form-link">Privacy Policy</a> and authorize Korven to contact me.',
      'form.submit': 'Send request',
      'form.success_title': 'Request sent successfully!',
      'form.success_desc': 'Our team will contact you within 24 hours. Keep an eye on your email!',
      'form.error_global': 'Error sending. Please try again or contact us by email.',

      // Form validation
      'val.required': 'This field is required.',
      'val.email': 'Please enter a valid email.',
      'val.terms': 'You must accept the terms to continue.',

      // Select options
      'seg.retail': 'Retail & E-commerce',
      'seg.finance': 'Finance & Fintech',
      'seg.health': 'Healthcare & Healthtech',
      'seg.education': 'Education & Edtech',
      'seg.logistics': 'Logistics & Supply Chain',
      'seg.industry': 'Industry & Manufacturing',
      'seg.services': 'Professional Services',
      'seg.other': 'Other',
      'proj.system': 'System / Internal Software',
      'proj.web_app': 'Web Application / SaaS',
      'proj.mobile': 'Mobile Application',
      'proj.api': 'API & Integrations',
      'proj.dashboard': 'Dashboard / BI',
      'proj.automation': 'Process Automation',
      'proj.other': 'Other',
      'budget.1': '$1,000 – $3,000',
      'budget.2': '$3,000 – $12,000',
      'budget.3': '$12,000 – $40,000',
      'budget.4': 'Above $40,000',
      'budget.5': 'Not yet defined',

      // Footer
      'footer.tagline': 'Transforming businesses through technology.',
      'footer.company': 'Company',
      'footer.contact': 'Contact',
      'footer.copy': '© 2025 Korven. All rights reserved.',
      'footer.sub': 'Built with precision and excellence.',
    }
  };

  /* ============================================================
     STATE
     ============================================================ */
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  let currentLang = localStorage.getItem('korven-lang') || 'pt';
  let currentTheme = localStorage.getItem('korven-theme') ||
    (prefersDark.matches ? 'dark' : 'light');

  /* ============================================================
     THEME MANAGEMENT
     ============================================================ */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    currentTheme = theme;
    localStorage.setItem('korven-theme', theme);
  }

  function toggleTheme() {
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
  }

  // Acompanha mudança do tema do sistema (quando não há preferência salva)
  prefersDark.addEventListener('change', (e) => {
    if (!localStorage.getItem('korven-theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  /* ============================================================
     LANGUAGE MANAGEMENT
     ============================================================ */
  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('korven-lang', lang);
    document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');

    const t = TRANSLATIONS[lang];

    // Update elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        if (el.tagName === 'OPTION') {
          el.textContent = t[key];
        } else {
          el.innerHTML = t[key];
        }
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (t[key] !== undefined) {
        el.placeholder = t[key];
      }
    });

    // Update flag button
    const flag = document.getElementById('lang-flag');
    const label = document.getElementById('lang-label');
    if (lang === 'pt') {
      flag.textContent = '🇧🇷';
      label.textContent = 'PT';
    } else {
      flag.textContent = '🇺🇸';
      label.textContent = 'EN';
    }

    // Refresh custom select option texts
    if (typeof refreshCustomSelectTexts === 'function') {
      refreshCustomSelectTexts();
    }
  }

  function toggleLang() {
    applyLang(currentLang === 'pt' ? 'en' : 'pt');
  }

  /* ============================================================
     NAVBAR SCROLL BEHAVIOR
     ============================================================ */
  function initNavbar() {
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
      lastScroll = y;
    }, { passive: true });
  }

  /* ============================================================
     MOBILE MENU
     ============================================================ */
  function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const links = document.getElementById('nav-links');

    btn.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen);

      // Animate hamburger
      const spans = btn.querySelectorAll('span');
      if (isOpen) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });

    // Close on nav link click
    links.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        links.classList.remove('open');
        btn.setAttribute('aria-expanded', false);
        const spans = btn.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      });
    });
  }

  /* ============================================================
     SMOOTH SCROLL (active nav links highlight)
     ============================================================ */
  function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + entry.target.id) {
              link.classList.add('active');
            }
          });
        }
      });
    }, { threshold: 0.4, rootMargin: '-70px 0px 0px 0px' });

    sections.forEach(s => observer.observe(s));
  }

  /* ============================================================
     REVEAL ANIMATIONS (Intersection Observer)
     ============================================================ */
  function initRevealAnimations() {
    const elements = document.querySelectorAll(
      '.service-card, .why-card, .process-step, .tech-category, .trust-badge, ' +
      '.contact-highlight, .stat-item, .section-header, .contact-form-wrapper, .contact-info'
    );

    elements.forEach((el, i) => {
      el.classList.add('reveal');
      el.style.transitionDelay = (i % 4) * 0.08 + 's';
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    elements.forEach(el => observer.observe(el));
  }

  /* ============================================================
     FORM VALIDATION
     ============================================================ */
  function getT(key) {
    return TRANSLATIONS[currentLang][key] || key;
  }

  function setFieldError(fieldId, errId, message) {
    const field = document.getElementById(fieldId);
    const err = document.getElementById(errId);
    if (field) field.classList.add('error');
    if (err) err.textContent = message;
    // Also mark the custom select trigger if applicable
    if (field && field.tagName === 'SELECT') {
      const trigger = field.parentNode.querySelector('.cs-trigger');
      if (trigger) trigger.classList.add('error');
    }
  }

  function clearFieldError(fieldId, errId) {
    const field = document.getElementById(fieldId);
    const err = document.getElementById(errId);
    if (field) field.classList.remove('error');
    if (err) err.textContent = '';
    // Also clear the custom select trigger if applicable
    if (field && field.tagName === 'SELECT') {
      const trigger = field.parentNode.querySelector('.cs-trigger');
      if (trigger) trigger.classList.remove('error');
    }
  }

  function validateForm() {
    let valid = true;

    // Name
    const name = document.getElementById('contact-name');
    if (!name.value.trim()) {
      setFieldError('contact-name', 'err-name', getT('val.required'));
      valid = false;
    } else clearFieldError('contact-name', 'err-name');

    // Company
    const company = document.getElementById('contact-company');
    if (!company.value.trim()) {
      setFieldError('contact-company', 'err-company', getT('val.required'));
      valid = false;
    } else clearFieldError('contact-company', 'err-company');

    // Email
    const email = document.getElementById('contact-email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
      setFieldError('contact-email', 'err-email', getT('val.required'));
      valid = false;
    } else if (!emailRegex.test(email.value)) {
      setFieldError('contact-email', 'err-email', getT('val.email'));
      valid = false;
    } else clearFieldError('contact-email', 'err-email');

    // Segment
    const segment = document.getElementById('contact-segment');
    if (!segment.value) {
      setFieldError('contact-segment', 'err-segment', getT('val.required'));
      valid = false;
    } else clearFieldError('contact-segment', 'err-segment');

    // Project type
    const project = document.getElementById('contact-project');
    if (!project.value) {
      setFieldError('contact-project', 'err-project', getT('val.required'));
      valid = false;
    } else clearFieldError('contact-project', 'err-project');

    // Message
    const message = document.getElementById('contact-message');
    if (!message.value.trim()) {
      setFieldError('contact-message', 'err-message', getT('val.required'));
      valid = false;
    } else clearFieldError('contact-message', 'err-message');

    // Terms
    const terms = document.getElementById('contact-terms');
    if (!terms.checked) {
      setFieldError('contact-terms', 'err-terms', getT('val.terms'));
      valid = false;
    } else clearFieldError('contact-terms', 'err-terms');

    return valid;
  }

  /* ============================================================
     FORM SUBMISSION & WEBHOOK
     ============================================================ */
  function buildWebhookPayload(formData) {
    const now = new Date();

    // Get readable labels for select fields
    const segmentEl = document.getElementById('contact-segment');
    const projectEl = document.getElementById('contact-project');
    const segmentLabel = segmentEl.options[segmentEl.selectedIndex]?.text || formData.get('segment');
    const projectLabel = projectEl.options[projectEl.selectedIndex]?.text || formData.get('project_type');

    return {
      // === CONTEXT FOR N8N ===
      source: 'korven-landing-page',
      event: 'new_contact_request',
      timestamp: now.toISOString(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      language: currentLang,
      theme: currentTheme,
      page_url: window.location.href,
      page_referrer: document.referrer || 'direct',
      user_agent: navigator.userAgent,

      // === CLIENT DATA ===
      client: {
        name: formData.get('name'),
        company: formData.get('company'),
        email: formData.get('email'),
        phone: formData.get('phone') || null,
      },

      project: {
        segment_value: formData.get('segment'),
        segment_label: segmentLabel,
        project_type_value: formData.get('project_type'),
        project_type_label: projectLabel,
        description: formData.get('message'),
      },

      // === FORMATTED SUMMARY (for notifications) ===
      summary: [
        `📋 *Nova solicitação de projeto - Korven*`,
        ``,
        `👤 *Cliente:* ${formData.get('name')}`,
        `🏢 *Empresa:* ${formData.get('company')}`,
        `📧 *E-mail:* ${formData.get('email')}`,
        `📞 *Telefone:* ${formData.get('phone') || 'Não informado'}`,
        ``,
        `🏭 *Segmento:* ${segmentLabel}`,
        `💻 *Tipo de projeto:* ${projectLabel}`,
        ``,
        `📝 *Descrição do projeto:*`,
        formData.get('message'),
        ``,
        `⏰ *Recebido em:* ${now.toLocaleString('pt-BR')}`,
        `🌐 *Origem:* ${window.location.href}`,
      ].join('\n'),
    };
  }

  async function submitForm(e) {
    e.preventDefault();

    if (!validateForm()) {
      // Scroll to first error
      const firstError = document.querySelector('.field-error:not(:empty)');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    const btn = document.getElementById('submit-btn');
    const successEl = document.getElementById('form-success');
    const errorEl = document.getElementById('form-error-global');

    // Loading state
    btn.classList.add('loading');
    btn.disabled = true;
    successEl.style.display = 'none';
    errorEl.style.display = 'none';

    try {
      const formData = new FormData(e.target);
      const payload = buildWebhookPayload(formData);

      const response = await fetch(CONFIG.WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      // Success!
      successEl.style.display = 'flex';
      e.target.reset();

      // Scroll to success message
      successEl.scrollIntoView({ behavior: 'smooth', block: 'center' });

      // Auto hide after delay
      setTimeout(() => {
        successEl.style.display = 'none';
      }, CONFIG.FORM_SUCCESS_HIDE_DELAY);

    } catch (err) {
      console.error('[Korven] Webhook error:', err);
      errorEl.style.display = 'flex';
      errorEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } finally {
      btn.classList.remove('loading');
      btn.disabled = false;
    }
  }

  /* ============================================================
     REAL-TIME FORM VALIDATION (clear errors on input)
     ============================================================ */
  function initFormListeners() {
    const fieldMap = [
      { field: 'contact-name', err: 'err-name' },
      { field: 'contact-company', err: 'err-company' },
      { field: 'contact-email', err: 'err-email' },
      { field: 'contact-segment', err: 'err-segment' },
      { field: 'contact-project', err: 'err-project' },
      { field: 'contact-message', err: 'err-message' },
      { field: 'contact-terms', err: 'err-terms' },
    ];

    fieldMap.forEach(({ field, err }) => {
      const el = document.getElementById(field);
      if (!el) return;
      const eventType = el.type === 'checkbox' ? 'change' : 'input';
      el.addEventListener(eventType, () => clearFieldError(field, err));
    });
  }

  /* ============================================================
     COUNTER ANIMATION FOR STATS
     ============================================================ */
  function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const targets = [50, 98, 5];
    const suffixes = ['+', '%', '+'];
    let animated = false;

    const heroSection = document.getElementById('hero');
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !animated) {
        animated = true;
        counters.forEach((counter, i) => {
          const target = targets[i];
          const suffix = suffixes[i];
          let current = 0;
          const step = target / 40;
          const interval = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(interval);
            }
            counter.textContent = Math.round(current) + suffix;
          }, 35);
        });
      }
    }, { threshold: 0.5 });

    if (heroSection) observer.observe(heroSection);
  }

  /* ============================================================
     INIT
     ============================================================ */
  /* ============================================================
     CUSTOM SELECT COMPONENT
     ============================================================ */
  const customSelects = [];

  function buildCustomSelect(nativeSelect) {
    const wrapper = document.createElement('div');
    wrapper.className = 'custom-select-wrapper';
    wrapper.setAttribute('role', 'combobox');
    wrapper.setAttribute('aria-haspopup', 'listbox');
    wrapper.setAttribute('aria-expanded', 'false');

    // Trigger button
    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'cs-trigger';
    trigger.setAttribute('aria-label', nativeSelect.previousElementSibling?.textContent || 'Select');

    const triggerText = document.createElement('span');
    triggerText.className = 'cs-trigger-text';
    triggerText.textContent = nativeSelect.options[0]?.text || '';

    const chevron = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    chevron.setAttribute('class', 'cs-chevron');
    chevron.setAttribute('viewBox', '0 0 24 24');
    chevron.setAttribute('fill', 'none');
    chevron.setAttribute('stroke', 'currentColor');
    chevron.setAttribute('stroke-width', '2.5');
    chevron.setAttribute('stroke-linecap', 'round');
    chevron.setAttribute('stroke-linejoin', 'round');
    chevron.setAttribute('aria-hidden', 'true');
    const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
    polyline.setAttribute('points', '6 9 12 15 18 9');
    chevron.appendChild(polyline);

    trigger.appendChild(triggerText);
    trigger.appendChild(chevron);

    // Dropdown panel
    const dropdown = document.createElement('div');
    dropdown.className = 'cs-dropdown';
    dropdown.setAttribute('role', 'listbox');

    // Options list
    const optionsList = document.createElement('div');
    optionsList.className = 'cs-options';

    // Build options from native select
    const buildOptions = () => {
      optionsList.innerHTML = '';
      Array.from(nativeSelect.options).forEach((opt, idx) => {
        const item = document.createElement('div');
        item.className = 'cs-option';
        if (idx === 0) item.classList.add('placeholder-opt');
        item.setAttribute('role', 'option');
        item.setAttribute('data-value', opt.value);
        item.setAttribute('data-i18n', opt.getAttribute('data-i18n') || '');
        item.textContent = opt.text;

        if (!idx) {
          item.classList.add('placeholder-opt');
        } else {
          item.addEventListener('click', () => {
            selectOption(item, opt.value, opt.text);
          });
        }
        optionsList.appendChild(item);
      });
    };

    buildOptions();
    dropdown.appendChild(optionsList);

    wrapper.appendChild(trigger);
    wrapper.appendChild(dropdown);

    // Insert after native select
    nativeSelect.parentNode.insertBefore(wrapper, nativeSelect.nextSibling);

    let isOpen = false;

    const openDropdown = () => {
      // Close all others first
      customSelects.forEach(cs => { if (cs.close) cs.close(); });
      isOpen = true;
      trigger.classList.add('open');
      dropdown.classList.add('open');
      wrapper.setAttribute('aria-expanded', 'true');
    };

    const closeDropdown = () => {
      isOpen = false;
      trigger.classList.remove('open');
      dropdown.classList.remove('open');
      wrapper.setAttribute('aria-expanded', 'false');
    };

    const selectOption = (item, value, text) => {
      // Deselect all
      optionsList.querySelectorAll('.cs-option').forEach(o => o.classList.remove('selected'));
      item.classList.add('selected');
      triggerText.textContent = text;
      trigger.classList.add('has-value');
      trigger.classList.remove('error');
      // Sync native select
      nativeSelect.value = value;
      nativeSelect.dispatchEvent(new Event('change', { bubbles: true }));
      // Clear error
      const errId = 'err-' + nativeSelect.id.replace('contact-', '');
      const errEl = document.getElementById(errId);
      if (errEl) errEl.textContent = '';
      closeDropdown();
    };

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      isOpen ? closeDropdown() : openDropdown();
    });

    // Keyboard navigation
    wrapper.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeDropdown();
      if (e.key === 'Enter' && !isOpen) openDropdown();
    });

    // Store reference
    const ref = {
      close: closeDropdown,
      nativeSelect,
      buildOptions,
      optionsList,
      triggerText,
      trigger,
    };
    customSelects.push(ref);
    return ref;
  }

  function initCustomSelects() {
    document.querySelectorAll('.form-group select').forEach(select => {
      buildCustomSelect(select);
    });

    // Close on outside click
    document.addEventListener('click', () => {
      customSelects.forEach(cs => { if (cs.close) cs.close(); });
    });
  }

  // Rebuild option texts after language change (called from applyLang)
  function refreshCustomSelectTexts() {
    customSelects.forEach(({ nativeSelect, optionsList, triggerText }) => {
      // Update option labels from refreshed native options
      const nativeOpts = Array.from(nativeSelect.options);
      const items = optionsList.querySelectorAll('.cs-option');
      items.forEach((item, idx) => {
        if (nativeOpts[idx]) {
          item.textContent = nativeOpts[idx].text;
        }
      });
      // Update selected trigger text
      const selectedIdx = nativeSelect.selectedIndex;
      if (selectedIdx > 0 && nativeOpts[selectedIdx]) {
        triggerText.textContent = nativeOpts[selectedIdx].text;
      } else {
        triggerText.textContent = nativeOpts[0]?.text || '';
      }
    });
  }

  function init() {
    // Apply saved preferences
    applyTheme(currentTheme);
    applyLang(currentLang);

    // Theme toggle
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

    // Language toggle
    document.getElementById('lang-toggle').addEventListener('click', toggleLang);

    // Navbar
    initNavbar();
    initMobileMenu();
    initScrollSpy();

    // Custom selects
    initCustomSelects();

    // Animations
    initRevealAnimations();
    animateCounters();

    // Form
    const form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', submitForm);
      initFormListeners();
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          e.preventDefault();
          const navHeight = 70;
          const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });

    console.log('%cKorven 🚀', 'color: #3b82f6; font-size: 20px; font-weight: 900;');
    console.log('%cSoftware sob medida para sua empresa.', 'color: #94afc8; font-size: 12px;');
  }

  // Wait for DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
