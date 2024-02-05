import SubmissionsTable from "@/components/Dashboard/Submissions/Table";

const Users = () => {
  return (
    <section className="p-8">
      <h2 className="text-xl font-semibold mb-8">View the latest users here</h2>
      <SubmissionsTable />
    </section>
  );
};

export default Users;
