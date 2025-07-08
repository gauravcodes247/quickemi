import EmiCalculator from "../EmiCalculator";
import { Helmet } from "react-helmet-async";

const CarLoan = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto text-gray-800 space-y-8">
      <Helmet>
        <title>Car Loan EMI Calculator - QuickEMI</title>
        <meta name="description" content="Calculate your car loan EMI with QuickEMI's free calculator. Fast and accurate EMI tool for new and used car loans." />
        <meta name="keywords" content="car loan emi calculator, auto loan calculator, vehicle loan calculator, car emi" />
        <link rel="canonical" href="https://quickemi.site/car-loan" />
      </Helmet>

      <h1 className="text-3xl font-bold text-center mt-6">Car Loan EMI Calculator</h1>
      <p className="text-lg text-center text-gray-700">
        Calculate your monthly car loan payments in seconds with QuickEMI. Plan better and drive smarter.
      </p>

      <EmiCalculator defaultRate={9.5} />

      <section className="bg-white p-6 mt-10 rounded-xl shadow space-y-6">
        <h2 className="text-2xl font-semibold">Why Use a Car Loan EMI Calculator?</h2>
        <p>
          A <strong>Car Loan EMI Calculator</strong> lets you know how much you'll pay every month before buying a vehicle. Adjust the interest rate and tenure to suit your budget and find the best EMI for your car.
        </p>

        <h3 className="text-xl font-semibold">Best For:</h3>
        <ul className="list-disc ml-5">
          <li>New car loans</li>
          <li>Used vehicle financing</li>
          <li>Low down payment scenarios</li>
        </ul>

        <h3 className="text-xl font-semibold">FAQ – Car Loan EMI</h3>
        <p><strong>Q:</strong> Can I use this for used car loans?</p>
        <p><strong>A:</strong> Yes, just enter the loan amount and interest rate offered by your lender.</p>
        <p><strong>Q:</strong> Can I compare different interest rates?</p>
        <p><strong>A:</strong> Yes, modify the rate and tenure fields to compare EMI options.</p>

        <p className="mt-6">
          Also try: <a href="/home-loan" className="text-blue-600 underline">Home Loan EMI Calculator</a> &nbsp;|&nbsp; <a href="/personal-loan" className="text-blue-600 underline">Personal Loan EMI Calculator</a>
        </p>
      </section>
    </div>
  );
};

export default CarLoan;
