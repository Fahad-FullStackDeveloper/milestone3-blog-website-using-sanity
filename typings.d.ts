interface Post {
  id: number;
  _id: string;
  _createdAt: string;
  title: string;
  category1: string;
  category2: string;
  category3: string;
  image: string;
  commentCount: number;
  likes: number;
  views: number;
  slug: string;
  bodyText: string;
  mainImage: string;
  summary: string;
  publishedAt: string;
  author: {
    _id: string;
    _type: string;
    _ref: string;
    _createdAt: string;
    _updatedAt: string;
    _key: string;
    _rev: string;
    name: string;
    image: string;
  };
  description: string;
  mainImage: {
    _type: string;
    _key: string;
    image: image;
    _id: string;
    asset: {
      image: image;
      _ref: string;
      _type: string;
      _id: string;
      _createdAt: string;
      altText: string;
      _type: string;
      _ref: string;
      url: string;
    };
  };
  slug: {
    current: string;
  };
  body: [object];
  comments: Comment[];
  _rev: string;
  _type: string;
  _updatedAt: string;
};
