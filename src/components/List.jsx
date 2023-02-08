import { Box, Flex, SkeletonCircle, SkeletonText } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import PlaceDetail from './PlaceDetail';


const List = ({isLoading, places}) => {
    if (isLoading) {
        return (
            <Flex
                direction={'column'}
                bg={'whiteAlpha.900'}
                width={'37vw'}
                height={'100vh'}
                position={"absolute"}
                left={0}
                top={0}
                overflow={'hidden'}
                px={2}
                zIndex={1}
            >
                <Box padding="6" boxShadow="lg" bg="white" mt={16}>
                    <SkeletonCircle size="10" />
                    <SkeletonText mt="4" noOfLines={4} spacing="4" />
                </Box>
                <Box padding="6" boxShadow="lg" bg="white" mt={3}>
                    <SkeletonCircle size="10" />
                    <SkeletonText mt="4" noOfLines={4} spacing="4" />
                </Box>
                <Box padding="6" boxShadow="lg" bg="white" mt={3}>
                    <SkeletonCircle size="10" />
                    <SkeletonText mt="4" noOfLines={4} spacing="4" />
                </Box>
                <Box padding="6" boxShadow="lg" bg="white" mt={3}>
                    <SkeletonCircle size="10" />
                    <SkeletonText mt="4" noOfLines={4} spacing="4" />
                </Box>
                <Box padding="6" boxShadow="lg" bg="white" mt={3}>
                    <SkeletonCircle size="10" />
                    <SkeletonText mt="4" noOfLines={4} spacing="4" />
                </Box>
            </Flex>
        )
    } else {
        return (
            <Flex
                direction={'column'}
                bg={'whiteAlpha.900'}
                width={'37vw'}
                height={'100vh'}
                position={"absolute"}
                left={0}
                top={0}
                overflow={'hidden'}
                px={2}
                zIndex={1}
            >
                <Flex
                    flex={1}
                    overflowY={'scroll'}
                    direction={'column'}
                    mt={16}
                >
                    {
                        ( places && Array.isArray(places) && places.length > 0 ) 
                        ?
                        places.map((place, idx) => <PlaceDetail place={place} key={idx} />)
                        :
                        ''
                    }
                </Flex>
            </Flex>
        )
    }
};

export default List;