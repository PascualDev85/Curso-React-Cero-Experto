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
      <div className="row mt-5">
        <div className="col-4">
          <img
            src={`/assets/heroes/${id}.jpg`}
            alt={hero.superhero}
            className="img-thumbnail animate__animated animate__fadeInLeft"
          />
        </div>
        <div className="col-8 animate__animated animate__fadeInRight">
          <h3>{hero.superhero}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Alter ego: </b>
              {hero.alter_ego}
            </li>
            <li className="list-group-item">
              <b>Publisher: </b>
              {hero.publisher}
            </li>
            <li className="list-group-item">
              <b>First appearance: </b>
              {hero.first_appearance}
            </li>
          </ul>
          <h5>Characters</h5>
          <p>{hero.characters}</p>
          <button onClick={onNavigateBack} className="btn btn-outline-info">
            Return
          </button>
        </div>
      </div>
    </>
  );
};
