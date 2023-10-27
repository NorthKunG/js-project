<template>
    <div>
        <header>
            <h1 class="mb-3 fw-bold pt-3">All Computers</h1>
        </header>
        <div class="container-fluid">
            <h3 class="my-3 fw-bold text-secondary">Computer Amount: {{ computers.length }}</h3>
            <button class="btn btn-warning my-3 fw-bold" v-on:click="navigateTo('/computer/create/')">Create
                Computer</button>
            <div class="row row-cols-2 d-flex justify-content-center fw-bold my-3">
                <div v-for="computer in computers" v-bind:key="computer.id" style="width: 45rem"
                    class="col border mb-3 mx-3 p-3 text-start bg-light rounded-3">
                    <div class="row mb-3">
                        <div class="col-1">
                            <label for="brand" class="form-label">ID:</label>
                            <span class="form-control"> {{ computer.id }} </span>
                        </div>
                        <div class="col">
                            <label for="product" class="form-label">Product:</label>
                            <span class="form-control"> {{ computer.product }} </span>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col">
                            <label for="brand" class="form-label">Brand:</label>
                            <span class="form-control"> {{ computer.brand }} </span>
                        </div>
                        <div class="col-3">
                            <label for="brand" class="form-label">Price:</label>
                            <span class="form-control"> ฿{{ computer.price }} </span>
                        </div>
                    </div>
                    <button class="btn btn-primary" v-on:click="navigateTo('/computer/' + computer.id)">View</button>
                    <div class="float-end">
                        <button class="btn btn-success"
                            v-on:click="navigateTo('/computer/edit/' + computer.id)">Edit</button>
                        <button class="btn btn-danger" v-on:click="deleteComputer(computer)">Delete</button>
                    </div>
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
                    this.refreshData()
                } catch (error) {
                    console.log(error)
                }
            }
        },
        async refreshData() {
            this.computers = (await ComputersService.index()).data
        },
        async back() {
            this.$router.back();
        }
    }
}
</script>
<style scoped></style>