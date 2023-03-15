<script>
import { defineComponent } from 'vue';
import { Codemirror } from 'vue-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { oneDark } from '@codemirror/theme-one-dark';
import { basicSetup } from 'codemirror';
import { keymap } from '@codemirror/view';

export default defineComponent({
  components: {
    Codemirror
  },
  setup() {
    const code = ref(`<p>hello world</p>`);
    const demoSrc = ref('');
    const extensions = [
      html(),
      oneDark,
      basicSetup,
      keymap.of([
        {
          key: 'Control-s',
          run() {
            demoSrc.value = code.value;
            return true;
          }
        }
      ])
    ];

    // Codemirror EditorView instance ref
    const view = shallowRef();
    const handleReady = payload => {
      view.value = payload.view;
    };

    // Status is available at all times via Codemirror EditorView
    const getCodemirrorStates = () => {
      const state = view.value.state;
      const ranges = state.selection.ranges;
      const selected = ranges.reduce(
        (r, range) => r + range.to - range.from,
        0
      );
      const cursor = ranges[0].anchor;
      const length = state.doc.length;
      const lines = state.doc.lines;
      // more state info ...
      // return ...
    };

    return {
      code,
      demoSrc,
      extensions,
      handleReady,
      log: console.log
    };
  }
});
</script>

<template>
  <div grid grid-rows-2 h-full>
    <Codemirror
      v-model="code"
      placeholder="Code goes here..."
      :style="{ height: 'full' }"
      :autofocus="false"
      :indent-with-tab="true"
      :tab-size="2"
      :extensions="extensions"
      @ready="handleReady"
    />
    <div v-html="code"></div>
  </div>
</template>
