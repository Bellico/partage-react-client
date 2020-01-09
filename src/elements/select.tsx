import React from 'react';
import { Icon } from 'elements/icon';
import { capitalize } from 'lodash-es';

export class OptionModel {
    key: any;
    value: string

    constructor(value: string, key?: any) {
        this.value = capitalize(value);
        this.key = key;

        if (!key) {
            this.key = value;
        }
    }
}

export class Select extends React.Component<{
    options: OptionModel[],
    onChange: (value: any) => void,
    label: string
    value?: any,
    icon?: string
    style?: { color?: string, size?: string }
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

    get style() {
        if (!this.props.style) {
            return '';
        }

        return Object.values(this.props.style).map(s => 'is-' + s).reduce((a, b) => a + ' ' + b);
    }

    render() {
        return (
            <div className="field">
                <label className="label">{this.props.label}</label>
                <div className={`control ${this.props.icon ? 'has-icons-left' : ''}`}>
                    <div className={`select ${this.style}`}>
                        <select value={this.props.value} onChange={this.handleChange}>
                            {this.props.options.map(o => <option key={o.key} value={o.key}>{o.value}</option>)}
                        </select>
                    </div>
                    {this.icon}
                </div>
            </div>
        );
    }
}
