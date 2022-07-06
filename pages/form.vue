<script setup>
const inputTypes = ['button', 'checkbox', 'color', 'date', 'datetime-local', 'email', 'file', 'month', 'number', 'password', 'radio', 'range', 'search', 'select', 'submit', 'tel', 'text', 'textarea', 'time', 'url', 'week']
const inputOptions = {
  checkbox: ['I like Tailwind', 'I also like FormKit', 'I like other things too'],
  radio: ['I like Tailwind', 'I like FormKit', 'I like everything'],
  select: ['I like Tailwind', 'I like FormKit', 'I like everything'],
}
</script>

<template>
<section v-show="step === 'contactInfo'">
  <FormKit
    type="group"
    name="contactInfo"
  >
    <FormKit
      type="email"
      label="*Email address"
      validation="required|email"
    />
  </FormKit>
</section>
</template>