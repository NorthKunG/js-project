<template>
    <div>
        <header>
            <h1 class="mb-3 fw-bold pt-3">Show Computer</h1>
        </header>
        <div class="container-fluid">
            <div class="row d-flex justify-content-center">
                <div class="col">
                    <div class="row mb-3">
                        <div class="col-1">
                            <label for="id" class="form-label fw-bold">ID</label>
                            <span class="form-control">{{ computer.id }}</span>
                        </div>
                        <div class="col">
                            <label for="product" class="form-label fw-bold">Product</label>
                            <span class="form-control">{{ computer.product }}</span>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col">
                            <label for="brand" class="form-label fw-bold">Brand</label>
                            <span class="form-control">{{ computer.brand }}</span>
                        </div>
                        <div class="col">
                            <label for="price" class="form-label fw-bold">Price</label>
                            <span class="form-control" placeholder="Enter a Price" required>฿{{ computer.price }}</span>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="processor" class="form-label fw-bold">Processor</label>
                        <span class="form-control">{{ computer.processor }}</span>
                    </div>
                    <div class="mb-3">
                        <label for="display" class="form-label fw-bold">Display</label>
                        <span class="form-control">{{ computer.display }}</span>
                    </div>
                    <div class="mb-3">
                        <label for="memory" class="form-label fw-bold">Memory</label>
                        <span class="form-control">{{ computer.memory }}</span>
                    </div>
                    <div class="mb-3">
                        <label for="storage" class="form-label fw-bold">Storage</label>
                        <span class="form-control">{{ computer.storage }}</span>
                    </div>
                </div>
                <div class="col">
                    <div class="mb-3">
                        <label for="graphics" class="form-label fw-bold">Graphics</label>
                        <span class="form-control">{{ computer.graphics }}</span>
                    </div>
                    <div class="mb-3">
                        <label for="operation" class="form-label fw-bold">Operation</label>
                        <span class="form-control">{{ computer.operation }}</span>
                    </div>
                    <div class="mb-3">
                        <label for="camera" class="form-label fw-bold">Camera</label>
                        <span class="form-control">{{ computer.camera }}</span>
                    </div>
                    <div class="mb-3">
                        <label for="wireless" class="form-label fw-bold">Wireless</label>
                        <span class="form-control">{{ computer.wireless }}</span>
                    </div>
                    <div class="row mb-3">
                        <div class="col">
                            <label for="color" class="form-label fw-bold">Color</label>
                            <span class="form-control">{{ computer.color }}</span>
                        </div>
                        <div class="col">
                            <label for="weight" class="form-label fw-bold">Weight</label>
                            <span class="form-control">{{ computer.weight }}</span>
                        </div>
                    </div>
                </div>
                <div class="my-3 d-flex justify-content-start">
                    <a @click="$router.back()" class="btn btn-danger">Go Back</a>
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
            computer: null
        }
    },
    async created() {
        try {
            let computerId = this.$route.params.computerId
            this.computer = (await ComputersService.show(computerId)).data
        } catch (error) {
            console.log(error)
        }
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        },
    }

}
</script>
<style scoped></style>