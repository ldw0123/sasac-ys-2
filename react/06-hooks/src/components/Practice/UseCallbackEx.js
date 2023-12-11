import { useCallback, useState } from 'react';

function UseCallbackEx() {
  const data = [
    { id: 1, name: 'item1' },
    { id: 2, name: 'item2' },
    { id: 3, name: 'item3' },
  ];

  const [list, setList] = useState(data);
  const [edit, setEdit] = useState(null);
  const [editText, setEditText] = useState('');

  // 수정 부분
  const handleEdit = useCallback((id) => {
    setEdit(id); // 현재 수정중인 item의 Id
    const itemToEdit = list.find((item) => item.id === id);
    setEditText(itemToEdit.name);
  });

  // 수정 후 저장부분
  const handleSave = useCallback(() => {
    const editList = list.map((item) =>
      item.id === edit ? { ...item, name: editText } : item
    );
    setList(editList);
    setEdit(null);
  }, [list, edit, editText]);

  // 삭제 부분
  const deleteItem = useCallback(
    (idToDelete) => {
      setList((prevList) => prevList.filter((item) => item.id !== idToDelete));
    },
    [] // 빈 의존성 배열: deleteItem 함수는 list나 기타 상태에 의존하지 않음
  );

  return (
    <>
      <h3>UseCallback 실습</h3>
      <ul>
        {list.map((value) => (
          <li key={value.id}>
            {edit === value.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={handleSave}>Save</button>
              </>
            ) : (
              <>
                {value.name}
                <button onClick={() => handleEdit(value.id)}>Edit</button>
                <button onClick={() => deleteItem(value.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
export default UseCallbackEx;
