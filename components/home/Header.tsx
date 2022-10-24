import { ActionIcon, Avatar, Group, Indicator } from '@mantine/core'
import { BellPlus } from 'tabler-icons-react'

export const Header = () => {
  return (
    <Group position='apart' my={20}>
      <Group>
        <Avatar color="cyan" radius="xl">AM</Avatar>
        Hi, Angela Meilani
      </Group>
      <ActionIcon>
        <Indicator >
          <BellPlus />
        </Indicator>
      </ActionIcon>
    </Group>
  )
}