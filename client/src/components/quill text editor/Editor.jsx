import React from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolBar";
import "react-quill/dist/quill.snow.css";
import Button from "../navbar intro/Button";

export const Editor = ({ initialContent, onSave }) => {
  const [value, setValue] = React.useState(initialContent || "");

  const handleChange = (content) => {
    setValue(content);
  };

  const handlePost = () => {
    onSave(value);
    console.log("Content to be posted:", value);
  };

  return (
    <div className="text-editor">
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        value={value}
        onChange={handleChange}
        placeholder={"Write something awesome..."}
        modules={modules}
        formats={formats}
      />
      <div className="flex justify-center items-center mt-3">
        <Button name="Post" onClick={handlePost}></Button>
      </div>
    </div>
  );
};

