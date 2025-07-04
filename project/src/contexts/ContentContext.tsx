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
  }
];

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [heroContent, setHeroContent] = useState<HeroContent>(defaultHeroContent);
  const [features, setFeatures] = useState<Feature[]>(defaultFeatures);
  const [packages, setPackages] = useState<Package[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [faqs, setFaqs] = useState<FAQ[]>([]);

  useEffect(() => {
    const savedContent = localStorage.getItem('admin_content');
    if (savedContent) {
      const content = JSON.parse(savedContent);
      setHeroContent(content.heroContent || defaultHeroContent);
      setFeatures(content.features || defaultFeatures);
      setPackages(content.packages || []);
      setTestimonials(content.testimonials || []);
      setFaqs(content.faqs || []);
    }
  }, []);

  const saveToStorage = (data: any) => {
    localStorage.setItem('admin_content', JSON.stringify(data));
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