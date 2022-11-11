import { useParams, Navigate } from "react-router-dom";
import { getHeroById } from "../helpers";

export const Hero = () => {
  const params = useParams();

  console.log(params);

  const hero = getHeroById(id);

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  return <h1>{hero.superhero}</h1>;
};
