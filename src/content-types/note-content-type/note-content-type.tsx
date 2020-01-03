import React from 'react';
import { debounce } from 'lodash-es';

export class NoteContentType extends React.Component<{}, { title: string, note: string }>
{
    emitChangeDebounced = debounce(this.emitChange, 300);

    constructor(props: any) {
        super(props);
        this.state = {
            note: '',
            title: ''
        };
    }

    handleChange = (event: any) => {
        const { name, value } = event.target;
        this.emitChangeDebounced(name, value);
    }

    emitChange(name: string, value: string) {
        this.setState({
            ...this.state,
            [name]: value
        });
    }

    componentWillUnmount() {
        this.emitChangeDebounced.cancel();
    }

    render() {
        return (
            <form>
                <div className="field">
                    <label className="label">Title</label>
                    <div className="control">
                        <input
                            className="input is-medium"
                            placeholder="Enter a title"
                            type="text"
                            name="title"
                            defaultValue={this.state.title}
                            onChange={this.handleChange} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Note</label>
                    <div className="control">
                        <textarea
                            className="textarea is-large"
                            placeholder="Enter a note"
                            name="note"
                            defaultValue={this.state.note}
                            onChange={this.handleChange}>
                        </textarea>
                    </div>
                </div>
            </form>
        );
    }
}
