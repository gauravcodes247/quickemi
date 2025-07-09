import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function BlogIndex() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 bg-white text-gray-900">

      <Helmet>
        <title>Loan & EMI Blogs | QuickEMI</title>
        <meta
          name="description"
          content="Explore blog articles on loans, EMI calculations, personal loans, and home loans. Stay financially informed with QuickEMI."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.site/blog" />
      </Helmet>

      <h1 className="text-4xl font-bold mb-8 text-center">📚 Loan & EMI Blog</h1>

      <div className="grid md:grid-cols-2 gap-6 text-white">
        {/* Blog 1 */}
        <Link to="/blog/how-to-calculate-loan-emi" className="block bg-[#1f1f1f] hover:bg-[#272727] rounded-xl p-6 transition-shadow shadow-lg hover:shadow-xl">
          <h2 className="text-2xl font-semibold mb-2">📐 How to Calculate Your Loan EMI Easily</h2>
          <p className="text-gray-400 mb-2">
            Learn how EMI is calculated, with formulas and examples. Make smart loan decisions with our guide.
          </p>
          <span className="text-cyan-400 font-medium">Read More →</span>
        </Link>

        {/* Blog 2 */}
        <Link to="/blog/personal-loan-vs-home-loan-emi" className="block bg-[#1f1f1f] hover:bg-[#272727] rounded-xl p-6 transition-shadow shadow-lg hover:shadow-xl">
          <h2 className="text-2xl font-semibold mb-2">🏦 Personal Loan vs Home Loan EMI – What’s the Difference?</h2>
          <p className="text-gray-400 mb-2">
            Compare personal and home loan EMIs. Know what fits your needs based on interest rates, tenure, and EMI amounts.
          </p>
          <span className="text-cyan-400 font-medium">Read More →</span>
        </Link>
        <Link to="/blog/current-home-loan-interestrates" className="block bg-[#1f1f1f] hover:bg-[#272727] rounded-xl p-6 transition-shadow shadow-lg hover:shadow-xl">
          <h2 className="text-2xl font-semibold mb-2">🏦 Current Home loan interest rates</h2>
          <p className="text-gray-400 mb-2">
            Compare personal and home loan EMIs. Know what fits your needs based on interest rates, tenure, and EMI amounts.
          </p>
          <span className="text-cyan-400 font-medium">Read More →</span>
        </Link>
      </div>
    </div>
  )
}
