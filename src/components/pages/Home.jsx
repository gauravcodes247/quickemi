import EmiCalculator from "../EmiCalculator";
import { Helmet } from 'react-helmet-async';


const Home = () => {
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
  <link rel="canonical" href="https://yourdomain.xyz/home-loan" />
</Helmet>

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-indigo-800">EMI Calculator</h1>
      <p className="text-lg">Enter your loan details to calculate your monthly EMI instantly.</p>

      {/* Calculator Component */}
      <EmiCalculator defaultRate={10} />

      {/* SEO Rich Content */}
      <section className="bg-white p-6 mt-10 rounded-xl shadow space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">What is an EMI Calculator?</h2>
        <p>
          An <strong>EMI Calculator</strong> helps you determine the fixed monthly payment (EMI) for any loan — personal loan, car loan, or home loan. This tool calculates your monthly installment, total interest payable, and overall repayment amount.
        </p>

        <h3 className="text-xl font-semibold">How to Use This EMI Calculator</h3>
        <ol className="list-decimal list-inside space-y-1">
          <li>Enter your loan amount (Principal).</li>
          <li>Input the annual interest rate (in %).</li>
          <li>Enter the loan tenure (in months).</li>
          <li>Click “Calculate EMI” to get your results instantly.</li>
        </ol>

        <h3 className="text-xl font-semibold">Features of Our EMI Tool</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Free to use and instant results</li>
          <li>Works for all types of loans: personal, car, home</li>
          <li>Breaks down EMI, interest, and total repayment</li>
          <li>Mobile-friendly and chart-powered</li>
        </ul>

        <h3 className="text-xl font-semibold">EMI Formula Used</h3>
        <p>
          The formula for EMI calculation is:
          <code className="block bg-gray-100 rounded p-2 mt-2">
            EMI = [P × R × (1 + R)<sup>N</sup>] / [(1 + R)<sup>N</sup> – 1]
          </code>
          where P = Principal, R = monthly interest rate, N = number of months.
        </p>

        <h3 className="text-xl font-semibold">FAQ – EMI Calculator</h3>
        <div className="space-y-2">
          <p><strong>Q:</strong> Can I use this for any type of loan?</p>
          <p><strong>A:</strong> Yes, this EMI Calculator works for personal, car, and home loans.</p>

          <p><strong>Q:</strong> Does it include taxes or processing fees?</p>
          <p><strong>A:</strong> No. It calculates EMI based on principal, rate, and tenure only.</p>

          <p><strong>Q:</strong> Is this calculator accurate?</p>
          <p><strong>A:</strong> Yes, it uses the standard EMI formula used by banks and NBFCs.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
