export interface StepperStep {
  /**
   * Step title
   */
  title: string;

  /**
   * Step description
   */
  description?: string;

  /**
   * Step icon
   */
  icon?: string;

  /**
   * Step is optional
   */
  optional?: boolean;

  /**
   * Step has error
   */
  error?: boolean;

  /**
   * Custom error message
   */
  errorMessage?: string;
}

export type StepperOrientation = "horizontal" | "vertical";
export type StepperVariant = "default" | "outlined" | "simple";

export interface StepperProps {
  /**
   * Stepper steps
   */
  steps: StepperStep[];

  /**
   * Orientation
   * @default 'horizontal'
   */
  orientation?: StepperOrientation;

  /**
   * Variant style
   * @default 'default'
   */
  variant?: StepperVariant;

  /**
   * Allow clicking on steps to navigate
   * @default false
   */
  clickable?: boolean;

  /**
   * Show step numbers
   * @default true
   */
  showNumbers?: boolean;

  /**
   * Linear progression (must complete in order)
   * @default true
   */
  linear?: boolean;

  /**
   * Alternative label position (below icon for horizontal)
   * @default false
   */
  alternativeLabel?: boolean;
}
