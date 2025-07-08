import EmiCalculator from "../EmiCalculator";
import { Helmet } from "react-helmet-async";

const PersonalLoan = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto text-gray-800 space-y-8">
        <Helmet>
  <title>Personal Loan EMI Calculator - QuickEMI</title>
  <meta
    name="description"
    content="Use our Personal Loan EMI Calculator to quickly estimate your monthly payments. Easy-to-use, accurate, and 100% free."
  />
  <meta
    name="keywords"
    content="personal loan emi calculator, emi calculator, loan calculator, quickemi, finance tools"
  />
  <meta name="author" content="QuickEMI Team" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://yourdomain.xyz/personal-loan" />
</Helmet>

      <h1 className="text-3xl font-bold text-indigo-800">Personal Loan EMI Calculator</h1>
      <p className="text-lg">Calculate your monthly EMIs for personal loans quickly and easily.</p>

      <EmiCalculator defaultRate={11} />

      <section className="bg-white p-6 mt-10 rounded-xl shadow space-y-6">
        <h2 className="text-2xl font-semibold">What is a Personal Loan EMI?</h2>
        <p>
          A <strong>personal loan EMI</strong> is a fixed amount you pay every month to repay your loan. Our calculator helps you plan your finances before applying.
        </p>

        <h3 className="text-xl font-semibold">Why Use This Tool?</h3>
        <ul className="list-disc list-inside">
          <li>Instant EMI calculation</li>
          <li>No registration required</li>
          <li>Breaks down interest and principal</li>
        </ul>

        <h3 className="text-xl font-semibold">Example:</h3>
        <p>
          Loan: ₹2,00,000 @ 12% for 2 years → EMI: ₹9,414/month, Total Interest: ₹26,000 approx.
        </p>
      </section>
    </div>
  );
};

export default PersonalLoan;
