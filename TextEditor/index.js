import React, { Component, useEffect } from "react";
// import { Editor, EditorState } from "draft-js";

import Editor, { createEditorStateWithText } from "@draft-js-plugins/editor";

// import createToolbarPlugin from '@draft-js-plugins/static-toolbar';
import styles from "./textEditor.module.scss";
import buttonStyles from "./button.module.scss";
import toolbarStyles from "./toolbar.module.scss";
import createToolbarPlugin, {
  Separator,
} from "@draft-js-plugins/static-toolbar";
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  CodeButton,
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
  CodeBlockButton,
} from "@draft-js-plugins/buttons";
import { convertToHTML } from "draft-convert";

const toolbarPlugin = createToolbarPlugin({
  theme: { buttonStyles, toolbarStyles },
});
const { Toolbar } = toolbarPlugin;
const plugins = [toolbarPlugin];
const text = "write text";

class HeadlinesPicker extends Component {
  componentDidMount() {
    setTimeout(() => {
      window.addEventListener("click", this.onWindowClick);
    });
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.onWindowClick);
  }

  onWindowClick = () =>
    // Call `onOverrideContent` again with `undefined`
    // so the toolbar can show its regular content again.
    this.props.onOverrideContent(undefined);

  render() {
    const buttons = [HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton];
    return (
      <div>
        {buttons.map((Button, i) => (
          // eslint-disable-next-line
          <Button key={i} {...this.props} />
        ))}
      </div>
    );
  }
}

class HeadlinesButton extends Component {
  onClick = () =>
    // A button can call `onOverrideContent` to replace the content
    // of the toolbar. This can be useful for displaying sub
    // menus or requesting additional information from the user.
    this.props.onOverrideContent(HeadlinesPicker);

  render() {
    return (
      <div className={styles.headlineButtonWrapper}>
        <button onClick={this.onClick} className={styles.headlineButton}>
          H
        </button>
      </div>
    );
  }
}

// function MyEditor() {
//   const [editorState, setEditorState] = React.useState(
//     EditorState.createEmpty()
//   );

//   const editor = React.useRef(null);

//   function focusEditor() {
//     editor.current.focus();
//   }

//   React.useEffect(() => {
//     focusEditor();
//   }, []);

//   return (
//     <div>
//       <div className={styles.editor} onClick={focusEditor}>
//         <Editor
//           ref={editor}
//           editorState={editorState}
//           onChange={(editorState) => setEditorState(editorState)}
//           plugins={plugins}
//           placeholder="Write here ..."
//         />
//         <Toolbar>
//           {
//             // may be use React.Fragment instead of div to improve perfomance after React 16
//             (externalProps) => (
//               <>
//                 <BoldButton {...externalProps} />
//                 <ItalicButton {...externalProps} />
//                 <UnderlineButton {...externalProps} />
//                 <CodeButton {...externalProps} />
//                 <Separator {...externalProps} />
//                 <HeadlinesButton {...externalProps} />
//                 <UnorderedListButton {...externalProps} />
//                 <OrderedListButton {...externalProps} />
//                 <BlockquoteButton {...externalProps} />
//                 {/* <CodeBlockButton {...externalProps} /> */}
//               </>
//             )
//           }
//         </Toolbar>
//       </div>
//     </div>
//   );
// }
// export default MyEditor;

export default class TextEditor extends Component {
  state = {
    editorState: createEditorStateWithText(""),
  };

  onChange = (editorState) => {
    this.props.onChange(editorState);
    this.setState({ editorState });
  };

  focus = () => {
    this.editor.focus();
  };

  componentDidUpdate(prevProps) {
    console.log("prev", prevProps.value);
    console.log("this", this.props.value);

    if (this.props.value&&this.props.value !== prevProps.value) {
      this.setState({editorState:this.props.value})
      console.log("this", convertToHTML(this.props.value?.getCurrentContent()));
    }
  }
  componentDidMount() {
    // fixing issue with SSR https://github.com/facebook/draft-js/issues/2332#issuecomment-761573306
    // eslint-disable-next-line react/no-did-mount-set-state
    // this.setState({
    //   editorState: createEditorStateWithText(""),
    // });
  }

  render() {
    return (
      <div>
        <div className={styles.editor} onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            placeholder="Write here ..."
            ref={(element) => {
              this.editor = element;
            }}
          />
          <Toolbar>
            {
              // may be use React.Fragment instead of div to improve perfomance after React 16
              (externalProps) => (
                <>
                  <BoldButton {...externalProps} />
                  <ItalicButton {...externalProps} />
                  <UnderlineButton {...externalProps} />
                  <CodeButton {...externalProps} />
                  <Separator {...externalProps} />
                  <HeadlinesButton {...externalProps} />
                  <UnorderedListButton {...externalProps} />
                  <OrderedListButton {...externalProps} />
                  <BlockquoteButton {...externalProps} />
                  {/* <CodeBlockButton {...externalProps} /> */}
                </>
              )
            }
          </Toolbar>
        </div>
      </div>
    );
  }
}
