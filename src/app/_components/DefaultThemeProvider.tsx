'use client';

import { BaseStyles, SSRProvider, ThemeProvider } from '@primer/react';

import { useServerInsertedHTML } from 'next/navigation';
import React, { useState } from 'react';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();

    // ts: Property 'clearTag' does not exist on type 'ServerStyleSheet'
    // @ts-ignore
    styledComponentsStyleSheet.instance.clearTag();

    return <>{styles}</>;
  });

  if (typeof window !== 'undefined') return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children as React.ReactElement}
    </StyleSheetManager>
  );
}

const AppThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SSRProvider>
      <StyledComponentsRegistry>
        <ThemeProvider colorMode="auto" preventSSRMismatch>
          <BaseStyles>{children}</BaseStyles>
        </ThemeProvider>
      </StyledComponentsRegistry>
    </SSRProvider>
  );
};

export default AppThemeProvider;
