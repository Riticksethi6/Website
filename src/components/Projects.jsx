import { motion } from 'framer-motion'
import { projectsData } from '../data/projects'

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="border border-line rounded-2xl overflow-hidden card-hover flex flex-col"
    >
      <div className="p-7 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-5">
          <span className="font-mono text-xs text-neutral-300">/ {String(index + 1).padStart(2, '0')}</span>
          <span
            className="text-[0.65rem] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border border-line text-neutral-500"
          >
            {project.tag}
          </span>
        </div>
        <h3 className="text-lg font-medium text-neutral-900 mb-1">{project.title}</h3>
        <span className="text-xs text-neutral-400 mb-5">{project.context}</span>

        <div className="space-y-4 flex-1">
          <div>
            <div className="text-[0.65rem] uppercase tracking-widest text-neutral-400 mb-1.5">Problem</div>
            <p className="text-sm text-neutral-500 leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <div className="text-[0.65rem] uppercase tracking-widest text-neutral-400 mb-1.5">What I Built</div>
            <p className="text-sm text-neutral-600 leading-relaxed">{project.built}</p>
          </div>
          <div className="bg-neutral-50 rounded-xl p-4 border border-line">
            <div className="text-[0.65rem] uppercase tracking-widest mb-1.5 text-neutral-500">Outcome</div>
            <p className="text-sm font-medium text-neutral-900">{project.outcome}</p>
          </div>
        </div>

        {(project.link || project.github) && (
          <div className="mt-6 flex flex-wrap items-center gap-5">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:opacity-60 transition-opacity duration-200"
              >
                {project.linkLabel}
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-neutral-900 transition-colors duration-200"
              >
                View Source →
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="section-label section-label-light mb-6">/ Case Studies</p>
          <h2 className="heading-editorial text-4xl md:text-5xl text-neutral-900 mb-4">
            Problems <em>I've solved.</em>
          </h2>
          <p className="text-neutral-500 max-w-xl">
            Every project starts with a real problem and ends with a measurable outcome.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {projectsData.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </div>
    </section>
  )
}
