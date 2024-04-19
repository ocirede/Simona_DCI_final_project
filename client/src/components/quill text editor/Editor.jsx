import { useRef, useEffect, useState } from "react";
import Quill from "quill";

export const Editor = ({ initialContent, onSave }) => {
  const editorRef = useRef(null);
  const [value, setValue] = useState(initialContent || "");

  useEffect(() => {
    if (!editorRef.current) {
      editorRef.current = new Quill("#editor-container", {
        theme: "snow",
        modules: {
          toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['link', 'image'],
            ['clean']
          ]
        }
      });

      editorRef.current.on("text-change", () => {
        setValue(editorRef.current.root.innerHTML);
      });
    }
  }, []);

  const handlePost = () => {
    onSave(value);
    console.log("Content to be posted:", value);
  };

  return (
    <div className="text-editor">
      <div id="editor-container" />
      <div className="flex justify-center items-center mt-3">
        <button className="bg-retroRed w-28 p-1 rounded-[10px] text-white" onClick={handlePost}>Post</button>
      </div>
    </div>
  );
};




