import NextLink, { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<LinkProps>;

/**
 * Wrapper for using Next.js Link in MDX files. By wrapping the Link in a React component,
 * Next.js manages apply SSG and SSR to links, even though they are placed inside MDX files.
 *
 * More info: https://github.com/varianter/next-med-mdx/blob/main/pages/examples/using-links.mdx
 */
export const Link = ({ children, ...rest }: Props) => (
  <NextLink {...rest}>{children}</NextLink>
);
