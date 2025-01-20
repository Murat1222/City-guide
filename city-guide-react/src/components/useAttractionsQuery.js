import { useQuery } from '@tanstack/react-query';
import { getUrlObject } from '../components/Utils';

const fetchAttractions = async ({ page, limit }) => {
  const urlObject = getUrlObject(
    'https://6734e04a5995834c8a9132b6.mockapi.io/attractions',
    page,
    limit,
    null,
    null
  );

  const response = await fetch(urlObject);
  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status}`);
  }
  return response.json();
};

export const useAttractionsQuery = (page, limit) => {
  return useQuery({
    queryKey: ['attractions', page],
    queryFn: () => fetchAttractions({ page, limit}),
    keepPreviousData: true,
    staleTime: 300000,
    cacheTime: 600000,
    refetchOnWindowFocus: false,
  });
};