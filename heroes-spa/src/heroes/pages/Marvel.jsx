import { HeroesList } from "../components/";

export const Marvel = () => {
  return (
    <>
      <h2 className=" animate__animated animate__fadeInRight">Marvel Comics</h2>
      <hr />

      <HeroesList publisher="Marvel Comics" />
    </>
  );
};
