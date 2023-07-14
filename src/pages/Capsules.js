import { useState, useEffect, useContext } from "react";
import { Loading } from "../components";
import useCapsuleSearch from "../hooks/useCapsuleSearch";
import { AuthContext } from '../Contexts/AuthProvider'; // adjust the import based on your directory structure

export default function Capsules() {
  const [loading, setLoading] = useState(true);
  const [capsules, setCapsules] = useState([]);
  const company = useContext(AuthContext);

  useEffect(() => {
    const fetchCapsules = async () => {
      const res = await fetch("https://api.spacexdata.com/v4/capsules");
      const data = await res.json();
      setCapsules(data);
      setLoading(false);
    };

    fetchCapsules();
  }, [company]);

  const { capsules: filteredCapsules, setFilterStatus, setFilterOriginalLaunch, setFilterType } = useCapsuleSearch(capsules);
  const filterStatus = setFilterStatus;
  const filterOriginalLaunch = setFilterOriginalLaunch;
  const filterType = setFilterType;

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className="py-32">
          <h1 className="heading text-center mb-10">Capsules</h1>

          <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 px-5">
            <div className="flex gap-2 mb-5">
              <label className = "text-light" htmlFor="statusFilter">Status:</label>
              <select
                id="statusFilter"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="">All</option>
                <option value="active">Active</option>
                <option value="retired">Retired</option>
              </select>
            </div>

            <div className="flex gap-2 mb-5">
              <label  className = "text-light" htmlFor="originalLaunchFilter">Original Launch:</label>
              <select
                id="originalLaunchFilter"
                value={filterOriginalLaunch}
                onChange={(e) => setFilterOriginalLaunch(e.target.value)}
              >
                <option value="">All</option>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>

            <div className="flex gap-2 mb-5">
              <label className = "text-light" htmlFor="typeFilter">Type:</label>
              <input
                type="text"
                id="typeFilter"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              />
            </div>

            {filteredCapsules.map(
              ({
                id,
                type,
                status,
                serial,
                launches,
                last_update,
                land_landings,
                water_landings,
                reuse_count,
              }) => (
                <article key={id} className="articles">
                  <h2 className="text-xl font-bold mb-5">
                    {type},{" "}
                    <span className="text-base opacity-75 font-light">
                      {serial}
                    </span>
                  </h2>
                  <ul>
                    <li className="mb-1">{launches.length} launches</li>
                    <li className="mb-1">{land_landings} land landings</li>
                    <li className="mb-1">{water_landings} water landings</li>
                    <li className="mb-1">Reused {reuse_count} times</li>
                    {status === "active" ? (
                      <li className="text-emerald-500">Active</li>
                    ) : (
                      <li className="text-rose-500">Retired</li>
                    )}
                  </ul>

                  <p className="mt-5 opacity-75">{last_update}</p>
                </article>
              )
            )}
          </div>
        </section>
      )}
    </>
  );
}
