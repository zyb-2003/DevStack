// src/components/ui/button.tsx
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

// 添加完整的类型定义
function cva(
  base: string,
  config: {
    variants: {
      variant: Record<string, string>;
      size: Record<string, string>;
    };
    defaultVariants: {
      variant: string;
      size: string;
    };
  }
) {
  return (options?: {
    variant?: string;
    size?: string;
    className?: string;
  }) => {
    const classes = [base];
    if (options) {
      const { variant, size, className } = options;
      if (variant && config.variants.variant[variant]) {
        classes.push(config.variants.variant[variant]);
      }
      if (size && config.variants.size[size]) {
        classes.push(config.variants.size[size]);
      }
      if (className) {
        classes.push(className);
      }
    }
    return classes.filter(Boolean).join(" ");
  };
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-blue-500 text-white hover:bg-blue-600",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        outline: "border border-gray-300 hover:bg-gray-100",
        secondary: "bg-gray-500 text-white hover:bg-gray-600",
        ghost: "hover:bg-gray-100",
        link: "text-blue-500 underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 text-sm",
        lg: "h-12 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// 完整的 ButtonProps 接口
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? "span" : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };