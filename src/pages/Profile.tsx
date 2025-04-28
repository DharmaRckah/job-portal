import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CalendarIcon, BriefcaseIcon, MapPinIcon, GraduationCapIcon, EditIcon, MailIcon, LinkedinIcon, GithubIcon, TwitterIcon } from 'lucide-react';
const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  // Mock user data - in a real app, this would come from an API
  const user = {
    id: '1',
    name: 'John Doe',
    title: 'Senior Frontend Developer',
    location: 'San Francisco, CA',
    about: 'Passionate frontend developer with 5+ years of experience building responsive and accessible web applications. Specialized in React and TypeScript with a focus on performance optimization and clean code.',
    experience: [{
      id: '1',
      title: 'Senior Frontend Developer',
      company: 'TechCorp',
      location: 'San Francisco, CA',
      startDate: 'Jan 2021',
      endDate: 'Present',
      description: 'Lead frontend development for multiple projects, implementing modern React patterns and optimizing performance.'
    }, {
      id: '2',
      title: 'Frontend Developer',
      company: 'WebSolutions',
      location: 'New York, NY',
      startDate: 'Mar 2018',
      endDate: 'Dec 2020',
      description: 'Developed responsive web applications using React, Redux, and TypeScript.'
    }],
    education: [{
      id: '1',
      degree: 'B.S. Computer Science',
      school: 'University of California, Berkeley',
      startYear: '2014',
      endYear: '2018'
    }],
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux', 'Next.js', 'Node.js', 'Git'],
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    coverImage: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    contact: {
      email: 'john.doe@example.com',
      linkedin: 'linkedin.com/in/johndoe',
      github: 'github.com/johndoe',
      twitter: 'twitter.com/johndoe'
    }
  };
  return <div className="bg-gray-100 min-h-screen">
      {/* Cover Image */}
      <div className="h-48 md:h-64 bg-cover bg-center" style={{
      backgroundImage: `url(${user.coverImage})`
    }}>
        <div className="container mx-auto px-4 h-full flex items-end">
          <div className="relative -bottom-16 flex items-end">
            <div className="h-32 w-32 rounded-full border-4 border-white overflow-hidden bg-white">
              <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
            </div>
            <div className="ml-4 mb-4 md:mb-6">
              <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                {user.name}
              </h1>
              <p className="text-white drop-shadow-lg">{user.title}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 pt-20">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Main Content */}
          <div className="w-full md:w-2/3">
            {/* Tab Navigation */}
            <div className="bg-white rounded-lg shadow-md mb-6">
              <div className="flex border-b">
                <button onClick={() => setActiveTab('profile')} className={`px-6 py-3 text-sm font-medium ${activeTab === 'profile' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>
                  Profile
                </button>
                <button onClick={() => setActiveTab('resume')} className={`px-6 py-3 text-sm font-medium ${activeTab === 'resume' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>
                  Resume
                </button>
                <button onClick={() => setActiveTab('applications')} className={`px-6 py-3 text-sm font-medium ${activeTab === 'applications' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>
                  Applications
                </button>
                <button onClick={() => setActiveTab('saved')} className={`px-6 py-3 text-sm font-medium ${activeTab === 'saved' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>
                  Saved Jobs
                </button>
              </div>
            </div>
            {activeTab === 'profile' && <>
                {/* About Section */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-900">
                      About
                    </h2>
                    <button className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
                      <EditIcon className="h-4 w-4 mr-1" />
                      Edit
                    </button>
                  </div>
                  <p className="text-gray-700">{user.about}</p>
                </div>
                {/* Experience Section */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-900">
                      Experience
                    </h2>
                    <button className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
                      <EditIcon className="h-4 w-4 mr-1" />
                      Add
                    </button>
                  </div>
                  <div className="space-y-6">
                    {user.experience.map(exp => <div key={exp.id} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                        <div className="flex">
                          <div className="w-12 h-12 rounded-md bg-gray-100 flex items-center justify-center flex-shrink-0 mr-4">
                            <BriefcaseIcon className="h-6 w-6 text-gray-500" />
                          </div>
                          <div>
                            <h3 className="text-lg font-medium text-gray-900">
                              {exp.title}
                            </h3>
                            <p className="text-blue-600">{exp.company}</p>
                            <div className="flex items-center text-sm text-gray-500 mt-1">
                              <CalendarIcon className="h-4 w-4 mr-1" />
                              <span>
                                {exp.startDate} - {exp.endDate}
                              </span>
                              <span className="mx-2">•</span>
                              <MapPinIcon className="h-4 w-4 mr-1" />
                              <span>{exp.location}</span>
                            </div>
                            <p className="mt-3 text-gray-700">
                              {exp.description}
                            </p>
                          </div>
                        </div>
                      </div>)}
                  </div>
                </div>
                {/* Education Section */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-900">
                      Education
                    </h2>
                    <button className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
                      <EditIcon className="h-4 w-4 mr-1" />
                      Add
                    </button>
                  </div>
                  <div className="space-y-6">
                    {user.education.map(edu => <div key={edu.id} className="flex">
                        <div className="w-12 h-12 rounded-md bg-gray-100 flex items-center justify-center flex-shrink-0 mr-4">
                          <GraduationCapIcon className="h-6 w-6 text-gray-500" />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">
                            {edu.degree}
                          </h3>
                          <p className="text-blue-600">{edu.school}</p>
                          <div className="flex items-center text-sm text-gray-500 mt-1">
                            <CalendarIcon className="h-4 w-4 mr-1" />
                            <span>
                              {edu.startYear} - {edu.endYear}
                            </span>
                          </div>
                        </div>
                      </div>)}
                  </div>
                </div>
                {/* Skills Section */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-900">
                      Skills
                    </h2>
                    <button className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
                      <EditIcon className="h-4 w-4 mr-1" />
                      Edit
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {user.skills.map((skill, index) => <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>)}
                  </div>
                </div>
              </>}
            {activeTab === 'resume' && <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Resume
                  </h2>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                    Upload New Resume
                  </button>
                </div>
                <div className="border border-gray-200 rounded-md p-4 flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-3 rounded-md mr-4">
                      <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">
                        John_Doe_Resume.pdf
                      </h3>
                      <p className="text-sm text-gray-500">
                        Uploaded on May 15, 2023
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-gray-600 hover:text-gray-800 p-2">
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                    <button className="text-gray-600 hover:text-gray-800 p-2">
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </button>
                    <button className="text-red-500 hover:text-red-700 p-2">
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="font-medium text-gray-900 mb-3">
                    Resume Tips
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Keep your resume to one or two pages</li>
                    <li>Include keywords from the job description</li>
                    <li>Highlight your achievements with measurable results</li>
                    <li>Proofread for spelling and grammar</li>
                    <li>Use a clean, professional format</li>
                  </ul>
                </div>
              </div>}
            {activeTab === 'applications' && <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Job Applications
                </h2>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-md p-4">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium text-gray-900">
                          Senior Frontend Developer
                        </h3>
                        <p className="text-blue-600">TechCorp</p>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <MapPinIcon className="h-4 w-4 mr-1" />
                          <span>San Francisco, CA</span>
                          <span className="mx-2">•</span>
                          <span className="text-green-600 font-medium">
                            Applied
                          </span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        Applied on May 20, 2023
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-md p-4">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium text-gray-900">
                          React Developer
                        </h3>
                        <p className="text-blue-600">WebSolutions</p>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <MapPinIcon className="h-4 w-4 mr-1" />
                          <span>Remote</span>
                          <span className="mx-2">•</span>
                          <span className="text-yellow-600 font-medium">
                            In Review
                          </span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        Applied on May 15, 2023
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-md p-4">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium text-gray-900">
                          UI/UX Designer
                        </h3>
                        <p className="text-blue-600">DesignStudio</p>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <MapPinIcon className="h-4 w-4 mr-1" />
                          <span>New York, NY</span>
                          <span className="mx-2">•</span>
                          <span className="text-red-600 font-medium">
                            Rejected
                          </span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        Applied on Apr 30, 2023
                      </div>
                    </div>
                  </div>
                </div>
              </div>}
            {activeTab === 'saved' && <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Saved Jobs
                </h2>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-md p-4">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium text-gray-900">
                          Full Stack Developer
                        </h3>
                        <p className="text-blue-600">InnovateCo</p>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <MapPinIcon className="h-4 w-4 mr-1" />
                          <span>Seattle, WA</span>
                          <span className="mx-2">•</span>
                          <span>$120,000 - $150,000</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-800 p-2">
                          Apply
                        </button>
                        <button className="text-red-500 hover:text-red-700 p-2">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-md p-4">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium text-gray-900">
                          Frontend Engineer
                        </h3>
                        <p className="text-blue-600">DataSystems</p>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <MapPinIcon className="h-4 w-4 mr-1" />
                          <span>Austin, TX</span>
                          <span className="mx-2">•</span>
                          <span>$100,000 - $130,000</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-800 p-2">
                          Apply
                        </button>
                        <button className="text-red-500 hover:text-red-700 p-2">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>}
          </div>
          {/* Sidebar */}
          <div className="w-full md:w-1/3 space-y-6">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Contact Information
              </h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MailIcon className="h-5 w-5 text-gray-500 mr-3" />
                  <a href={`mailto:${user.contact.email}`} className="text-blue-600 hover:underline">
                    {user.contact.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <LinkedinIcon className="h-5 w-5 text-gray-500 mr-3" />
                  <a href={`https://${user.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    {user.contact.linkedin}
                  </a>
                </div>
                <div className="flex items-center">
                  <GithubIcon className="h-5 w-5 text-gray-500 mr-3" />
                  <a href={`https://${user.contact.github}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    {user.contact.github}
                  </a>
                </div>
                <div className="flex items-center">
                  <TwitterIcon className="h-5 w-5 text-gray-500 mr-3" />
                  <a href={`https://${user.contact.twitter}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    {user.contact.twitter}
                  </a>
                </div>
              </div>
            </div>
            {/* Recommended Jobs */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Recommended Jobs
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900">
                    Senior React Developer
                  </h3>
                  <p className="text-blue-600 text-sm">TechCorp</p>
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    <MapPinIcon className="h-3 w-3 mr-1" />
                    <span>Remote</span>
                    <span className="mx-1">•</span>
                    <span>$130K - $150K</span>
                  </div>
                  <div className="mt-2">
                    <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      View Job
                    </a>
                  </div>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <h3 className="font-medium text-gray-900">
                    Frontend Team Lead
                  </h3>
                  <p className="text-blue-600 text-sm">InnovateCo</p>
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    <MapPinIcon className="h-3 w-3 mr-1" />
                    <span>Seattle, WA</span>
                    <span className="mx-1">•</span>
                    <span>$140K - $160K</span>
                  </div>
                  <div className="mt-2">
                    <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      View Job
                    </a>
                  </div>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <h3 className="font-medium text-gray-900">UI/UX Developer</h3>
                  <p className="text-blue-600 text-sm">DesignStudio</p>
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    <MapPinIcon className="h-3 w-3 mr-1" />
                    <span>New York, NY</span>
                    <span className="mx-1">•</span>
                    <span>$110K - $130K</span>
                  </div>
                  <div className="mt-2">
                    <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      View Job
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View All Recommendations
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Profile;