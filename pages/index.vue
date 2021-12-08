<template>
  

<div class="p-12">

      <!-- This example requires Tailwind CSS v2.0+ -->
<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">

  <div v-for="post in posts" :key="post.fields.Name" class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
    
         <NuxtLink :to="`/profile/${post.fields.Name}`"> 

    <div class="flex-shrink-0">
      <img class="h-10 w-10 rounded-full" :src="post.fields.Attachments[0].url" alt="">
    </div>
    <div class="flex-1 min-w-0">
        <span class="absolute inset-0" aria-hidden="true"></span>
        <p class="text-sm font-medium text-gray-900">
          {{post.fields.Name}}
        </p>
        <p class="text-sm text-gray-500 truncate">
          {{post.fields.Notes}}
        </p>
    </div>
         </NuxtLink>

  </div>

  <!-- More people... -->
</div>




</div>



</template>

<script>
export default {

  async asyncData({ $axios }) {
    const images = await $axios.$get("/api/hello");
    console.log(images.records);

    return { posts: images.records };


  }
}
</script>
