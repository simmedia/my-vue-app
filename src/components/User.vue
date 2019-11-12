<template>
    <div>
        {{ userDetails.name }} <hr>
        {{ userDetails.age }}
        {{ userDetails.desc }}
        {{ userDetails.city }}
    </div>
</template>

<script>
export default {
    name: 'User',
    props: ['user'],
    data() {
        return {
            userDetails: {}
        }
    },
    created() {
            this.userDetails = this.user   
    }
}
</script>