import UsersTable from "@/components/Dashboard/Users/Table";

const Users = () => {
  return (
    <section className="p-8">
      <h2 className="text-xl font-semibold mb-8">View the latest users here</h2>
      <UsersTable />
    </section>
  );
};

export default Users;
