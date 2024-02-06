import SubmissionsTable from "@/components/Dashboard/Submissions/Table";

const page = () => {
  return (
    <section className="p-8">
      <h2 className="text-xl font-semibold mb-8">
        View the latest submissions here
      </h2>
      <SubmissionsTable />
    </section>
  );
};

export default page;
