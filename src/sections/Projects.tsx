import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { projectsData } from '../data/projects';

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto px-6 max-w-7xl">
        <SectionHeading subtitle="Some of the recent projects I've built, focusing on scalable dashboards and robust platforms.">
          Featured Work
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
