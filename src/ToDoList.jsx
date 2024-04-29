import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Container, Input, Main, Todos } from "./ToDoStyled";

function toListInfo() {
  const toDo = [];
  for (let i = 0; i < 0; i++) {
    toDo.push({
      id: i,
      text: "Item:" + (i + 1),
    });
  }

  return toDo;
}

const Todo = () => {
  const [todoList, setTodoList] = useState(toListInfo);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  const editTodo = (id) => {
    setTodoList(todoList.map(item => item.id === id ? {
      ...item, isEditing: !item.isEditing} : item ))
  }

  return (
    <Main>
      <Container>
        
        <Input>
          <input    
            autoFocus        
            type="text"
            value={text}
            onChange={handleChange}
          />
          <button            
            onClick={() => {
              setText("");
              setTodoList([
                {
                  id: todoList.length,
                  text: text,
                },
                ...todoList,
              ]);
            }}
          >
            Add
          </button>
        </Input>
        <Todos>
          <p>
            {todoList.map((item) => (
                
              <div className="todo-wrapper"
                    key={item.id}>
                <div>{item.text}</div>
                <div style={{display:'flex'}}>
                    <div style={{marginRight:'15px', padding:'10px 12px 0 15px', borderRadius:'8px', backgroundColor:'#1c1ca1'}}><FaEdit color="white" onClick={() => editTodo(item.id)} /></div>
                    <div style={{padding:'10px 12px', borderRadius:'8px', backgroundColor:'#1c1ca1'}}><FaTrashAlt color="white" onClick={() => deleteTodo(item.id)} /></div>

                </div>
                
              </div>
            ))}
          </p>
          
        </Todos>
      </Container>
    </Main>
  );
};

export default Todo;
