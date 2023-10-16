import { marked } from "marked";

function Previewer({ content = '' }) {
    const parsedContent = marked.parse(content)
    return (
        <div className="previewer-container">
            <div className="previewer" dangerouslySetInnerHTML={{__html:parsedContent}} id="preview"></div>
        </div>
        
    );
}

export default Previewer;