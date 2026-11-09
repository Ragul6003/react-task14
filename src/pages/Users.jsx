
import useFetchData from "../hooks/useFetchData";
import UserCard from "../components/UserCard";
import "./Users.css";

const Users = () => {

    const API_URL = "https://jsonplaceholder.typicode.com/users";

    const { data, loading, error } = useFetchData(API_URL);

    if (loading) {
        return (
            <div className="status-message">
                <div className="loader"></div>
                <h2>Loading Users...</h2>
                <p>Please wait while we fetch user details.</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="status-message error">
                <h2>Something went wrong!</h2>
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div className="users-container">

            <div className="page-header">
                <h1>User Management</h1>
                <p>Explore user details fetched from JSONPlaceholder API.</p>
                <span>{data.length} Total Users</span>
            </div>

            <div className="users-grid">

                {data.map((user) => (
                    <UserCard
                        key={user.id}
                        user={user}
                    />
                ))}

            </div>

        </div>
    );
};

export default Users;
