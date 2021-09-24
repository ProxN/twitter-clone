import { memo } from 'react';
import Image from 'next/image';
import { Heading } from '@components/elements/Heading';
import { Icon } from '@components/elements/Icon';
import { Text } from '@components/elements/Text';
import { Box } from '@components/layout/Box';
import { Center } from '@components/layout/Center';
import { Flex } from '@components/layout/Flex';

const LoginScreen = () => {
  return (
    <Box
      display={{ xs: 'none', md: 'block' }}
      background='#228be6'
      w='50%'
      position='relative'
    >
      <Center
        overflow='hidden'
        h='100%'
        w='100%'
        color='rgba(0,0,0,.08)'
        position='absolute'
        zIndex={10}
      >
        <Image src='/twitter.svg' layout='fill' />
      </Center>
      <Center
        minH='100%'
        position='relative'
        zIndex={22}
        color='white'
        flexDirection='column'
        padding={{ xs: '0 15px', lg: 'unset' }}
      >
        <Heading
          as='h1'
          maxW={{ md: '100%', lg: '50%' }}
          size='3xl'
          fontWeight={500}
          lineHeight='1.5'
        >
          See what's happening in the world right now
        </Heading>
        <Flex
          maxWidth={{ md: '100%', lg: '45%' }}
          w='100%'
          mt='2.4rem'
          flexDirection='column'
        >
          <Flex alignItems='center' mb='2rem'>
            <Box h='3.2rem' w='3.2rem' mr='1.4rem'>
              <Icon name='search' />
            </Box>
            <Text size='md'>Follow your interests.</Text>
          </Flex>
          <Flex alignItems='center' mb='2rem'>
            <Box h='3.2rem' w='3.2rem' mr='1.4rem'>
              <Icon name='users' />
            </Box>
            <Text size='md'>Hear what people are talking about.</Text>
          </Flex>
          <Flex alignItems='center'>
            <Box h='3.2rem' w='3.2rem' mr='1.4rem'>
              <Icon name='chatbubble' />
            </Box>
            <Text size='md'>Join the conversation.</Text>
          </Flex>
        </Flex>
      </Center>
    </Box>
  );
};

export default memo(LoginScreen);
