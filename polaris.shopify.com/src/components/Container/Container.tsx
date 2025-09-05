import { HTMLProps } from 'react';
import { className as classNameHelper } from '../../utils/various';
import styles from './Container.module.scss';

interface Props extends HTMLProps<HTMLDivElement> {
  fullWidth?: boolean;
}

function Container({ className, fullWidth, ...rest }: Props) {
  return (
    <div
      className={classNameHelper(styles.Container, className, fullWidth && styles.fullWidth)}
      {...rest}
    ></div>
  );
}

export default Container;
