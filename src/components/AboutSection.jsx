function AboutSection() {
  return (
    <section className="relative bg-white py-32 px-6 sm:px-8 md:px-12">
      <div className="max-w-5xl mx-auto rounded-3xl shadow-2xl bg-white p-12 md:p-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6">
          About
        </h2>
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed tracking-wide">
          Welcome to GovConnect, a centralized portal designed for government
          officials, NGOs, and social workers to collaborate and access
          essential information related to juvenile justice. Our platform
          emphasizes transparency, accessibility, and collaboration, enabling
          stakeholders to communicate effectively, track important updates,
          and implement meaningful change in the community.
        </p>
        <p className="mt-6 text-blue-800 text-base md:text-lg leading-relaxed">
          Explore the portal to find dedicated resources, connect with officials,
          and stay informed about key programs and initiatives aimed at fostering
          social well-being.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
