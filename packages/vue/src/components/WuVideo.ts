import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuVideo',
  props: {
    src: { type: String, default: undefined },
    poster: { type: String, default: undefined },
    autoplay: { type: Boolean, default: false },
    loop: { type: Boolean, default: false },
    muted: { type: Boolean, default: false },
    controls: { type: Boolean, default: true },
  },
  emits: ['wu-play', 'wu-pause', 'wu-ended'],
  setup(props, { emit }) {
    return () =>
      h('wu-video', {
        src: props.src,
        poster: props.poster,
        autoplay: props.autoplay || undefined,
        loop: props.loop || undefined,
        muted: props.muted || undefined,
        controls: props.controls || undefined,
        onWuplay: (e: CustomEvent) => emit('wu-play', e),
        onWupause: (e: CustomEvent) => emit('wu-pause', e),
        onWuended: (e: CustomEvent) => emit('wu-ended', e),
      });
  },
});
