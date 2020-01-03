import React from 'react';
import { Icon } from 'elements/icon';

export class Select extends React.Component<{
    options: any[],
    onChange: (value: any) => void,
    value?: any,
    icon?: string
},
    { value: any }> {

    state = { value: this.props.value };

    handleChange = (event: any) => {
        const { value } = event.target;
        this.setState({ value });
        this.props.onChange(value);
    }

    get icon() {
        return this.props.icon ?
            <Icon className="is-left">{this.props.icon}</Icon> : null;
    }

    render() {
        return (
            <div className={`control ${this.props.icon ? 'has-icons-left' : ''}`}>
                <div className="select">
                    <select value={this.props.value} onChange={this.handleChange}>
                        {this.props.options.map(o => <option key={o}>{o}</option>)}
                    </select>
                </div>
                {this.icon}
            </div>
        );
    }
}
