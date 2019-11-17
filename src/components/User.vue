<template>
    <div>
        {{ user.name }} <hr>
        {{ user.age }}
        {{ user.desc }}
        {{ user.city }}
    </div>
</template>

<script>
export default {
    name: 'User',
    props: ['user'],
    data() {
        return {
            
        }
    }
}
</script>