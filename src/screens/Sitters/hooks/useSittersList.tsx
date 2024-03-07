import { useEffect, useState } from "react";
import { getSittersNear } from "../../../gql";

export type TSitter = {
  bio: string;
  city: string;
  firstName: string;
  id: string;
  lastInitial: string;
  profilePhotoURL: string;
  rating: number;
  state: string;
  yearsActive: number;
};

export type TFilter = {
  distance: number;
  maxExperiance: number;
  minExperiance: number;
};

type TPageInfo = {
  endCursor: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
};

export const useSittersList = () => {
  const experiance = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const distance = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [filter, setFilter] = useState<TFilter>({
    distance: 10,
    maxExperiance: 10,
    minExperiance: 1,
  });
  const [sitters, setSitters] = useState<Array<TSitter>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [pageInfo, setPageInfo] = useState<TPageInfo | null>(null);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [count, setCount] = useState<number>(10);

  const updateFilterValue = (key: keyof TFilter, value: any) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      [key]: value,
    }));
  };

  const getSitters = () => {
    setLoading(true);
    getSittersNear({
      latitude: 33.543682,
      longitude: -86.779633,
      experienceMax: filter.maxExperiance,
      experienceMin: filter.minExperiance,
      distance: filter.distance,
      count: count,
    })
      .then((res) => {
        setSitters(res.nodes);
        setPageInfo(res.pageInfo);
        setTotalCount(res.totalCount);
        res.pageInfo.hasNextPage
          ? setCount(count + 10)
          : setCount(res.totalCount);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error", error);
        setLoading(false);
      });
  };
  useEffect(() => getSitters(), []);

  const getMoreSitters = () => {
    if (pageInfo?.hasNextPage) {
      setLoading(true);
      getSittersNear({
        latitude: 33.543682,
        longitude: -86.779633,
        experienceMax: filter.maxExperiance,
        experienceMin: filter.minExperiance,
        distance: filter.distance,
        count: count,
      })
        .then((res) => {
          setSitters((prevSitters) => [
            ...prevSitters,
            ...res.nodes.filter(
              (sit: { id: string }) =>
                !prevSitters.some((prevSitter) => prevSitter.id === sit.id)
            ),
          ]);
          setSitters(res.nodes);
          setPageInfo(res.pageInfo);
          res.pageInfo.hasNextPage
            ? setCount(count + 10)
            : setCount(res.totalCount);
          setTotalCount(res.totalCount);

          setLoading(false);
        })
        .catch((error) => {
          console.log("Error", error);
          setLoading(false);
        });
    }
  };

  return {
    sitters,
    loading,
    totalCount,
    getSitters,
    getMoreSitters,
    experiance,
    distance,
    updateFilterValue,
    filter,
  };
};
