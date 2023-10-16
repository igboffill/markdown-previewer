function Editor({content='',handleOnChange=null}){
    return (
        <textarea className="editor" onChange={handleOnChange} value={content} id="editor"></textarea>
    
    )
} 

export default Editor;