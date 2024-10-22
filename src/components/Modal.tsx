export default function Modal({ isActive,
  title,
  content,
  onClose,
  onSave,
  onDelete,
  setTitle,
  setContent,
  isEditMode }: {
    isActive: boolean;
    title: string;
    content: string;
    onClose: () => void;
    onSave: () => void;
    onDelete?: () => void;
    setTitle: (title: string) => void;
    setContent: (content: string) => void;
    isEditMode: boolean
  }) {
  return (
    <div className={isActive ? "modal-container active" : "modal-container"}>
      <div className="modal">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>{isEditMode ? "Edit document" : "Create document"}</h2>
          <button className="cancel" style={{
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
          <button onClick={onDelete} style={{ backgroundColor: "red" }}>
            Delete
          </button>
        )}
      </div>
    </div>
  );
};