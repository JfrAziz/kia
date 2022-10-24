import { ActionIcon, ActionIconProps, Stack, Text } from "@mantine/core"
import { PropsWithChildren } from "react"

interface MenuIconProps extends ActionIconProps, PropsWithChildren {
  text: string
}

export const MenuIcon = ({ text,children , ...otherProps }: MenuIconProps) => {
  return (
    <Stack align="center">
      <ActionIcon variant='filled' size={64} radius="md" {...otherProps}>
        {children}
      </ActionIcon>
      <Text size="xs" align="center">
        {text}
      </Text>
    </Stack>
  )
}