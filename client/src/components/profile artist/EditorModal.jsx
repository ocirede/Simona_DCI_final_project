import { Editor } from "../quill text editor/Editor"; 
import Button from "../navbar intro/Button";

function EditorModal({ onClose, onSave, initialContent }) {
  const handleEditorChange = (newContent) => {
    onSave(newContent);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="lg:w-1/2 bg-white rounded-lg shadow-lg p-6 border-2 border-black border-b-8">
        <Editor content={initialContent} onChange={handleEditorChange} onSave={onSave} />
        <Button
          onClick={onClose}
          name="Delete"
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        />
      </div>
    </div>
  );
}

export default EditorModal;

