import Head from 'next/head';
import EmiCalculator from '@/app/components/emi-calculator';
import Navbar from '@/app/components/navbar';
import Link from 'next/link';
export const metadata = {
  title: 'Free EMI Calculator for Personal, Home & Car Loans | QuickEMI',
  description: 'Instantly calculate your monthly loan payments using our EMI calculator. Trusted by users to plan smartly and borrow wisely.',
};

export default function PersonalLoanPage() {
  return (
    <>
      <Head>
        <title>Personal Loan EMI Calculator - QuickEMI</title>
        <meta
          name="description"
          content="Use our free Personal Loan EMI Calculator to estimate your monthly EMI. Simple and quick tool to plan your finances."
        />
        <meta
          name="keywords"
          content="personal loan emi calculator, unsecured loan emi, finance calculator, quickemi"
        />
        <link rel="canonical" href="https://quickemi.site/personal-loan" />
      </Head>

      <Navbar />

      <div className="p-6 max-w-6xl mx-auto text-gray-800 space-y-8">
        <h1 className="text-3xl font-bold text-center mt-6">
          Personal Loan EMI Calculator
        </h1>
        <p className="text-lg text-center text-gray-700">
          Calculate your monthly EMI for personal loans in seconds. Plan better, borrow smarter.
        </p>

        <EmiCalculator defaultRate={12} />

        <section className="bg-white p-6 mt-10 rounded-xl shadow space-y-6">
          <h2 className="text-2xl font-semibold">What is a Personal Loan EMI?</h2>
          <p>
            A <strong>Personal Loan EMI</strong> is the monthly payment you make to repay a loan taken for medical expenses, education, travel, or other personal needs. Our calculator helps you understand the costs involved so you can plan better.
          </p>

          <h3 className="text-xl font-semibold">Who Should Use This?</h3>
          <ul className="list-disc ml-5">
            <li>Salaried professionals</li>
            <li>Self-employed individuals</li>
            <li>People planning short-term personal expenses</li>
          </ul>

          <h3 className="text-xl font-semibold">FAQ – Personal Loan EMI</h3>
          <p><strong>Q:</strong> Can I adjust interest rates?</p>
          <p><strong>A:</strong> Yes, enter the interest rate given by your lender.</p>
          <p><strong>Q:</strong> How long can I take a personal loan for?</p>
          <p><strong>A:</strong> Usually from 12 to 60 months. Adjust the tenure field accordingly.</p>

          <p className="mt-6">
            Also try:{' '}
            <Link href="/home-loan" className="text-blue-600 underline">
              Home Loan EMI Calculator
            </Link>{' '}
            |{' '}
            <Link href="/car-loan" className="text-blue-600 underline">
              Car Loan EMI Calculator
            </Link>
          </p>
        </section>
      </div>
    </>
  );
}
