/* eslint-disable react/prop-types */
import React from "react";

const WantToCooke = ({ cooke, handleClickShow, preparing }) => {
  // Calculate total time and total calories
  const totalTime = preparing.reduce(
    (prevTime, currentTime) => prevTime + parseInt(currentTime.preparing_time),
    0
  );
  const totalCalories = preparing.reduce(
    (prevTime, currentTime) => prevTime + parseInt(currentTime.calories),
    0
  );

  return (
    <div>
      <div className="card bg-base-100 shadow-2xl ml-5">
        <div className="p-4">
          <div className="text-[#282828] font-semibold lg:text-2xl text-center">
            <h3>Want to cook: {cooke.length}</h3>
          </div>
          <div className="divider lg:px-16"></div>
          <div className=" text-[#878787]">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead className="lg:text-xl">
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {cooke.map((c, index) => (
                    <tr className="bg-base-200 space-y-2" key={index}>
                      <th>{index + 1}</th>
                      <td>{c?.recipe_name}</td>
                      <td>{c?.preparing_time}utes</td>
                      <td>{c?.calories}</td>
                      <button
                        onClick={() => handleClickShow(c)}
                        className="btn bg-[#0BE58A] rounded-full"
                      >
                        Preparing
                      </button>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h1 className="text-[#282828] font-semibold lg:text-2xl text-center lg:mt-8">
              Currently cooking: {preparing.length}
            </h1>
          </div>
          <div className="divider lg:px-16"></div>
          <div className="text-[#878787]">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead className="lg:text-xl">
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                  </tr>
                </thead>
                <tbody>
                  {preparing.map((p, i) => (
                    <React.Fragment key={i}>
                      <tr className="bg-base-200">
                        <th>{i + 1}</th>
                        <td>{p.recipe_name}</td>
                        <td>{p.preparing_time}</td>
                        <td>{p.calories}</td>
                      </tr>
                    </React.Fragment>
                  ))}
                  {/* Total row */}
                  <tr className="bg-base-200">
                    <th></th>
                    <td></td>
                    <td>Total time = {totalTime} minutes</td>
                    <td>Total calories = {totalCalories} calories</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WantToCooke;
