<template>
  <div>
    <h1>Sample Vue</h1>
  </div>
</template>
<script>
  export default {
    name: 'sample',
    props: {
      id: {
        type: String,
        required: true
      },

      options: {
        type: Object,
        default: () => ({
          type: 'test'
        })
      }
    },
    data() {
      return {};
    },

    methods: {
      getOption() {
        switch (this.options.test) {
          default:
            return 'No hello';

          case 'test':

            return 'hello world';
        }
      }
    }
  };
</script>
