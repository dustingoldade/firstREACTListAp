const List = () => {
  const myList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="list">
      <h1>My List</h1>
      <ul>
        {myList.map((item) => (
          <li> {item} </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
