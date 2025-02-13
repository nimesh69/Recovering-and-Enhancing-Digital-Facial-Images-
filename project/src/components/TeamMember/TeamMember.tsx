import React from 'react';
import { Github, Linkedin, Mail, Globe } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  image: string;
  linkedin?: string;
  github?: string;
  website?: string;
  email?: string;
}

export function TeamMember({
  name,
  role,
  description,
  image,
  linkedin,
  github,
  website,
  email
}: TeamMemberProps) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
      <div className="flex flex-col items-center">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 rounded-full object-cover mb-4 border-2 border-gray-100"
        />
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-blue-600 font-medium mb-2">{role}</p>
        <p className="text-gray-600 text-center mb-4 max-w-xs">{description}</p>
        
        <div className="flex space-x-4">
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-gray-900 transition-colors">
              <Github className="w-5 h-5" />
            </a>
          )}
          {website && (
            <a href={website} target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-green-600 transition-colors">
              <Globe className="w-5 h-5" />
            </a>
          )}
          {email && (
            <a href={`mailto:${email}`}
               className="text-gray-600 hover:text-red-600 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}