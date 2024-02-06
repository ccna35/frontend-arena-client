import FeedbacksTable from "@/components/Dashboard/Feedbacks/Table";

const page = () => {
  return (
    <section className="p-8">
      <h2 className="text-xl font-semibold mb-8">
        View the latest feedbacks here
      </h2>
      <FeedbacksTable />
    </section>
  );
};

export default page;
