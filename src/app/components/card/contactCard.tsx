'use client';
import { useState, ChangeEvent, FormEvent } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icons in Next.js
const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactCard = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await fetch("https://formspree.io/f/your-form-id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setSubmitStatus("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Contact Form */}
      <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-4 py-2 bg-gradient-to-r from-orange-600 to-blue-700 text-white font-semibold rounded-md hover:shadow-lg transition-all"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
          {submitStatus && (
            <p className="text-center text-sm text-gray-700 dark:text-gray-300">{submitStatus}</p>
          )}
        </form>
      </div>

      {/* Contact Info & Map */}
      <div className="space-y-8">
        {/* Contact Information */}
        <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="w-6 h-6 text-orange-500" />
              <p className="text-gray-700 dark:text-gray-300">your.email@example.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="w-6 h-6 text-blue-500" />
              <p className="text-gray-700 dark:text-gray-300">+1 234 567 890</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="w-6 h-6 text-purple-500" />
              <p className="text-gray-700 dark:text-gray-300">123 Main Street, New York, USA</p>
            </div>
          </div>
        </div>

        {/* Map Component */}
        <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">My Location</h3>
          <div className="h-64 md:h-80 rounded-md overflow-hidden">
            <MapContainer
              center={[9.0910878, 76.4902126]}
              zoom={13}
              scrollWheelZoom={false}
              className="h-full w-full z-0"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[9.0910878, 76.4902126]}>
                <Popup>I&apos;m here! Let&apos;s meet.</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
