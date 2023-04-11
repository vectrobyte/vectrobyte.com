import React, { useCallback, useState } from 'react';

type ContactMeProps = React.HTMLAttributes<HTMLElement>;

import { useForm } from 'react-hook-form';
import { ImPhone } from 'react-icons/im';
import { SiGmail } from 'react-icons/si';
import { toast } from 'react-toastify';

import { FormSpreeError } from '../@types/formspree';
import { TOAST_OPTIONS } from '../common/configs';
import RequestError from '../common/errors/RequestError';
import { useRequest } from '../hooks/useRequest';
import Anchor from './base/Anchor';
import Button from './base/Button';
import Textarea from './base/Textarea';
import TextInput from './base/TextInput';
import SuccessToast from './toasts/SuccessToast/SuccessToast';
import WarningToast from './toasts/WarningToast/WarningToast';

type ContactFormData = {
  full_name: string;
  email: string;
  message: string;
};

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const ContactMe: React.FC<ContactMeProps> = () => {
  const [submitting, setSubmitting] = useState(false);
  const { request } = useRequest();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
    clearErrors,
  } = useForm<ContactFormData>();

  const handleClear = useCallback(() => {
    reset();
    clearErrors();
  }, [clearErrors, reset]);

  const onSubmit = (data: ContactFormData) => {
    setSubmitting(true);

    return request<ContactFormData>({
      url: 'https://formspree.io/f/mlekojpj',
      method: 'POST',
      data,
    })
      .then(() => {
        toast(<SuccessToast>Thank you for your submission</SuccessToast>, TOAST_OPTIONS);
        handleClear();
      })
      .catch((err: RequestError) => {
        if (!err.response) {
          throw err;
        }

        const { errors } = err.getResponseData<FormSpreeError<keyof ContactFormData>>();

        if (errors && errors.length) {
          errors.forEach((error) => {
            setError(error.field, {
              type: 'server',
              message: error.message,
            });
          });
        }
      })
      .catch((error) => {
        toast(<WarningToast>{error.message}</WarningToast>, TOAST_OPTIONS);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <section
      id="contact-me"
      className="relative bg-gray-100 dark:bg-primary w-full h-full py-16 lg:py-32 transition-colors"
    >
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
        <form name="contact" method="POST" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <TextInput
              id="full_name"
              label="Full Name"
              autoComplete="off"
              placeholder="Enter your Name"
              {...register('full_name', {
                required: `Name is required.`,
              })}
              error={errors.full_name && errors.full_name?.message}
            />
          </div>
          <div className="mt-8">
            <TextInput
              id="email"
              type="text"
              label="Email"
              autoComplete="off"
              placeholder="Enter a valid email address"
              {...register('email', {
                required: `Email is required.`,
                pattern: {
                  value: EMAIL_REGEX,
                  message: 'Email is not formatted properly',
                },
              })}
              error={errors.email && errors.email?.message}
            />
          </div>
          <div className="mt-8">
            <Textarea
              id="message"
              label="Message"
              placeholder="Enter your message"
              {...register('message', {
                required: `Message is required.`,
              })}
              error={errors.message && errors.message?.message}
            />
          </div>
          <div className="mt-8">
            <Button type="submit" loading={submitting} className="w-full">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
