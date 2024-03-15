import React from "react";
import { Editor } from "../quill text editor/Editor";
import Button from "../navbar intro/Button";

function EditorModal({onClose}) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className=" bg-white rounded-lg shadow-lg p-6">
        <Editor />
        <Button
          onClick={onClose}
          name="Delete"
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        ></Button>
      </div>
    </div>
  );
}

export default EditorModal;
