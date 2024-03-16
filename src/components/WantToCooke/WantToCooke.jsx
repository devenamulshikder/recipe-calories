const WantToCooke = () => {
  return (
    <div>
      <div className="card bg-base-100 shadow-2xl ml-5">
        <div className="p-4">
          <div className="text-[#282828] font-semibold text-2xl text-center">
            <h3>Want to cook: 01</h3>
          </div>
          <div className="divider lg:px-16"></div>
          <div className=" text-[#878787]">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead className="text-xl">
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr className="bg-base-200">
                    <th>1</th>
                    <td>Chicken Caesar Salad</td>
                    <td>20 minutes</td>
                    <td>400 calories</td>
                    <button className="btn bg-[#0BE58A] rounded-full">
                      Preparing
                    </button>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h1 className="text-[#282828] font-semibold text-2xl text-center lg:mt-8">
              Currently cooking: 02
            </h1>
          </div>
          <div className="divider lg:px-16"></div>
          <div className="text-[#878787]">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead className="text-xl">
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr className="bg-base-200">
                    <th>1</th>
                    <td>Spaghetti Bolognese</td>
                    <td>30 minutes</td>
                    <td>600 calories</td>
                  </tr>
                  {/* row 2 */}
                  <tr className="bg-base-200">
                    <th>1</th>
                    <td>Spaghetti Bolognese</td>
                    <td>30 minutes</td>
                    <td>600 calories</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* <div className="divider"></div> */}
        </div>
      </div>
    </div>
  );
}

export default WantToCooke