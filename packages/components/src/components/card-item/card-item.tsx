import { Component, Prop, h, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "bingo-card-item",
  styleUrl: "card-item.scss",
  shadow: false
})
export class CardItem {
  @Prop() public isClickable: boolean = false;

  @Prop() public isSelected: boolean = false;

  @Event() onSelect: EventEmitter;

  render() {
    const { isClickable, isSelected, ...props } = this;
    const classes = {
      "bingo-card-item": true,
      "bingo-card-item--selected": isSelected
    };

    return (
      <div class={classes} {...props}>
        {isClickable ? (
          <button
            class="bingo-card-item__btn"
            type="button"
            onClick={() => this.onSelect.emit()}
          >
            <slot />
          </button>
        ) : (
          <span class="bingo-card-item__fixed">
            <slot />
          </span>
        )}
        <slot />
      </div>
    );
  }
}
