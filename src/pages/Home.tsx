import React from 'react';
import { SearchIcon, BriefcaseIcon, BuildingIcon, MapPinIcon, TrendingUpIcon } from 'lucide-react';
import JobSearch from '../components/JobSearch';
import JobCard from '../components/JobCard';
import FeaturedCompanies from '../components/FeaturedCompanies';
const Home = () => {
  // Mock data - in a real app, this would come from an API
  const featuredJobs = [{
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    salary: '$120,000 - $150,000',
    type: 'Full-time',
    remote: true,
    logo: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    postedAt: '2 days ago'
  }, {
    id: '2',
    title: 'UX/UI Designer',
    company: 'DesignStudio',
    location: 'New York, NY',
    salary: '$90,000 - $120,000',
    type: 'Full-time',
    remote: true,
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
    postedAt: '1 week ago'
  }, {
    id: '3',
    title: 'Backend Developer',
    company: 'DataSystems',
    location: 'Austin, TX',
    salary: '$110,000 - $140,000',
    type: 'Full-time',
    remote: false,
    logo: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    postedAt: '3 days ago'
  }, {
    id: '4',
    title: 'Product Manager',
    company: 'InnovateCo',
    location: 'Seattle, WA',
    salary: '$130,000 - $160,000',
    type: 'Full-time',
    remote: true,
    logo: 'https://images.unsplash.com/photo-1569017388533-ab86602efa95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    postedAt: 'Just now'
  }];
  const stats = [{
    icon: <BriefcaseIcon className="h-8 w-8 text-blue-600" />,
    value: '10,000+',
    label: 'Jobs Available'
  }, {
    icon: <BuildingIcon className="h-8 w-8 text-blue-600" />,
    value: '1,500+',
    label: 'Companies'
  }, {
    icon: <MapPinIcon className="h-8 w-8 text-blue-600" />,
    value: '50+',
    label: 'Countries'
  }, {
    icon: <TrendingUpIcon className="h-8 w-8 text-blue-600" />,
    value: '95%',
    label: 'Success Rate'
  }];
  return <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Find Your Dream Job Today
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
            Connect with top employers and discover opportunities that match
            your skills and career goals.
          </p>
          {/* Search Bar */}
          <div className="bg-white rounded-lg p-2 md:p-3 flex flex-col md:flex-row items-center shadow-lg max-w-4xl mx-auto">
            <div className="flex items-center w-full md:w-2/3 mb-3 md:mb-0">
              <SearchIcon className="text-gray-500 ml-3 h-5 w-5" />
              <input type="text" placeholder="Job title, company, or keywords" className="w-full px-3 py-2 text-gray-700 focus:outline-none" />
            </div>
            <div className="w-full md:w-1/3 md:border-l border-gray-300 px-3">
              <select className="w-full py-2 text-gray-700 focus:outline-none bg-transparent">
                <option value="">All Locations</option>
                <option value="remote">Remote</option>
                <option value="new-york">New York</option>
                <option value="san-francisco">San Francisco</option>
                <option value="london">London</option>
              </select>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md px-6 py-2 w-full md:w-auto mt-3 md:mt-0 md:ml-3">
              Search
            </button>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => <div key={index} className="text-center">
                <div className="flex justify-center mb-3">{stat.icon}</div>
                <h3 className="text-3xl font-bold text-gray-900">
                  {stat.value}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>)}
          </div>
        </div>
      </section>
      {/* Job Search Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Find the Perfect Job
          </h2>
          <JobSearch />
          <div className="mt-12">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Featured Jobs
              </h3>
              <a href="/jobs" className="text-blue-600 hover:text-blue-800 font-medium">
                View All Jobs
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredJobs.map(job => <JobCard key={job.id} job={job} />)}
            </div>
          </div>
        </div>
      </section>
      {/* Featured Companies */}
      <section className="py-12 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Top Companies Hiring
          </h2>
          <FeaturedCompanies />
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-blue-600 py-16 px-4 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Take the Next Step in Your Career?
          </h2>
          <p className="text-xl mb-8">
            Create an account to track your applications, receive job alerts,
            and more.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/register" className="bg-white text-blue-600 hover:bg-gray-100 font-medium rounded-md px-8 py-3">
              Create Account
            </a>
            <a href="/login" className="bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-md px-8 py-3">
              Sign In
            </a>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;