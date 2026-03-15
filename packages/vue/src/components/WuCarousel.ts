import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuCarousel',
  props: {
    autoplay: { type: Boolean, default: false },
    interval: { type: Number, default: 3000 },
    loop: { type: Boolean, default: false },
    showDots: { type: Boolean, default: true },
    showArrows: { type: Boolean, default: true },
  },
  emits: ['wu-change'],
  setup(props, { slots, emit }) {
    return () =>
      h(
        'wu-carousel',
        {
          autoplay: props.autoplay || undefined,
          interval: props.interval,
          loop: props.loop || undefined,
          'show-dots': props.showDots || undefined,
          'show-arrows': props.showArrows || undefined,
          onWuchange: (e: CustomEvent) => emit('wu-change', e),
        },
        slots.default?.()
      );
  },
});
