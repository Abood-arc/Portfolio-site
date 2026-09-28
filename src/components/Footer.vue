<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-left">
        <p class="availability">Available for opportunities</p>
        <p class="copyright">&copy; {{ new Date().getFullYear() }} Muhammad Abdullah</p>
      </div>
      <div class="footer-links">
        <a href="https://github.com/Abood-arc" target="_blank" class="transition-colors">GitHub</a>
        <a href="https://www.linkedin.com/in/abdullah-afaq-822607282" target="_blank" class="transition-colors">LinkedIn</a>
        <a href="/Abdullah_FS_CV.pdf" target="_blank" class="transition-colors">Resume</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 4rem 0;
  border-top: 1px solid var(--border-color);
  margin-top: 4rem;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
}

.availability {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--text-dark);
  margin-bottom: 0.5rem;
}

.copyright {
  font-size: 0.875rem;
  color: var(--text-muted);
  margin: 0;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
}

.footer-links a {
  font-weight: 500;
  color: var(--text-muted);
}

.footer-links a:hover {
  color: var(--accent-ochre);
}
</style>