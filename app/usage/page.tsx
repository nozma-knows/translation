import { getSession, getJobs } from '../supabase-server';
import StatusTag from '@/components/ui/StatusTag';
import {
  Flex,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr
} from '@chakra-ui/react';
import { DateTime } from 'luxon';
import { redirect } from 'next/navigation';
import { FaCheck } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

export default async function Usage() {
  const session = await getSession();
  const jobs = await getJobs(session?.user.id as string);

  if (!session) {
    return redirect('/signin');
  }

  return (
    <Flex w="full" px={4} justifyContent={'center'} color="white">
      <Stack w="full" maxW="4xl" py={8} gap={0}>
        <Text
          textAlign={'start'}
          fontSize={['4xl', '6xl']}
          fontWeight="extrabold"
          color="white"
          className="sm:text-center"
        >
          Usage
        </Text>
        <TableContainer>
          <Table colorScheme={'whiteAlpha'}>
            <Thead>
              <Tr>
                <Th>Date</Th>
                <Th>Status</Th>
                <Th isNumeric>Credits</Th>
              </Tr>
            </Thead>
            <Tbody>
              {jobs?.map((job) => {
                const createdAt = DateTime.fromJSDate(
                  new Date(job.created_at)
                ).toFormat("MMM. d, yyyy 'at' h:mm a");
                const createdDate = DateTime.fromJSDate(
                  new Date(job.created_at)
                ).toFormat('MMM. d, yyyy');
                return (
                  <Tr key={job.id}>
                    <Td>
                      <Tooltip hasArrow label={createdAt}>
                        {createdDate}
                      </Tooltip>
                    </Td>
                    <Td>
                      <StatusTag status={job.status!} />
                    </Td>
                    <Td isNumeric>{job.credits}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Stack>
    </Flex>
  );
}
