import { useMemo } from "react";
import { useParams, Navigate, useNavigate, Link } from "react-router-dom";
import { getHeroById } from "../helpers";

export const Hero = () => {
  const { id } = useParams();

  // Mejora de performance con useMemo para evitar que se vuelva a ejecutar la función getHeroById, hastaque el la dependencia id cambie
  const hero = useMemo(() => getHeroById(id), [id]);

  const navigate = useNavigate();

  const onNavigateBack = () => {
    <Link to="/search" /> && navigate(-1);

    hero.publisher === "Marvel Comics" ? navigate("/marvel") : navigate("/dc");
  };

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  return (
    <>
      <div className="row mt-5 contentHero">
        <div className="col-10 col-md-4">
          <img
            src={`/public/heroes/${id}.jpg`}
            alt={hero.superhero}
            className="img-thumbnail animate__animated animate__fadeInLeft"
          />
        </div>
        <div className=" col-10 col-md-8 animate__animated animate__fadeInRight heroDescription">
          <h3 className="text-danger">{hero.superhero}</h3>
          <hr className="text-danger mt-0" />
          <ul className="list-group  p-5">
            <li className="list-group-item">
              <b>Alter ego: </b>
              <span>{hero.alter_ego}</span>
            </li>
            <li className="list-group-item">
              <b>Publisher: </b>
              <span>{hero.publisher}</span>
            </li>
            <li className="list-group-item">
              <b>First appearance: </b>
              <span>{hero.first_appearance}</span>
            </li>
          </ul>
          <h4 className="text-danger">Characters</h4>
          <hr className="text-danger mt-0" />
          <p className="text-light">{hero.characters}</p>
          <button
            onClick={onNavigateBack}
            className="btn btn-outline-info mt-5"
          >
            Return
          </button>
        </div>
      </div>
    </>
  );
};
