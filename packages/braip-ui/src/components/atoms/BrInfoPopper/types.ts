export type InfoPopperPosition = "left" | "right" | "bottom";

export interface InfoPopperProps {
  /**
   * Popper content message.
   */
  content: string;

  /**
   * Shows the default info icon trigger.
   * @default true
   */
  iconVisible?: boolean;

  /**
   * Default icon color.
   * @default 'var(--br-dark-700)'
   */
  colorIcon?: string;

  /**
   * Popper position relative to trigger.
   * @default 'right'
   */
  position?: InfoPopperPosition;

  /**
   * Popper width.
   * @default '250px'
   */
  width?: string;

  /**
   * Right offset when using left/bottom positions.
   * @default '50px'
   */
  popperRight?: string;

  /**
   * Left offset when using right position.
   * @default '50px'
   */
  popperLeft?: string;
}
