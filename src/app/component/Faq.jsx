import React from "react";

export default function AboutRealEstate() {
  return (
    <div className="sm:w-full" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      <section className="lg:h-[500px]  pt-10 flex justify-center items-center content-center">
        <div className="w-[70%] bg-slate-300 rounded-[10px]">
          <header className="flex flex-row gap-3">
            <h1 className="pt-4 px-3 text-2xl font-bold">
              Frequently Asked Questions (FAQ)
            </h1>
          </header>
          <ol className="p-7 leading-relaxed">
            <li>
              <strong>What is the process for buying a home?</strong>
              <br />
              The process begins with identifying your budget, choosing a
              suitable location, and finding a property that fits your needs.
              Work with a trusted agent to guide you through negotiations,
              inspections, and closing procedures.
            </li>
            <p>
              <br />
            </p>

            <li>
              <strong>How can I list my property on this platform?</strong>
              <br />
              You can list your property by signing up for a seller account.
              Fill out the listing form, provide property details and photos,
              and our team will assist in making your listing live on the
              platform.
            </li>
            <p>
              <br />
            </p>

            <li>
              <strong>
                What are the key factors to consider when investing in real
                estate?
              </strong>
              <br />
              When investing, consider the property location, market demand,
              appreciation potential, rental yield, and long-term costs such as
              maintenance and taxes. Conduct research or seek professional
              advice to make informed decisions.
            </li>
            <p>
              <br />
            </p>

            <li>
              <strong>How do I contact customer support for assistance?</strong>
              <br />
              Our customer support team is available 24/7 to help. You can reach
              us via email, live chat on our platform, or by calling our hotline
              number provided on the contact page.
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}
