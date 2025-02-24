import InvestmentCard from '@/components/InvestmentCard';
import Storage from '@/services/storage';

async function getData() {
  return await Storage.read('investments');
}

export default async function Home() {
  const investments = await getData();

  return (
    <>
      <h1 className="text-center text-2xl my-12 font-bold text-gray-700">
        Investimentos
      </h1>

      <div className="investments grid grid-cols-3 gap-3">
        {investments.map((investment) => (
          <InvestmentCard investment={investment} key={investment.id} />
        ))}
      </div>
    </>
  );
}
