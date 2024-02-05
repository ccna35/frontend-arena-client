import FeedbacksTable from "@/components/Dashboard/Feedbacks/Table";
import UsersTable from "@/components/Dashboard/Users/Table";

const Users = () => {
  return (
    <section className="p-8">
      <h2 className="text-xl font-semibold mb-8">View the latest users here</h2>
      <FeedbacksTable />
    </section>
  );
};

export default Users;
