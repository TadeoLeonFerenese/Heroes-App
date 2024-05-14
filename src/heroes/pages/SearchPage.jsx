import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import queryString from "query-string";
import { getHeroesByName } from "../helpers/getHeroesByName";

import { HeroCard } from "../components";

// import HeroCard from "../components";
export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const { searchText, onInputChange } = useForm({
    serchText: q,
  });

  const onSerchSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().lenght <= 1) return;

    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSerchSubmit}>
            <input
              type="text"
              placeholder="Search a Hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div className="alert alert-primary"> Search a Hero</div>
          <div className="alert alert-danger">
            No hero with <b>{q}</b>
          </div>

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}

          {/* <HeroCard /> */}
        </div>
      </div>
    </>
  );
};
