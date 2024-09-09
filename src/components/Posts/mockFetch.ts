const mockPostList = [
  {
    id: 1,
    title: "first post",
  },
  {
    id: 2,
    title: "second post",
  },
  {
    id: 3,
    title: "third post",
  },
];

export default async function mockFetch() {
  return {
    ok: true,
    status: 200,
    json: async () => {
      return mockPostList;
    },
  };
}
