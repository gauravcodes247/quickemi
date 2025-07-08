import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto text-gray-800 space-y-6">
        <Helmet>
        <title>EMI Calculator – Free Loan EMI Tool (Home, Car, Personal)</title>
        <meta
          name="description"
          content="Calculate your EMI for personal, home, or car loans using our free online EMI calculator. Instant results with interest breakdown."
        />
      </Helmet>
      <h1 className="text-3xl font-bold text-indigo-800 mb-4">Contact Us</h1>

      <p>
        Have questions, feedback, or collaboration ideas? I’m Gaurav — and I’d love to hear from you.
        Fill out the form below and I’ll get back to you as soon as possible.
      </p>

      <form className="space-y-4 mt-4" action="#" method="POST">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your message..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
