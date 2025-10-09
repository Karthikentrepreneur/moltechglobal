import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Header />
      <main className="bg-white text-gray-900 pt-24 pb-16">
        <section className="mx-auto max-w-4xl px-6 text-center space-y-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold">
            About Us - Chemical Solutions for Sustainable Industries
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Moltech strides in the bio space working on clean initiatives and products that drives the
            circular economy. With its strategic presence in Asia, Middle East, United Kingdom and United
            States of America, Moltech is positioned to cater and harness cross continental potential of
            renewable and sustainable products on a global platform.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
export { About };
