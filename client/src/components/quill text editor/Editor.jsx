import React from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolBar";
import "react-quill/dist/quill.snow.css";
import Button from "../navbar intro/Button";

export const Editor = () => {
  const [state, setState] = React.useState({ value: null });
  const handlePost = () => {
    console.log("Content to be posted:");
  };
  const handleChange = (value) => {
    setState({ value });
  };
  return (
    <div className=" text-editor">
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        value={state.value}
        onChange={handleChange}
        placeholder={"Write something awesome..."}
        modules={modules}
        formats={formats}
      />
      <div className=" flex justify-center items-center mt-3">
        <Button name="Post" onClick={handlePost}></Button>
        
      </div>
    </div>
  );
};
