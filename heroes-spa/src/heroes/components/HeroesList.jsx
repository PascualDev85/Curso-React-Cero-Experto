import { HeroCard } from "./";
import { getHeroesByPublisher } from "../helpers";
import { useMemo } from "react";

export const HeroesList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 mb-4 mt-1 contentHereoList">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
