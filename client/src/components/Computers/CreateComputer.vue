<template>
    <div class="container">
        <h1>Create Computer</h1>
        <form v-on:submit.prevent="createComputer" class="border p-3 row row-cols-2">
            <div class="col">
                <div class="mb-3 mx-3">
                    <label for="product" class="form-label fw-bold">Product</label>
                    <input type="text" v-model="computer.product" class="form-control">
                </div>
                <div class="mb-3 mx-3">
                    <label for="product" class="form-label fw-bold">Brand</label>
                    <input type="text" v-model="computer.brand" class="form-control">
                </div>
                <div class="mb-3 mx-3">
                    <label for="product" class="form-label fw-bold">Processor</label>
                    <input type="text" v-model="computer.processor" class="form-control">
                </div>
                <div class="mb-3 mx-3">
                    <label for="product" class="form-label fw-bold">Display</label>
                    <input type="text" v-model="computer.display" class="form-control">
                </div>
                <div class="mb-3 mx-3">
                    <label for="product" class="form-label fw-bold">Memory</label>
                    <input type="text" v-model="computer.memory" class="form-control">
                </div>
                <div class="mb-3 mx-3">
                    <label for="product" class="form-label fw-bold">Storage</label>
                    <input type="text" v-model="computer.storage" class="form-control">
                </div>
            </div>
            <div class="col">
                <div class="mb-3 mx-3">
                    <label for="product" class="form-label fw-bold">Graphics</label>
                    <input type="text" v-model="computer.graphics" class="form-control">
                </div>
                <div class="mb-3 mx-3">
                    <label for="product" class="form-label fw-bold">Operation</label>
                    <input type="text" v-model="computer.operation" class="form-control">
                </div>
                <div class="mb-3 mx-3">
                    <label for="product" class="form-label fw-bold">Camera</label>
                    <input type="text" v-model="computer.camera" class="form-control">
                </div>
                <div class="mb-3 mx-3">
                    <label for="product" class="form-label fw-bold">Wireless</label>
                    <input type="text" v-model="computer.wireless" class="form-control">
                </div>
                <div class="mb-3 mx-3">
                    <label for="product" class="form-label fw-bold">Color</label>
                    <input type="text" v-model="computer.color" class="form-control">
                </div>
                <div class="mb-3 mx-3">
                    <label for="product" class="form-label fw-bold">Weight</label>
                    <input type="text" v-model="computer.weight" class="form-control">
                </div>
            </div>
            <p><button type="submit">create user</button></p>
        </form>
    </div>
</template>
<script>
import ComputersService from '../../services/ComputersService'

export default {
    data() {
        return {
            computer: {
                product: '',
                brand: '',
                processor: '',
                display: '',
                memory: '',
                storage: '',
                graphics: '',
                operation: '',
                camera: '',
                wireless: '',
                color: '',
                weight: ''
            }
        }
    },
    methods: {
        async createComputer() {
            try {
                await ComputersService.post(this.computer)
                this.$router.push({
                    name: 'computers'
                })
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>
<style scoped></style>