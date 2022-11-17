import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImageUrl = `./assets/heroes/${id}.jpg`;

  // const charactersByHero = <p>{characters}</p>;

  return (
    <div className="col animate__animated animate__fadeIn cardHero">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-md-7 col-lg-6">
            <Link to={`/hero/${id}`}>
              <img src={heroImageUrl} className="card-img" alt={superhero} />
            </Link>
          </div>

          <div className="col-md-5 col-lg-6 cardContent">
            <div className="card-body px-1">
              <h5 className="card-title">{superhero}</h5>
              <small>Alter ego</small>
              <p className="card-text">{alter_ego}</p>
              {/* {alter_ego !== characters && charactersByHero} */}
              <small className="smallFApperance">First Appearance</small>
              <p className="card-text pFappearance">{first_appearance}</p>
              <Link to={`/hero/${id}`}>More...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
