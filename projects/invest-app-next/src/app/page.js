import InvestmentCard from '@/components/InvestmentCard';

export default function Home() {
  const investments = [
    {
      id: 'b9f2414d-b8dd-484d-8179-83383d10a3fd',
      name: 'Tesouro Selic 2031',
      value: 10050,
      origin: 'Tesouro Nacional',
      category: 'Pós',
      created_at: '2023-08-22T00:00:00-03:00',
      interest: '100% Selic',
    },
    {
      id: '362fcbac-66f4-43d9-990f-547d60551b94',
      name: 'Tesouro Selic 2031',
      value: 20050,
      origin: 'Tesouro Nacional',
      category: 'Pós',
      created_at: '2023-08-22T00:00:00-03:00',
      interest: '100% Selic',
    },
    {
      id: 'c3944887-db03-4eba-968e-2c8391cebfdc',
      name: 'Tesouro Selic 2031',
      value: 50050,
      origin: 'Tesouro Nacional',
      category: 'Pós',
      created_at: '2023-08-22T00:00:00-03:00',
      interest: '100% Selic',
    },
  ];

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
