"use client";

import { useState } from 'react';
import { Center, Tooltip, UnstyledButton, Stack, rem } from '@mantine/core';
import {
  IconHome2,
  IconArrowsSplit2,
  IconMicrophone,
  IconPlayerRecord,
  IconArrowsJoin,
  IconScissors,
  IconBorderVertical,
  IconSpeakerphone,
  IconTriangle,
  IconHelpHexagon,
  IconLanguage,
  IconSquareToggle
} from '@tabler/icons-react';
import classes from './NavbarMinimal.module.css';
// import Router from 'next/router';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  route: string;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick, route }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
        <Link href={route}>
          <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
        </Link>
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconBorderVertical, label: 'Remover', route: '/remove' },
  { icon: IconArrowsSplit2, label: 'Splitter', route: '/splitter' },
  { icon: IconSpeakerphone, label: 'Pitcher', route: '/pitcher' },
  { icon: IconTriangle, label: 'Key BPM finder', route: '/bpm-finder' },
  { icon: IconScissors, label: 'Cutter', route: '/cutter' },
  { icon: IconArrowsJoin, label: 'Joiner', route: '/joiner' },
  { icon: IconMicrophone, label: 'Recorder', route: '/recorder' },
  { icon: IconPlayerRecord, label: 'Karaoke', route: '/karaoke' },
];

export function NavbarMinimal() {
  const [active, setActive] = useState(2);
  const pathname = usePathname()

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      route={link.route}
      onClick={() => {
        setActive(index)
      }}
    />
  ));

  return (
    <nav className={classes.navbar} style={{ minHeight: "100%"}} >
      {/* <Center>
        <IconSquareToggle type='mark' size={30} />
      </Center> */}

      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>

      <Stack justify="center" gap={0}>
        <NavbarLink icon={IconHelpHexagon} label="Support" route='/support' />
        <NavbarLink icon={IconLanguage} label="Change Language" route='/remove'/>
      </Stack>
    </nav>
  );
}