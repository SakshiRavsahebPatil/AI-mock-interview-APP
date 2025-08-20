// import React from "react";

export const About = () => {
  return (
     <div className="max-w-4xl mx-auto p-6 space-y-6 text-gray-800">
      <h1 className="text-3xl font-bold text-center">About Us</h1>
      <section className="border-b border-gray-300 pb-8">
        <h3 className="text-2xl  text-sky-600 mb-4 pb-8">Our Vision</h3>
        <p className="text-gray-700">
          Our vision is to empower individuals with AI-driven tools and learning resources
          that prepare them for successful careers through mock interviews, career insights,
          and interactive practice.
        </p>
      </section>

      <section className="border-b border-gray-300 pb-8">
        <h3 className="text-2xl  text-sky-600 mb-4">What Do We Do</h3>
        <p className="text-gray-700">
          We provide a platform where users can create mock interviews, get real-time feedback,
          practice communication, and explore questions tailored to their job roles and tech stacks.
        </p>
      </section>

      <section>
        <h3 className="text-2xl text-sky-600 mb-4">Our Mission</h3>
        <p className="text-gray-700">
          Our mission is to build confidence and readiness in every job seeker by simulating real
          interview experiences with advanced AI, guiding them toward growth and success.
        </p>
      </section>
    </div>
  );
};