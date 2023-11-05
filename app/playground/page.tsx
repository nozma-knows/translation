import { getSession, getJobs } from '../supabase-server';
import JobGrid from '@/components/feature-playground/ui/JobGrid';
import MediaInput from '@/components/ui/MediaInput';
import { Flex, Stack, Text } from '@chakra-ui/react';
import { redirect } from 'next/navigation';

export default async function Playground() {
  const session = await getSession();
  const jobs = await getJobs(session?.user.id as string);

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
        {jobs && <JobGrid jobs={jobs} />}
      </Stack>
    </Flex>
  );
}
