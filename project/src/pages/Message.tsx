import React from 'react';
import { Header } from '../components/Header/Header';
import ContactForm from '../components/message/ContactForm';
import ContactInfo from '../components/message/ContactInfo';

function Message() {
    return (
        <div className="min-h-screen bg-gray-50" style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#ffffff',
            backgroundImage: 'radial-gradient(rgba(12, 12, 12, 0.171) 2px, transparent 0)',
            backgroundSize: '30px 30px',
            backgroundPosition: '-5px -5px',
          }}>
            <Header />
            <div className="flex justify-center">
                <div className="max-w-7xl mx-auto px-25 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <ContactForm />
                            <ContactInfo />
                        </div>
                        <div className="hidden md:block">
                            <img
                                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                                alt="Customer service representative"
                                className="w-full h-[550px] w-[600px] object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Message;