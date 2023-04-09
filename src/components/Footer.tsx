import React from 'react';
import { BsHeartFill } from 'react-icons/bs';
import {
  SiFiverr,
  SiGithub,
  SiLinkedin,
  SiSkype,
  SiStackoverflow,
  SiTwitter,
} from 'react-icons/si';

import Anchor from './base/Anchor';

type FooterProps = React.HTMLAttributes<HTMLElement>;

const Footer: React.FC<FooterProps> = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative o z-10 bg-white dark:bg-secondary transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 py-8 lg:py-0 min-h-[70px]">
          <div className="p-3 flex items-center justify-center lg:justify-start">
            <a
              href="/"
              className="text-2xl font-bold text-gray-800 dark:text-gray-200 transition-colors"
            >
              <span className="font-semibold">Vectro</span>
              <span className="font-thin">Byte</span>™
            </a>
          </div>

          <div className="p-3 w-full flex items-center justify-center gap-6 text-secondary text-xl dark:text-gray-500">
            <Anchor href="https://github.com/vectrobyte">
              <SiGithub />
            </Anchor>
            <Anchor href="https://linkedin.com/in/vectrobyte">
              <SiLinkedin />
            </Anchor>
            <Anchor href="https://stackoverflow.com/users/12417416/vectrobyte">
              <SiStackoverflow />
            </Anchor>
            <Anchor href="skype:dilip_bhattarai_1?chat">
              <SiSkype />
            </Anchor>
            <Anchor href="https://twitter.com/vectrobyte">
              <SiTwitter />
            </Anchor>
            <Anchor href="https://fiverr.com/vectrobyte" className="text-2xl">
              <SiFiverr />
            </Anchor>
          </div>

          <div className="p-3 w-full text-gray-500 flex items-center gap-1 justify-center flex-wrap mx-auto lg:justify-end">
            <p className="flex w-max items-center">
              © {year}&nbsp;<Anchor href="/">Dilip Bhattarai</Anchor>.
            </p>
            <p className="w-max">
              Made with&nbsp;
              <BsHeartFill size={13} className="inline" />
              &nbsp;in&nbsp;
              <Anchor target="_blank" rel="noreferrer noopener" href="https://gatsbyjs.com">
                Gatsby
              </Anchor>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
