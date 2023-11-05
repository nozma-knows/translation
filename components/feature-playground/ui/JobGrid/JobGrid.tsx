import JobGridItem from './JobGridItem';
import { Database } from '@/types_db';
import { Flex, Grid } from '@chakra-ui/react';
import { FC } from 'react';

type Job = Database['public']['Tables']['jobs']['Row'];

interface Props {
  jobs: Job[];
}

const JobGrid: FC<Props> = ({ jobs }) => {
  return (
    <Flex w="full">
      <Grid
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)'
        ]}
        gap={4}
        w={'100%'}
      >
        {jobs.map((job: Job) => {
          return <JobGridItem key={job.id} job={job} />;
        })}
      </Grid>
    </Flex>
  );
};

export default JobGrid;
