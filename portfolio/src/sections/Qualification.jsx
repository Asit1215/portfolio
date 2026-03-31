import { motion } from 'framer-motion'

const qualifications = [
  {
    title: 'Master of Business Administration (MBA)',
    institution: 'Brainware University',
    location: 'Barasat, West Bengal',
    link: 'https://www.brainwareuniversity.ac.in',
    duration: '2025 - 2027 (2 Years Pursuing)',
    description: 'Expanding my skill set into Strategic Management and Operations. My goal is to bridge the gap between technical execution and business leadership, focusing on Marketing Analytics and Organizational Behavior.',
    icon: '📈'
  },
  {
    title: 'Python & Django Intern',
    institution: 'Webguru Infosys Pvt Ltd',
    location: 'Bidhannagar, Kolkata',
    link: 'https://www.webguru-india.com',
    duration: '2024 (6 Months during B-Tech)',
    description: 'During my internship at Webguru Infosys, I developed production-ready web applications using Python and Django. I gained hands-on experience in building RESTful APIs, database optimization, and collaborating on professional backend architectures.',
    icon: '🐍'
  },
  {
    title: 'Bachelor of Technology (B-Tech CSE)',
    institution: 'Brainware University',
    location: 'Barasat, West Bengal',
    link: 'https://www.brainwareuniversity.ac.in',
    duration: '2022 - 2025 (3 Years)',
    description: 'Advanced my technical expertise with subjects like Advance DBMS and Design & Analysis of Algorithms. I developed a deep understanding of software engineering principles and computer organization for building high-performance systems.',
    icon: '🖥️'
  },
  {
    title: 'Diploma in Computer Science',
    institution: 'Brainware University',
    location: 'Barasat, West Bengal',
    link: 'https://www.brainwareuniversity.ac.in',
    duration: '2019 - 2022 (3 Years)',
    description: 'Established a strong foundation in computer science and programming. This course provided me with crucial knowledge in Object-Oriented Programming, Data Structures, Operating Systems, and Networking.',
    icon: '💻'
  },
  {
    title: 'Hotel Management (F&B Service)',
    institution: 'DDU-GKY',
    location: 'West Bengal',
    link: 'https://ddugky.gov.in',
    duration: '2019 (6 Months)',
    description: 'Specialized in customer service excellence and professional hospitality standards. This certification developed my communication and client interaction skills within a fast-paced environment.',
    icon: '🍽️'
  },
  {
    title: 'Higher Secondary (HS)',
    institution: 'Ujan Haripada High School (WBSCTVESD)',
    location: 'Pachime Medinipur, 721140',
    link: 'https://in.worldorgs.com/catalog/ujan/high-school/ujan-haripada-high-school-hs',
    duration: '2017 - 2019 (2 Years)',
    description: 'Vocational specialization in Computer Science provided my first formal training in tech. It allowed me to explore hardware systems and basic programming, setting the stage for my future career.',
    icon: '⌨️'
  },
  {
    title: 'Madhyamik (X)',
    institution: 'Ujan Haripada High School (WBBSE)',
    location: 'Pachime Medinipur, 721140',
    link: 'https://in.worldorgs.com/catalog/ujan/high-school/ujan-haripada-high-school-hs',
    duration: '2015 - 2017 (2 Years)',
    description: 'Completed Secondary Education under the West Bengal Board of Secondary Education, establishing clear logical and analytical thinking foundation across various scientific and mathematical disciplines.',
    icon: '🏫'
  },
]

export default function Qualification() {
  return (
    <section id="qualification" className="relative scroll-mt-20 py-24 px-6 overflow-hidden border-t border-white/5">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px] opacity-50" />
      <div className="absolute bottom-1/4 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[120px] opacity-50" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            My <span className="gradient-text">Qualification</span>
          </h2>
          <p className="mt-4 text-slate-400">My academic journey and professional certifications</p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent" />

          <div className="space-y-12">
            {qualifications.map((q, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col items-start md:items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <div className="glass glass-hover rounded-2xl p-6 md:p-8">
                    <span className="inline-block text-[10px] sm:text-xs font-semibold text-blue-400 mb-2 uppercase tracking-widest">
                      {q.duration}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 leading-tight">{q.title}</h3>
                    
                    <div className={`flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 text-[11px] sm:text-sm ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      <a 
                        href={q.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-purple-400 font-medium hover:text-purple-300 transition-colors flex items-center gap-1.5 group"
                      >
                         <span className="group-hover:underline">{q.institution}</span>
                        <svg className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <span className="text-slate-700 hidden sm:inline">|</span>
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-blue-500/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {q.location}
                      </span>
                    </div>

                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed">{q.description}</p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 top-10 md:top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10">
                  <div className="flex h-8 w-8 md:h-12 md:w-12 items-center justify-center rounded-full bg-[#0a0a0f] border-2 border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.3)] text-sm md:text-xl">
                    {q.icon}
                  </div>
                </div>

                {/* Spacer for the other side on larger screens */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
