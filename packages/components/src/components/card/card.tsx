import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "bingo-card",
  styleUrl: "card.scss",
  shadow: false
})
export class Card {
  @Prop() public icon?: string;

  @Prop() public items: string;

  render() {
    const { items, icon, ...props } = this;
    const classes = {
      "bingo-card": true
    };

    return (
      <div class={classes} {...props}>
        {items.split(",").map(item => (
          <bingo-card-item>{item}</bingo-card-item>
        ))}
      </div>
    );
  }
}
