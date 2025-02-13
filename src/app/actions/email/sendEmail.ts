interface Values {
    name: string;
    email: string;
    message: string;
}

export const sendEmail = async (values: Values) => {
    try {
        const response = await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        });

        return response
    } catch (error) {
        console.error('There was a problem sending the email:', error);
    }
};