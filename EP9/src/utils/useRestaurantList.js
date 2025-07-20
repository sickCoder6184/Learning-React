import { useEffect, useState, useCallback } from "react";

const PAGE_SIZE = 15;

const useRestaurantList = (lat, lng) => {
  const [listOfRes, setListOfRes] = useState([]);
  const [allRes, setAllRes] = useState([]);

  const [loading, setLoading] = useState(false);

  //Pagination
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  // Fetch a page of restaurants
  const fetchRestaurants = useCallback(
    async (currentOffset = 0, isInitial = false) => {
      if (!lat || !lng) return;
      setLoading(true);
      const API_URL = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&collection=80476&type=rcv2&offset=${currentOffset}&page_type=null`;
      try {
        const res = await fetch(API_URL);
        const json = await res.json();

        // Handle API errors
        if (json.statusCode === 1) {
          setHasMore(false);
          setLoading(false);
          return;
        }

        const restaurants =
          json?.data?.cards
            ?.filter(
              (card) =>
                card?.card?.card?.["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
            )
            .map((card) => card.card.card.info) || [];

        if (isInitial) {
          setListOfRes(restaurants);
          setAllRes(restaurants);
        } else {
          setListOfRes((prev) => [...prev, ...restaurants]);
          setAllRes((prev) => [...prev, ...restaurants]);
        }
        setHasMore(restaurants.length === PAGE_SIZE);
      } catch (error) {
        setListOfRes([]);
        setAllRes([]);
        setHasMore(false);
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    [lat, lng]
  );

  useEffect(() => {
    setListOfRes([]);
    setAllRes([]);
    setOffset(0);
    setHasMore(true);
    fetchRestaurants(0, true);
    
  }, [lat, lng, fetchRestaurants]);

  // Infinite scroll: call to load more
  const loadMore = () => {
    if (!hasMore || loading) return;
    const newOffset = offset + PAGE_SIZE;
    setOffset(newOffset);
    fetchRestaurants(newOffset, false);
  };

  // Filter/search functions (on allRes as backup)
  const filterVeg = () => {
    setListOfRes(allRes.filter((item) => item.veg === true));
  };
  const filterNonVeg = () => {
    setListOfRes(allRes.filter((item) => item.veg !== true));
  };
  const resetFilter = () => {
    setListOfRes(allRes);
  };
  const search = (searchText) => {
    if (!searchText) return setListOfRes(allRes);
    setListOfRes(
      allRes.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  return {
    listOfRes,
    allRes,
    loading,
    hasMore,
    loadMore,
    filterVeg,
    filterNonVeg,
    resetFilter,
    search,
  };
};

export default useRestaurantList;
