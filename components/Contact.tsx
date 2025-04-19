import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, User, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    emailjs
      .send(
        "service_1tndpap",
        "template_25q3lam",
        formData,
        "FQ3US5PB-e4fs0X6t"
      )
      .then(() => {
        setStatusMessage("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          setStatusMessage("");
        }, 3000);
      })
      .catch((error) => {
        console.error("Failed to send message:", error);
        setStatusMessage("❌ Failed to send message. Try again later.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-[74.3vh] flex flex-col items-center justify-center px-6 text-gray-900 relative overflow-hidden">
      {/* Blurred Circular Background */}
      <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-orange-500 rounded-full rotate-12 opacity-50 blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-orange-400 rounded-full -rotate-12 opacity-40 blur-3xl -z-10"></div>

      {/* Title */}
      <h3 className="text-3xl font-bold text-center mb-2 text-orange-600">We're here to help</h3>
      <p className="text-gray-700 text-center mb-6">Let us know how we can assist you.</p>

      {/* Contact Form */}
      <div className="relative w-full max-w-lg">
        <div className="relative backdrop-blur-lg bg-white/30 p-8 rounded-2xl shadow-xl border border-white/50 overflow-hidden">
          {/* Status Message */}
          {statusMessage && (
            <div className={`text-center p-2 rounded-md mb-4 backdrop-blur-sm ${
              statusMessage.includes("✅") ? "bg-green-100/80 text-green-700" : "bg-red-100/80 text-red-700"
            }`}>
              {statusMessage}
            </div>
          )}

          {/* Form */}
          <form className="space-y-5 relative z-10" onSubmit={handleSubmit}>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-950" size={20} />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-10 p-3 bg-white/70 text-gray-900 border border-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-sm backdrop-blur-sm"
                required
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-950" size={20} />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 p-3 bg-white/70 text-gray-900 border border-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-sm backdrop-blur-sm"
                required
              />
            </div>

            <div className="relative">
              <MessageCircle className="absolute left-3 top-3 text-gray-950" size={20} />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full pl-10 p-3 bg-white/70 text-gray-900 border border-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-sm backdrop-blur-sm"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-semibold transition duration-300 text-white backdrop-blur-sm cursor-pointer ${
                loading ? "bg-gray-400/80 cursor-not-allowed" : "bg-orange-500/80 hover:bg-orange-600/90"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
