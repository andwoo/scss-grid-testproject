import * as React from 'react';

interface ItemTextProps {
  text: string,
  style?: React.CSSProperties
}

const textClass = "container__item__text"

export const ItemText = ({ text, style }: ItemTextProps): JSX.Element => {
  return <p className={textClass} style={style}>{text}</p>;
}