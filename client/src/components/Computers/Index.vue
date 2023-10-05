<template>
    <div class="container">
        <h2 class="mb-3 fw-bold">Get All Computers</h2>
        <h4 class="mb-3">Computer Amount: {{ computers.length }}</h4>
        <div class="row row-cols-3 d-flex justify-content-center">
            <div v-for="computer in computers" v-bind:key="computer.id" style="width: 45rem"
                class="col border mb-3 mx-2 p-3 text-start">
                <div class="row p-2 mb-3">
                    <div class="col">
                        <label for="product" class="form-label">Product:</label>
                        <span class="input-group-text"> {{ computer.product }} </span>
                    </div>
                </div>
                <div class="row p-2 mb-3">
                    <div class="col-3">
                        <label for="brand" class="form-label">Brand:</label>
                        <span class="input-group-text"> {{ computer.brand }} </span>
                    </div>
                    <div class="col">
                        <label for="color" class="form-label">Color:</label>
                        <span class="input-group-text"> {{ computer.color }} </span>
                    </div>
                    <div class="col">
                        <label for="weight" class="form-label">Weight:</label>
                        <span class="input-group-text"> {{ computer.weight }} </span>
                    </div>
                </div>
                <button class="btn btn-primary" v-on:click="navigateTo('/computer/' + computer.id)">View</button>
                <div class="float-end">
                    <button class="btn btn-success" v-on:click="navigateTo('/computer/edit/' + computer.id)">Edit</button>
                    <button class="btn btn-danger" v-on:click="deleteComputer(computer)">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ComputersService from '@/services/ComputersService';
export default {
    data() {
        return {
            computers: []
        }
    },
    async created() {
        this.computers = (await ComputersService.index()).data
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        },
        async deleteComputer(computer) {
            let result = confirm("Wnat to delete?")
            if (result) {
                try {
                    await ComputersService.delete(computer)
                } catch (error) {
                    console.log(error)
                }
            }
        },
        async refreshData() {
            this.computers = (await ComputersService.index()).data
        }
    }
}
</script>
<style scoped></style>