import styles from '../app/tw.module.css'

export const tw = (classes: string) => classes
  .split(' ')
  .map(className => styles[className])
  .join(' ')
