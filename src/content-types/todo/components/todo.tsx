import React from 'react';
import { Icon } from 'elements/icon';
import { TaskModel, StatusEnum, TodoModel } from '../models/todo.model';
import styled from 'styled-components';

import { DialogInputService } from 'elements/dialog-input';

interface ITodoProps {
    todo: TodoModel,
    onChange?: () => void;
    onDelete?: () => void;
}

interface ITodoState {
    tasks: TaskModel[],
    filterOnStatus: StatusEnum
}

const PanelHeading = styled.div`
    background: #474747;
    color: #fff;
`
export class Todo extends React.Component<ITodoProps, ITodoState>{

    state = {
        tasks: this.props.todo?.tasks || [],
        filterOnStatus: StatusEnum.All
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
            });
            event.target.value = '';
        }
    }

    handlechangeFilter = (event: React.MouseEvent<HTMLElement>, status: StatusEnum) => {
        event.preventDefault();

        this.setState({
            filterOnStatus: status
        });
    }

    handleChangeTitle = async () => {
        const value = await new DialogInputService({
            textTitle: 'Change title',
            textCancel: 'Cancel',
            value: this.props.todo?.title || 'Todos List'
        }).show();

        console.log(value);
    }

    deleteTask = (index: number) => {
        this.state.tasks.splice(index, 1);
        this.setState({
            tasks: [...this.state.tasks]
        });
    }

    get inputChangeTitle() {
        return (
            <div className="field">
                <div className="control">
                    <input className="input is-medium"
                        type="text"
                        placeholder="Todo's tile"
                        defaultValue={this.props.todo?.title || 'Todos List'} />
                </div>
            </div>
        )
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
                    {this.props.todo?.title || 'Todos List'}
                    <Icon isAction
                        onClick={this.handleChangeTitle}>
                        pen fa-xs</Icon>

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
