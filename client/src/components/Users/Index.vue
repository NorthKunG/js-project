<template>
    <div class="container">
        <p><button v-on:click="logout">Logout</button></p>
        <h2 class="mb-3">Get All Users</h2>
        <h4 class="mb-3">จำนวนผู้ใช้งาน {{ users.length }}</h4>
        <div class="row row-cols-3 d-flex justify-content-center">
            <div v-for="user in users" v-bind:key="user.id" style="width: 25rem"
                class="col border mb-3 mx-2 p-3 text-start">
                <div class="mb-3">
                    <label for="ID" class="form-label">ID:</label>
                    <span class="input-group-text"> {{ user.id }} </span>
                </div>
                <div class="mb-3">
                    <div class="row row-cols-2">
                        <div class="col">
                            <label for="fistname" class="form-label">ชิ่อ</label>
                            <span class="input-group-text">{{ user.name }}</span>
                        </div>
                        <div class="col">
                            <label for="fistname" class="form-label">นามสกุล</label>
                            <span class="input-group-text">{{ user.lastname }}</span>
                        </div>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="email">Email</label>
                    <span class="input-group-text">{{ user.email }}</span>
                </div>
                <div class="mb-3">
                    <label for="password">Password</label>
                    <span class="input-group-text">{{ user.password }}</span>
                </div>
                <div>
                    <button class="btn btn-primary" v-on:click="navigateTo('/user/' + user.id)">View</button>
                    <button class="btn btn-danger float-end" v-on:click="deleteUser(user)">Delete</button>
                    <button class="btn btn-success float-end mx-2"
                        v-on:click="navigateTo('/user/edit/' + user.id)">Edit</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import UsersService from '@/services/UsersService';
export default {
    data() {
        return {
            users: []
        }
    },
    async created() {
        this.users = (await UsersService.index()).data
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        },
        async deleteUser(user) {
            let result = confirm("Wnat to delete?")
            if (result) {
                try {
                    await UsersService.delete(user)
                    this.refreshData();
                } catch (error) {
                    console.log(error)
                }
            }
        },
        async refreshData() {
            this.users = (await UsersService.index()).data
        },
    }
}
</script>
<style scoped></style>