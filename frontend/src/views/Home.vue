<script setup>
</script>

<script>
  export default {
    name: 'Home',
  };
</script>

<template>
    <div>
        <h1>Home Page</h1>
        <p>Welcome to the home page!</p>
        <div class="row">
            <div class="col">
                <input class="form-control form-control-lg" id="emailAddress" type="email" placeholder="검색어를 입력하세요" data-sb-validations="required,email" />
            </div>
            <div class="col-auto">
                <button class="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button>
            </div>
        </div>

        <input
            type="text"
            v-model="searchQuery"
            placeholder="Type to search..."
            @input="handleInput"
        />
    </div>
</template>

<style scoped>

</style>