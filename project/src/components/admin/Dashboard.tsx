import React from 'react';
import { BarChart3, Users, Package, MessageSquare, TrendingUp, Eye } from 'lucide-react';
import { useContent } from '../../contexts/ContentContext';

const Dashboard: React.FC = () => {
  const { features, packages, testimonials, faqs } = useContent();

  const stats = [
    {
      label: 'Total Features',
      value: features.length,
      icon: BarChart3,
      color: 'from-blue-500 to-blue-600'
    },
    {
      label: 'Total Packages',
      value: packages.length,
      icon: Package,
      color: 'from-green-500 to-green-600'
    },
    {
      label: 'Total Testimonials',
      value: testimonials.length,
      icon: MessageSquare,
      color: 'from-purple-500 to-purple-600'
    },
    {
      label: 'Total FAQs',
      value: faqs.length,
      icon: Users,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-gray-300">Selamat datang di admin panel Trading Crypto Academy</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
        <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-blue-500/20 hover:bg-blue-500/30 rounded-xl border border-blue-500/50 text-blue-300 hover:text-blue-200 transition-all duration-200"
          >
            <Eye className="w-5 h-5" />
            <span>Preview Website</span>
          </a>
          <button className="flex items-center gap-3 p-4 bg-green-500/20 hover:bg-green-500/30 rounded-xl border border-green-500/50 text-green-300 hover:text-green-200 transition-all duration-200">
            <TrendingUp className="w-5 h-5" />
            <span>View Analytics</span>
          </button>
          <button className="flex items-center gap-3 p-4 bg-purple-500/20 hover:bg-purple-500/30 rounded-xl border border-purple-500/50 text-purple-300 hover:text-purple-200 transition-all duration-200">
            <Users className="w-5 h-5" />
            <span>Manage Users</span>
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
        <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-gray-300">Dashboard initialized successfully</span>
            <span className="text-gray-500 text-sm ml-auto">Just now</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span className="text-gray-300">Content management system ready</span>
            <span className="text-gray-500 text-sm ml-auto">1 min ago</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span className="text-gray-300">Admin authentication enabled</span>
            <span className="text-gray-500 text-sm ml-auto">2 min ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;