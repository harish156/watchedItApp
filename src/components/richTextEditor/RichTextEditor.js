import React from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './RichTextEditor.css'

export class RichTextEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.richTextValue
        };
    }

    render() {
        return (
            <ReactQuill
                theme="snow"
                value={this.state.text}
                onChange={this.props.onValueChange.bind(this)}
            >
                <div className="my-editing-area" />
            </ReactQuill>
        );
    }
}