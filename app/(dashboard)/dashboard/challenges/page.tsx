import CardsDataTable from "@/components/Tables/Table";

const Challenges = () => {
  return (
    <section className="p-8">
      <h2 className="text-xl font-semibold mb-8">
        View the latest challenges here
      </h2>
      <CardsDataTable />
    </section>
  );
};

export default Challenges;
