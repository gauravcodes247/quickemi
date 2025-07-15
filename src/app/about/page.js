import Head from 'next/head';
import Link from 'next/link';

export const metadata = {
  title: 'Free EMI Calculator for Personal, Home & Car Loans | QuickEMI',
  description: 'Instantly calculate your monthly loan payments using our EMI calculator. Trusted by users to plan smartly and borrow wisely.',
};
export default function About() {
  return (
    <>
      <Head>
        <title>About Us - QuickEMI</title>
        <meta
          name="description"
          content="Learn about QuickEMI and how we help you calculate personal, car, and home loan EMIs easily."
        />
      </Head>

      <div className="p-6 max-w-4xl mx-auto text-gray-800 space-y-6">
        <h1 className="text-3xl font-bold text-indigo-800 mb-4">About Us</h1>

        <p>
          Hi, I&apos;m <strong>Gaurav</strong>, the creator of this EMI Calculator
          platform. I built this tool to help students, professionals, and
          families easily plan their <strong>personal, car, and home loans</strong> with confidence.
        </p>

        <p>
          Our EMI calculators are 100% free, fast, and accurate — giving you
          instant access to your monthly installment, total interest, and
          repayment amount. You can make better financial decisions without
          depending on complex bank forms or paid apps.
        </p>

        <p>
          Whether you&apos;re buying a car, building your dream home, or taking a
          quick personal loan, this tool helps you understand your{' '}
          <strong>EMI obligations</strong> clearly and transparently.
        </p>

        <p>
          My mission is simple — to make{' '}
          <strong>loan planning easy, accessible, and reliable</strong> for
          everyone in India and beyond. I hope this tool saves you time and
          brings more clarity to your finances.
        </p>

        <p>
          Feel free to{' '}
          <Link href="/contact" className="text-blue-600 underline">
            contact me
          </Link>{' '}
          if you have feedback, suggestions, or partnership ideas!
        </p>
      </div>
    </>
  );
}
