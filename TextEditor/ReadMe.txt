import "draft-js/dist/Draft.css";
import "@draft-js-plugins/static-toolbar/lib/plugin.css";

=> Write in root file .js
......................................................................

1.
import { convertToHTML } from "draft-convert";
import {
  convertToRaw,
  EditorState,
  getCurrentContent,
  ContentState,
  contentBlocks,
  convertFromHTML,
} from "draft-js";


2.
      const res = await axios.get(`${API_URL}/admin/news/${id}`);

      const {
        title,
        featuredImage,
        description,
        tags,
        isFeatured,
        content,
      } = res.data[0];
      const blocksFromHTML = convertFromHTML(content);
      const state = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap
      );
      setEditorState(EditorState.createWithContent(state));

3.
<TextEditor
    value={editorState && editorState}
     onChange={(e) => {
     setEditorState(e);
     values.paragraphHtml = convertToHTML(
      e.getCurrentContent()
      );
     values.paragraphBol = e.getCurrentContent().hasText();
      }}
  />

=> parent component of text editor
..........................................................