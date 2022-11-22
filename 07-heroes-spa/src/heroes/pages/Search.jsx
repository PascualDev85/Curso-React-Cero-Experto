import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";

import { HeroCard } from "../components";
import { useForm } from "../hooks/useForm";
import { getHereosByName } from "../helpers";

export const Search = () => {
  const { searchText, onInputChange } = useForm({
    searchText: queryString.parse(useLocation().search).q || "",
  });

  const navigate = useNavigate();

  // obtener los query parameters con useLocation
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const heroesFiltered = getHereosByName(q);

  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroesFiltered.length === 0;

  const onSearchSubmit = (e) => {
    e.preventDefault();

    // query parameters
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <div className="searchContent mt-5">
        <div className="col-12 col-md-8 col-lg-5 m-auto">
          <form onSubmit={onSearchSubmit} className="d-flex">
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button
              type="submit"
              className="btn mx-3 btn-block btn-outline-primary"
            >
              Search...
            </button>
          </form>
        </div>
        <div className="row d-flex justify-content-center">
          <div
            className="m-5 col-4 text-center alert alert-info animate__animated animate__fadeIn"
            style={{ display: showSearch ? "" : "none" }}
          >
            Search a hero
          </div>
          <div
            className="m-5 col-10 col-md-6 col-lg-4 text-center alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showError ? "" : "none" }}
          >
            There is no a hero with {q}
          </div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 mb-4 mt-1">
            {heroesFiltered.map((hero) => (
              <HeroCard key={hero.id} {...hero} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
