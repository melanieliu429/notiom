interface ModalProps {
    isActive: boolean;
    title: string;
    content: string;
    onClose: () => void;
    onSave: () => void;
    onDelete?: () => void; // Optional delete handler
    setTitle: (title: string) => void;
    setContent: (content: string) => void;
    isEditMode: boolean;
  }
  
  const Modal: React.FC<ModalProps> = ({
    isActive,
    title,
    content,
    onClose,
    onSave,
    onDelete,
    setTitle,
    setContent,
    isEditMode,
  }) => {
    return (
      <div className={isActive ? "modal-container active" : "modal-container"}>
        <div className="modal">
          <div style = {{ display: "flex", justifyContent: "space-between"}}>
            <h2>{isEditMode ? "Edit document" : "Create document"}</h2>
            <button style={{
              background: "none",
              color: "black",
              fontSize: "1.5rem",
            }} onClick={onClose}>x</button>
          </div>
          <input
            type="text"
            placeholder="Title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Content..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          {/* <button onClick={onClose}>Cancel</button> */}
          <button onClick={onSave}>{isEditMode ? "Save" : "Create"}</button>
  
          {isEditMode && (
            <button onClick={onDelete}>
              Delete
            </button>
          )}
        </div>
      </div>
    );
  };
  
  export default Modal;