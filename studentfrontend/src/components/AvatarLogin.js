import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';

export default function AvatarLogin() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar sx={{ bgcolor: deepPurple[500] }}>SJ</Avatar>
    </Stack>
  );
}
