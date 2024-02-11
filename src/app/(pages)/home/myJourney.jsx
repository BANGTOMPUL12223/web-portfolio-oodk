export default function MyJourney() {
  return (
    <div className="px-4 py-10">
      <h1 className="font-semibold text-4xl pb-10 text-center">
        My <span className="text-sky-500">Journey</span>
      </h1>

      <div className="flex flex-wrap justify-center gap-10">
        <div>
          <p className="font-semibold text-xl pb-4 text-center">Education</p>
          <ul className="steps steps-vertical">
            <li className="step step-info">
              <div className="card border-2 border-sky-600 shadow-xl">
                <div className="card-body">
                  <p className="flex items-center gap-2 text-sm text-info">
                    <span className="badge badge-info"></span> 20XX - 20XX
                  </p>

                  <h2 className="card-title text-base">
                    SMAN X ***************
                  </h2>

                  <p className="text-start text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi, dolorum.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-xl pb-4 text-center">Experience</p>
          <ul className="steps steps-vertical">
            <li className="step step-info">
              <div className="card border-2 border-sky-600 shadow-xl">
                <div className="card-body">
                  <p className="flex items-center gap-2 text-sm text-info">
                    <span className="badge badge-info"></span> 20XX - 20XX
                  </p>

                  <h2 className="card-title text-base">
                    SMAN X ***************
                  </h2>

                  <p className="text-start text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi, dolorum.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
