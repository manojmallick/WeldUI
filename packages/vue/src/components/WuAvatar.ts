import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuAvatar',
  props: {
    src:      { type: String, default: undefined },
    alt:      { type: String, default: undefined },
    initials: { type: String, default: undefined },
    size:     { type: String, default: 'md' },
  },
  setup(props) {
    return () =>
      h('wu-avatar', {
        src:      props.src,
        alt:      props.alt,
        initials: props.initials,
        size:     props.size,
      });
  },
});
