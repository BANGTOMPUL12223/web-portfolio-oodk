const dataCodingProgress = [
  { name: "HTML", progress: "90" },
  { name: "CSS", progress: "80" },
  { name: "JavaScript", progress: "75" },
  { name: "Python", progress: "60" },
];

const dataProfessionalProgress = [
  { name: "Web Design", progress: "95" },
  { name: "Web Development", progress: "57" },
  { name: "Graphic Design", progress: "75" },
  { name: "SEO Marketing", progress: "60" },
];

export default function MySkills() {
  return (
    <div className="px-4 py-10 bg-slate-700">
      <h1 className="font-semibold text-4xl pb-10 text-center">
        My <span className="text-sky-500">Skills</span>
      </h1>

      <div className="flex flex-wrap justify-center gap-6 w-full">
        <div className="lg:w-1/2 w-full">
          <h2 className="font-semibold text-xl pb-4 text-center">
            Coding SKills
          </h2>
          <div className="card border-2 border-sky-600 shadow-xl">
            <div className="card-body">
              {dataCodingProgress.map((doc, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between">
                    <p>{doc.name}</p>
                    <p className="text-end">{doc.progress}%</p>
                  </div>
                  <progress
                    className="progress progress-info"
                    value={doc.progress}
                    max="100"
                  ></progress>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full">
          <h2 className="font-semibold text-xl pb-4 text-center">
            Professional SKills
          </h2>
          <div className="card border-2 border-sky-600 shadow-xl">
            <div className="card-body">
              {dataProfessionalProgress.map((doc, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between">
                    <p>{doc.name}</p>
                    <p className="text-end">{doc.progress}%</p>
                  </div>
                  <progress
                    className="progress progress-info"
                    value={doc.progress}
                    max="100"
                  ></progress>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
