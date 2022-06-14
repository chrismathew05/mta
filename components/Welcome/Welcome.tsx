import { Title, Text } from '@mantine/core';
import useStyles from './Welcome.styles';

export const Welcome = () => {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        Welcome to {' '}
        <Text inherit variant="gradient" component="span">
          PC
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        A platform for executing complex, timed trade strategies.
      </Text>
    </>
  );
};
