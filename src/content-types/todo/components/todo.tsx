import React, { ChangeEvent } from 'react';
import { Icon } from 'elements/icon';
import { Task, StatusEnum, Todo } from '../todo.model';
import styled from 'styled-components';

interface ITodoProps {
    todo: Todo,
    onDelete?: () => void;
}

interface ITodoState {
    tasks: Task[],
    taskname: string,
    filterOnStatus: StatusEnum
}

const PanelHeading = styled.div`
    background: #474747;
    color: #fff;
`
export class TodoContentType extends React.Component<ITodoProps, ITodoState>{

    state = {
        tasks: this.props.todo.tasks,
        taskname: this.props.todo.title || 'Todos List',
        filterOnStatus: StatusEnum.All
    }

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            taskname: event.currentTarget.value
        });
    }

    handleCheckboxChange = (index: number) => {
        this.setState(({ tasks }) => {
            tasks[index].done = !tasks[index].done

            return { tasks };
        });
    }

    handleKeyUp = (event: any) => {
        const { value } = event.target;

        if (event.keyCode === 13 && value !== '') {
            this.setState({
                tasks: [...this.state.tasks, { label: value, done: false }],
                taskname: ''
            });
        }
    }

    handlechangeFilter = (event: any, status: StatusEnum) => {
        event.preventDefault();

        this.setState({
            filterOnStatus: status
        });
    }

    deleteTask = (index: number) => {
        this.state.tasks.splice(index, 1);
        this.setState({
            tasks: [...this.state.tasks]
        });
    }

    get tasks() {
        if (this.state.filterOnStatus === StatusEnum.Active) {
            return this.state.tasks.filter(t => !t.done);
        }

        if (this.state.filterOnStatus === StatusEnum.Completed) {
            return this.state.tasks.filter(t => t.done);
        }

        return this.state.tasks;
    }

    render() {
        return (
            <article className="panel">
                <PanelHeading className="panel-heading">
                    {this.state.taskname}
                    <Icon>pen fa-xs</Icon>

                    <Icon isAction
                        className="fa-pull-right"
                        onClick={this.props.onDelete}>
                        times fa-2f</Icon>
                </PanelHeading>
                <p className="panel-tabs">
                    {[StatusEnum.All, StatusEnum.Active, StatusEnum.Completed].map(status =>
                        <a href="/"
                            className={this.state.filterOnStatus === status ? 'is-active' : undefined}
                            key={status}
                            onClick={(event) => this.handlechangeFilter(event, status)}>
                            {status}
                        </a>)
                    }
                </p>

                <div className="panel-block">
                    <p className="control has-icons-left">
                        <input className="input"
                            type="text"
                            placeholder="What's need to be done?"
                            name="taskname"
                            value={this.state.taskname}
                            onChange={this.handleChange}
                            onKeyUp={this.handleKeyUp} />
                        <Icon className="is-left">tasks</Icon>
                    </p>
                </div>

                {this.tasks.map((task, index) => (
                    <span key={index} className="panel-block is-active">
                        <label className="is-checkbox">
                            <input type="checkbox"
                                checked={task.done}
                                onChange={() => this.handleCheckboxChange(index)} />
                            <span className="icon checkmark">
                                <i className="fa fa-check"></i>
                            </span>
                        </label>
                        <span style={task.done ? { 'textDecoration': 'line-through' } : undefined}>
                            {task.label}
                        </span>
                        <Icon className="fa-pull-right"
                            isAction
                            onClick={() => this.deleteTask(index)}>
                            times</Icon>
                    </span>
                ))}
            </article>
        );
    }
}