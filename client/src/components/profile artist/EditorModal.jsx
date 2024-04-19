import { Editor } from "../quill text editor/Editor";
import { X } from "lucide-react";

function EditorModal({ onClose, onSave, initialContent }) {
  const handleEditorChange = (newContent) => {
    onSave(newContent);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="lg:w-1/2 bg-white rounded-lg shadow-lg p-6 border-2 border-black border-b-8 relative pt-10">
        <Editor
          content={initialContent}
          onChange={handleEditorChange}
          onSave={onSave}
        /> 
        <X className="cursor-pointer absolute top-1 right-1" onClick={onClose} />
      </div>
    </div>
  );
}

export default EditorModal;
