import ContactCard from '../../card/contactCard';
const ContactSection = () => {
return (
    <section id="contact" className="py-20 px-6 md:px-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-blue-700">
            Contact Me
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
            Let&apos;s connect! Feel free to reach out for collaborations or just a friendly chat.
          </p>
        </div>

        <ContactCard/>
      </div>
    </section>
  );
};

export default ContactSection;