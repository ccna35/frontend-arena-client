import ChallengesTable from "@/components/Dashboard/Challenges/Table";

const Users = () => {
  return (
    <section className="p-8">
      <h2 className="text-xl font-semibold mb-8">
        View the latest challenges here
      </h2>
      <ChallengesTable />
    </section>
  );
};

export default Users;
