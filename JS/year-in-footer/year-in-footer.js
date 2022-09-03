<script>
document.addEventListener("DOMContentLoaded", function() { 

  const yrSpan = document.querySelector('.footeryear');

  const currentYr = new Date().getFullYear();

  yrSpan.textContent = currentYr;
});
</script>
