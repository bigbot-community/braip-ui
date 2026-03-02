export interface IconProps {
  /**
   * Icon name
   */
  name: string;

  /**
   * Defines whether the icon will be filled.
   * @default false
   */
  filled?: boolean;

  /**
   * Icon width
   * @defatul '24px'
   */
  width?: string | number;

  /**
   * Icon height
   * @defatul '24px'
   */
  height?: string | number;

  /**
   * Icon color
   */
  currentColor?: string;
}
