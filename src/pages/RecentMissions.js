import React from 'react'
import { useCompany } from "../hooks/useCompany";
import { Loading } from "../components"

const RecentMissions = () => {
  const company = useCompany();
    
  return (
    <>
    {!company ? (
        <Loading />
      ) : (
        <section className="showcase">
            <div className="overlay">
    <article className="text-white">
      <h1 className="heading text-center capitalize">
        All The SpaceX Data in one place
      </h1>

      <div className="flex flex-col">
        <article>
          <h2 className="font-bold border-b-2 border-white text-xl mb-3 pb-2 uppercase tracking-wider">
            About
          </h2>
          <ul className="flex flex-row text-sm opacity-75">
            <li className="mb-1">{company.name} was founded by</li>
            <li className="mb-1">{company.founder} in the year</li>
            <li className="mb-1">{company.founded}.</li>
            <li className="mb-1">
              It has {company.employees} employess,
            </li>
            <li className="mb-1">{company.vehicles} vehicles,</li>
            <li className="mb-1">
              {company.launch_sites} launch sites,
            </li>
            <li className="mb-1">
              and {company.test_sites} test sites and
            </li>
            <li className="mb-1">
              is valued at {company.valuation.toLocaleString()} B
            </li>
          </ul>
        </article>

        <article>
          <h2 className="font-bold border-b-2 border-white text-xl mb-3 pb-2 uppercase tracking-wider">
            Headquarters
          </h2>
          <ul className="text-sm opacity-75">
            <li className="mb-1">{company.headquarters.address}</li>
            <li className="mb-1">{company.headquarters.city}</li>
            <li className="mb-1">{company.headquarters.state}</li>
          </ul>
        </article>
      </div>

      <p className="max-w-3xl mx-auto text-center mt-10">
        {company.summary}
      </p>
    </article>
  </div>
  </section>

      )}
    </>

    
    )

}

export default RecentMissions