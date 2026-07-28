"use client";

import type { MouseEvent, ReactNode } from "react";

type AnchorLinkProps = {
  ariaLabel?: string;
  children: ReactNode;
  className?: string;
  href: `#${string}`;
};

export function AnchorLink({
  ariaLabel,
  children,
  className,
  href,
}: AnchorLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const target = document.getElementById(href.slice(1));
    if (!target) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    target.scrollIntoView({ behavior: "auto", block: "start" });
  }

  return (
    <a
      aria-label={ariaLabel}
      className={className}
      href={href}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
