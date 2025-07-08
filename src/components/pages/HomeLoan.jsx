import EmiCalculator from "../EmiCalculator";
import { Helmet } from "react-helmet-async";
const PersonalLoan = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto text-gray-800 space-y-8">
      <Helmet>
  <title>Home Loan EMI Calculator - QuickEMI</title>
  <meta
    name="description"
    content="Find out your monthly home loan EMIs instantly using our reliable and fast Home Loan EMI Calculator."
  />
  <meta
    name="keywords"
    content="home loan emi calculator, housing loan calculator, emi planner, quickemi"
  />
  <meta name="author" content="QuickEMI Team" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://yourdomain.xyz/home-loan" />
</Helmet>

      <h1 className="text-3xl font-bold text-indigo-800">Home Loan EMI Calculator</h1>
      <p className="text-lg">Plan your housing loan repayments with our free EMI calculator tool.</p>

      <EmiCalculator defaultRate={8.5} />

      <section className="bg-white p-6 mt-10 rounded-xl shadow space-y-6">
        <h2 className="text-2xl font-semibold">Why Use a Home Loan EMI Calculator?</h2>
        <p>
          A <strong>Home Loan EMI Calculator</strong> helps you plan your monthly installments over long durations, often 15–30 years. It’s essential for big-ticket loans like housing.
        </p>

        <h3 className="text-xl font-semibold">Advantages:</h3>
        <ul className="list-disc list-inside">
          <li>Understand long-term commitment</li>
          <li>Budget monthly expenses smartly</li>
          <li>Decide on fixed vs floating interest rates</li>
        </ul>

        <h3 className="text-xl font-semibold">Example:</h3>
        <p>Loan: ₹40,00,000 @ 8.5% for 20 years → EMI: ₹34,678/month approx.</p>
      </section>
    </div>
  );
};

export default PersonalLoan;
