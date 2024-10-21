export default function DocumentCard({ title, content, onClick }: { title: string, content: string, onClick: () => void}
) {
    return (
        <div className="card doc-card" onClick={onClick}>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
}