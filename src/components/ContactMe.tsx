import React from 'react';

type ContactMeProps = React.HTMLAttributes<HTMLElement>;

import Button from './base/Button';
import Textarea from './base/Textarea';
import TextInput from './base/TextInput';
import Mailbox from './svgs/Mailbox';

const ContactMe: React.FC<ContactMeProps> = () => {
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
        <div className="">
          <div>
            <span className="uppercase text-sm dark:text-gray-300">Full Name</span>
            <TextInput />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm dark:text-gray-300">Email</span>
            <TextInput />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm dark:text-gray-300">Message</span>
            <Textarea />
          </div>
          <div className="mt-8">
            <Button className="w-full">Send Message</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
