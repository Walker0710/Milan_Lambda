import React from "react";

const Updates = () => {
  const updates = [
    {
      id: 1,
      title: "Infero Quiz",
      description: "Test your knowledge on competetive programming with our latest quiz!", 
      date: "2024-09-26",
      type: "new_quiz",
    },
    {
      id: 2,
      title: "Leaderboard Reset",
      description:
        "Monthly leaderboard has been reset. Time to climb to the top!",
      date: "2024-09-25",
      type: "system",
    },
    {
      id: 3,
      title: "UI Improvements",
      description:
        "We've made some changes to improve your quiz-taking experience.",
      date: "2024-09-24",
      type: "system",
    },
  ];

  const getIconForUpdateType = (type) => {
    switch (type) {
      case "new_quiz":
        return "📚";
      case "system":
        return "🔧";
      default:
        return "📣";
    }
  };

  return (
    <div className="container mx-auto p-4 mt-10">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold mb-4">Recent Updates</h2>
        {updates.map((update) => (
          <div key={update.id} className="card  border border-black-500">
            <div className="card-body p-2">
              <h3 className="card-title pt-2 pl-2">
                {getIconForUpdateType(update.type)} {update.title}
              </h3>
              <p>{update.description}</p>
              <div className="card-actions justify-end">
                <div className="flex">
                  <div>
                    <div className="badge badge-outline mt-3 mr-3">{update.date}</div>
                  </div>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Updates;
