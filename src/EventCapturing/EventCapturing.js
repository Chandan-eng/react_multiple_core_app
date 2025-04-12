const EventCapturing = () => {
    const handleClick = (event) => {
        alert("Button clicked");
        event.stopPropagation(); // Prevents the event from bubbling up to the document
    };
    
    const handleDocumentClick = () => {
        alert("Document clicked");
    };
    
    return (
        <div onClick={handleDocumentClick}>
        <button onClick={handleClick}>Click Me</button>
        </div>
    );
    }

export default EventCapturing;