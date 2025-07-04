import React, { createContext, useContext, useState, useEffect } from 'react';
import { Feature, Package, Testimonial, FAQ, HeroContent } from '../types';

interface ContentContextType {
  heroContent: HeroContent;
  features: Feature[];
  packages: Package[];
  testimonials: Testimonial[];
  faqs: FAQ[];
  updateHeroContent: (content: HeroContent) => void;
  addFeature: (feature: Omit<Feature, 'id'>) => void;
  updateFeature: (id: string, feature: Omit<Feature, 'id'>) => void;
  deleteFeature: (id: string) => void;
  addPackage: (pkg: Omit<Package, 'id'>) => void;
  updatePackage: (id: string, pkg: Omit<Package, 'id'>) => void;
  deletePackage: (id: string) => void;
  addTestimonial: (testimonial: Omit<Testimonial, 'id'>) => void;
  updateTestimonial: (id: string, testimonial: Omit<Testimonial, 'id'>) => void;
  deleteTestimonial: (id: string) => void;
  addFAQ: (faq: Omit<FAQ, 'id'>) => void;
  updateFAQ: (id: string, faq: Omit<FAQ, 'id'>) => void;
  deleteFAQ: (id: string) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};

const generateId = () => Math.random().toString(36).substr(2, 9);

const defaultHeroContent: HeroContent = {
  title: "Kuasai Seni Trading Cryptocurrency",
  subtitle: "Trading Crypto Academy",
  description: "Bergabunglah dengan komunitas trader sukses dan pelajari strategi trading yang terbukti menguntungkan. Dari pemula hingga expert, kami siap membimbing perjalanan trading Anda.",
  whatsappNumber: "6281234567890"
};

const defaultFeatures: Feature[] = [
  {
    id: '1',
    icon: 'TrendingUp',
    title: "Analisis Teknikal Profesional",
    description: "Pelajari cara membaca chart, indikator, dan pattern trading yang menguntungkan"
  },
  {
    id: '2',
    icon: 'Target',
    title: "Sinyal Trading Akurat",
    description: "Dapatkan sinyal trading harian dengan analisis mendalam dan entry/exit point"
  },
  {
    id: '3',
    icon: 'Shield',
    title: "Risk Management",
    description: "Kuasai strategi pengelolaan risiko untuk melindungi modal trading Anda"
  },
  {
    id: '4',
    icon: 'BarChart3',
    title: "Analisis Fundamental",
    description: "Memahami faktor-faktor yang mempengaruhi pergerakan harga cryptocurrency"
  },
  {
    id: '5',
    icon: 'Users',
    title: "Komunitas Trader",
    description: "Bergabung dengan komunitas trader aktif untuk sharing pengalaman dan strategi"
  },
  {
    id: '6',
    icon: 'Clock',
    title: "Support 24/7",
    description: "Dapatkan bantuan dan konsultasi trading kapan saja Anda membutuhkannya"
  }
];

const defaultPackages: Package[] = [
  {
    id: '1',
    name: "Paket Pemula",
    price: "Rp 299.000",
    description: "Cocok untuk trader pemula yang ingin memulai trading crypto",
    features: [
      "Materi dasar trading cryptocurrency",
      "Video tutorial step-by-step",
      "E-book panduan trading",
      "Akses grup Telegram",
      "Support via WhatsApp",
      "Sertifikat completion"
    ],
    popular: false
  },
  {
    id: '2',
    name: "Paket Professional",
    price: "Rp 599.000",
    description: "Untuk trader yang ingin menguasai strategi advanced",
    features: [
      "Semua fitur Paket Pemula",
      "Sinyal trading harian",
      "Live trading session",
      "Analisis teknikal mendalam",
      "Risk management tools",
      "1-on-1 mentoring session",
      "Akses seumur hidup"
    ],
    popular: true
  },
  {
    id: '3',
    name: "Paket VIP",
    price: "Rp 999.000",
    description: "Paket lengkap dengan mentoring personal intensif",
    features: [
      "Semua fitur Paket Professional",
      "Personal trading mentor",
      "Portfolio review bulanan",
      "Akses trading bot premium",
      "Webinar eksklusif",
      "Priority support",
      "Profit sharing program",
      "Lifetime updates"
    ],
    popular: false
  }
];

const defaultTestimonials: Testimonial[] = [
  {
    id: '1',
    name: "Budi Santoso",
    role: "Trader Pemula",
    content: "Setelah mengikuti kursus ini, saya berhasil meraih profit konsisten 15% per bulan. Materinya sangat mudah dipahami dan mentornya sangat sabar.",
    rating: 5
  },
  {
    id: '2',
    name: "Sari Dewi",
    role: "Ibu Rumah Tangga",
    content: "Awalnya saya takut trading crypto, tapi setelah belajar di sini, sekarang saya bisa trading sambil mengurus rumah. Profit saya sudah bisa untuk tambahan kebutuhan keluarga.",
    rating: 5
  },
  {
    id: '3',
    name: "Ahmad Rizki",
    role: "Karyawan Swasta",
    content: "Kursus yang sangat worth it! Dalam 3 bulan, modal trading saya sudah balik dan sekarang profit terus. Recommended banget untuk yang serius mau belajar trading.",
    rating: 5
  },
  {
    id: '4',
    name: "Maya Putri",
    role: "Mahasiswa",
    content: "Sebagai mahasiswa, ini investasi terbaik yang pernah saya lakukan. Sekarang saya bisa bayar kuliah sendiri dari hasil trading. Terima kasih Trading Crypto Academy!",
    rating: 5
  },
  {
    id: '5',
    name: "Doni Pratama",
    role: "Entrepreneur",
    content: "Strategi yang diajarkan sangat aplikatif dan profitable. Sekarang trading crypto jadi salah satu sumber income utama bisnis saya.",
    rating: 4
  },
  {
    id: '6',
    name: "Linda Sari",
    role: "Freelancer",
    content: "Mentornya sangat berpengalaman dan selalu siap membantu. Grup komunitasnya juga aktif sharing tips dan strategi trading terbaru.",
    rating: 5
  }
];

const defaultFaqs: FAQ[] = [
  {
    id: '1',
    question: "Apakah kursus ini cocok untuk pemula yang belum pernah trading?",
    answer: "Sangat cocok! Kursus kami dirancang khusus untuk pemula. Kami mulai dari dasar-dasar trading, cara membaca chart, hingga strategi advanced. Materi disusun secara bertahap sehingga mudah dipahami."
  },
  {
    id: '2',
    question: "Berapa modal minimum yang dibutuhkan untuk mulai trading?",
    answer: "Kami merekomendasikan modal minimum Rp 1.000.000 untuk trading spot dan Rp 500.000 untuk belajar. Namun, Anda bisa mulai dengan modal lebih kecil untuk latihan dan memahami market terlebih dahulu."
  },
  {
    id: '3',
    question: "Apakah ada jaminan profit setelah mengikuti kursus?",
    answer: "Trading crypto memiliki risiko, sehingga tidak ada jaminan profit 100%. Namun, kami memberikan strategi yang terbukti dan risk management yang baik untuk memaksimalkan peluang profit dan meminimalkan kerugian."
  },
  {
    id: '4',
    question: "Bagaimana cara mengakses materi kursus setelah pembayaran?",
    answer: "Setelah pembayaran dikonfirmasi, Anda akan mendapatkan akses ke platform pembelajaran online kami. Semua materi video, e-book, dan tools trading dapat diakses 24/7."
  },
  {
    id: '5',
    question: "Apakah ada support jika mengalami kesulitan saat belajar?",
    answer: "Tentu saja! Kami menyediakan support melalui WhatsApp, grup Telegram, dan untuk paket tertentu ada sesi mentoring 1-on-1. Tim support kami siap membantu Anda kapan saja."
  },
  {
    id: '6',
    question: "Berapa lama waktu yang dibutuhkan untuk menguasai trading crypto?",
    answer: "Untuk memahami dasar-dasar trading, biasanya membutuhkan 2-4 minggu. Namun untuk menjadi trader yang konsisten profitable, dibutuhkan latihan dan pengalaman 3-6 bulan dengan bimbingan yang tepat."
  },
  {
    id: '7',
    question: "Apakah kursus ini mengajarkan trading untuk semua jenis cryptocurrency?",
    answer: "Ya, kami mengajarkan trading untuk berbagai cryptocurrency populer seperti Bitcoin, Ethereum, BNB, dan altcoin lainnya. Strategi yang diajarkan dapat diterapkan di berbagai pair trading."
  },
  {
    id: '8',
    question: "Bagaimana jika saya tidak puas dengan kursus yang diikuti?",
    answer: "Kami memberikan garansi 7 hari money back jika Anda tidak puas dengan kualitas kursus kami. Kepuasan dan kesuksesan member adalah prioritas utama kami."
  }
];

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [heroContent, setHeroContent] = useState<HeroContent>(defaultHeroContent);
  const [features, setFeatures] = useState<Feature[]>(defaultFeatures);
  const [packages, setPackages] = useState<Package[]>(defaultPackages);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(defaultTestimonials);
  const [faqs, setFaqs] = useState<FAQ[]>(defaultFaqs);

  useEffect(() => {
    const savedContent = localStorage.getItem('admin_content');
    if (savedContent) {
      try {
        const content = JSON.parse(savedContent);
        setHeroContent(content.heroContent || defaultHeroContent);
        setFeatures(content.features || defaultFeatures);
        setPackages(content.packages || defaultPackages);
        setTestimonials(content.testimonials || defaultTestimonials);
        setFaqs(content.faqs || defaultFaqs);
      } catch (error) {
        console.error('Error loading saved content:', error);
        // Use defaults if there's an error parsing saved content
      }
    }
  }, []);

  const saveToStorage = (data: any) => {
    try {
      localStorage.setItem('admin_content', JSON.stringify(data));
    } catch (error) {
      console.error('Error saving content to localStorage:', error);
    }
  };

  const updateHeroContent = (content: HeroContent) => {
    setHeroContent(content);
    saveToStorage({ heroContent: content, features, packages, testimonials, faqs });
  };

  const addFeature = (feature: Omit<Feature, 'id'>) => {
    const newFeature = { ...feature, id: generateId() };
    const newFeatures = [...features, newFeature];
    setFeatures(newFeatures);
    saveToStorage({ heroContent, features: newFeatures, packages, testimonials, faqs });
  };

  const updateFeature = (id: string, feature: Omit<Feature, 'id'>) => {
    const newFeatures = features.map(f => f.id === id ? { ...feature, id } : f);
    setFeatures(newFeatures);
    saveToStorage({ heroContent, features: newFeatures, packages, testimonials, faqs });
  };

  const deleteFeature = (id: string) => {
    const newFeatures = features.filter(f => f.id !== id);
    setFeatures(newFeatures);
    saveToStorage({ heroContent, features: newFeatures, packages, testimonials, faqs });
  };

  const addPackage = (pkg: Omit<Package, 'id'>) => {
    const newPackage = { ...pkg, id: generateId() };
    const newPackages = [...packages, newPackage];
    setPackages(newPackages);
    saveToStorage({ heroContent, features, packages: newPackages, testimonials, faqs });
  };

  const updatePackage = (id: string, pkg: Omit<Package, 'id'>) => {
    const newPackages = packages.map(p => p.id === id ? { ...pkg, id } : p);
    setPackages(newPackages);
    saveToStorage({ heroContent, features, packages: newPackages, testimonials, faqs });
  };

  const deletePackage = (id: string) => {
    const newPackages = packages.filter(p => p.id !== id);
    setPackages(newPackages);
    saveToStorage({ heroContent, features, packages: newPackages, testimonials, faqs });
  };

  const addTestimonial = (testimonial: Omit<Testimonial, 'id'>) => {
    const newTestimonial = { ...testimonial, id: generateId() };
    const newTestimonials = [...testimonials, newTestimonial];
    setTestimonials(newTestimonials);
    saveToStorage({ heroContent, features, packages, testimonials: newTestimonials, faqs });
  };

  const updateTestimonial = (id: string, testimonial: Omit<Testimonial, 'id'>) => {
    const newTestimonials = testimonials.map(t => t.id === id ? { ...testimonial, id } : t);
    setTestimonials(newTestimonials);
    saveToStorage({ heroContent, features, packages, testimonials: newTestimonials, faqs });
  };

  const deleteTestimonial = (id: string) => {
    const newTestimonials = testimonials.filter(t => t.id !== id);
    setTestimonials(newTestimonials);
    saveToStorage({ heroContent, features, packages, testimonials: newTestimonials, faqs });
  };

  const addFAQ = (faq: Omit<FAQ, 'id'>) => {
    const newFAQ = { ...faq, id: generateId() };
    const newFaqs = [...faqs, newFAQ];
    setFaqs(newFaqs);
    saveToStorage({ heroContent, features, packages, testimonials, faqs: newFaqs });
  };

  const updateFAQ = (id: string, faq: Omit<FAQ, 'id'>) => {
    const newFaqs = faqs.map(f => f.id === id ? { ...faq, id } : f);
    setFaqs(newFaqs);
    saveToStorage({ heroContent, features, packages, testimonials, faqs: newFaqs });
  };

  const deleteFAQ = (id: string) => {
    const newFaqs = faqs.filter(f => f.id !== id);
    setFaqs(newFaqs);
    saveToStorage({ heroContent, features, packages, testimonials, faqs: newFaqs });
  };

  return (
    <ContentContext.Provider value={{
      heroContent,
      features,
      packages,
      testimonials,
      faqs,
      updateHeroContent,
      addFeature,
      updateFeature,
      deleteFeature,
      addPackage,
      updatePackage,
      deletePackage,
      addTestimonial,
      updateTestimonial,
      deleteTestimonial,
      addFAQ,
      updateFAQ,
      deleteFAQ
    }}>
      {children}
    </ContentContext.Provider>
  );
};