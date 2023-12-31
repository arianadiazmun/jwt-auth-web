import Link from "next/link";

export default function About() {
  return (
    <section className="text-gray-100 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <h2 className="sm:text-3xl text-2xl text-gray-50 font-medium title-font mb-2 md:w-2/5">
          Kickstarter Actually Pinterest Brunch Bitters Occupy
        </h2>
        <div className="md:w-3/5 md:pl-6">
          <p className="leading-relaxed text-base">
            Taxidermy bushwick celiac master cleanse microdosing seitan. Fashion
            axe four dollar toast truffaut, direct trade kombucha brunch
            williamsburg keffiyeh gastropub tousled squid meh taiyaki drinking
            vinegar tacos.
          </p>
          <div className="flex md:mt-4 mt-6">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded">
              Button
            </button>
            <Link
              href="/"
              className="text-indigo-500 inline-flex items-center ml-4"
            >
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-Linecap="round"
                stroke-Linejoin="round"
                stroke-Width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
