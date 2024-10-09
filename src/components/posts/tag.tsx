'use client';
<<<<<<< HEAD
=======

>>>>>>> b9dc044 (tag fixed)
import { cn } from '@/lib/utils';
import React, { forwardRef, Ref } from 'react';

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  name?: string;
}

const Tag = forwardRef(
  (
    { className, name = 'M1000:)', ...props }: TagProps,
    ref: Ref<HTMLSpanElement>,
  ) => {
    const tagClassName = cn(

      'inline-flex items-center px-2.5 py-1 rounded-lg text-sm font-semibold',
      'transition-colors duration-150 ease-in-out',
      'hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50',
      className,
      'text-s font-medium me-2 px-3 py-0.5 rounded-xl dark:bg-blue-900 dark:text-blue-300 bg-blue-100 text-blue-800',
<<<<<<< HEAD

=======
>>>>>>> b9dc044 (tag fixed)
    );

    return (
      <span
        ref={ref}
        className={tagClassName}
        {...props}
<<<<<<< HEAD
        role="status"
        aria-label={`Tag: ${name}`}
=======
>>>>>>> b9dc044 (tag fixed)
      >
        {name}
      </span>
    );
  },
);

Tag.displayName = 'Tag';

export default Tag;