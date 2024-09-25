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

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
        <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconBorderVertical, label: 'Remover' },
  { icon: IconArrowsSplit2, label: 'Splitter' },
  { icon: IconSpeakerphone, label: 'Pitcher' },
  { icon: IconTriangle, label: 'Key BPM finder' },
  { icon: IconScissors, label: 'Cutter' },
  { icon: IconArrowsJoin, label: 'Joiner' },
  { icon: IconMicrophone, label: 'Recorder' },
  { icon: IconPlayerRecord, label: 'Karaoke' },
];

export function NavbarMinimal() {
  const [active, setActive] = useState(2);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <Center>
        <IconSquareToggle type='mark' size={30} />
      </Center>

      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>

      <Stack justify="center" gap={0}>
        <NavbarLink icon={IconHelpHexagon} label="Change account" />
        <NavbarLink icon={IconLanguage} label="Logout" />
      </Stack>
    </nav>
  );
}