import { useState, useEffect } from "react";
import { SwiggyApi } from "../utils/constans";

const useRestaurantMenu = (resId) => {
  const [menuData, setMenuData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${SwiggyApi}${resId}`);
        const json = await res.json();
        setMenuData(json?.data);
      } catch (error) {
        setMenuData({});
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (resId) fetchMenu();
  }, [resId]);

  return { menuData, loading };
};

export default useRestaurantMenu;
