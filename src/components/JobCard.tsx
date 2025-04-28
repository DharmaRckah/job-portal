import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, ClockIcon, BriefcaseIcon, WifiIcon } from 'lucide-react';
interface JobProps {
  job: {
    id: string;
    title: string;
    company: string;
    location: string;
    salary: string;
    type: string;
    remote: boolean;
    logo: string;
    postedAt: string;
  };
}
const JobCard = ({
  job
}: JobProps) => {
  return <Link to={`/job/${job.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
        <div className="flex items-start">
          <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0 bg-gray-100 mr-4">
            <img src={job.logo} alt={`${job.company} logo`} className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
            <p className="text-blue-600 font-medium">{job.company}</p>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-gray-600">
            <MapPinIcon className="h-4 w-4 mr-2" />
            <span>{job.location}</span>
            {job.remote && <span className="ml-2 flex items-center text-green-600">
                <WifiIcon className="h-4 w-4 mr-1" />
                Remote
              </span>}
          </div>
          <div className="flex items-center text-gray-600">
            <BriefcaseIcon className="h-4 w-4 mr-2" />
            <span>{job.type}</span>
          </div>
          <div className="text-gray-900 font-medium">{job.salary}</div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
          <div className="flex items-center text-gray-500 text-sm">
            <ClockIcon className="h-4 w-4 mr-1" />
            <span>Posted {job.postedAt}</span>
          </div>
          <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
            Apply Now
          </button>
        </div>
      </div>
    </Link>;
};
export default JobCard;