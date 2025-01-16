import { useCallback, useEffect, useState } from "react";
import { apiBrands } from "../../../service/api";
import ModelView from "../view/model.view";
import { Model } from "../types";

export default function ModelController({ route }: any) {
  const [models, setModels] = useState<Model[]>([]);
  const { brandId } = route.params;

  const getAllModels = useCallback(
    async (brandId: string): Promise<Model[]> => {
      const response = await apiBrands.get(`/marcas/${brandId}/modelos`);
      return response.data.modelos;
    },
    []
  );

  useEffect(() => {
    (async () => {
      const models = await getAllModels(brandId);
      setModels(models);
    })();
  }, []);

  return <ModelView models={models} />;
}
