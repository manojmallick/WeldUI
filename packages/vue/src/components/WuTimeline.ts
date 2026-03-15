import { defineComponent, h } from 'vue';
import '@weldui/core';

export const WuTimeline = defineComponent({
  name: 'WuTimeline',
  props: {
    direction: { type: String, default: 'vertical' },
  },
  setup(props, { slots }) {
    return () =>
      h(
        'wu-timeline',
        { direction: props.direction },
        slots.default?.()
      );
  },
});

export const WuTimelineItem = defineComponent({
  name: 'WuTimelineItem',
  props: {
    label: { type: String, default: undefined },
    timestamp: { type: String, default: undefined },
    status: { type: String, default: undefined },
  },
  setup(props, { slots }) {
    return () =>
      h(
        'wu-timeline-item',
        {
          label: props.label,
          timestamp: props.timestamp,
          status: props.status,
        },
        slots.default?.()
      );
  },
});
