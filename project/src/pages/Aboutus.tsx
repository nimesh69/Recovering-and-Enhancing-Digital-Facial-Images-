import React from 'react';
import { TeamMember } from '../components/TeamMember/TeamMember';
import { Header } from '../components/Header/Header';
import { Mail } from 'lucide-react';
import profile from '../components/images/profile.jpg'
import profile1 from '../components/images/aadishpp.jpg'
import profile2 from '../components/images//kusan.jpeg'
import profile3 from '../components/images/simal.jpg'
function Aboutus() {
  const teamMembers = [
    {
      name: "Nimesh Shrestha",
      role: "Leader",
      description: "A passionate tech enthusiast with a strong interest in Machine Learning, Artificial Intelligence, and full-stack development.",
      image: profile,
      linkedin: "https://www.linkedin.com/in/nimesh-shrestha-b22057206/",
      github: "https://github.com/nimesh69",
      website: "https://www.nimeshstha.com.np/",
      email: "nimeshstha79@gmail.com",
    },
    {
      name: "Aadish Prajapati",
      role: "Aspiring Full-Stack Developer",
      description: "Passionate about building seamless user experiences and efficient backend systems for modern web applications.",
      image: profile1,
      linkedin: "https://www.linkedin.com/in/adish-prajapati-b29a25257/",
      github: "https://github.com/aadish-praz",
      website: "https://adishprajapati.com.np/portfolio/",
      email: "prazapatiadish12@gmail.com"
    },
    {
      name: "Kusan Khambu",
      role: "Aspiring AI & Frontend Developer",
      description: "Passionate about Deep Learning, Computer Vision, and Frontend Development. Enjoys building intuitive user interfaces and working on AI-driven applications.",
      image: profile2,
      linkedin: "https://www.linkedin.com/in/kusan-khambu-28bb2631b/",
      github: "https://github.com/KhamuKusan7",
      website: "https://www.kusankhambu.com.np/",
      email: "kusanshrestha@gmail.com"
    },
    {
      name: "Simal Shakha",
      role: "#",
      description: "Designing scalable systems for processing and analyzing large-scale facial image datasets hjjdcjvy.",
      image: profile3,
      linkedin: "https://linkedin.com",
      github: "https://github.com/simalshakha",
      website: "https://example.com",
      email: "Sshakha350@gmail.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50"   style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        backgroundImage: 'radial-gradient(rgba(12, 12, 12, 0.171) 2px, transparent 0)',
        backgroundSize: '30px 30px',
        backgroundPosition: '-5px -5px',
      }}>
        <Header />

      {/* Team Members Section */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-50 py-4 px-4 text-center" style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        backgroundImage: 'radial-gradient(rgba(12, 12, 12, 0.171) 2px, transparent 0)',
        backgroundSize: '30px 30px',
        backgroundPosition: '-5px -5px',
      }}>
        <a
          href="mailto:nimeshstha79@gmail.com,prazapatiadish12@gmail.com,kusanshrestha@gmail.com"
          className="inline-flex items-center gap-2 bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-700 transition-colors"
        >
          <Mail className="w-5 h-5" />
          Contact Us
        </a>
      </footer>
    </div>
  );
}

export default Aboutus;