export const userQuery = (userId) => {
  const query = `*[_type == "user" && sub == '${userId}']`[0];

  return query;
};
