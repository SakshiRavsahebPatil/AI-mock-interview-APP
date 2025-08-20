import { Briefcase, Lightbulb, ClipboardCheck, Headphones } from "lucide-react";
import { useRef } from "react";
import emailjs from "emailjs-com";

const services = [
  {
    icon: <Lightbulb className="h-8 w-8 text-blue-500" />,
    title: "AI-Powered Questions",
    description: "Generate smart interview questions using AI based on your job role and tech stack.",
  },
  {
    icon: <ClipboardCheck className="h-8 w-8 text-green-500" />,
    title: "Mock Interview Builder",
    description: "Easily create and manage mock interviews with a simple and friendly interface.",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-purple-500" />,
    title: "Track & Save Sessions",
    description: "All your mock interviews are saved securely for you to review anytime.",
  },
  {
    icon: <Headphones className="h-8 w-8 text-red-500" />,
    title: "Support & Guidance",
    description: "Get in touch with our team if you need help or want custom interview questions.",
  },
];

const Services = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (formRef.current) {
      emailjs
        .sendForm("service_3qr8ak5", "template_vru5xss", formRef.current, "Jy-u3EhulJi8IHrVd")
        .then(() => {
          alert("Message sent successfully!");
          formRef.current?.reset();
        })
        .catch((error) => {
          console.error("Error sending message:", error);
          alert("Failed to send message.");
        });
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-md flex items-start space-x-4">
            {service.icon}
            <div>
              <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-bold text-center mb-6">Request Service</h3>
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="max-w-xl mx-auto space-y-4 bg-white p-6 rounded-xl shadow"
      >
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input name="name" type="text" required className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input name="email" type="email" required className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea name="message" rows={4} required className="w-full border rounded p-2"></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export { Services };