import { Blank } from './style.js'

export function ButtonBlank({link, nameButton, iconComponent}) {
  return (
    <Blank href={link} target="_blank">{nameButton} {iconComponent}</Blank>
  )
}