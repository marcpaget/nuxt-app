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