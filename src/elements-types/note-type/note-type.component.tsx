import React from 'react';
import { debounce } from 'lodash-es';

export class NoteTypeComponent extends React.Component<{}, { value: string }>
{

    static elementType = {
        title: "Pick text"
    }

    emitChangeDebounced = debounce(this.emitChange, 300);

    constructor(props: any) {
        super(props);
        this.state = {
            value: ''
        };
    }

    handleChange = (event: any) => {
        this.emitChangeDebounced(event.target.value);
    }

    emitChange(value: string) {
        console.log(value);
        this.setState({ value });
    }

    componentWillUnmount() {
        this.emitChangeDebounced.cancel();
    }

    render() {
        return (
            <form>
                <div className="field">
                    <div className="control">
                        <textarea className="textarea is-large"
                            placeholder="Enter a note"
                            defaultValue={this.state.value}
                            onChange={this.handleChange}>
                        </textarea>
                    </div>
                </div>
            </form>
        );
    }
}
