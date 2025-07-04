import React from 'react';
import { 
  TrendingUp, 
  Users, 
  Shield, 
  Clock, 
  MessageCircle, 
  Star,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Zap,
  Target,
  Award,
  ChevronDown
} from 'lucide-react';
import { useContent } from '../contexts/ContentContext';

const iconMap: { [key: string]: React.ReactNode } = {
  TrendingUp: <TrendingUp className="w-8 h-8" />,
  Target: <Target className="w-8 h-8" />,
  Shield: <Shield className="w-8 h-8" />,
  BarChart3: <BarChart3 className="w-8 h-8" />,
  Zap: <Zap className="w-8 h-8" />,
  Award: <Award className="w-8 h-8" />,
  Users: <Users className="w-8 h-8" />,
  Clock: <Clock className="w-8 h-8" />,
  CheckCircle: <CheckCircle className="w-8 h-8" />,
  Star: <Star className="w-8 h-8" />,
  MessageCircle: <MessageCircle className="w-8 h-8" />
};

const LandingPage: React.FC = () => {
  const { heroContent, features, packages, testimonials, faqs } = useContent();
  
  const whatsappMessage = "Halo%2C+saya+ingin+daftar+kursus+trading+crypto+dan+ingin+tahu+lebih+lanjut+tentang+paket+yang+tersedia.";
  const whatsappLink = `https://wa.me/${heroContent.whatsappNumber}?text=${whatsappMessage}`;

  const scrollToPackages = () => {
    document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-teal-600/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <TrendingUp className="w-4 h-4" />
              {heroContent.subtitle}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {heroContent.title.split(' ').slice(0, 3).join(' ')}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                {' ' + heroContent.title.split(' ').slice(3).join(' ')}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {heroContent.description}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              Daftar Sekarang via WhatsApp
            </a>
            <button
              onClick={scrollToPackages}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/30"
            >
              Lihat Paket Kursus
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex items-center gap-2 text-gray-300">
              <Users className="w-5 h-5 text-blue-400" />
              <span>500+ Trader Aktif</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Star className="w-5 h-5 text-yellow-400" />
              <span>Rating 4.9/5</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Clock className="w-5 h-5 text-green-400" />
              <span>Support 24/7</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {features.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Mengapa Memilih Kursus Kami?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Kami menyediakan pendidikan trading cryptocurrency yang komprehensif dengan mentor berpengalaman dan komunitas yang supportif.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors">
                    {iconMap[feature.icon] || <TrendingUp className="w-8 h-8" />}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Packages Section */}
      {packages.length > 0 && (
        <section id="packages" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Pilih Paket Yang Sesuai
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Setiap paket dirancang untuk memberikan value maksimal sesuai dengan kebutuhan dan level trading Anda.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                    pkg.popular
                      ? 'border-yellow-400 shadow-yellow-400/20 shadow-lg'
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                        PALING POPULER
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-bold text-yellow-400 mb-2">{pkg.price}</div>
                    <p className="text-gray-300">{pkg.description}</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600'
                        : 'bg-gradient-to-r from-blue-500 to-teal-500 text-white hover:from-blue-600 hover:to-teal-600'
                    } transform hover:scale-105`}
                  >
                    Pilih Paket Ini
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {testimonials.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Apa Kata Mereka?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Testimoni nyata dari para trader yang telah bergabung dan merasakan manfaatnya.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Pertanyaan Yang Sering Diajukan
              </h2>
              <p className="text-xl text-gray-300">
                Temukan jawaban untuk pertanyaan umum tentang kursus trading kami.
              </p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq) => (
                <details
                  key={faq.id}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer text-white font-semibold text-lg">
                    <span>{faq.question}</span>
                    <ChevronDown className="w-5 h-5 transform transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Siap Memulai Perjalanan Trading Anda?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ratusan trader sukses lainnya dan mulai trading dengan strategi yang terbukti menguntungkan.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="w-5 h-5" />
            Chat via WhatsApp Sekarang
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <TrendingUp className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">{heroContent.subtitle}</span>
            </div>
            <p className="text-gray-400 mb-6">
              Memberdayakan trader Indonesia dengan edukasi crypto trading berkualitas tinggi.
            </p>
            <div className="flex justify-center gap-6">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 {heroContent.subtitle}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;