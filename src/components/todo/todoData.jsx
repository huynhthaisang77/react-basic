/* eslint-disable react/prop-types */
const TodoData = (props) => {
  const { todoList, deleteTodo } = props;

  const handleClick = (id) => {
    deleteTodo(id)
  }

  console.log(">>check props: ", todoList);
  return (
    <div className="todo-data">
        {todoList.map((item, index) => {
            console.log(">>> check: ", item, index)
            return (
                // eslint-disable-next-line react/jsx-key
                <div className={`todo-item`} key={item.id}>
                    <div>{item.name}</div>
                        <button 
                        onClick={() => handleClick(item.id)}
                        style={{ cursor: "pointer"}}>Delete</button>
                    </div>
            )
        })}

    </div>
  )
}
export default TodoData;
