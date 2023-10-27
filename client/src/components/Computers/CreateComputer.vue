<template>
    <div>
        <header>
            <h1 class="mb-3 fw-bold pt-3">Create Computer</h1>
        </header>
        <div class="container-fluid">
            <div class="d-flex justify-content-center">
                <form v-on:submit.prevent="createComputer" class="row text-start my-3" style="width: 80rem;">
                    <div class="col ms-3">
                        <div class="mb-3">
                            <label for="product" class="form-label fw-bold">Product</label>
                            <input type="text" v-model="computer.product" class="form-control" placeholder="Enter a Product"
                                required>
                        </div>
                        <div class="row mb-3">
                            <div class="col">
                                <label for="brand" class="form-label fw-bold">Brand</label>
                                <input type="text" v-model="computer.brand" class="form-control" placeholder="Enter a Brand"
                                    required>
                            </div>
                            <div class="col">
                                <label for="price" class="form-label fw-bold">Price</label>
                                <input type="number" v-model="computer.price" class="form-control"
                                    placeholder="Enter a Price" required>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="processor" class="form-label fw-bold">Processor</label>
                            <input type="text" v-model="computer.processor" class="form-control"
                                placeholder="Enter a Processor" required>
                        </div>
                        <div class="mb-3">
                            <label for="display" class="form-label fw-bold">Display</label>
                            <input type="text" v-model="computer.display" class="form-control" placeholder="Enter a Display"
                                required>
                        </div>
                        <div class="mb-3">
                            <label for="memory" class="form-label fw-bold">Memory</label>
                            <input type="text" v-model="computer.memory" class="form-control" placeholder="Enter a Memory"
                                required>
                        </div>
                        <div class="mb-3">
                            <label for="storage" class="form-label fw-bold">Storage</label>
                            <input type="text" v-model="computer.storage" class="form-control" placeholder="Enter a Storage"
                                required>
                        </div>
                    </div>
                    <div class="col me-3">
                        <div class="mb-3">
                            <label for="graphics" class="form-label fw-bold">Graphics</label>
                            <input type="text" v-model="computer.graphics" class="form-control"
                                placeholder="Enter a Graphics" required>
                        </div>
                        <div class="mb-3">
                            <label for="operation" class="form-label fw-bold">Operation</label>
                            <input type="text" v-model="computer.operation" class="form-control"
                                placeholder="Enter an Operation" required>
                        </div>
                        <div class="mb-3">
                            <label for="camera" class="form-label fw-bold">Camera</label>
                            <input type="text" v-model="computer.camera" class="form-control" placeholder="Enter a Camera"
                                required>
                        </div>
                        <div class="mb-3">
                            <label for="wireless" class="form-label fw-bold">Wireless</label>
                            <input type="text" v-model="computer.wireless" class="form-control"
                                placeholder="Enter a Wireless" required>
                        </div>
                        <div class="row mb-3">
                            <div class="col">
                                <label for="color" class="form-label fw-bold">Color</label>
                                <input type="text" v-model="computer.color" class="form-control" placeholder="Enter a Color"
                                    required>
                            </div>
                            <div class="col">
                                <label for="weight" class="form-label fw-bold">Weight</label>
                                <input type="text" v-model="computer.weight" class="form-control"
                                    placeholder="Enter a Weight" required>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3 ms-3 d-flex justify-content-start">
                        <button type="submit" class="btn btn-success me-2">Create</button>
                        <a @click="$router.back()" class="btn btn-danger">Go Back</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import ComputersService from '@/services/ComputersService'

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
                weight: '',
                price: ''
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