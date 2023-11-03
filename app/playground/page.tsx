import { getSession } from '../supabase-server';
import MediaInput from '@/components/ui/MediaInput';
import { Flex, Stack, Text } from '@chakra-ui/react';
import { redirect } from 'next/navigation';

interface Language {
  name: string;
  code: string;
}

export default async function Playground() {
  const session = await getSession();

  const title = `Translate any video to any language, with perfectly matched lip movements`;

  if (!session) {
    return redirect('/signin');
  }

  return (
    <Flex w="full" px={4} justifyContent={'center'} color="white">
      <Stack w="full" maxW="4xl" py={8} gap={8}>
        <Text alignSelf={'center'} fontWeight="bold" fontSize={'2xl'}>
          {title}
        </Text>
        <Flex w="full" justifyContent={'center'}>
          <MediaInput />
        </Flex>
      </Stack>
    </Flex>
  );
}
