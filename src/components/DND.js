import { useState } from "react";

const userList = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
    { id: 3, name: "John Smith" },
    { id: 4, name: "Jane Smith" },
    { id: 5, name: "John Doe" },
    { id: 6, name: "Jane Doe" },
];

const DND = () => {
    const [users, setUsers] = useState(userList);
    const [draggedItem, setDraggedItem] = useState(null);

    const handleDragStart = (index) => {
        setDraggedItem(index);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (index) => {
        if (draggedItem === null) return;
        const newList = [...users];
        const item = newList.splice(draggedItem, 1)[0];
        newList.splice(index, 0, item);
        setUsers(newList);
        setDraggedItem(null);
    };

    return (
        <div>
            <h1>User List...</h1>
            <div>
                {users.map((user, index) => (
                    <div
                        key={user.id}
                        className="card p-3 mb-2 border"
                        draggable
                        onDragStart={() => handleDragStart(index)}
                        onDragOver={handleDragOver}
                        onDrop={() => handleDrop(index)}
                    >
                        <div className="d-flex justify-content-between">
                        <h5>{user.id}</h5>
                        <h5>{user.name}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DND;
