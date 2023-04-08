import React, { useState } from 'react';

type ContactMeProps = React.HTMLAttributes<HTMLElement>;

import Button from './base/Button';
import Textarea from './base/Textarea';
import TextInput from './base/TextInput';
import Mailbox from './svgs/Mailbox';

const ContactMe: React.FC<ContactMeProps> = () => {
  const [loading, setLoading] = useState(true);

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
      <div className="container px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 mx-auto">
        <div className="flex flex-col justify-between">
          <div className="text-center md:text-left">
            <p className="font-light text-2xl mb-6 dark:text-gray-300">Do you have any queries?</p>

            <h2 className="text-4xl lg:text-5xl text-gray-800 dark:text-white leading-tight transition-colors mb-10">
              Lets talk about <br /> everything!
            </h2>

            <Mailbox className="h-[300px] w-[300px] mx-auto lg:mx-0 text-secondary dark:text-gray-100" />
          </div>
        </div>
        <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
          <div>
            <span className="uppercase text-sm dark:text-gray-300">Full Name</span>
            <TextInput name="full_name" />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm dark:text-gray-300">Email</span>
            <TextInput type="email" name="email" />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm dark:text-gray-300">Message</span>
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
