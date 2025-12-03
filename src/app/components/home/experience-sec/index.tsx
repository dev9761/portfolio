import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "2022-2023",
            title: "Web Developer",
            company: "www.moxioutsource.com",
            type: "Fulltime",
            link: "https://moxioutsource.com/",
            description:
                "Worked on UI development using React, WordPress, HTML, CSS, and multiple modern frontend tools. Built responsive interfaces, improved website performance, and collaborated closely with designers to deliver pixel-perfect web experiences."
        },
        {
            link: "https://global.instantsys.com/",
            year: "2023-present",
            title: "Full Stack Developer",
            company: "www.instantsys.com",
            type: "Fulltime",
            description:
                "Working as a Full Stack Developer, contributing to backend development with Java Spring Boot and frontend development using Angular, React, and Next.js. Responsible for API integration, end-to-end feature development, deployments, and ensuring scalable, high-quality application performance."
        }
    ];
    

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                
                                {/* Year + Title */}
                                <div>
                                    <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                {/* Timeline + Company */}
                                <div className="relative">
                                    {index < experiences.length && (
                                        <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-40' : 'h-30'} bg-softGray`}></div>
                                    )}

                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === 1 ? 'border-primary' : 'border-black'}`}>
                                            {index === 1 && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            {/* clickable link here */}
                                            <a 
                                                href={exp.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-xl text-black font-normal hover:text-primary transition"
                                            >
                                                {exp.company}
                                            </a>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base">{exp.description}</p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;
