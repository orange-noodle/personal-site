import React from 'react';

/**
 * Input component for forms.
 * Props:
 * - label: Label text
 * - type: Input type
 * - value: Input value
 * - onChange: Change handler
 * - placeholder: Placeholder text
 * - error: Error message
 * - className: Additional classes
 * - id: Input id
 */
const Input = ({
  label,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  error = '',
  className = '',
  id,
  ...props
}) => {
  const inputId = id || `input-${label?.toLowerCase().replace(/\s+/g, '-')}`;
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label htmlFor={inputId} className="block mb-1 font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${inputId}-error`} className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input; 