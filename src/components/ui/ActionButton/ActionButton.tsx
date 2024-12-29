'use client';

import React from 'react';
import Link from 'next/link';
import { ActionButtonType } from './types';

interface ActionButtonProps extends ActionButtonType {
  className?: string;
  onClick?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  display,
  text,
  link,
  icon,
  iconPosition = 'right',
  className = '',
  onClick
}) => {
  if (!display) return null;

  const buttonContent = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="mr-2">
          <img src={icon} alt="" className="w-4 h-4" />
        </span>
      )}
      {text}
      {icon && iconPosition === 'right' && (
        <span className="ml-2">
          <img src={icon} alt="" className="w-4 h-4" />
        </span>
      )}
    </>
  );

  const buttonClasses = `inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${className}`;

  return link ? (
    <Link href={link} className={buttonClasses}>
      {buttonContent}
    </Link>
  ) : (
    <button onClick={onClick} className={buttonClasses}>
      {buttonContent}
    </button>
  );
};

export default ActionButton;
