// 함수형 컴포넌트 Map()

import { useState } from 'react';

function ListMap() {
  // list라는 state를 만들고 그 안에 배열 생성
  // const [list, setList] = useState(['a', 'b', 'c']);

  // 객체 배열
  const productList = [
    { id: 1, product: '가방' },
    { id: 2, product: '패딩' },
    { id: 3, product: '신발' },
    { id: 4, product: '상의' },
    { id: 5, product: '하의' },
  ];

  const [list, setList] = useState(productList);
  const [newProduct, setNewProduct] = useState('');

  //  map(): 앞에 있는 배열에 대해서 반복을 하면서, map의 인자로 넘어가는 콜백함수의 반환값을 이용해서 새로운 배열을 만든다
  // [<li>a</li>, <li>b</li>, <li>c</li>] 반환값으로써 반복하면서 출력
  // arr.map(콜백함수, [this객체])

  // 상품을 추가하는 메서드
  const addProduct = () => {
    // list와 추가할 객체를 합쳐줘야 한다
    // 원래는 새로운 상품을 back에서 insert하고 생긴 고유 primary값을 id에 담아주면 좋다
    // 하지만, 지금은 임시로 length를 이용하도록 한다
    const newObj = {
      id: list[list.length - 1].id + 1,
      product: newProduct,
    };
    // const newList = [...list, newObj]; // 합치는 방법 1 : list 배열의 스프레드 연산자 + newObj 배열을 합친다
    const newList = list.concat(newObj); // 합치는 방법 2 : .concat() 메서드 이용
    // setList 함수 이용
    setList(newList);
    // 데이터 추가 후 입력 필드 초기화
    setNewProduct('');
  };

  // 더블클릭한 상품을 삭제하는 메서드
  const deleteProduct = (id) => {
    // filter() 메서드: 앞에 있는 배열을 반복. 값을 걸러내는 메서드
    // filter() 메서드의 반환값은 조건이 되어야 한다. 조건이 true일 경우, 해당 원소는 새로운 배열에 포함 / false일 경우, 포함하지 않음

    // const newList = list.filter((value) => {
    //   return value.id != id; // value.id가 id가 아니면
    // });
    // 위와 아래의 코드 완전 동일 (return을 직접 명시하지 않고 return 가능!)
    const newList = list.filter((value) => value.id != id);

    // rendering할 때 list배열을 이용한다 -> 원하는 원소를 삭제해야 한다
    // 삭제된 배열을 setList를 이용하여 list의 상태를 변경 -> 렌더링
    setList(newList);
  };

  return (
    <>
      <h3>map() 함수 공부</h3>
      <label>추가할 상품: </label>
      <input
        type="text"
        value={newProduct}
        onChange={(e) => {
          setNewProduct(e.target.value);
        }}
      />
      <button onClick={addProduct}>추가</button>
      {/* 리스트 출력 */}
      <ul>
        {list.map((value) => {
          return (
            <div>
              {/* key: 이전상태와 현재상태를 잘 비교하기 위해서 필요하다. 고유한 값이어야 한다 */}
              <li
                style={{ cursor: 'pointer' }}
                key={value.id}
                onDoubleClick={() => {
                  deleteProduct(value.id);
                }}
              >
                {value.product}
              </li>
            </div>
          );
        })}
      </ul>
    </>
  );
}

export default ListMap;
