import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  SkeletonText,
  Text,
} from '@chakra-ui/react'
import { FaLocationArrow, FaTimes } from 'react-icons/fa'
import MapLoader from './MapLoader'
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api'
import { useRef, useState } from 'react'
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import { GiPathDistance } from "react-icons/gi";
import { GiDuration } from "react-icons/gi";
import { MdCalculate } from "react-icons/md";
import { Calculate } from '@mui/icons-material';

const center = { lat: 48.8584, lng: 2.2945 }

const GoogleMaps  = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyDmwl1Pg5f-MRiFrMS8nTkTT5Hx3BzopOE',
    libraries: ['places'],
  })

  const [map, setMap] = useState(/** @type google.maps.Map */ (null))
  const [directionsResponse, setDirectionsResponse] = useState(null)
  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef()

  if (!isLoaded) {
    return <MapLoader/>
  }

  async function calculateRoute() {
    if (originRef.current.value === '' || destiantionRef.current.value === '') {
      return
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    })
    setDirectionsResponse(results)
    setDistance(results.routes[0].legs[0].distance.text)
    setDuration(results.routes[0].legs[0].duration.text)
  }

  function clearRoute() {
    setDirectionsResponse(null)
    setDistance('')
    setDuration('')
    originRef.current.value = ''
    destiantionRef.current.value = ''
  }

  return (
    <Flex
      position='relative'
      flexDirection='column'
      alignItems='center'
      h='90vh'
      w='100%'
    >
      
      <Box position='absolute' left={0} top={0} h='100%' w='100%'>
        {/* Google Map Box */}
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={map => setMap(map)}
        >
          <Marker position={center} />
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </Box>
      

      <Box
        display='flex'
        zIndex='1'
        flexDirection='column'
        gap={25}
        bg='white'
        borderRadius={15}
        p={20}
        position='relative'
        bottom={61}
        width={['90%', '80%']} 
        border='2px solid rgb(0,0,0,0.2)'      
      >

        
        <HStack 
          display='flex'
          flexWrap='wrap'
          justifyContent='space-between'
          alignItems='center'
        >
          <Box 
            display='flex' alignItems='center' gap='1rem'
            border='2px solid rgb(0,0,0,0.2)'
            borderRadius='1rem'
            padding='1rem'
            >
            <FaLocationCrosshairs fontSize={25} />
            <Autocomplete>
              <Input type='text' placeholder='Origin' ref={originRef} 
                fontSize='1.3rem'
                outline='none'
                width="60%"
                />
            </Autocomplete>
          </Box>
          <Box 
            display='flex' alignItems='center' gap='1rem'
            border='2px solid rgb(0,0,0,0.2)'
            borderRadius='1rem'
            padding='1rem'
            >
            <FaMapLocationDot   fontSize={25} />
            <Autocomplete>
              <Input
              type='text'
              fontSize='1.3rem'
              outline='none'
              width="100%"
              placeholder='Destination'
              ref={destiantionRef}
              />
            </Autocomplete>
          </Box>

          <ButtonGroup
            display='flex'
            alignItems="center"
          >

            <Button
              padding='0.8rem'
              backgroundColor='hsl(var(--primary) / 0.9)'
               fontSize='1.3rem' 
                type='submit' 
                borderRadius='0.5rem'
                color="white"
                _active={{
                  bg: "gray.200", 
                  borderColor: "gray.400", 
                  transform: "scale(.9)", 
                }}
                transition="0.2s"
                onClick={calculateRoute} >
                  
            <Calculate />
              Calculate Route
            </Button>
            <IconButton
              aria-label='center back'
              icon={<FaTimes />}
              border="2px solid rgb(0,0,0,0.2)"
              borderRadius={5}
              fontSize={25}
              padding="0.8rem"
              onClick={clearRoute}
              _active={{
                bg: "gray.200", 
                borderColor: "gray.400", 
                transform: "scale(.9)", 
              }}
            />
          </ButtonGroup>
        </HStack>
        <HStack spacing={4} mt={5} justifyContent='space-around' flexWrap="wrap">
          <Box display='flex' alignItems='center' gap='1rem'
            borderBottom='2px solid rgb(0,0,0,0.2)'
            padding='1rem'>
            <GiPathDistance />
            <Text  fontSize='1.3rem' >Distance: <b>{distance} </b> </Text>
          </Box>
          <Box display='flex' alignItems='center' gap='1rem'
            borderBottom='2px solid rgb(0,0,0,0.2)'
            padding='1rem'>
          <GiDuration/>
          <Text fontSize='1.3rem'>Duration: <b>{duration}</b>  </Text>
          </Box>
        </HStack>
      </Box>
    </Flex>
  )
}

export default GoogleMaps;