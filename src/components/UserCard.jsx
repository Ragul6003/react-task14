
import "./UserCard.css";

const UserCard = ({ user }) => {

    return (
        <div className="user-card">

            <div className="user-header">
                <div className="user-avatar">
                    {user.name.charAt(0)}
                </div>

                <div>
                    <h3>{user.name}</h3>
                    <p>@{user.username}</p>
                </div>

                <span className="user-id">
                    #{user.id}
                </span>
            </div>

            <div className="user-details">

                <p>
                    <strong>Email:</strong> {user.email}
                </p>

                <p>
                    <strong>Phone:</strong> {user.phone}
                </p>

                <p>
                    <strong>Website:</strong>{" "}
                    <a
                        href={`https://${user.website}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {user.website}
                    </a>
                </p>

                <p>
                    <strong>City:</strong> {user.address.city}
                </p>

            </div>

        </div>
    );
};

export default UserCard;
