import React, { ChangeEvent, useContext } from 'react';
import { debounce } from 'lodash-es';
import { ContentContext } from 'app-context/app-context';
import styled from 'styled-components';

interface INoteProps {
    note: INoteState
}

interface INoteState {
    title: string,
    note: string
}

const NoteOptions = styled.div`
    background: #3273dc;
    height: 3.5em;
    display: flex;
    align-items: center;
    color: #fff;

    .note-option{
        font-weight: bold;
        margin: 0 0.8em;
    }

    .bold{
    }

    .underline{
        text-decoration: underline
    }

    .italic{
        font-style: italic;
    }
`;

const NoteStyled = styled.textarea`
    border-top: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    box-shadow: 0 2px 2px 0px #42424242;
    border: none;

    &:focus{
        border:  none;
        box-shadow: 0 2px 2px 0px #42424242;
    }
`;

export const NoteContentType = () => {

    const value = useContext<INoteState>(ContentContext);

    return <Note note={value} />;
}

class Note extends React.Component<INoteProps, INoteState>
{
    emitChangeDebounced = debounce(this.emitChange, 300);

    constructor(props: INoteProps) {
        super(props);
        this.state = {
            title: this.props.note?.title,
            note: this.props.note?.note
        };
    }

    handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
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
            <form onSubmit={(event) => event.preventDefault()}>
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
                        <NoteOptions>
                            <span className="bold note-option">B</span>
                            <span className="underline note-option">U</span>
                            <span className="italic note-option">I</span>
                        </NoteOptions>
                        <NoteStyled
                            className="textarea is-large note"
                            placeholder="Enter a note"
                            name="note"
                            defaultValue={this.state.note}
                            onChange={this.handleChange}>
                        </NoteStyled>
                    </div>
                </div>
            </form>
        );
    }
}
