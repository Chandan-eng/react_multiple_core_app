import { useEffect, useState } from "react";

const PaginationWork = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [posts, setPosts] = useState([]);
    const postsPerPage = 10; // Fixed number of posts per page

    // Fetch Data from API
    const fetchData = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json());
        setPosts(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Calculate Paginated Posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(posts.length / postsPerPage);

    // Handle Page Change
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="pagination">
            <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {currentPosts.map((post) => (
                        <tr key={post.id}>
                            <td>{post.userId}</td>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination Buttons */}
            <div>
                <button 
                    onClick={() => handlePageChange(currentPage - 1)} 
                    disabled={currentPage === 1}
                >
                    Prev
                </button>

                {[...Array(totalPages).keys()].map((page) => (
                    <button 
                        key={page + 1} 
                        onClick={() => handlePageChange(page + 1)}
                        style={{ fontWeight: currentPage === page + 1 ? "bold" : "normal" }}
                    >
                        {page + 1}
                    </button>
                ))}

                <button 
                    onClick={() => handlePageChange(currentPage + 1)} 
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default PaginationWork;
