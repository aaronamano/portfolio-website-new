import { projects } from '../data/projects';

export default function Projects() {
    return (
        <div className="projects-grid flex flex-wrap gap-8 justify-start items-stretch pr-2 overflow-y-auto max-h-162.5">
            {projects.map((project, index) => (
                <a 
                    key={index} 
                    href={project.link} 
                    className="text-decoration-none"
                >
                    <div className="bg-tertiary rounded-xl shadow-xl overflow-hidden w-72.5 flex flex-col transition duration-200 h-75 hover:translate-y-1.5 hover:scale-105 hover:shadow-2xl border border-custom">
                        <div className="relative">
                            <img 
                                src={project.image} 
                                alt="" 
                                className="w-full h-36 object-cover bg-secondary block" 
                            />
                        </div>
                        <div className="p-5 flex-1 flex flex-col overflow-y-auto">
                            <h3 className="mt-0 mb-3 text-primary text-xl">{project.name}</h3>
                            <p className="text-secondary text-base m-0 flex-1">
                                {project.description}
                            </p>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
}
