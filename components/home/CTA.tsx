import { ChevronDown, Maximize } from "tabler-icons-react"
import { Card, Group, Button, Text, createStyles } from "@mantine/core"

const useStyles = createStyles(theme => ({
  info: {
    color: theme.colors.gray[0],
    backgroundColor: theme.colors.blue[5],
  }
}))

export const CTA = () => {
  const { classes } = useStyles()

  return (
    <Card shadow="sm" p="lg" radius="lg" withBorder pb={0}>
      <Card.Section className={classes.info} px={20} py={20}>
        <Text size="lg" weight="bold" mb={0}>Entering Public Place?</Text>
        <Text mt={0}>Stay alert to stay safe</Text>
      </Card.Section>
      <Group position='apart' py={15} align="center">
        <Button variant='white' color="dark" px={0}>
          <ChevronDown />
          <Text pl={10} weight={200}>Check-in preferences</Text>
        </Button>
        <Button variant="light" color="blue" radius={100}>
          <Maximize />
          <Text pl={10} weight={200}>Check-in</Text>
        </Button>
      </Group>
    </Card>
  )
}