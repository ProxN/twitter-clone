import Link from 'next/link';
import { Center } from '@components/layout/Center';
import { Box } from '@components/layout/Box';
import { Space } from '@components/layout/Space';
import { Heading } from '@components/elements/Heading';
import { Text } from '@components/elements/Text';
import { LoginScreen } from '../LoginScreen';

const info = {
  login: {
    text: 'Don’t have an account yet?',
    href: '/signup',
    linkText: 'Sign up',
  },
  signup: {
    text: 'Adready have an account?',
    href: '/login',
    linkText: 'Log in',
  },
};

interface AuthFormProps {
  title?: string;
  page?: 'login' | 'signup' | 'forgot_password';
  onSubmit?: () => void;
  hideLinks?: boolean;
  children?: React.ReactNode;
}

const AuthForm: React.FC<AuthFormProps> = ({
  children,
  page = 'login',
  hideLinks = false,
  title,
  onSubmit,
}) => {
  return (
    <Box display='flex' minH='100vh'>
      <LoginScreen />
      <Center minH='100%' w='50%'>
        <Box w={{ xs: '100%', sm: '40rem' }}>
          <Heading as='h1' size='3xl'>
            {title}
          </Heading>
          <Box as='form' mt={3} w='100%' onSubmit={onSubmit}>
            <Space size={2} flexDirection='column'>
              {children}

              {hideLinks ? (
                ''
              ) : page === 'forgot_password' ? (
                <Link href='/login'>
                  <Text as='a' isLink>
                    Back to Login
                  </Text>
                </Link>
              ) : (
                <Center flexDirection='column'>
                  <Text>
                    {info[page].text}
                    <Link href={info[page].href}>
                      <Text as='a' isLink>
                        {' '}
                        {info[page].linkText}
                      </Text>
                    </Link>
                  </Text>
                  {page === 'login' && (
                    <Link href='/forgot_password'>
                      <Text as='a' isLink>
                        Forgot Password?
                      </Text>
                    </Link>
                  )}
                </Center>
              )}
            </Space>
          </Box>
        </Box>
      </Center>
    </Box>
  );
};

export default AuthForm;
