import * as React from 'react';

type Props = {
    label: string;
    disabled: boolean;
} & React.HTMLAttributes<HTMLButtonElement>;

const Button = ({ label, ...rest }: Props) => (
  // <Container {...rest}>{label}</Container>
   {label}
);

export default Button;
