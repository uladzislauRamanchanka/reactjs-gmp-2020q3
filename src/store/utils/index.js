export const formLink = ({
  sortType,
  sortOrder,
  activeGenre,
  searchString,
  limit = 18,
}) => {
  let params = `?limit=${limit}`;
  
  if (sortType) params += `&sortBy=${sortType}`
  if (sortOrder) params += `&sortOrder=${sortOrder}`
  if (activeGenre) params += `&filter=${[activeGenre]}`
  if (searchString) params += `&search=${searchString}&searchBy=title`
  
  return params;
};
