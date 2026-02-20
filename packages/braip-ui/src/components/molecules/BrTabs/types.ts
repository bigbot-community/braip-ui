export interface TabItem {
  /**
   * Unique identifier
   */
  id: string | number;

  /**
   * Tab label
   */
  label: string;

  /**
   * Tab icon
   */
  icon?: string;

  /**
   * Tab content (for items prop usage)
   */
  content?: string;

  /**
   * Disabled state
   */
  disabled?: boolean;

  /**
   * Badge count
   */
  badge?: number | string;

  /**
   * Closable tab
   */
  closable?: boolean;
}

export type TabsVariant = "default" | "pills" | "underline" | "enclosed";
export type TabsSize = "sm" | "md" | "lg";

export interface TabsProps {
  /**
   * Tab items
   */
  items?: TabItem[];

  /**
   * Variant style
   * @default 'default'
   */
  variant?: TabsVariant;

  /**
   * Size
   * @default 'md'
   */
  size?: TabsSize;

  /**
   * Full width tabs
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Center tabs
   * @default false
   */
  centered?: boolean;

  /**
   * Vertical tabs
   * @default false
   */
  vertical?: boolean;

  /**
   * Grow tabs to fill space
   * @default false
   */
  grow?: boolean;

  /**
   * Show close button on tabs
   * @default false
   */
  closable?: boolean;

  /**
   * Lazy load tab content
   * @default true
   */
  lazy?: boolean;
}

export interface TabProps {
  /**
   * Tab identifier
   */
  id: string | number;

  /**
   * Tab label
   */
  label: string;

  /**
   * Tab icon
   */
  icon?: string;

  /**
   * Disabled state
   */
  disabled?: boolean;

  /**
   * Badge count
   */
  badge?: number | string;

  /**
   * Closable tab
   */
  closable?: boolean;
}

export interface TabPanelProps {
  /**
   * Associated tab id
   */
  tabId: string | number;

  /**
   * Lazy render content
   * @default true
   */
  lazy?: boolean;
}
