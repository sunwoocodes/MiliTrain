<script lang="ts">
   import '../app.css';
</script>

<div class="mobile-container">
   <slot />
</div>

<style>
  .mobile-container {
   max-width: 390px;
   height: 812px;
   margin: 0 auto;
   margin-top: 5vh;
   box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }
</style>