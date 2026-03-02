export interface AccordionItem {
  /**
   * Unique identifier
   */
  id: string | number;

  /**
   * Item title
   */
  title: string;

  /**
   * Item content (can be HTML string or used with slot)
   */
  content?: string;

  /**
   * Icon to display before title
   */
  icon?: string;

  /**
   * Disabled state
   */
  disabled?: boolean;
}

export interface AccordionProps {
  /**
   * Accordion items
   */
  items?: AccordionItem[];

  /**
   * Allow multiple items to be open
   * @default false
   */
  multiple?: boolean;

  /**
   * Variant style
   * @default 'default'
   */
  variant?: "default" | "bordered" | "separated";

  /**
   * Icon position
   * @default 'right'
   */
  iconPosition?: "left" | "right";

  /**
   * Disable all items
   * @default false
   */
  disabled?: boolean;
}

export interface AccordionItemProps {
  /**
   * Item title
   */
  title: string;

  /**
   * Unique identifier
   */
  id?: string | number;

  /**
   * Icon to display
   */
  icon?: string;

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;

  /**
   * Open state (controlled)
   */
  open?: boolean;
}
