<script setup>
</script>

<template>
  <div class="container contact-page">
    <div class="contact-content">
      <div class="contact-cta">
        <a href="mailto:abdullahafaq17@gmail.com" class="btn">Email Me</a>
      </div>
      <div class="resume-link">
        <a href="/Abdullah_FS_CV.pdf" target="_blank" class="text-link">Download Resume / CV</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-page {
  padding-top: 8rem;
  padding-bottom: 8rem;
  display: flex;
  justify-content: center;
}

.contact-content {
  max-width: 400px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.btn {
  display: inline-block;
  width: 100%;
  padding: 1.25rem 2.5rem;
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--bg-cream);
  background-color: var(--text-dark);
  border-radius: 8px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn:hover {
  background-color: var(--accent-ochre);
  color: var(--bg-cream);
  transform: translateY(-2px);
}

.text-link {
  font-size: 1.125rem;
  color: var(--text-muted);
  text-decoration: underline;
  text-underline-offset: 4px;
}

.text-link:hover {
  color: var(--accent-ochre);
}
</style>