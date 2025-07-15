import Head from "next/head";
import EmiCalculator from '@/app/components/emi-calculator';
export const metadata = {
  title: 'Free EMI Calculator for Personal, Home & Car Loans | QuickEMI',
  description: 'Instantly calculate your monthly loan payments using our EMI calculator. Trusted by users to plan smartly and borrow wisely.',
};
import Navbar from '@/app/components/navbar';
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>
          QuickEMI - Free EMI Calculator for Home, Car & Personal Loans
        </title>
        <meta
          name="description"
          content="Use QuickEMI's free and fast EMI calculator to calculate your monthly installments for personal, home, or car loans. Easy, accurate, and mobile-friendly."
        />
        <meta
          name="keywords"
          content="emi calculator, personal loan emi, home loan calculator, car loan emi, loan calculator india, quickemi"
        />
        <link rel="canonical" href="https://quickemi.site/" />
      </Head>

      <Navbar />

      <div className="p-6 max-w-6xl mx-auto text-gray-800 space-y-8">
        <h1 className="text-4xl font-bold text-center mt-6">
          Free EMI Calculator for Personal, Home & Car Loans
        </h1>
        <p className="text-lg text-center text-gray-700">
          Instantly calculate your monthly loan payments using our EMI
          calculator. Trusted by users to plan smartly and borrow wisely.
        </p>

        <EmiCalculator defaultRate={10} />

        <section className="bg-white p-6 mt-10 rounded-xl shadow space-y-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            What is an EMI?
          </h2>
          <p>
            An <strong>EMI</strong> or Equated Monthly Installment is the fixed
            monthly amount you pay to repay your loan. It includes both
            principal and interest and continues for the entire loan tenure.
            Whether you’re borrowing for a home, car, or personal expense,
            knowing your EMI helps you plan your budget efficiently.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">
            About QuickEMI
          </h2>
          <p>
            QuickEMI is a powerful, fast, and easy-to-use{" "}
            <strong>EMI Calculator</strong> designed for all loan types. Whether
            you&apos;re applying for a personal loan, home loan, or car loan,
            this tool helps you calculate your EMI, interest, and total
            repayment in just seconds. It is completely free and works on all
            devices.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">
            How to Use Our EMI Calculator
          </h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Enter the loan amount you plan to borrow.</li>
            <li>Set the annual interest rate (in %).</li>
            <li>Specify the loan tenure in months.</li>
            <li>Click on &quot;Calculate EMI&quot; to get results instantly.</li>
          </ol>

          <h2 className="text-2xl font-semibold text-gray-800">
            Benefits of Using QuickEMI
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>✅ 100% free and no login required</li>
            <li>
              ✅ Supports <strong>home loan EMI</strong>,{" "}
              <strong>personal loan EMI</strong>, and{" "}
              <strong>car loan EMI</strong>
            </li>
            <li>
              ✅ Displays EMI amount, interest payable, and total repayment
            </li>
            <li>✅ Mobile-friendly and loads super fast</li>
            <li>✅ Based on standard formulas used by banks and NBFCs</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800">
            EMI Calculation Formula
          </h2>
          <p>
            Our calculator uses the standard EMI formula:
            <code className="block bg-gray-100 p-3 mt-2 rounded text-sm">
              EMI = [P × R × (1 + R)^N] / [(1 + R)^N – 1]
            </code>
            Where:
            <ul className="list-disc ml-6 mt-2">
              <li>
                <strong>P</strong> = Loan Amount
              </li>
              <li>
                <strong>R</strong> = Monthly Interest Rate (Annual Rate ÷ 12 ÷
                100)
              </li>
              <li>
                <strong>N</strong> = Loan Tenure in Months
              </li>
            </ul>
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">
            FAQs – EMI Calculator
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">
                What loans can I calculate using QuickEMI?
              </h3>
              <p>
                This calculator works for home loans, personal loans, car loans,
                education loans, and other types of loans.
              </p>
            </div>

            <div>
              <h3 className="font-medium">
                Does it include taxes or extra charges?
              </h3>
              <p>
                No, the EMI calculation only considers the loan principal,
                interest rate, and tenure. Other charges are not included.
              </p>
            </div>

            <div>
              <h3 className="font-medium">Is this calculator accurate?</h3>
              <p>
                Yes, we use the same EMI formula that banks and financial
                institutions use.
              </p>
            </div>
          </div>

          <p className="mt-6">
            Looking for specific calculators? Try our dedicated pages:
            <br />
            <Link href="/home-loan" className="text-blue-600 underline">
              Home Loan EMI Calculator
            </Link>
            ,{" "}
            <Link href="/personal-loan" className="text-blue-600 underline">
              Personal Loan EMI Calculator
            </Link>
            ,{" "}
            <Link href="/car-loan" className="text-blue-600 underline">
              Car Loan EMI Calculator
            </Link>
          </p>
        </section>
      </div>
    </>
  );
}
