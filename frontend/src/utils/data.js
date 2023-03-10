export const userQuery = (userId) => {
  const query = `*[_type == "user" && sub == '${userId}']`[0];

  return query;
};

//Search query
export const searchQuery = (searchTerm) => {
  const query =
    `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
        image{
          asset->{
            url
          }
        },
            _id,
            destination,
            postedBy->{
              _id,
              userName,
              image
            },
            save[]{
              _key,
              postedBy->{
                _id,
                userName,
                image
              },
            },
          }`[0];
  return query;
};

export const feedQuery = `*[_type == 'pin'] | order(_createdAt desc) {
  image{
    asset->{
      url
    }
  },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      },
}`[0];
