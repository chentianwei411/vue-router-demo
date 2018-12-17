<template>
<form @submit.prevent="saveProduct">
  <div class="row">
    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          v-model="model.name"
          v-validate="'required'"
          name="name"
          :class="{'form-control': true, 'error': errors.has('name') }" />
        <span class="small text-danger" v-show="errors.has('name')">Name is required</span>
      </div>
      <div class="form-group">
        <label>Price</label>
        <input
          type="number"
          class="form-control"
          placeholder="Price"
          v-model="model.price"
          v-validate="'required'"
          name="price"
          :class="{'form-control': true, 'error': errors.has('price') }" />
        <span class="small text-danger" v-show="errors.has('price')">Price is required</span>
      </div>
      <div class="form-group">
        <label>Manufacturer</label>
        <select
          type="text"
          class="form-control"
          v-model="model.manufacturer"
          name="manufacturer"
          :class="{'form-control': true, 'error': errors.has('manufacturer') }">
          <template v-for="manufacturer in manufacturers">
            <option :value="manufacturer._id" :selected="manufacturer._id == (model.manufacturer && model.manufacturer._id)">{{manufacturer.name}}</option>
          </template>
        </select>
        <span class="small text-danger" v-show="errors.has('manufacturer')">Manufacturer is required</span>
      </div>
    </div>

    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>Image</label>
        <input
          type="text"
          class="form-control"
          placeholder="Image"
          v-model="model.image"
          v-validate="'required|url'"
          name="image"
          :class="{'form-control': true, 'error': errors.has('image')}" />
        <span class="small text-danger" v-show="errors.has('image')">Image is required and must be a valid URL</span>
      </div>
      <div class="form-group">
        <label>Description</label>
        <textarea
          type="number"
          class="form-control"
          placeholder="Description"
          rows="5"
          v-model="model.description"
          v-validate="'required'"
          name="description"
          :class="{'form-control': true, 'error': errors.has('description')}" ></textarea>
        <span class="small text-danger" v-show="errors.has('description')">Description is required</span>
      </div>
      <div class="form-group new-button">
        <button class="btn btn-outline-primary">
          <!-- <i class="fa fa-pencil"></i> -->
          <span v-if="isEditing">Update Product</span>
          <span v-else>Add Product</span>
        </button>
      </div>
    </div>

    <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12" style="background: lightblue">
      <p>I'm sidebar</p>
    </div>
  </div>
</form>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  export default {
    // isEditing prop用于显示提交按钮上的名字
    props: ['model', 'isEditing', 'manufacturers'],

    methods: {
      saveProduct() {
        console.log(this.errors)
        this.$validator.validateAll()
        // emit一个event给父组件
        // this.$emit('save-product', this.model)
      }
    }
  }

</script>

<style>
.error {
  border-color: #FF3333;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(255, 71, 71, 0.6);
}
</style>
