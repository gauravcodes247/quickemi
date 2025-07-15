import Head from "next/head";
import EmiCalculator from '@/app/components/emi-calculator';
import Navbar from '@/app/components/navbar';
import Link from "next/link";
export const metadata = {
  title: 'Free EMI Calculator for Personal, Home & Car Loans | QuickEMI',
  description: 'Instantly calculate your monthly loan payments using our EMI calculator. Trusted by users to plan smartly and borrow wisely.',
};
export default function HomeLoanPage() {
  return (
    <>
      <Head>
        <title>Home Loan EMI Calculator - QuickEMI</title>
        <meta
          name="description"
          content="Calculate your monthly home loan EMIs instantly with QuickEMI. Free, fast, and accurate EMI calculator for housing loans."
        />
        <meta
          name="keywords"
          content="home loan emi calculator, housing loan calculator, home loan interest, emi calculator housing loan"
        />
        <link rel="canonical" href="https://quickemi.site/home-loan" />
      </Head>

      <Navbar />

      <div className="p-6 max-w-6xl mx-auto text-gray-800 space-y-8">
        <h1 className="text-3xl font-bold text-center mt-6">
          Home Loan EMI Calculator
        </h1>
        <p className="text-lg text-center text-gray-700">
          Use our Home Loan EMI Calculator to find out your monthly installment
          and plan your dream home with confidence.
        </p>

        <EmiCalculator defaultRate={8.5} />

        <section className="bg-white p-6 mt-10 rounded-xl shadow space-y-6">
          <h2 className="text-2xl font-semibold">
            Why Use a Home Loan EMI Calculator?
          </h2>
          <p>
            A <strong>Home Loan EMI Calculator</strong> helps you accurately
            calculate your monthly payments so you can budget properly and avoid
            surprises. It considers the principal amount, interest rate, and
            tenure to show you the EMI, total interest, and repayment amount.
          </p>

          <h3 className="text-xl font-semibold">Key Features:</h3>
          <ul className="list-disc ml-5">
            <li>Fast EMI calculation</li>
            <li>Handles long tenures up to 30 years</li>
            <li>Easy to use on desktop and mobile</li>
          </ul>

          <h3 className="text-xl font-semibold">FAQ – Home Loan EMI</h3>
          <p>
            <strong>Q:</strong> Can I use this for all housing loans?
          </p>
          <p>
            <strong>A:</strong> Yes, it&apos;s designed for fixed-rate and floating
            home loans.
          </p>
          <p>
            <strong>Q:</strong> Is this tool accurate?
          </p>
          <p>
            <strong>A:</strong> Yes, it uses industry-standard EMI formulas.
          </p>

          <p className="mt-6">
            Also try:{" "}
            <Link href="/personal-loan" className="text-blue-600 underline">
              Personal Loan EMI Calculator
            </Link>{" "}
            |{" "}
            <Link href="/car-loan" className="text-blue-600 underline">
              Car Loan EMI Calculator
            </Link>
          </p>
        </section>
      </div>
    </>
  );
}
