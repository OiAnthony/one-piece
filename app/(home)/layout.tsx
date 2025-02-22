import type {ReactNode} from 'react';
import {HomeLayout} from 'fumadocs-ui/layouts/home';
import {baseOptions} from '@/app/layout.config';

export default function Layout({children}: { children: ReactNode }) {
  return (
    <HomeLayout
      {...baseOptions}
      className="dark:bg-neutral-950 dark:[--color-fd-background:var(--color-neutral-950)]"
    >
      {children}
      <Footer/>
    </HomeLayout>
  );
}

function Footer() {
  return (
    <footer className="mt-auto border-t bg-fd-card py-12 text-fd-secondary-foreground">
      <div className="container flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className={"z-10"}>
          <p className="text-xs">
            Power by{' '}
            <a
              href="https://github.com/fuma-nama/fumadocs"
              rel="noreferrer noopener"
              target="_blank"
              className="font-medium hover:underline"
            >
              Fumadocs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
