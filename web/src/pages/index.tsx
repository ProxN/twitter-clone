import Link from 'next/link';
import { Button } from '@components/elements/Button';
import { Heading } from '@components/elements/Heading';
import { Box } from '@components/layout/Box';
import { Space } from '@components/layout/Space';
import { Icon } from '@components/elements/Icon';
import { Flex } from '@components/layout/Flex';
import { Text } from '@components/elements/Text';
import { LoginScreen } from '@components/templates/LoginScreen';
import { WithNoUser } from '@lib/utility/withNoUser';

const Index = () => {
  return (
    <Box minH='100vh' display='flex'>
      <LoginScreen />
      <Box w={{ xs: '100%', md: '50%' }}>
        <Flex
          minH='100vh'
          flexDirection='column'
          justifyContent='center'
          padding={{ xs: '0 1.5rem', sm: '0 5rem' }}
        >
          <Box h='4.5rem' w='4.5rem' color='#228be6' mb='2rem'>
            <Icon name='twitter' />
          </Box>
          <Heading size={{ xs: '5xl', md: '6xl' }}>Happening now</Heading>
          <Text size='2xl' fontWeight={500} mt='2rem'>
            Join Twitter today.
          </Text>
          <Space
            mt='2rem'
            w={{ xs: '100%', sm: '30rem' }}
            size={4}
            flexDirection='column'
          >
            <Link href='/login'>
              <Button fullWidth as='a' isPrimary>
                Sign up
              </Button>
            </Link>
            <Link href='/login'>
              <Button fullWidth as='a' variant='ghost' isPrimary>
                Sign in
              </Button>
            </Link>
          </Space>
        </Flex>
      </Box>
    </Box>
  );
};

export default WithNoUser(Index);
