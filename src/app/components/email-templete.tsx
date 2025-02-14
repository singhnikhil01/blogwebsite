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
    <div style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', backgroundColor: '#f9fafb', padding: '30px', boxSizing: 'border-box' }}>
    <div style={{ maxWidth: '500px', margin: '0 auto', backgroundColor: '#ffffff', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
        {/* Header */}
        <div style={{ background: 'linear-gradient(to right, #3b82f6, #6366f1)', padding: '20px', color: '#ffffff', fontSize: '1.5em', fontWeight: 'bold', textAlign: 'center' }}>
            New Contact Message Received
        </div>

        {/* Body */}
        <div style={{ padding: '20px', color: '#333333' }}>
            <p style={{ marginBottom: '15px', lineHeight: '1.5' }}>
                You have received a new message from your website&apos;s contact form.
            </p>

            <div style={{ marginBottom: '20px' }}>
                <h2 style={{ margin: '0 0 5px 0', fontSize: '1.1em', fontWeight: '600', color: '#1f2937' }}>Name:</h2>
                <p style={{ margin: '0', padding: '10px', borderRadius: '5px', backgroundColor: '#f3f4f6', color: '#374151' }}>{Name}</p>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <h2 style={{ margin: '0 0 5px 0', fontSize: '1.1em', fontWeight: '600', color: '#1f2937' }}>Email:</h2>
                <p style={{ margin: '0', padding: '10px', borderRadius: '5px', backgroundColor: '#f3f4f6', color: '#374151' }}>{email}</p>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <h2 style={{ margin: '0 0 5px 0', fontSize: '1.1em', fontWeight: '600', color: '#1f2937' }}>Message:</h2>
                <p style={{ margin: '0', padding: '10px', borderRadius: '5px', backgroundColor: '#f3f4f6', color: '#374151' }}>{message}</p>
            </div>
        </div>

        {/* Footer */}
        <div style={{ backgroundColor: '#f3f4f6', padding: '15px', textAlign: 'center', color: '#6b7280', fontSize: '0.85em' }}>
            This notification was automatically generated from your portfolio website.
        </div>
    </div>
</div>
  );
};
