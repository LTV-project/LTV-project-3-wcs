export default function AccountCreation({ users }) {
  return (
    <div className="users-container">
      <p>{users.pseudo}</p>
      <p>{users.firstname}</p>
      <p>{users.lastname}</p>
      <p>{users.email}</p>
      <p>{users.password}</p>
      <p>{users.age}</p>
      <p>{users.comments}</p>
    </div>
  );
}
