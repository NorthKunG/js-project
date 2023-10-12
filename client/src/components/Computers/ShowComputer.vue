<template>
    <div class="container">
        <div class="row row-cols-3 d-flex justify-content-center">
            <div style="width: 50rem" class="col mx-2 p-3 text-start bg-light h-100">
                <div class="row p-2 mb-2">
                    <div class="col-1">
                        <label for="ID" class="form-label">ID:</label>
                        <span class="input-group-text"> {{ computer.id }} </span>
                    </div>
                    <div class="col">
                        <label for="product" class="form-label">Product:</label>
                        <span class="input-group-text"> {{ computer.product }} </span>
                    </div>
                </div>
                <div class="row p-2 mb-2">
                    <div class="col-3">
                        <label for="brand" class="form-label">Brand:</label>
                        <span class="input-group-text"> {{ computer.brand }} </span>
                    </div>
                    <div class="col">
                        <label for="processor" class="form-label">Processor:</label>
                        <span class="input-group-text"> {{ computer.processor }} </span>
                    </div>
                </div>
                <div class="row p-2 mb-2">
                    <div class="col">
                        <label for="display" class="form-label">Display:</label>
                        <span class="input-group-text"> {{ computer.display }} </span>
                    </div>
                    <div class="col">
                        <label for="memory" class="form-label">Memory:</label>
                        <span class="input-group-text"> {{ computer.memory }} </span>
                    </div>
                </div>
                <div class="row p-2 mb-2">
                    <div class="col">
                        <label for="storage" class="form-label">Storage:</label>
                        <span class="input-group-text"> {{ computer.storage }} </span>
                    </div>
                    <div class="col">
                        <label for="graphics" class="form-label">Graphics:</label>
                        <span class="input-group-text"> {{ computer.graphics }} </span>
                    </div>
                </div>
                <div class="row p-2 mb-2">
                    <div class="col">
                        <label for="operation" class="form-label">Operation:</label>
                        <span class="input-group-text"> {{ computer.operation }} </span>
                    </div>
                    <div class="col">
                        <label for="camera" class="form-label">camera:</label>
                        <span class="input-group-text"> {{ computer.camera }} </span>
                    </div>
                </div>
                <div class="row p-2 mb-2">
                    <div class="col">
                        <label for="wireless" class="form-label">Wireless:</label>
                        <span class="input-group-text"> {{ computer.wireless }} </span>
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
                <div class="p-2">
                    <button class="btn btn-danger" v-on:click="navigateTo('/computers/')">Back</button>
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