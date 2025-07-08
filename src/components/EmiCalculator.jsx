import { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const EmiCalculator = ({ defaultRate = 10 }) => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState(defaultRate);
  const [months, setMonths] = useState("");
  const [emi, setEmi] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);

  const calculateEMI = () => {
    const P = parseFloat(principal);
    const R = parseFloat(rate) / 12 / 100;
    const N = parseInt(months);

    if (!P || !R || !N) {
      alert("Please enter valid values");
      return;
    }

    const monthlyEMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    const total = monthlyEMI * N;
    const interest = total - P;

    setEmi(monthlyEMI.toFixed(2));
    setTotalPayment(total.toFixed(2));
    setTotalInterest(interest.toFixed(2));
  };

  return (
    <div className="font-poppins bg-gray-50 min-h-screen px-4 py-10">
      <div className="max-w-6xl mx-auto bg-white p-6 md:p-10 shadow-2xl rounded-2xl">
        <h2 className="text-3xl font-bold mb-4 text-center text-blue-700">
          EMI Calculator
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Enter your loan details to calculate your monthly EMI.
        </p>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* FORM SIDE */}
          <div className="flex-1 space-y-5">
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Loan Amount (₹)
              </label>
              <input
                type="number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                placeholder="e.g. 500000"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Interest Rate (% p.a.)
              </label>
              <input
                type="number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                placeholder="e.g. 10"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Tenure (Months)
              </label>
              <input
                type="number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={months}
                onChange={(e) => setMonths(e.target.value)}
                placeholder="e.g. 60"
              />
            </div>

            <button
              onClick={calculateEMI}
              className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
            >
              Calculate EMI
            </button>

            {emi && (
              <div className="mt-6 bg-blue-50 text-blue-900 p-4 rounded-xl shadow-md text-center space-y-2">
                <h3 className="text-xl font-semibold">Results</h3>
                <p>
                  Monthly EMI: <strong>₹{emi}</strong>
                </p>
                <p>Total Interest Payable: ₹{totalInterest}</p>
                <p>Total Payment: ₹{totalPayment}</p>
              </div>
            )}
          </div>

          {/* CHART SIDE */}
          {emi && (
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-blue-700 mb-4 text-center lg:text-left">
                EMI Breakdown
              </h3>
              <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      dataKey="value"
                      data={[
                        { name: "Principal", value: parseFloat(principal) },
                        { name: "Interest", value: parseFloat(totalInterest) },
                      ]}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      label
                    >
                      <Cell fill="#3b82f6" />
                      <Cell fill="#10b981" />
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmiCalculator;
