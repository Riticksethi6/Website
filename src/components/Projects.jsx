import { motion } from 'framer-motion'
import { projectsData } from '../data/projects'

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[#1a1f2e] border border-[#ffffff15] rounded-2xl overflow-hidden card-hover"
    >
      <div className="h-1" style={{ background: project.color }} />
      <div className="p-7">
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="text-2xl">{project.icon}</span>
            <h3 className="text-xl font-bold text-white mt-2">{project.title}</h3>
            <span className="text-xs text-gray-500 font-mono">{project.context}</span>
          </div>
          <span
            className="text-xs px-3 py-1 rounded-full border font-mono flex-shrink-0 ml-4 mt-1"
            style={{ color: project.color, borderColor: project.color + '44', background: project.color + '15' }}
          >
            {project.tag}
          </span>
        </div>

        <div className="space-y-4">
          <div>
            <div className="text-xs uppercase tracking-widest text-gray-500 mb-1 flex items-center gap-2">
              <span className="w-4 h-px bg-gray-600" />Problem
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-gray-500 mb-1 flex items-center gap-2">
              <span className="w-4 h-px" style={{ background: project.color }} />What I Built
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">{project.built}</p>
          </div>
          <div className="bg-[#0f1117] rounded-xl p-4 border border-[#ffffff08]">
            <div className="text-xs uppercase tracking-widest mb-1 flex items-center gap-2" style={{ color: project.color }}>
              <span className="w-4 h-px" style={{ background: project.color }} />Outcome
            </div>
            <p className="text-sm font-medium text-white">{project.outcome}</p>
          </div>
        </div>

        {(project.link || project.github) && (
          <div className="mt-5 flex flex-wrap items-center gap-5">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
                style={{ color: project.color }}
              >
                {project.linkLabel}
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
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
    <section id="projects" className="py-24 px-6 bg-[#0d111b]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#00d4ff] text-sm font-medium tracking-widest uppercase mb-3">Case Studies</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Problems I've Solved</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Every project starts with a real problem and ends with a measurable outcome.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projectsData.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </div>
    </section>
  )
}
