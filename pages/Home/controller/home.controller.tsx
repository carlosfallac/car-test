import { useCallback, useEffect, useState } from "react";
import { apiBrands } from "../../../service/api";
import { Brands } from "../types";
import HomeView from "../view/home.view";
import { useNavigation } from "@react-navigation/native";

export default function HomeController() {
  const [brands, setBrands] = useState<Brands[]>([]);

  const navigation = useNavigation();

  const getAllBrands = useCallback(async (): Promise<Brands[]> => {
    const response = await apiBrands.get<Brands[]>("/marcas");

    return response.data;
  }, []);

  useEffect(() => {
    (async () => {
      const brands = await getAllBrands();
      setBrands(brands);
    })();
  }, []);

  const handleNavigate = (brandId: string) => {
    navigation.navigate("Model", {
      brandId,
    });
  };

  return <HomeView brands={brands} handleNavigate={handleNavigate} />;
}
