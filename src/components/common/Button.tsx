import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  icon?: IconDefinition;
  iconPosition?: "left" | "right";
  external?: boolean;
  className?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  icon,
  iconPosition = "right",
  external = false,
  className = "",
}: ButtonProps) {
  const baseClasses = "px-5 py-2.5 rounded-lg font-medium text-sm transition-opacity inline-flex items-center gap-2";
  
  const variantClasses = {
    primary: "bg-slate-900 dark:bg-slate-100 text-zinc-50 dark:text-zinc-900 hover:opacity-90",
    secondary: "border border-gray-300/50 dark:border-gray-700/50 bg-white/40 dark:bg-slate-800/40 backdrop-blur-md hover:border-gray-400/50 dark:hover:border-gray-600/50 transition-colors text-zinc-900 dark:text-zinc-100",
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <FontAwesomeIcon icon={icon} className="w-2 h-2" />
      )}
      {children}
      {icon && iconPosition === "right" && (
        <FontAwesomeIcon icon={icon} className="w-2 h-2" />
      )}
    </>
  );

  if (external || href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a
        href={href}
        className={buttonClasses}
        target={external || href.startsWith("http") ? "_blank" : undefined}
        rel={external || href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={buttonClasses}>
      {content}
    </Link>
  );
}
