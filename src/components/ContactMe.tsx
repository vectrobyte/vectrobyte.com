import React, { useState } from 'react';

type ContactMeProps = React.HTMLAttributes<HTMLElement>;

import { ImPhone } from 'react-icons/im';
import { SiGmail } from 'react-icons/si';

import Anchor from './base/Anchor';
import Button from './base/Button';
import Textarea from './base/Textarea';
import TextInput from './base/TextInput';

const ContactMe: React.FC<ContactMeProps> = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setLoading(true);

    const myForm = event.target;
    const formData = new FormData(myForm as HTMLFormElement);

    return fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => alert('Thank you for your submission'))
      .catch((error) => alert(error))
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="relative bg-gray-100 dark:bg-primary w-full h-full py-16 lg:py-32 transition-colors">
      <div className="container px-4 grid gap-8 grid-cols-1 md:grid-cols-2 lg:px-12 xl:px-16 mx-auto">
        <div className="flex flex-col justify-between">
          <div className="text-center md:text-left">
            <p className="font-light text-xl lg:text-2xl mb-6 dark:text-gray-300">
              Do you have any queries?
            </p>

            <h2 className="text-3xl lg:text-5xl text-gray-800 dark:text-white leading-tight transition-colors mb-10">
              Lets talk about <br /> everything!
            </h2>

            <div className="dark:text-gray-100 transition-colors mb-12">
              <SiGmail className="mb-2 text-2xl inline text-gray-500" />
              <p className="text-xl">Mail Me</p>
              <Anchor href="mailto:contact@vectrobyte.com">contact@vectrobyte.com</Anchor>
            </div>
            <div className="dark:text-gray-100 transition-colors mb-12">
              <ImPhone className="mb-2 text-2xl inline text-gray-500" />
              <p className="text-xl">Call Me</p>
              <Anchor href="tel:+9779827352725">+977 982 735 2725</Anchor>
            </div>
          </div>
        </div>
        <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
          <div>
            <span className="uppercase text-sm dark:text-gray-300 transition-colors">
              Full Name
            </span>
            <TextInput name="full_name" />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm dark:text-gray-300 transition-colors">Email</span>
            <TextInput type="email" name="email" placeholder="" />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm dark:text-gray-300 transition-colors">Message</span>
            <Textarea name="message" />
          </div>
          <div className="mt-8">
            <Button type="submit" loading={loading} className="w-full">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
