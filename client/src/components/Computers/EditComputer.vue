<template>
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col me-2">
                <form v-on:submit.prevent="editComputer" class="row text-start bg-light" style="width: 34rem;">
                    <h1 class="text-center fw-bold mb-2 mt-2">Edit Computer</h1>
                    <hr>
                    <div class="col">
                        <div class="mb-3 mx-3">
                            <label for="product" class="form-label fw-bold">Product</label>
                            <input type="text" v-model="computer.product" class="form-control" placeholder="Enter a Product"
                                required>
                        </div>
                        <div class="mb-3 mx-3">
                            <label for="brand" class="form-label fw-bold">Brand</label>
                            <input type="text" v-model="computer.brand" class="form-control" placeholder="Enter a Brand"
                                required>
                        </div>
                        <div class="mb-3 mx-3">
                            <label for="processor" class="form-label fw-bold">Processor</label>
                            <input type="text" v-model="computer.processor" class="form-control"
                                placeholder="Enter a Processor" required>
                        </div>
                        <div class="mb-3 mx-3">
                            <label for="display" class="form-label fw-bold">Display</label>
                            <input type="text" v-model="computer.display" class="form-control" placeholder="Enter a Display"
                                required>
                        </div>
                        <div class="mb-3 mx-3">
                            <label for="memory" class="form-label fw-bold">Memory</label>
                            <input type="text" v-model="computer.memory" class="form-control" placeholder="Enter a Memory"
                                required>
                        </div>
                        <div class="mb-3 mx-3">
                            <label for="storage" class="form-label fw-bold">Storage</label>
                            <input type="text" v-model="computer.storage" class="form-control" placeholder="Enter a Storage"
                                required>
                        </div>
                    </div>
                    <div class="col">
                        <div class="mb-3 mx-3">
                            <label for="graphics" class="form-label fw-bold">Graphics</label>
                            <input type="text" v-model="computer.graphics" class="form-control"
                                placeholder="Enter a Graphics" required>
                        </div>
                        <div class="mb-3 mx-3">
                            <label for="operation" class="form-label fw-bold">Operation</label>
                            <input type="text" v-model="computer.operation" class="form-control"
                                placeholder="Enter an Operation" required>
                        </div>
                        <div class="mb-3 mx-3">
                            <label for="camera" class="form-label fw-bold">Camera</label>
                            <input type="text" v-model="computer.camera" class="form-control" placeholder="Enter a Camera"
                                required>
                        </div>
                        <div class="mb-3 mx-3">
                            <label for="wireless" class="form-label fw-bold">Wireless</label>
                            <input type="text" v-model="computer.wireless" class="form-control"
                                placeholder="Enter a Wireless" required>
                        </div>
                        <div class="mb-3 mx-3">
                            <label for="color" class="form-label fw-bold">Color</label>
                            <input type="text" v-model="computer.color" class="form-control" placeholder="Enter a Color"
                                required>
                        </div>
                        <div class="mb-3 mx-3">
                            <label for="weight" class="form-label fw-bold">Weight</label>
                            <input type="text" v-model="computer.weight" class="form-control" placeholder="Enter a Weight"
                                required>
                        </div>
                    </div>
                    <div class="mb-3 mx-3 d-flex justify-content-start">
                        <button type="submit" class="btn btn-success fw-bold me-3" v-on:click="$router.back()">Edit Computer</button>
                    </div>
                </form>
            </div>
            <div class="col">
                <div class="row text-start bg-light me-2" style="width: 34rem; height: 100%;">
                    <h1 class="text-center fw-bold mb-2 mt-2">Computer Detail</h1>
                    <hr>
                    <div class="col">
                        <div class="mb-3 mx-3">
                            <label for="product" class="form-label fw-bold">Product</label>
                            <br>
                            <span class="input-text-group">{{ computer.product }}</span>
                        </div>
                        <div class="mb-3 mx-3">
                            <label for="brand" class="form-label fw-bold">Brand</label>
                            <br>
                            <span class="input-text-group">{{ computer.brand }}</span>
                        </div>
                        <div class="mb-3 mx-3">
                            <label for="processor" class="form-label fw-bold">Processor</label>
                            <br>
                            <span class="input-text-group">{{ computer.processor }}</span>
                        </div>
                        <div class="mb-3 mx-3">
                            <label for="display" class="form-label fw-bold">Display</label>
                            <br>
                            <span class="input-text-group">{{ computer.display }}</span>
                        </div>
                        <div class="mb-3 mx-3">
                            <label for="memory" class="form-label fw-bold">Memory</label>
                            <br>
                            <span class="input-text-group">{{ computer.memory }}</span>
                        </div>
                        <div class="mb-3 mx-3">
                            <label for="storage" class="form-label fw-bold">Storage</label>
                            <br>
                            <span class="input-text-group">{{ computer.storage }}</span>
                        </div>
                    </div>
                    <div class="col">
                        <div class="mb-3 mx-3">
                            <label for="graphics" class="form-label fw-bold">Graphics</label>
                            <br>
                            <span class="input-text-group">{{ computer.graphics }}</span>
                        </div>
                        <div class="mb-3 mx-3">
                            <label for="operation" class="form-label fw-bold">Operation</label>
                            <br>
                            <span class="input-text-group">{{ computer.operation }}</span>
                        </div>
                        <div class="mb-3 mx-3">
                            <label for="camera" class="form-label fw-bold">Camera</label>
                            <br>
                            <span class="input-text-group">{{ computer.camera }}</span>
                        </div>
                        <div class="mb-3 mx-3">
                            <label for="wireless" class="form-label fw-bold">Wireless</label>
                            <br>
                            <span class="input-text-group">{{ computer.wireless }}</span>
                        </div>
                        <div class="mb-3 mx-3">
                            <label for="color" class="form-label fw-bold">Color</label>
                            <br>
                            <span class="input-text-group">{{ computer.color }}</span>
                        </div>
                        <div class="mb-3 mx-3">
                            <label for="weight" class="form-label fw-bold">Weight</label>
                            <br>
                            <span class="input-text-group">{{ computer.weight }}</span>
                        </div>
                    </div>
                    <div class="mb-3 mx-3 d-flex justify-content-start">
                        <button class="btn btn-danger fw-bold me-3" v-on:click="$router.back()">Back</button>
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
        async editComputer() {
            try {
                await ComputersService.put(this.computer)
                this.$router.push({
                    name: 'computers'
                })
            } catch (error) {
                console.log(error)
            }
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
    async refreshData() {
            this.computers = (await ComputersService.index()).data
        }
}
</script>
<style scoped></style>