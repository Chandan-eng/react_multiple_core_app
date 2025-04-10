import { Link, useNavigate } from "react-router-dom";

const PostDashboard = () => {
    const navigate=useNavigate();
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <button className="nav-link active" aria-current="page" onClick={()=> navigate('/addpost')}>AddPost</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" onClick={()=>navigate('/allposts')}>PostList</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" onClick={()=>{navigate('/search')}}>search Post page</button>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link disabled">Disabled</Link>
                        </li> */}
                    </ul>
                </div>

            </div>

        </nav>
    )
}

export default PostDashboard;