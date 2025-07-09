import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center mb-4">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <div className="text-center text-white text-sm sm:text-base flex flex-col sm:flex-row sm:justify-center sm:gap-4">
          <p className="break-all">📞 +91 8295957676</p>
          <p className="break-all">✉️ tanishqbhatia474@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
