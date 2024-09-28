import React from 'react'


const Recentclubs = [
  {  category: "Infero" },
  {  category: "BTL" },
  { category: "Blockspace" },
  { category: "FCC" },
];

const Allclubs = [
  { category: "Infero" },
  { category: "BTL" },
  { category: "Blockspace" },
  { category: "FCC" },
  { category: "Kludge" },
  { category: "Ecell" },
  { category: "Epoch" },
  { category: "FCC" },
]


const Play = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-10 mt-10 text-center">Recent Quizzes</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pl-10 pr-10">
          {Recentclubs.map((quiz) => (
            <div key={quiz.id} className="bg-base-100 shadow-xl border border-black-500 rounded-lg">
              <div className="card-body">
                <h3 className="card-title flex justify-center">{quiz.category}</h3>
                <button class="btn  flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 7l5 5-5 5M6 12h12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      <h1 className="text-3xl font-bold mb-10 mt-10 text-center">All Quizzes</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pl-10 pr-10 pb-20">
          {Allclubs.map((quiz) => (
            <div key={quiz.id} className="bg-base-100 shadow-xl border border-black-500 rounded-lg">
              <div className="card-body">
                <h3 className="card-title flex justify-center">{quiz.category}</h3>
                <button class="btn  flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 7l5 5-5 5M6 12h12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

    </>
  )
}

export default Play