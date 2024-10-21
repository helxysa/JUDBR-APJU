import Link from 'next/link';

interface ButtonProps {
  readonly href: string;
  readonly text: string;
  readonly className?: string;
  readonly textColor?: {
    readonly default?: string;
    readonly hover?: string;
  };
  readonly bgColors?: {
    readonly default?: string;
    readonly hover?: string;
  };
}

export default function Button({ href, text, className = '', bgColors, textColor }: ButtonProps) {
  const defaultBgColor = bgColors?.default ?? 'bg-judbr-main';
  const hoverBgColor = bgColors?.hover ?? 'hover:bg-judbr-gray-dark';
  const defaultTextColor = textColor?.default ?? 'text-white';
  const hoverTextColor = textColor?.hover ?? 'hover:text-white';

  return (
    <div className="relative inline-block overflow-hidden group">
      <Link
        href={href}
        className={`inline-flex items-center justify-center ${defaultBgColor} ${defaultTextColor} px-4 py-2 rounded-full transition-all duration-300 ease-in-out ${hoverBgColor} ${hoverTextColor} ${className}`}
      >
        <span className="relative inline-block transition-all duration-300 ease-in-out group-hover:transform group-hover:-translate-y-full group-hover:opacity-0">
          {text}
        </span>
        <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
          {text}
        </span>
      </Link>
    </div>
  )
}