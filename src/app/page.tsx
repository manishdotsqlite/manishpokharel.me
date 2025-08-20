"use client";

import projects from "@/data/projects";
import work from "@/data/work";
import WorkItem from "@/components/WorkItem";
import ProjectTile from "@/components/ProjectTile";
import ViewAllHeader from "@/components/ViewAllHeader";
import {motion} from "framer-motion";
import {
    FaMapMarkerAlt,  FaLanguage,
    FaUniversity, FaBuilding, 
    FaCode,
    FaCoins,
    FaRunning,
} from "react-icons/fa";
import education from "@/data/education";

/**
 * Home component that serves as the main landing page for the portfolio.
 * This is accessed at the root URL ("/") of the application.
 */
export default function Home() {


    return (
        <section className="px-4 max-w-4xl mx-auto">

            {/* Intro Section */}
            <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 1}}
                viewport={{once: true}}
                className="text-center mt-2"
            >
                {/* Introductory Text */}
                <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                    Hi, I&#39;m Manish. 
                </h1>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto text-left mb-6">
                    I am a blockchain developer who primarily works with Rust, focusing on building decentralized systems and tools. Alongside blockchain, I have experience in DevOps, managing deployment pipelines and infrastructure. I also work with web development at a basic level, which helps me connect backend systems to user-facing applications. My work combines a strong technical foundation with a practical approach to solving real problems.
                </p>



                {/* Quick Facts Section */}
                <div className="mt-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Quick & Fun Facts</h2>

                    <div className="flex flex-wrap justify-center gap-3 px-4 max-w-4xl mx-auto">
                        {[
                    { icon: FaBuilding, label: "Vanguard Tech" },
                    { icon: FaUniversity, label: "Computer Science @ KU" },
                    { icon: FaMapMarkerAlt, label: "Bhaktapur, Nepal" },
                    { icon: FaCode, label: "Blockchain & Rust Developer" },
                    { icon: FaCoins, label: "Into Blockchain Tech" },
                    { icon: FaLanguage, label: "EN / Hindi / Nepali" },
                    { icon: FaRunning, label: "Runner (5k PB: 28:41)" },
                        ].map((fact, i) => {
                            const Icon = fact.icon;
                            return (
                                <div
                                    key={i}
                                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800
                                    text-sm text-gray-700 dark:text-gray-300 rounded-full shadow-md transition"
                                >
                                    <Icon className="text-blue-500 dark:text-blue-400 text-base"/>
                                    <span>{fact.label}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </motion.div>

            

            {/* Recent Work */}
            <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 1}}
                viewport={{once: true}}
                className="mt-16"
            >
                <ViewAllHeader title="Work Experience" pageUrl="/work" itemCount={work.length}/>
                <div className="grid gap-4">
                    {work.slice(0, 3).map((job, i) => (
                        <motion.div
                            key={i}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 1}}
                            viewport={{once: true}}
                        >
                            <WorkItem {...job} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Education Section */}
            <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 1}}
                viewport={{once: true}}
                className="mt-16 mb-12"
            >
                <ViewAllHeader title="Education" pageUrl="#"  itemCount={education.length}/>

                <div className="relative">
                    {/* Timeline vertical line */}
                    <span className="absolute left-4 top-0 h-full w-0.5 bg-gray-200 dark:bg-blue-900 rounded-full"></span>
                    <ol className="pl-0 space-y-8">
                        {education.map((edu, i) => (
                            <motion.li
                                key={i}
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 1}}
                                viewport={{once: true}}
                                className="relative flex items-start gap-4"
                            >
                                <span className="w-3 h-3 mt-1 rounded-full bg-blue-600 absolute left-3"></span>
                                <div className="ml-8">
                                    <time className="text-xs font-medium text-gray-700 dark:text-gray-300">
                                        {edu.startDate} – {edu.endDate}
                                    </time>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{edu.degree}</h3>
                                    <div className="font-semibold text-blue-600 dark:text-blue-400 mb-1">
                                        {edu.institution}
                                    </div>
                                    <p className="mt-0.5 text-sm text-gray-700 dark:text-gray-300">
                                        {edu.description}
                                    </p>
                                </div>
                            </motion.li>
                        ))}
                    </ol>
                </div>
            </motion.div>

            {/* Recent Projects */}
            <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 1}}
                viewport={{once: true}}
                className="mt-16"
            >
                <ViewAllHeader title="Recent Projects" pageUrl="/projects" itemCount={projects.length}/>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {projects.slice(0, 4).map((proj) => (
                        <motion.div
                            key={proj.slug}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 1}}
                            viewport={{once: true}}
                        >
                            <ProjectTile key={proj.slug} {...proj} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            

        </section>
    )
}

