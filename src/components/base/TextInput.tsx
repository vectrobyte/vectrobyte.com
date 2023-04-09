import React, { forwardRef } from 'react';

import { getSlug, uuid } from '../../common/helpers';
import InputBase from './InputBase';

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  labelClass?: string;
};

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ id, name, label, error, className = '', labelClass = '', ...props }, ref) => {
    const inputId = id || getSlug(name || '') || `input-${uuid()}`;

    return (
      <InputBase id={inputId} label={label} labelClass={labelClass} error={error}>
        <input
          ref={ref}
          id={inputId}
          name={name}
          className={`
            w-full mt-2 py-3 px-6 rounded-full
            bg-white dark:bg-secondary dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-600
            focus:outline-none focus:shadow-outline
            ${error ? `border-red-600` : ''}
            ${className}
          `}
          type="text"
          placeholder=""
          {...props}
        />
      </InputBase>
    );
  }
);

TextInput.displayName = 'TextInput';

export default TextInput;
