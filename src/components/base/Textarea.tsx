import React, { forwardRef } from 'react';

import { getSlug, uuid } from '../../common/helpers';
import InputBase from './InputBase';

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: string;
  labelClass?: string;
};

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ id, name, label, error, className = '', labelClass = '', ...props }, ref) => {
    const inputId = id || getSlug(name || '') || `input-${uuid()}`;

    return (
      <InputBase id={inputId} label={label} labelClass={labelClass} error={error}>
        <textarea
          ref={ref}
          id={inputId}
          name={name}
          className={`
            w-full min-h-[128px] py-3 px-6 rounded-3xl border border-transparent transition-colors
            bg-white dark:bg-secondary dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-600
            focus:outline-none focus:shadow-outline
            ${error ? `!border-red-400` : ''}
            ${className}
          `}
          {...props}
        />
      </InputBase>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
