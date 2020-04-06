import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todo:''
        };
    }
    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submitTodo = e => {
        e.preventDefault();
        this.setState({ todo: ''});
        this.props.addTodo(e, this.state.todo)
    }
}