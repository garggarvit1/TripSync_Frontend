import React from 'react'
import {
  Box,
  ButtonGroup,
  Flex,
  HStack,
  Skeleton,
} from '@chakra-ui/react'

const MapLoader = () => {
  return (
    <>
      <Flex
        position='relative'
        flexDirection='column'
        alignItems='center'
        h='90vh'
        w='100%'
      >
        <Box position='absolute' left={0} top={0} h='100%' w='100%'>
          <Skeleton 
            height="100%" 
            startColor="gray.200" 
            endColor="gray.500" 
            speed={1.5}
          />
        </Box>
        <Box
          display='flex'
          zIndex='1'
          flexDirection='column'
          gap={6}
          bg='white'
          borderRadius={15}
          p={5}
          position='relative'
          bottom={110}
          width={['90%', '75%']}
          flexWrap='wrap'
          border='2px solid rgba(0, 0, 0, 0.2)'
        >
          <HStack 
            display='flex'
            flexWrap='wrap'
            justifyContent='space-between'
            alignItems='center'
          >
            <Box 
              display='flex' 
              alignItems='center' 
              gap='1rem'
              border='2px solid rgba(0, 0, 0, 0.2)'
              borderRadius='1rem'
              padding='1rem'
            >
              <Skeleton 
                height="20px" 
                width="20px" 
                startColor="gray.200" 
                endColor="gray.500" 
                speed={1.5}
              />
              <Skeleton 
                height="20px" 
                width="100px" 
                startColor="gray.200" 
                endColor="gray.500" 
                speed={1.5}
              />
            </Box>
            <Box 
              display='flex' 
              alignItems='center' 
              gap='1rem'
              border='2px solid rgba(0, 0, 0, 0.2)'
              borderRadius='1rem'
              padding='1rem'
            >
              <Skeleton 
                height="20px" 
                width="20px" 
                startColor="gray.200" 
                endColor="gray.500" 
                speed={1.5}
              />
              <Skeleton 
                height="20px" 
                width="100px" 
                startColor="gray.200" 
                endColor="gray.500" 
                speed={1.5}
              />
            </Box>
            <ButtonGroup
              backgroundColor='hsl(var(--primary) / 0.9)'
              color='white'
              padding='0.8rem'
              borderRadius='0.5rem'
              display='flex'
              gap='1rem'
            >
              <Skeleton 
                height="20px" 
                width="100px" 
                startColor="gray.200" 
                endColor="gray.500" 
                speed={1.5}
              />
              <Skeleton 
                height="20px" 
                width="20px" 
                startColor="gray.200" 
                endColor="gray.500" 
                speed={1.5}
              />
            </ButtonGroup>
          </HStack>
          <HStack spacing={4} mt={5} justifyContent='space-around'>
            <Box 
              display='flex' 
              alignItems='center' 
              gap='1rem'
              borderBottom='2px solid rgba(0, 0, 0, 0.2)'
              padding='1rem'
            >
              <Skeleton 
                height="20px" 
                width="150px" 
                startColor="gray.200" 
                endColor="gray.500" 
                speed={1.5}
              />
            </Box>
            <Box 
              display='flex' 
              alignItems='center' 
              gap='1rem'
              borderBottom='2px solid rgba(0, 0, 0, 0.2)'
              padding='1rem'
            >
              <Skeleton 
                height="20px" 
                width="150px" 
                startColor="gray.200" 
                endColor="gray.500" 
                speed={1.5}
              />
            </Box>
          </HStack>
        </Box>
      </Flex>
    </>
  )
}

export default MapLoader
