import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Traducciones
const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        home: "Home",
        protocol: "Protocol",
        platform: "Platform", 
        assets: "Assets",
        economics: "Economics",
        contact: "Contact",
        governmentOnboarding: "Government Onboarding",
        explorePlatform: "Explore Platform"
      },
      
      // Home page
      home: {
        heroTitle: "ARCHT",
        heroSubtitle: "Sovereign Digital Infrastructure for Real‑World Asset Tokenization",
        heroDescription: "Convert verified resources into programmable, tradable, and fully auditable digital assets. Instant liquidity (T+0), MRV‑grade traceability, and institutional compliance by design.",
        exploreProtocol: "Explore the Protocol",
        governmentOnboarding: "Government Onboarding",
        totalValueLocked: "Total Value Locked",
        dailyVolume: "Daily Volume", 
        activeAssets: "Active Assets",
        globalReach: "Global Reach",
        institutionalCompliance: "Institutional-Grade Compliance & Interoperability",
        trustedBy: "Trusted by governments, institutions, and enterprises worldwide",
        fourPillars: "Four Pillars of Sovereign Infrastructure",
        fourPillarsDesc: "Core principles that enable universal liquidity with verifiable ESG and embedded compliance",
        marketIndices: "ARCHT Market Indices",
        marketIndicesDesc: "Real-time tracking of tokenized asset performance across mining, agriculture, energy, and carbon markets",
        brazilPilot: "Brazil Pilot Impact",
        brazilPilotDesc: "Projected fiscal impact: +US$200B/year; 5‑year regional value creation >US$1T",
        annualFiscalImpact: "Annual Fiscal Impact",
        fiveYearValue: "5-Year Regional Value",
        esgImpactMetrics: "ESG Impact Metrics",
        esgDescription: "Real‑time MRV, fraud‑resistant certification, automated reporting",
        exploreBrazilPilot: "Explore Brazil Pilot"
      },

      // Features
      features: {
        sovereignSecurity: "Sovereign Grade Security",
        sovereignSecurityDesc: "Military-grade NFC chips, quantum-resistant encryption, and multi-signature validation",
        globalInteroperability: "Global Interoperability",
        globalInteroperabilityDesc: "Native integration with 15+ blockchain networks and traditional banking systems",
        instantLiquidity: "Instant Liquidity (T+0)",
        instantLiquidityDesc: "Transform traditionally illiquid assets into instantly tradable digital tokens",
        aiAnalytics: "AI-Powered Analytics", 
        aiAnalyticsDesc: "95%+ accuracy in asset validation using satellite data and predictive AI",
        institutionalGrade: "Institutional Grade",
        institutionalGradeDesc: "MiCA, FATF, Basel III compliant with automated regulatory reporting",
        esgTransparency: "ESG Transparency",
        esgTransparencyDesc: "Complete traceability from extraction to consumption with real-time ESG metrics"
      },

      // Contact
      contact: {
        title: "Contact Us",
        subtitle: "Get in touch with our team for institutional requests, partnerships, and technical support.",
        getInTouch: "Get in Touch",
        contactTeam: "Contact our team for institutional partnerships and technical support.",
        email: "Email",
        phone: "Phone",
        offices: "Offices",
        businessHours: "Business Hours",
        availableUponRequest: "Available upon request",
        support247: "24/7 Support",
        globalCoverage: "Global Coverage",
        departments: "Departments",
        departmentsDesc: "Specialized teams for different types of inquiries and partnerships.",
        sendMessage: "Send us a Message",
        sendMessageDesc: "Fill out the form below and we'll get back to you within 24 hours.",
        firstName: "First Name",
        lastName: "Last Name",
        organization: "Organization",
        inquiryType: "Inquiry Type",
        message: "Message",
        sendMessageBtn: "Send Message",
        readyToStart: "Ready to Get Started?",
        joinFuture: "Join the future of tokenized real-world assets with ARCHT Protocol.",
        scheduleConsultation: "Schedule Consultation",
        downloadWhitepaper: "Download Whitepaper"
      },

      // Common
      common: {
        backToHome: "Back to Home",
        learnMore: "Learn More",
        getStarted: "Get Started",
        viewDetails: "View Details",
        comingSoon: "Coming Soon",
        underDevelopment: "Under Development",
        stayTuned: "We're working hard to bring you this feature. Stay tuned for updates!"
      }
    }
  },
  
  es: {
    translation: {
      // Navigation
      nav: {
        home: "Inicio",
        protocol: "Protocolo",
        platform: "Plataforma",
        assets: "Activos", 
        economics: "Economía",
        contact: "Contacto",
        governmentOnboarding: "Incorporación Gubernamental",
        explorePlatform: "Explorar Plataforma"
      },

      // Home page
      home: {
        heroTitle: "ARCHT",
        heroSubtitle: "Infraestructura Digital Soberana para Tokenización de Activos del Mundo Real",
        heroDescription: "Convierte recursos verificados en activos digitales programables, comerciables y completamente auditables. Liquidez instantánea (T+0), trazabilidad grado MRV y cumplimiento institucional por diseño.",
        exploreProtocol: "Explorar el Protocolo",
        governmentOnboarding: "Incorporación Gubernamental",
        totalValueLocked: "Valor Total Bloqueado",
        dailyVolume: "Volumen Diario",
        activeAssets: "Activos Activos",
        globalReach: "Alcance Global",
        institutionalCompliance: "Cumplimiento e Interoperabilidad de Grado Institucional",
        trustedBy: "Confiado por gobiernos, instituciones y empresas en todo el mundo",
        fourPillars: "Cuatro Pilares de Infraestructura Soberana",
        fourPillarsDesc: "Principios fundamentales que permiten liquidez universal con ESG verificable y cumplimiento integrado",
        marketIndices: "Índices de Mercado ARCHT",
        marketIndicesDesc: "Seguimiento en tiempo real del rendimiento de activos tokenizados en minería, agricultura, energía y mercados de carbono",
        brazilPilot: "Impacto del Piloto Brasil",
        brazilPilotDesc: "Impacto fiscal proyectado: +US$200B/año; creación de valor regional a 5 años >US$1T",
        annualFiscalImpact: "Impacto Fiscal Anual",
        fiveYearValue: "Valor Regional a 5 Años",
        esgImpactMetrics: "Métricas de Impacto ESG",
        esgDescription: "MRV en tiempo real, certificación resistente al fraude, reportes automatizados",
        exploreBrazilPilot: "Explorar Piloto Brasil"
      },

      // Features
      features: {
        sovereignSecurity: "Seguridad de Grado Soberano",
        sovereignSecurityDesc: "Chips NFC de grado militar, cifrado resistente a cuánticos y validación multi-firma",
        globalInteroperability: "Interoperabilidad Global",
        globalInteroperabilityDesc: "Integración nativa con 15+ redes blockchain y sistemas bancarios tradicionales",
        instantLiquidity: "Liquidez Instantánea (T+0)",
        instantLiquidityDesc: "Transforma activos tradicionalmente ilíquidos en tokens digitales instantáneamente comerciables",
        aiAnalytics: "Analíticas Impulsadas por IA",
        aiAnalyticsDesc: "95%+ de precisión en validación de activos usando datos satelitales e IA predictiva",
        institutionalGrade: "Grado Institucional",
        institutionalGradeDesc: "Cumplimiento MiCA, FATF, Basel III con reportes regulatorios automatizados",
        esgTransparency: "Transparencia ESG",
        esgTransparencyDesc: "Trazabilidad completa desde la extracción hasta el consumo con métricas ESG en tiempo real"
      },

      // Contact
      contact: {
        title: "Contáctanos",
        subtitle: "Ponte en contacto con nuestro equipo para solicitudes institucionales, asociaciones y soporte técnico.",
        getInTouch: "Ponte en Contacto",
        contactTeam: "Contacta a nuestro equipo para asociaciones institucionales y soporte técnico.",
        email: "Correo",
        phone: "Teléfono",
        offices: "Oficinas",
        businessHours: "Horario Comercial",
        availableUponRequest: "Disponible bajo solicitud",
        support247: "Soporte 24/7",
        globalCoverage: "Cobertura Global",
        departments: "Departamentos",
        departmentsDesc: "Equipos especializados para diferentes tipos de consultas y asociaciones.",
        sendMessage: "Envíanos un Mensaje",
        sendMessageDesc: "Completa el formulario a continuación y te responderemos en 24 horas.",
        firstName: "Nombre",
        lastName: "Apellido",
        organization: "Organización",
        inquiryType: "Tipo de Consulta",
        message: "Mensaje",
        sendMessageBtn: "Enviar Mensaje",
        readyToStart: "¿Listo para Comenzar?",
        joinFuture: "Únete al futuro de los activos tokenizados del mundo real con ARCHT Protocol.",
        scheduleConsultation: "Programar Consulta",
        downloadWhitepaper: "Descargar Whitepaper"
      },

      // Common
      common: {
        backToHome: "Volver al Inicio",
        learnMore: "Saber Más",
        getStarted: "Comenzar",
        viewDetails: "Ver Detalles",
        comingSoon: "Próximamente",
        underDevelopment: "En Desarrollo",
        stayTuned: "Estamos trabajando duro para traerte esta funcionalidad. ¡Mantente atento a las actualizaciones!"
      }
    }
  },

  pt: {
    translation: {
      // Navigation
      nav: {
        home: "Início",
        protocol: "Protocolo",
        platform: "Plataforma",
        assets: "Ativos",
        economics: "Economia",
        contact: "Contato",
        governmentOnboarding: "Integração Governamental",
        explorePlatform: "Explorar Plataforma"
      },

      // Home page
      home: {
        heroTitle: "ARCHT",
        heroSubtitle: "Infraestrutura Digital Soberana para Tokenização de Ativos do Mundo Real",
        heroDescription: "Converta recursos verificados em ativos digitais programáveis, negociáveis e totalmente auditáveis. Liquidez instantânea (T+0), rastreabilidade grau MRV e conformidade institucional por design.",
        exploreProtocol: "Explorar o Protocolo",
        governmentOnboarding: "Integração Governamental",
        totalValueLocked: "Valor Total Bloqueado",
        dailyVolume: "Volume Diário",
        activeAssets: "Ativos Ativos",
        globalReach: "Alcance Global",
        institutionalCompliance: "Conformidade e Interoperabilidade de Grau Institucional",
        trustedBy: "Confiado por governos, instituições e empresas em todo o mundo",
        fourPillars: "Quatro Pilares da Infraestrutura Soberana",
        fourPillarsDesc: "Princípios fundamentais que permitem liquidez universal com ESG verificável e conformidade integrada",
        marketIndices: "Índices de Mercado ARCHT",
        marketIndicesDesc: "Rastreamento em tempo real do desempenho de ativos tokenizados em mineração, agricultura, energia e mercados de carbono",
        brazilPilot: "Impacto do Piloto Brasil",
        brazilPilotDesc: "Impacto fiscal projetado: +US$200B/ano; criação de valor regional em 5 anos >US$1T",
        annualFiscalImpact: "Impacto Fiscal Anual",
        fiveYearValue: "Valor Regional de 5 Anos",
        esgImpactMetrics: "Métricas de Impacto ESG",
        esgDescription: "MRV em tempo real, certificação resistente a fraudes, relatórios automatizados",
        exploreBrazilPilot: "Explorar Piloto Brasil"
      },

      // Features
      features: {
        sovereignSecurity: "Segurança de Grau Soberano",
        sovereignSecurityDesc: "Chips NFC de grau militar, criptografia resistente a quânticos e validação multi-assinatura",
        globalInteroperability: "Interoperabilidade Global",
        globalInteroperabilityDesc: "Integração nativa com 15+ redes blockchain e sistemas bancários tradicionais",
        instantLiquidity: "Liquidez Instantânea (T+0)",
        instantLiquidityDesc: "Transforma ativos tradicionalmente ilíquidos em tokens digitais instantaneamente negociáveis",
        aiAnalytics: "Análises Impulsionadas por IA",
        aiAnalyticsDesc: "95%+ de precisão na validação de ativos usando dados de satélite e IA preditiva",
        institutionalGrade: "Grau Institucional",
        institutionalGradeDesc: "Conformidade MiCA, FATF, Basel III com relatórios regulatórios automatizados",
        esgTransparency: "Transparência ESG",
        esgTransparencyDesc: "Rastreabilidade completa da extração ao consumo com métricas ESG em tempo real"
      },

      // Contact
      contact: {
        title: "Entre em Contato",
        subtitle: "Entre em contato com nossa equipe para solicitações institucionais, parcerias e suporte técnico.",
        getInTouch: "Entre em Contato",
        contactTeam: "Entre em contato com nossa equipe para parcerias institucionais e suporte técnico.",
        email: "E-mail",
        phone: "Telefone",
        offices: "Escritórios",
        businessHours: "Horário Comercial",
        availableUponRequest: "Disponível mediante solicitação",
        support247: "Suporte 24/7",
        globalCoverage: "Cobertura Global",
        departments: "Departamentos",
        departmentsDesc: "Equipes especializadas para diferentes tipos de consultas e parcerias.",
        sendMessage: "Envie-nos uma Mensagem",
        sendMessageDesc: "Preencha o formulário abaixo e entraremos em contato em 24 horas.",
        firstName: "Nome",
        lastName: "Sobrenome",
        organization: "Organização",
        inquiryType: "Tipo de Consulta",
        message: "Mensagem",
        sendMessageBtn: "Enviar Mensagem",
        readyToStart: "Pronto para Começar?",
        joinFuture: "Junte-se ao futuro dos ativos tokenizados do mundo real com o ARCHT Protocol.",
        scheduleConsultation: "Agendar Consulta",
        downloadWhitepaper: "Baixar Whitepaper"
      },

      // Common
      common: {
        backToHome: "Voltar ao Início",
        learnMore: "Saber Mais",
        getStarted: "Começar",
        viewDetails: "Ver Detalhes",
        comingSoon: "Em Breve",
        underDevelopment: "Em Desenvolvimento",
        stayTuned: "Estamos trabalhando duro para trazer este recurso. Fique atento às atualizações!"
      }
    }
  },

  ar: {
    translation: {
      // Navigation
      nav: {
        home: "الرئيسية",
        protocol: "البروتوكول",
        platform: "المنصة",
        assets: "الأصول",
        economics: "الاقتصاد",
        contact: "اتصل بنا",
        governmentOnboarding: "الإدماج الحكومي",
        explorePlatform: "استكشاف المنصة"
      },

      // Home page
      home: {
        heroTitle: "ARCHT",
        heroSubtitle: "البنية التحتية الرقمية السيادية لترميز الأصول الحقيقية",
        heroDescription: "تحويل الموارد المتحققة إلى أصول رقمية قابلة للبرمجة والتداول والمراجعة بالكامل. سيولة فورية (T+0)، إمكانية التتبع بدرجة MRV، والامتثال المؤسسي بالتصميم.",
        exploreProtocol: "استكشاف البروتوكول",
        governmentOnboarding: "الإدماج الحكومي",
        totalValueLocked: "إجمالي القيمة المقفلة",
        dailyVolume: "الحجم اليومي",
        activeAssets: "الأصول النشطة",
        globalReach: "الوصول العالمي",
        institutionalCompliance: "الامتثال والتشغيل البيني بالدرجة المؤسسية",
        trustedBy: "موثوق به من قبل الحكومات والمؤسسات والشركات في جميع أنحاء العالم",
        fourPillars: "الأركان الأربعة للبنية التحتية السيادية",
        fourPillarsDesc: "المبادئ الأساسية التي تمكن السيولة العالمية مع ESG قابل للتحقق والامتثال المدمج",
        marketIndices: "مؤشرات السوق ARCHT",
        marketIndicesDesc: "تتبع في الوقت الفعلي لأداء الأصول المرمزة عبر التعدين والزراعة والطاقة وأسواق الكربون",
        brazilPilot: "تأثير التجربة البرازيلية",
        brazilPilotDesc: "التأثير المالي المتوقع: +200 مليار دولار أمريكي/سنة؛ خلق قيمة إقليمية لمدة 5 سنوات >1 تريليون دولار أمريكي",
        annualFiscalImpact: "التأثير المالي السنوي",
        fiveYearValue: "القيمة الإقليمية لـ 5 سنوات",
        esgImpactMetrics: "مقاييس تأثير ESG",
        esgDescription: "MRV في الوقت الفعلي، شهادة مقاومة للاحتيال، تقارير آلية",
        exploreBrazilPilot: "استكشاف التجربة البرازيلية"
      },

      // Features
      features: {
        sovereignSecurity: "الأمان بالدرجة السيادية",
        sovereignSecurityDesc: "رقائق NFC بالدرجة العسكرية، تشفير مقاوم للكم، والتحقق متعدد التوقيع",
        globalInteroperability: "التشغيل البيني العالمي",
        globalInteroperabilityDesc: "التكامل الأصلي مع 15+ شبكة بلوك تشين وأنظمة مصرفية تقليدية",
        instantLiquidity: "السيولة الفورية (T+0)",
        instantLiquidityDesc: "تحويل الأصول التقليدية غير السائلة إلى رموز رقمية قابلة للتداول فوراً",
        aiAnalytics: "التحليلات المدعومة بالذكاء الاصطناعي",
        aiAnalyticsDesc: "دقة 95%+ في التحقق من الأصول باستخدام بيانات الأقمار الصناعية والذكاء الاصطناعي التنبؤي",
        institutionalGrade: "الدرجة المؤسسية",
        institutionalGradeDesc: "امتثال MiCA، FATF، Basel III مع التقارير التنظيمية الآلية",
        esgTransparency: "شفافية ESG",
        esgTransparencyDesc: "إمكانية التتبع الكاملة من الاستخراج إلى الاستهلاك مع مقاييس ESG في الوقت الفعلي"
      },

      // Contact
      contact: {
        title: "اتصل بنا",
        subtitle: "تواصل مع فريقنا للطلبات المؤسسية والشراكات والدعم التقني.",
        getInTouch: "تواصل معنا",
        contactTeam: "تواصل مع فريقنا للشراكات المؤسسية والدعم التقني.",
        email: "البريد الإلكتروني",
        phone: "الهاتف",
        offices: "المكاتب",
        businessHours: "ساعات العمل",
        availableUponRequest: "متاح عند الطلب",
        support247: "دعم 24/7",
        globalCoverage: "تغطية عالمية",
        departments: "الأقسام",
        departmentsDesc: "فرق متخصصة لأنواع مختلفة من الاستفسارات والشراكات.",
        sendMessage: "أرسل لنا رسالة",
        sendMessageDesc: "املأ النموذج أدناه وسنعاود الاتصال بك خلال 24 ساعة.",
        firstName: "الاسم الأول",
        lastName: "اسم العائلة",
        organization: "المنظمة",
        inquiryType: "نوع الاستفسار",
        message: "الرسالة",
        sendMessageBtn: "إرسال الرسالة",
        readyToStart: "مستعد للبدء؟",
        joinFuture: "انضم إلى مستقبل الأصول المرمزة في العالم الحقيقي مع بروتوكول ARCHT.",
        scheduleConsultation: "جدولة استشارة",
        downloadWhitepaper: "تحميل الورقة البيضاء"
      },

      // Common
      common: {
        backToHome: "العودة للرئيسية",
        learnMore: "تعلم المزيد",
        getStarted: "ابدأ",
        viewDetails: "عرض التفاصيل",
        comingSoon: "قريباً",
        underDevelopment: "قيد التطوير",
        stayTuned: "نحن نعمل بجد لنقدم لك هذه الميزة. ترقب التحديثات!"
      }
    }
  }
};

// Configuración de detección de idioma
const detectionOptions = {
  // Orden de detección
  order: ['navigator', 'htmlTag', 'path', 'subdomain'],
  
  // Mapeo de países a idiomas
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,
  
  // Cache del idioma detectado
  caches: ['localStorage', 'sessionStorage'],
  
  // Configuración del navegador
  checkWhitelist: true
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    
    detection: detectionOptions,
    
    interpolation: {
      escapeValue: false
    },
    
    react: {
      useSuspense: false
    }
  });

export default i18n;