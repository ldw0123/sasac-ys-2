const { commentInfos } = require('../model/Comment');

exports.main = (req, res) => {
  res.render('index'); // index.js render
};

exports.comments = (req, res) => {
  const commentData = commentInfos(); // commentInfos() 함수의 리턴값을 변수에 담는다
  // commentData = [
  //   {
  //     id: 1,
  //     userid: 'dooly',
  //     date: '2023-10-26',
  //     comment: 'hello node.js!',
  //   },
  //   {
  //     id: 2,
  //     userid: 'gildong',
  //     date: '2023-10-28',
  //     comment: 'hello seoul!',
  //   },
  // ];
  res.render('comments', {
    commentInfos: commentData,
  }); // index.js render
};
