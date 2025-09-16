export default function ProjectCard({ title, description, tech, live, github }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <span key={t} className="text-sm bg-gray-700 px-2 py-1 rounded">{t}</span>
        ))}
      </div>
      <div className="flex space-x-4">
        <a href={live} className="text-teal-400 hover:underline" target="_blank">Live</a>
        <a href={github} className="text-teal-400 hover:underline" target="_blank">GitHub</a>
      </div>
    </div>
  );
}
