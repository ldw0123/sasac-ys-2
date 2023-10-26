exports.commentInfos = () => {
  // mysql 연결
  // select * from comment;
  return [
    {
      id: 1,
      userid: 'lily',
      date: '2023-10-26',
      comment: 'hello',
    },
    {
      id: 2,
      userid: 'gildong',
      date: '2023-10-28',
      comment: 'hello world',
    },
  ];
};
