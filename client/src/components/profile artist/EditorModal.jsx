import { Editor } from "../quill text editor/Editor";
import { X } from "lucide-react";

function EditorModal({ onClose, onSave, initialContent }) {
  const handleEditorChange = (newContent) => {
    onSave(newContent);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="relative   bg-white rounded-lg shadow-lg p-7 border-2 border-black border-b-8">
      <X className="absolute top-0 right-2 cursor-pointer" onClick={onClose} />

        <Editor
          content={initialContent}
          onChange={handleEditorChange}
          onSave={onSave}
        />
      </div>
    </div>
  );
}

export default EditorModal;
