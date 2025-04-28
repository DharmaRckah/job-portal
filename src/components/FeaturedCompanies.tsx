import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, BriefcaseIcon, StarIcon } from 'lucide-react';
const FeaturedCompanies = () => {
  // Mock data - in a real app, this would come from an API
  const companies = [{
    id: '1',
    name: 'TechCorp',
    logo: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    location: 'San Francisco, CA',
    industry: 'Technology',
    openPositions: 12,
    rating: 4.8
  }, {
    id: '2',
    name: 'DesignStudio',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
    location: 'New York, NY',
    industry: 'Design',
    openPositions: 5,
    rating: 4.6
  }, {
    id: '3',
    name: 'DataSystems',
    logo: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    location: 'Austin, TX',
    industry: 'Data Analytics',
    openPositions: 8,
    rating: 4.5
  }, {
    id: '4',
    name: 'InnovateCo',
    logo: 'https://images.unsplash.com/photo-1569017388533-ab86602efa95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    location: 'Seattle, WA',
    industry: 'Innovation',
    openPositions: 10,
    rating: 4.7
  }];
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {companies.map(company => <Link key={company.id} to={`/company/${company.id}`}>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-md overflow-hidden bg-gray-100">
                <img src={company.logo} alt={`${company.name} logo`} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {company.name}
              </h3>
              <p className="text-sm text-gray-600">{company.industry}</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-gray-600 text-sm">
                <MapPinIcon className="h-4 w-4 mr-2" />
                <span>{company.location}</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <BriefcaseIcon className="h-4 w-4 mr-2" />
                <span>{company.openPositions} open positions</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <StarIcon className="h-4 w-4 mr-2 text-yellow-500" />
                <span>{company.rating} rating</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100 text-center">
              <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                View Company
              </button>
            </div>
          </div>
        </Link>)}
    </div>;
};
export default FeaturedCompanies;