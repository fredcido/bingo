import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "bingo-button",
  styleUrl: "button.scss",
  shadow: false
})
export class Button {
  /**
   * URL for the anchor to point to
   */
  @Prop() public href;

  /**
   * Button variation
   */
  @Prop() public variation?: "primary" | "link" | "success" | "error";

  /**
   * Button size
   */
  @Prop() public size?: "big" | "small" | "block";

  render() {
    const { variation, size, ...props } = this;
    const Tag = this.href ? "a" : "button";
    const classes = {
      btn: true,
      [`btn-${variation}`]: Boolean(variation),
      "btn-sm": size === "small",
      "btn-lg": size === "big",
      "btn-block": size === "block",
      "btn-link": Tag === "a"
    };

    return (
      <Tag class={classes} {...props}>
        <slot />
      </Tag>
    );
  }
}
