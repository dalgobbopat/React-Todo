import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';



const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks
    };
  }
    addTodo = (e, todo) => {
      e.preventDefault();
      const newTodo = {
        task: todo,
        id: Date.now(),
        completed: false
      };
      this.setState({
        tasks: [...this.state.tasks, newTodo]
      });
    };

    toggleTodo = todoId => {
      this.setState({
        tasks: this.state.tasks.map(todo => {
          if (todoId === todo.id) {
            return{
              ...todo,
              completed: !todo.completed
            };
          }
          return todo;
        })
      });
    };

    clearCompleted = e => {
      e.preventDefault();
      this.setState({
        tasks: this.state.tasks.filter(todo => !todo.completed)
      });
    };
  render() {
    return (
      <div className="App">
        <div className="header">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList
          tasks={this.state.tasks}
          toggleTodo={this.toggleTodo}
          clearCompleted={this.clearCompleted}
          />
      </div>
    );
  }
}

export default App;
