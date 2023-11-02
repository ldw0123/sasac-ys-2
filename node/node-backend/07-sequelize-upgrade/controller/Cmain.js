// model/index.js 불러오기
const { Customer, Orders, Sequelize } = require('../model');
// Operators
const Op = Sequelize.Op;

exports.main = async (req, res) => {
  // customer의 주문 목록 "custname"과 함께
  const cust = await Customer.findAll({
    // Sequelize 쿼리문
    attributes: ['custid', 'custname', 'birth'],
    where: { birth: { [Op.gte]: '2000-01-01' } },
    include: [
      {
        model: Orders,
        // 'custid'를 제외하고 조회
        attributes: { exclude: ['custid'] },
        // where: {} // where 쓸 수 있음
      },
    ],
    raw: true,
  });

  res.send(cust);
};
