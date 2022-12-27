import { useState, useEffect, useCallback } from "react";
import EvolveFrom from "./Evolution.EvolveFrom";
import EvolveChain from "./Evolution.EvolutionChain";
export default ({ data, species }) => {
  const [evolution, setEvolution] = useState({});
  const init = useCallback(
    async (data, species) => {
      const chain = [];
      //traverse pokemon chain
      function traverse(pokemon) {
        chain.push(pokemon);
        if (pokemon?.evolves_to?.length < 1) {
          return;
        }
        return pokemon?.evolves_to?.map((item) => {
          chain.push(pokemon?.evolves_to);
          return traverse(item?.evolves_to);
        });
      }

      //fetch evolves from
      const evolve_from =
        species?.evolves_from_species?.name &&
        (await (
          await fetch(
            `https://pokeapi.co/api/v2/pokemon/${species?.evolves_from_species?.name}`
          )
        ).json());
      //fetch evolves chain
      const evolution_chain =
        species?.evolution_chain?.url &&
        (await (await fetch(species?.evolution_chain?.url)).json());

      evolution_chain?.chain && traverse(evolution_chain?.chain);

      const evolutiontemplate = {
        evolves_from: evolve_from && {
          name: evolve_from?.name,
          image: evolve_from?.sprites?.other["official-artwork"]?.front_default,
        },
        chain: chain,
      };
      setEvolution(evolutiontemplate);
    },
    [data, species]
  );

  useEffect(() => {
    init(data, species);
    ///
  }, [data, species]);
  return (
    <>
      <div>
        {evolution?.evolves_from?.image ? (
          <div>
            <div
              style={{ textAlign: "center", fontSize: "1.3em", color: "gray" }}
            >
              Evolution
            </div>
            <br />
            <EvolveFrom
              to={{
                name: data?.name,
                image: data?.sprites?.other["official-artwork"]?.front_default,
              }}
              from={{
                image: evolution?.evolves_from?.image,
                name: evolution?.evolves_from?.name,
              }}
            />
          </div>
        ) : (
          <div style={{ textAlign: "center", color: "lightgray" }}>
            No Previous Evolution Form
          </div>
        )}
        {evolution?.chain?.length > 0 ? (
          <>
            <br />
            <div
              style={{ textAlign: "center", fontSize: "1.3em", color: "gray" }}
            >
              Evolution Chain
            </div>
            <br />
            <EvolveChain data={evolution.chain} />
          </>
        ) : (
          <div style={{ textAlign: "center", color: "lightgray" }}>
            No Evolution Chain Form
          </div>
        )}
      </div>
    </>
  );
};
