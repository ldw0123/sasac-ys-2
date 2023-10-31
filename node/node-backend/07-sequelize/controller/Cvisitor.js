const { Visitor } = require('../model'); // model 폴더의 index.js를 불러옴

exports.home = (req, res) => {
  res.render('index');
};

// sequelize와 exios는 promise 기반. callback 안 써도 됨

// GET /visitors => 기존 방명록 전체 조회 후 render("visitor.ejs")
exports.visitor = (req, res) => {
  // select * from visitor;
  Visitor.findAll().then((result) => {
    console.log('findAll result: ', result);
    console.log('0번 index의 username:', result[0].dataValues.username); // dataValues는 생략해도 됨
    // 기대한 건 : [{id: , username: , comment: }, {id: , username: , comment: }]
    res.render('visitor', { data: result });
  });

  // Visitor.findAll({
  //   where: { username: 'lily'}
  // })
};

// POST /visitor => 방명록 등록 insert
exports.postVisitor = async (req, res) => {
  const data = {
    // username, comment 는 컬럼 정보. 임의로 x
    username: req.body.username,
    comment: req.body.comment,
  };

  // then-catch 문
  // Visitor.create(data).then((result) => {
  //   console.log('create result: ', result);
  //   res.send(result);
  // })
  // .catch(err() => { // 에러 처리
  //   console.log(err);
  //   res.status(500).send("오류 발생");
  // });

  const createVisitor = await Visitor.create(data);
  res.send(createVisitor);
};

// DELETE /visitor/:id => 방명록 삭제
exports.deleteVisitor = (req, res) => {
  Visitor.destroy({
    // destroy() : 삭제 메서드
    where: {
      // 어떤 것을 삭제할 것인가?
      id: req.params.id,
    },
  }).then((result) => {
    console.log('destory result: ', result);
    res.send({ result: true });
  });
};

// GET /visitor/:id => 방명록 하나 조회
exports.getVisitorById = (req, res) => {
  // select * from visitor where id = ?? limit 1;
  Visitor.findOne({
    // findOne() : 하나만 조회
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    console.log('findOne result: ', result);
    res.send(result);
  });
};

// PATCH /visitor/:id => 방명록 수정
exports.patchVisitor = (req, res) => {
  const data = {
    username: req.body.username,
    comment: req.body.comment,
  };
  // update visitor set username = '??', comment = '???' where id = ?

  // update() : 인자 2개
  Visitor.update(data, {
    where: {
      id: req.body.id,
    },
  }).then((result) => {
    console.log('update result: ', result);
    res.send(result);
  });
};

// 임시 라우터와 연결
exports.getTest = (req, res) => {
  // select * from visitor where id = 2 order by username ASC (오름차순)
  Visitor.findAll({
    attributes: ['username', 'id'], // 속성 검색
    // where: {
    //   id: req.params.id,
    // },
    order: [['username', 'ASC']],
  }).then((result) => {
    console.log('findOne result: ', result);
    res.send(result);
  });
};
