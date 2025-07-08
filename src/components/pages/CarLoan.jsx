import EmiCalculator from "../EmiCalculator";
import { Helmet } from "react-helmet-async";

const PersonalLoan = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto text-gray-800 space-y-8">
      <Helmet>
  <title>Car Loan EMI Calculator - QuickEMI</title>
  <meta
    name="description"
    content="Calculate your car loan EMI in seconds using our simple and accurate Car Loan EMI Calculator."
  />
  <meta
    name="keywords"
    content="car loan emi calculator, vehicle loan calculator, emi tool, auto loan calculator"
  />
  <meta name="author" content="QuickEMI Team" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://yourdomain.xyz/car-loan" />
</Helmet>

        <Helmet>
        <title>EMI Calculator – Free Loan EMI Tool (Home, Car, Personal)</title>
        <meta
          name="description"
          content="Calculate your EMI for personal, home, or car loans using our free online EMI calculator. Instant results with interest breakdown."
        />
      </Helmet>
      <h1 className="text-3xl font-bold text-indigo-800">Car Loan EMI Calculator</h1>
      <p className="text-lg">Estimate your monthly EMI for car loans with accurate calculations.</p>

      <EmiCalculator defaultRate={9.5} />

      <section className="bg-white p-6 mt-10 rounded-xl shadow space-y-6">
        <h2 className="text-2xl font-semibold">Plan Your Car Loan with Ease</h2>
        <p>
          Our <strong>Car Loan EMI Calculator</strong> helps you figure out how much you'll pay each month based on your loan amount, interest rate, and tenure.
        </p>

        <h3 className="text-xl font-semibold">Benefits:</h3>
        <ul className="list-disc list-inside">
          <li>Ideal for both new and used car loans</li>
          <li>Real-time EMI and interest estimate</li>
          <li>Compare loans from different banks</li>
        </ul>

        <h3 className="text-xl font-semibold">Example:</h3>
        <p>Loan: ₹6,00,000 @ 9% for 5 years → EMI: ₹12,455/month</p>
      </section>
    </div>
  );
};

export default PersonalLoan;
