import React from 'react';

interface ContactNotificationProps {
  Name: string;
  email: string;
  message: string;
}

export const ContactNotificationTemplate: React.FC<ContactNotificationProps> = ({
  Name,
  email,
  message,
}) => {
  return (
    <div className="font-sans" style={{ backgroundColor: '#f9fafb', padding: '30px' }}>
  <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    {/* Header */}
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-4">
      <h1 className="text-white text-xl font-bold">
        New Contact Message Received
      </h1>
    </div>

    {/* Body */}
    <div className="px-6 py-4">
      <p className="text-gray-700 mb-4">
        You have received a new message from your website&apos;s contact form.
      </p>
      <div className="mb-4">
        <h2 className="text-gray-900 font-semibold">Name:</h2>
        <p className="text-gray-700">{Name}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-gray-900 font-semibold">Email:</h2>
        <p className="text-gray-700">{email}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-gray-900 font-semibold">Message:</h2>
        <div className="bg-gray-100 p-4 rounded">
          <p className="text-gray-700">{message}</p>
        </div>
      </div>
    </div>

    <div className="px-6 py-4 bg-gray-50">
      <p className="text-sm text-gray-500">
        This notification was automatically generated from your portfolio website.
      </p>
    </div>
  </div>
</div>

  );
};
