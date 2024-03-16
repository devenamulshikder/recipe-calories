const Cards = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Spaghetti Bolognese</h2>
            <p className="text-[#150B2B99]">
              Classic Italian pasta dish with savory meat sauce.
            </p>
            <div className="divider"></div>
            <div>
              <h1 className="text-xl font-semibold">Ingredients: 6</h1>
              <ol className="text-[#150B2B99] space-y-3 mt-4">
                <li> 500g ground beef</li>
                <li> 1 onion, chopped</li>
                <li> 2 cloves garlic, minced</li>
              </ol>
            </div>
            <div className="divider"></div>
            <div className="flex gap-4 text-[#282828CC]">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <p>30 minutes</p>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                  />
                </svg>
                <p>600 calories</p>
              </div>
            </div>
            <div className="card-actions">
              <button className="btn bg-[#0BE58A] rounded-full text-black mt-4">
                Want to Cook
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Spaghetti Bolognese</h2>
            <p className="text-[#150B2B99]">
              Classic Italian pasta dish with savory meat sauce.
            </p>
            <div className="divider"></div>
            <div>
              <h1 className="text-xl font-semibold">Ingredients: 6</h1>
              <ol className="text-[#150B2B99] space-y-3 mt-4">
                <li> 500g ground beef</li>
                <li> 1 onion, chopped</li>
                <li> 2 cloves garlic, minced</li>
              </ol>
            </div>
            <div className="divider"></div>
            <div className="flex gap-4 text-[#282828CC]">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <p>30 minutes</p>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                  />
                </svg>
                <p>600 calories</p>
              </div>
            </div>
            <div className="card-actions">
              <button className="btn bg-[#0BE58A] rounded-full text-black mt-4">
                Want to Cook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
