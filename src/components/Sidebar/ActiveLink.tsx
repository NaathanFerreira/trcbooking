import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}

function ActiveLink({ children, ...rest }: ActiveLinkProps) {
  let isActive = false;

  const { asPath } = useRouter();

  if (asPath.startsWith(String(rest.href))) {
    isActive = true;
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? "yellow.500" : "gray.50",
      })}
    </Link>
  );
}

export default ActiveLink;
