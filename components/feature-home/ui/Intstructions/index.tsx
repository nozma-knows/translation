import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';

interface Props {}

const Instructions: FC<Props> = () => {
  const title = `How it works`;
  const subtitle = `Transform any video to speak your language, with perfectly matched lip movements. `;

  const steps = [
    {
      title: `Choose Your Video`,
      description: `Drag and drop your chosen video file into the app, or paste the URL of the video you wish to translate. Our platform supports a variety of formats for your convenience.`
    },
    {
      title: `Select Your Language`,
      description: `Browse through our extensive list of languages and pick the one you need. From common tongues to rare dialects, find the voice of your message.`
    },
    {
      title: `Sync and Create`,
      description: `Hit the 'Create' button and watch the magic happen. Our advanced AI will not only translate the audio but will also sync the speakers' lips to your new audio seamlessly.`
    },
    {
      title: `Download and Share`,
      description: `Once the video is ready, download it to your device or share it directly from the app. Spread your message far and wide, in any language, with complete lip-sync harmony.`
    }
  ];

  return (
    <Flex bg="whiteAlpha.100" rounded="md">
      <Stack
        w="full"
        gap={8}
        px="8"
        py="16"
        alignItems={'center'}
        textColor={'white'}
      >
        <Stack alignItems={'center'} gap={4}>
          <Text fontSize="5xl" fontWeight="bold">
            {title}
          </Text>
          <Text fontSize="lg" color="gray.50">
            {subtitle}
          </Text>
        </Stack>
        <Stack w="full" gap={8}>
          {steps.map(({ title, description }, index) => {
            return (
              <Stack key={title} w="full" px={8} gap={8}>
                <Flex alignItems={'center'} fontWeight="bold" gap={4}>
                  <Flex
                    w="12"
                    h="12"
                    rounded="md"
                    justifyContent={'center'}
                    alignItems={'center'}
                    bg="whiteAlpha.200"
                  >
                    <Text fontSize="2xl">{index + 1}</Text>
                  </Flex>
                  <Text fontSize="lg">{title}</Text>
                </Flex>
                <Stack px={16} gap={8}>
                  <Box w="full" h={80} bg="whiteAlpha.200" rounded={'md'} />
                  <Text>{description}</Text>
                </Stack>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Instructions;
