import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, ClockIcon, BriefcaseIcon, BuildingIcon, WifiIcon, CalendarIcon, BookmarkIcon, ShareIcon } from 'lucide-react';
const JobDetails = () => {
  // Mock data - in a real app, this would come from an API based on the job ID
  const job = {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    salary: '$120,000 - $150,000',
    type: 'Full-time',
    remote: true,
    experience: '5+ years',
    postedAt: '2 days ago',
    logo: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    description: 'We are seeking an experienced Senior Frontend Developer to join our team. You will be responsible for building and maintaining user interfaces for our web applications, collaborating with designers and backend developers, and mentoring junior developers.',
    responsibilities: ['Develop and maintain responsive web applications using React and TypeScript', 'Collaborate with UX/UI designers to implement and improve user interfaces', 'Write clean, maintainable, and well-documented code', 'Optimize applications for maximum speed and scalability', 'Implement and maintain quality assurance processes', 'Mentor junior developers and review code'],
    requirements: ['5+ years of experience in frontend development', 'Strong proficiency in React, TypeScript, and modern JavaScript', 'Experience with state management solutions (Redux, Context API, etc.)', 'Knowledge of responsive design and cross-browser compatibility', 'Understanding of RESTful APIs and asynchronous request handling', 'Familiarity with version control systems (Git)', 'Excellent problem-solving skills and attention to detail', 'Strong communication and teamwork skills'],
    benefits: ['Competitive salary and equity package', 'Health, dental, and vision insurance', '401(k) matching', 'Flexible work hours and remote work options', 'Professional development budget', 'Unlimited PTO policy', 'Modern office with snacks and beverages'],
    companyInfo: {
      name: 'TechCorp',
      size: '51-200 employees',
      industry: 'Software Development',
      website: 'https://techcorp-example.com',
      about: 'TechCorp is a leading software development company specializing in creating innovative solutions for businesses. Our mission is to help organizations leverage technology to streamline their operations and achieve their goals.'
    }
  };
  return <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Main Content */}
          <div className="w-full md:w-2/3">
            {/* Job Header */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center">
                <div className="w-16 h-16 rounded-md overflow-hidden bg-gray-100 mr-4 mb-4 sm:mb-0">
                  <img src={job.logo} alt={`${job.company} logo`} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    {job.title}
                  </h1>
                  <p className="text-blue-600 font-medium">{job.company}</p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-gray-600 text-sm">
                    <div className="flex items-center">
                      <MapPinIcon className="h-4 w-4 mr-1" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center">
                      <BriefcaseIcon className="h-4 w-4 mr-1" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      <span>Posted {job.postedAt}</span>
                    </div>
                    {job.remote && <div className="flex items-center text-green-600">
                        <WifiIcon className="h-4 w-4 mr-1" />
                        <span>Remote</span>
                      </div>}
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-6 pt-6 border-t border-gray-100">
                <div className="mb-4 sm:mb-0">
                  <div className="text-gray-900 font-bold text-lg">
                    {job.salary}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {job.experience} experience
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md px-6 py-2">
                    Apply Now
                  </button>
                  <button className="border border-gray-300 hover:border-gray-400 rounded-md p-2 text-gray-500 hover:text-gray-700">
                    <BookmarkIcon className="h-5 w-5" />
                  </button>
                  <button className="border border-gray-300 hover:border-gray-400 rounded-md p-2 text-gray-500 hover:text-gray-700">
                    <ShareIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
            {/* Job Description */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Job Description
              </h2>
              <p className="text-gray-700 mb-6">{job.description}</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Responsibilities
              </h3>
              <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
                {job.responsibilities.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Requirements
              </h3>
              <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
                {job.requirements.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Benefits
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {job.benefits.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </div>
            {/* Similar Jobs */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Similar Jobs
              </h2>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-md p-4 hover:border-blue-300 transition-colors duration-200">
                  <h3 className="font-medium text-gray-900">
                    Frontend Developer
                  </h3>
                  <p className="text-blue-600 text-sm">WebSolutions</p>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-xs text-gray-500">
                    <div className="flex items-center">
                      <MapPinIcon className="h-3 w-3 mr-1" />
                      <span>New York, NY</span>
                    </div>
                    <div className="flex items-center">
                      <BriefcaseIcon className="h-3 w-3 mr-1" />
                      <span>Full-time</span>
                    </div>
                    <div>$90,000 - $120,000</div>
                  </div>
                  <div className="mt-3">
                    <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      View Job
                    </a>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-md p-4 hover:border-blue-300 transition-colors duration-200">
                  <h3 className="font-medium text-gray-900">React Developer</h3>
                  <p className="text-blue-600 text-sm">DataSystems</p>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-xs text-gray-500">
                    <div className="flex items-center">
                      <MapPinIcon className="h-3 w-3 mr-1" />
                      <span>Remote</span>
                    </div>
                    <div className="flex items-center">
                      <BriefcaseIcon className="h-3 w-3 mr-1" />
                      <span>Contract</span>
                    </div>
                    <div>$100,000 - $130,000</div>
                  </div>
                  <div className="mt-3">
                    <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      View Job
                    </a>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-md p-4 hover:border-blue-300 transition-colors duration-200">
                  <h3 className="font-medium text-gray-900">UI/UX Developer</h3>
                  <p className="text-blue-600 text-sm">DesignStudio</p>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-xs text-gray-500">
                    <div className="flex items-center">
                      <MapPinIcon className="h-3 w-3 mr-1" />
                      <span>San Francisco, CA</span>
                    </div>
                    <div className="flex items-center">
                      <BriefcaseIcon className="h-3 w-3 mr-1" />
                      <span>Full-time</span>
                    </div>
                    <div>$110,000 - $140,000</div>
                  </div>
                  <div className="mt-3">
                    <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      View Job
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Sidebar */}
          <div className="w-full md:w-1/3 space-y-6">
            {/* Company Info */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                About the Company
              </h2>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-100 mr-3">
                  <img src={job.logo} alt={`${job.company} logo`} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">
                    {job.companyInfo.name}
                  </h3>
                  <a href={job.companyInfo.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                    Visit Website
                  </a>
                </div>
              </div>
              <div className="space-y-3 mb-4">
                <div className="flex items-start">
                  <BuildingIcon className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium text-gray-700">
                      Company Size
                    </div>
                    <div className="text-gray-600">{job.companyInfo.size}</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <BriefcaseIcon className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium text-gray-700">
                      Industry
                    </div>
                    <div className="text-gray-600">
                      {job.companyInfo.industry}
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm">{job.companyInfo.about}</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Link to={`/company/${job.company}`} className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                  View Company Profile
                </Link>
              </div>
            </div>
            {/* Application Process */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Application Process
              </h2>
              <div className="space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium">
                    1
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-900">Apply</h3>
                    <p className="text-gray-600 text-sm">
                      Submit your resume and cover letter
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium">
                    2
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-900">Screening</h3>
                    <p className="text-gray-600 text-sm">
                      Initial phone call with recruiter
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium">
                    3
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-900">
                      Technical Interview
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Coding assessment and technical questions
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium">
                    4
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-900">
                      Final Interview
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Meet with the team and leadership
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium">
                    5
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-900">Offer</h3>
                    <p className="text-gray-600 text-sm">
                      Receive and review your offer
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md px-6 py-2 w-full">
                  Apply Now
                </button>
              </div>
            </div>
            {/* Job Details */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Job Details
              </h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CalendarIcon className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium text-gray-700">
                      Job Posted
                    </div>
                    <div className="text-gray-600">{job.postedAt}</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <BriefcaseIcon className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium text-gray-700">
                      Employment Type
                    </div>
                    <div className="text-gray-600">{job.type}</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPinIcon className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium text-gray-700">
                      Location
                    </div>
                    <div className="text-gray-600">{job.location}</div>
                    {job.remote && <div className="text-green-600 flex items-center mt-1">
                        <WifiIcon className="h-4 w-4 mr-1" />
                        <span>Remote work available</span>
                      </div>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default JobDetails;