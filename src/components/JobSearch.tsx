import React, { useState } from 'react';
import { FilterIcon, ChevronDownIcon } from 'lucide-react';
const JobSearch = () => {
  const [showFilters, setShowFilters] = useState(false);
  return <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3 md:mb-0">
          Filter Jobs
        </h3>
        <button className="flex items-center text-blue-600 font-medium" onClick={() => setShowFilters(!showFilters)}>
          <FilterIcon className="h-5 w-5 mr-2" />
          {showFilters ? 'Hide Filters' : 'Show Filters'}
          <ChevronDownIcon className={`h-5 w-5 ml-1 transform ${showFilters ? 'rotate-180' : ''}`} />
        </button>
      </div>
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${showFilters ? '' : 'hidden md:grid'}`}>
        <div>
          <label htmlFor="job-type" className="block text-sm font-medium text-gray-700 mb-2">
            Job Type
          </label>
          <select id="job-type" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Any Type</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="contract">Contract</option>
            <option value="internship">Internship</option>
          </select>
        </div>
        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
            Experience Level
          </label>
          <select id="experience" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Any Level</option>
            <option value="entry">Entry Level</option>
            <option value="mid">Mid Level</option>
            <option value="senior">Senior Level</option>
            <option value="executive">Executive</option>
          </select>
        </div>
        <div>
          <label htmlFor="remote" className="block text-sm font-medium text-gray-700 mb-2">
            Remote Options
          </label>
          <select id="remote" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Any</option>
            <option value="remote">Remote Only</option>
            <option value="hybrid">Hybrid</option>
            <option value="onsite">On-site Only</option>
          </select>
        </div>
      </div>
      {showFilters && <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div>
            <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-2">
              Salary Range
            </label>
            <select id="salary" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Any Salary</option>
              <option value="0-50000">$0 - $50,000</option>
              <option value="50000-100000">$50,000 - $100,000</option>
              <option value="100000-150000">$100,000 - $150,000</option>
              <option value="150000+">$150,000+</option>
            </select>
          </div>
          <div>
            <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
              Industry
            </label>
            <select id="industry" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">All Industries</option>
              <option value="tech">Technology</option>
              <option value="healthcare">Healthcare</option>
              <option value="finance">Finance</option>
              <option value="education">Education</option>
              <option value="retail">Retail</option>
            </select>
          </div>
          <div>
            <label htmlFor="posted" className="block text-sm font-medium text-gray-700 mb-2">
              Date Posted
            </label>
            <select id="posted" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Any Time</option>
              <option value="today">Today</option>
              <option value="week">Past Week</option>
              <option value="month">Past Month</option>
            </select>
          </div>
        </div>}
      <div className="mt-8 flex justify-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md px-8 py-3">
          Apply Filters
        </button>
      </div>
    </div>;
};
export default JobSearch;