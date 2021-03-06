/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";

export namespace Components {
  interface BingoButton {
    /**
     * URL for the anchor to point to
     */
    href: any;
    /**
     * Button size
     */
    size?: "big" | "small" | "block";
    /**
     * Button variation
     */
    variation?: "primary" | "link" | "success" | "error";
  }
  interface BingoCard {
    icon?: string;
    items: string;
  }
  interface BingoCardItem {
    isClickable: boolean;
    isSelected: boolean;
  }
  interface MyComponent {
    /**
     * The first name
     */
    first: string;
    /**
     * The last name
     */
    last: string;
    /**
     * The middle name
     */
    middle: string;
  }
}

declare global {
  interface HTMLBingoButtonElement
    extends Components.BingoButton,
      HTMLStencilElement {}
  var HTMLBingoButtonElement: {
    prototype: HTMLBingoButtonElement;
    new (): HTMLBingoButtonElement;
  };

  interface HTMLBingoCardElement
    extends Components.BingoCard,
      HTMLStencilElement {}
  var HTMLBingoCardElement: {
    prototype: HTMLBingoCardElement;
    new (): HTMLBingoCardElement;
  };

  interface HTMLBingoCardItemElement
    extends Components.BingoCardItem,
      HTMLStencilElement {}
  var HTMLBingoCardItemElement: {
    prototype: HTMLBingoCardItemElement;
    new (): HTMLBingoCardItemElement;
  };

  interface HTMLMyComponentElement
    extends Components.MyComponent,
      HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };
  interface HTMLElementTagNameMap {
    "bingo-button": HTMLBingoButtonElement;
    "bingo-card": HTMLBingoCardElement;
    "bingo-card-item": HTMLBingoCardItemElement;
    "my-component": HTMLMyComponentElement;
  }
}

declare namespace LocalJSX {
  interface BingoButton {
    /**
     * URL for the anchor to point to
     */
    href?: any;
    /**
     * Button size
     */
    size?: "big" | "small" | "block";
    /**
     * Button variation
     */
    variation?: "primary" | "link" | "success" | "error";
  }
  interface BingoCard {
    icon?: string;
    items?: string;
  }
  interface BingoCardItem {
    isClickable?: boolean;
    isSelected?: boolean;
    onOnSelect?: (event: CustomEvent<any>) => void;
  }
  interface MyComponent {
    /**
     * The first name
     */
    first?: string;
    /**
     * The last name
     */
    last?: string;
    /**
     * The middle name
     */
    middle?: string;
  }

  interface IntrinsicElements {
    "bingo-button": BingoButton;
    "bingo-card": BingoCard;
    "bingo-card-item": BingoCardItem;
    "my-component": MyComponent;
  }
}

export { LocalJSX as JSX };

declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      "bingo-button": LocalJSX.BingoButton &
        JSXBase.HTMLAttributes<HTMLBingoButtonElement>;
      "bingo-card": LocalJSX.BingoCard &
        JSXBase.HTMLAttributes<HTMLBingoCardElement>;
      "bingo-card-item": LocalJSX.BingoCardItem &
        JSXBase.HTMLAttributes<HTMLBingoCardItemElement>;
      "my-component": LocalJSX.MyComponent &
        JSXBase.HTMLAttributes<HTMLMyComponentElement>;
    }
  }
}
