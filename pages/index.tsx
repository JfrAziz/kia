import type { NextPage } from 'next'
import { useMediaQuery } from '@mantine/hooks'
import { Card, Group, Paper, ScrollArea, SimpleGrid, Text } from '@mantine/core'
import { BabyCarriage } from 'tabler-icons-react'
import { MenuIcon } from '../components/misc/MenuIcon'
import { HomeHeader, HomeCTA } from '../components/home'

const Home: NextPage = () => {
  const grid4 = useMediaQuery('(min-width: 400px)');

  return (
    <div>
      <HomeHeader />

      <HomeCTA />

      <Group grow my={30} align="center">
        <SimpleGrid cols={grid4 ? 4 : 2}>
          <MenuIcon color="yellow.4" text='Vaccine and Immunization' />
          <MenuIcon color="red.5" text='Covid-19 Test Result' />
          <MenuIcon color="green.4" text='Travel Regulation' />
          <MenuIcon color="yellow.4" text='Telemedicine' />
          <MenuIcon color="green.4" text='Healthcare Facility' />
          <MenuIcon color="red.5" text='Covid-19 Statistic' />
          <MenuIcon color="yellow.4" text='Find Hospital Bed' />
          <MenuIcon color="blue.4" text='Pregnancy Monitoring'>
            <BabyCarriage size={32} strokeWidth={1.5} />
          </MenuIcon>
        </SimpleGrid>
      </Group>

      <div>
        <Text weight="bold" size="lg" color="dark.4">Health Information</Text>
        <div>
        
        </div>
      </div>
    </div>
  )
}

export default Home
