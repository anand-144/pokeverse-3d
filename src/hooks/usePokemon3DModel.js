import { useEffect, useState } from "react";
import { getPokemonModels } from "../services/pokemon3d";

function usePokemon3DModel(id) {
  const [modelUrl, setModelUrl] = useState(null);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadModel() {
      try {
        const models = await getPokemonModels();

        const pokemon = models.find((p) => p.id === id);

        console.log("Pokemon 3D Data:", pokemon);

        console.log("Available Forms:", pokemon?.forms);

        pokemon?.forms?.forEach((form, index) => {
          console.table(
            pokemon?.forms?.map((form) => ({
              name: form.name,
              formName: form.formName,
              model: form.model,
            })),
          );
        });

        if (pokemon?.forms?.length) {
          setModelUrl(pokemon.forms[0].model);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      loadModel();
    }
  }, [id]);

  return {
    modelUrl,
    loading,
  };
}

export default usePokemon3DModel;
