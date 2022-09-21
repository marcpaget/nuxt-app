<script setup lang="ts">
    definePageMeta({
      middleware: ['auth'],
    })
 
    const email = ref('')
    const password = ref('')
    const isSignUp = ref(false)
    const client = useSupabaseClient()
    const signUp = async () => {
      const { user, error } = await client.auth.signUp({
        email: email.value,
        password: password.value,
      })
      console.log('user', user)
      console.log('error', error)
    }
    
    const login = async () => {
      const { user, error } = await client.auth.signIn({
        email: email.value,
        password: password.value,
      })
      console.log('user', user)
      console.log('error', error)
    }
    
    const user = useSupabaseUser()
    onMounted(() => {
      watchEffect(() => {
        if (user.value) {
          navigateTo('/notes')
        }
      })
   })
    </script>
    
    <template>
      <div>
        <form
          @submit.prevent="() => (isSignUp ? signUp() : login())"
          class="flex flex-col gap-2"
        >
          <input
            type="email"
            placeholder="Email"
            v-model="email"
            class="p-2 bg-gray-600 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            v-model="password"
            class="p-2 bg-gray-600 rounded"
          />
          <button type="submit" class="p-2 text-white bg-green-500 rounded">
            <span v-if="isSignUp"> Sign up </span>
            <span v-else> Log in </span>
          </button>
        </form>
        <button
          @click="isSignUp = !isSignUp"
          class="w-full mt-8 text-sm text-center underline text-slate-300"
        >
          <span v-if="isSignUp"> Have an account? Log in instead </span>
          <span v-else> Create a new account </span>
        </button>
      </div>
    </template>


<!--
<template>
    <main>
    <div>
<div v-if="" class="flex flex-col">
    <h2 class="text-2xl">Sign up / Sign In</h2>
    <input v-model="email" type="email" placeholder="Email" class="input input-bordered w-96">
    <button @click="signIn" class="btn btn-primary">Submit</button>
    </div>
    </div>
    </main>
</template>

<script>
    const supabase = useSupabase();

    const signIn = async () => {
        const { user, session, error } = await supabase.auth.signIn({
            email: email.value
        });    
    } { user, session, error } = await supabase.auth.signIn({
  email: 'example@email.com',
  password: 'example-password',
})
const { user, session, error } = await supabase.auth.signUp({
  email: 'example@email.com',
  password: 'example-password',
})
const { error } = await supabase.auth.signOut()
export default {
    setup() {
        
    },
}
</script>
-->