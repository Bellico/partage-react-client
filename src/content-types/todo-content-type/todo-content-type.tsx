import React from 'react';
import { Icon } from 'elements/icon';

class Task {
    label: string;
    done: boolean;
}

enum StatusEnum {
    All = 'All',
    Active = 'Active',
    Completed = 'Completed'
};

export class TodoContentType extends React.Component<{ tasks: Task[] }, {
    tasks: Task[],
    taskname: string,
    filterOnStatus: StatusEnum
}>{

    state = {
        tasks: this.props.tasks,
        taskname: '',
        filterOnStatus: StatusEnum.All
    }

    handleChange = (event) => {
        this.setState({
            taskname: event.target.value
        });
    }

    handleCheckboxChange = (index: number) => {
        this.setState(({ tasks }) => {
            tasks[index].done = !tasks[index].done

            return { tasks };
        });
    }

    handleKeyUp = (event) => {
        const { value } = event.target;

        if (event.keyCode === 13 && value !== '') {
            this.setState({
                tasks: [...this.state.tasks, { label: value, done: false }],
                taskname: ''
            });
        }
    }

    changeFilter = (event, status: StatusEnum) => {
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
            <div className="card">
                <article className="panel is-warning">
                    <p className="panel-heading">
                        Todos List
                    </p>

                    <p className="panel-tabs">
                        {[StatusEnum.All, StatusEnum.Active, StatusEnum.Completed].map(status =>
                            <a href="/"
                                className={this.state.filterOnStatus === status ? 'is-active' : null}
                                key={status}
                                onClick={(event) => this.changeFilter(event, status)}>
                                {status}
                            </a>)
                        }
                    </p>

                    <div className="panel-block">
                        <p className="control has-icons-left">
                            <input className="input is-warning"
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
                            <label className="is-checkbox is-warning">
                                <input type="checkbox"
                                    checked={task.done}
                                    onChange={() => this.handleCheckboxChange(index)} />
                                <span className="icon checkmark">
                                    <i className="fa fa-check"></i>
                                </span>
                            </label>
                            <span style={task.done ? { 'textDecoration': 'line-through' } : null}>
                                {task.label}
                            </span>
                            <Icon className="fa-pull-right"
                                isAction
                                onClick={() => this.deleteTask(index)}>
                                times</Icon>
                        </span>
                    ))}

                </article>
            </div>
        );
    }
}
